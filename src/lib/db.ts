import { Pool, PoolClient, QueryResult } from "pg";
import type { DonorContribution, OrderDetails } from "@/types";
import { getTierLimit } from "@/constants/tiers";

let pool: Pool | null = null;
let schemaInitialization: Promise<void> | null = null;

const SUPPORTED_CURRENCIES = ["USD", "CZK", "EUR"] as const;
type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

const DEFAULT_CURRENCY: SupportedCurrency = "USD";

const USD_PER_UNIT: Record<SupportedCurrency, number> = {
  USD: 1,
  CZK: 1 / 24,
  EUR: 1 / 0.91,
};

const USD_TO_CURRENCY: Record<SupportedCurrency, number> = {
  USD: 1,
  CZK: 24,
  EUR: 0.91,
};

export class TierSoldOutError extends Error {
  readonly tierId: string;
  readonly limit: number;

  constructor(tierId: string, limit: number) {
    super(`Tier ${tierId} is sold out.`);
    this.name = "TierSoldOutError";
    this.tierId = tierId;
    this.limit = limit;
  }
}

function normalizeCurrencyCode(code: string | null | undefined): SupportedCurrency {
  const upper = code?.toUpperCase();
  if (upper && (SUPPORTED_CURRENCIES as readonly string[]).includes(upper)) {
    return upper as SupportedCurrency;
  }
  return DEFAULT_CURRENCY;
}

function roundToWhole(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }
  return Math.round(value);
}

function convertAmounts(amountValue: number, currencyCode: string | null | undefined): {
  amountUsd: number;
  amountCzk: number;
  amountEur: number;
} {
  if (!Number.isFinite(amountValue) || amountValue <= 0) {
    return { amountUsd: 0, amountCzk: 0, amountEur: 0 };
  }

  const code = normalizeCurrencyCode(currencyCode);
  const toUsdFactor = USD_PER_UNIT[code] ?? 1;
  const amountUsdRaw = amountValue * toUsdFactor;

  const amountUsd = code === "USD" ? roundToWhole(amountValue) : roundToWhole(amountUsdRaw);
  const amountCzk = code === "CZK" ? roundToWhole(amountValue) : roundToWhole(amountUsdRaw * USD_TO_CURRENCY.CZK);
  const amountEur = code === "EUR" ? roundToWhole(amountValue) : roundToWhole(amountUsdRaw * USD_TO_CURRENCY.EUR);

  return { amountUsd, amountCzk, amountEur };
}

type TierCountRow = {
  tierid: string | null;
  sold: string | null;
};

type TierCountSingleRow = {
  sold: string | null;
};

type TotalsRow = {
  totalamountusd: string | null;
  totalamountczk: string | null;
  totalamounteur: string | null;
  backers: string | null;
};

type DonorContributionRow = {
  firstname: string | null;
  lastname: string | null;
  totalamountusd: string | null;
};

function getConnectionString(): string | null {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL_NON_POOLING ?? process.env.POSTGRES_URL ?? null;
}

async function getPool(): Promise<Pool | null> {
  if (!pool) {
    const connectionString = getConnectionString();
    if (!connectionString) {
      return null;
    }
    pool = new Pool({ 
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? true : { rejectUnauthorized: false }
    });
  }

  return pool;
}

async function fetchTierCounts(executor: Pool | PoolClient): Promise<Record<string, number>> {
  const result: QueryResult<TierCountRow> = await executor.query(
    `SELECT tier_id AS tierid, COUNT(*) AS sold FROM donations GROUP BY tier_id`
  );

  return result.rows.reduce<Record<string, number>>((accumulator, row) => {
    if (!row.tierid) {
      return accumulator;
    }
    accumulator[row.tierid] = Number(row.sold) || 0;
    return accumulator;
  }, {});
}

async function fetchTierSoldCount(
  executor: Pool | PoolClient,
  tierId: string,
  options: { forUpdate?: boolean } = {}
): Promise<number> {
  const lockClause = options.forUpdate ? " FOR UPDATE" : "";
  const result: QueryResult<TierCountSingleRow> = await executor.query(
    `SELECT COUNT(*) AS sold FROM donations WHERE tier_id = $1${lockClause}`,
    [tierId]
  );

  return Number(result.rows[0]?.sold) || 0;
}

async function ensureSchema(db: Pool): Promise<void> {
  if (!schemaInitialization) {
    schemaInitialization = db
      .query(`
        CREATE TABLE IF NOT EXISTS donations (
          id BIGSERIAL PRIMARY KEY,
          order_public_id VARCHAR(255) NOT NULL,
          stripe_payment_id VARCHAR(255),
          tier_id VARCHAR(100) NOT NULL,
          tier_name VARCHAR(255) NOT NULL,
          amount NUMERIC(12,2) NOT NULL,
          amount_usd NUMERIC(12,2) NOT NULL DEFAULT 0,
          amount_czk NUMERIC(12,2) NOT NULL DEFAULT 0,
          amount_eur NUMERIC(12,2) NOT NULL DEFAULT 0,
          currency_symbol VARCHAR(16) NOT NULL,
          currency_code VARCHAR(8),
          donor_first_name VARCHAR(255) NOT NULL,
          donor_last_name VARCHAR(255) NOT NULL,
          donor_email VARCHAR(320) NOT NULL,
          donor_notes TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );

        CREATE INDEX IF NOT EXISTS idx_order_public_id ON donations(order_public_id);
        CREATE INDEX IF NOT EXISTS idx_stripe_payment_id ON donations(stripe_payment_id);
      `)
      .then(() => undefined)
      .catch((error) => {
        schemaInitialization = null;
        throw error;
      });
  }

  await schemaInitialization;
}

export async function recordDonation(order: OrderDetails): Promise<number | null> {
  const db = await getPool();

  if (!db) {
    console.warn("Database connection not configured. Set DATABASE_URL or POSTGRES_URL_NON_POOLING for Supabase Postgres integration.");
    return null;
  }

  await ensureSchema(db);

  const amountValue = Number(order.tier.price) || 0;
  const currencySymbol = order.tier.currency.trim();
  const currencyCode = order.currencyCode ?? null;
  const { amountUsd, amountCzk, amountEur } = convertAmounts(amountValue, currencyCode);

  const client = await db.connect();
  let transactionStarted = false;

  try {
    await client.query("BEGIN");
    transactionStarted = true;

    const tierLimit = getTierLimit(order.tier.id);
    if (tierLimit !== null) {
      const soldCount = await fetchTierSoldCount(client, order.tier.id, { forUpdate: true });
      if (soldCount >= tierLimit) {
        await client.query("ROLLBACK");
        throw new TierSoldOutError(order.tier.id, tierLimit);
      }
    }

    const result = await client.query<{ id: string }>(
      `INSERT INTO donations (
        order_public_id,
        stripe_payment_id,
        tier_id,
        tier_name,
        amount,
        amount_usd,
        amount_czk,
        amount_eur,
        currency_symbol,
        currency_code,
        donor_first_name,
        donor_last_name,
        donor_email,
        donor_notes,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW()) RETURNING id`,
      [
        order.orderId,
        order.stripePaymentIntentId ?? null,
        order.tier.id,
        order.tier.name,
        amountValue,
        amountUsd,
        amountCzk,
        amountEur,
        currencySymbol,
        currencyCode,
        order.donor.firstName,
        order.donor.lastName,
        order.donor.email,
        order.donor.notes ?? null,
      ]
    );

    await client.query("COMMIT");
    return Number(result.rows[0]?.id) || null;
  } catch (error) {
    if (transactionStarted) {
      try {
        await client.query("ROLLBACK");
      } catch (rollbackError) {
        console.error("Failed to roll back donation transaction", rollbackError);
      }
    }

    if (error instanceof TierSoldOutError) {
      throw error;
    }

    console.error("Failed to persist donation record", error);
    return null;
  } finally {
    client.release();
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

export interface CrowdfundingTotals {
  totalAmountUsd: number;
  totalAmountCzk: number;
  totalAmountEur: number;
  backers: number;
  tierCounts: Record<string, number>;
}

export async function getCrowdfundingTotals(): Promise<CrowdfundingTotals> {
  const db = await getPool();

  if (!db) {
    return { totalAmountUsd: 0, totalAmountCzk: 0, totalAmountEur: 0, backers: 0, tierCounts: {} };
  }

  try {
    await ensureSchema(db);

    const result = await db.query<TotalsRow>(
      `SELECT
        COALESCE(SUM(amount_usd), 0) AS totalamountusd,
        COALESCE(SUM(amount_czk), 0) AS totalamountczk,
        COALESCE(SUM(amount_eur), 0) AS totalamounteur,
        COALESCE(COUNT(DISTINCT donor_email), 0) AS backers
       FROM donations`
    );

    const row = result.rows[0] ?? { totalamountusd: "0", totalamountczk: "0", totalamounteur: "0", backers: "0" };
    const tierCounts = await fetchTierCounts(db);

    return {
      totalAmountUsd: Number(row.totalamountusd) || 0,
      totalAmountCzk: Number(row.totalamountczk) || 0,
      totalAmountEur: Number(row.totalamounteur) || 0,
      backers: Number(row.backers) || 0,
      tierCounts,
    };
  } catch (error) {
    console.error("Failed to load crowdfunding totals", error);
    return { totalAmountUsd: 0, totalAmountCzk: 0, totalAmountEur: 0, backers: 0, tierCounts: {} };
  }
}

export async function getTierPurchaseCounts(): Promise<Record<string, number>> {
  const db = await getPool();

  if (!db) {
    return {};
  }

  try {
    await ensureSchema(db);
    return await fetchTierCounts(db);
  } catch (error) {
    console.error("Failed to load tier purchase counts", error);
    return {};
  }
}

export async function getTierPurchaseCount(tierId: string): Promise<number> {
  if (!tierId) {
    return 0;
  }

  const db = await getPool();

  if (!db) {
    return 0;
  }

  try {
    await ensureSchema(db);
    return await fetchTierSoldCount(db, tierId);
  } catch (error) {
    console.error("Failed to load tier purchase count", error);
    return 0;
  }
}

export async function getDonorContributions(limit = 50): Promise<DonorContribution[]> {
  const db = await getPool();

  if (!db) {
    return [];
  }

  try {
    await ensureSchema(db);

    const normalizedLimit = Number.isFinite(limit) && limit > 0 ? Math.min(Math.floor(limit), 500) : 50;

    const result = await db.query<DonorContributionRow>(
      `SELECT
        COALESCE(MAX(donor_first_name), '') AS firstname,
        COALESCE(MAX(donor_last_name), '') AS lastname,
        COALESCE(SUM(amount_usd), 0) AS totalamountusd
       FROM donations
       WHERE donor_email IS NOT NULL AND donor_email <> ''
       GROUP BY donor_email
       ORDER BY totalamountusd DESC, firstname ASC, lastname ASC
       LIMIT $1`,
      [normalizedLimit]
    );

    return result.rows.map<DonorContribution>((row) => ({
      firstName: row.firstname ? String(row.firstname) : "",
      lastName: row.lastname ? String(row.lastname) : "",
      totalAmountUsd: Number(row.totalamountusd) || 0,
    }));
  } catch (error) {
    console.error("Failed to load donor contributions", error);
    return [];
  }
}
