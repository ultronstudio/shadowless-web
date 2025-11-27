import mysql, { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import type { DonorContribution, OrderDetails } from "@/types";
import { getTierLimit } from "@/constants/tiers";

let pool: mysql.Pool | null = null;
let schemaInitialization: Promise<void> | null = null;
let databaseInitialization: Promise<void> | null = null;

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

type TierCountRow = RowDataPacket & {
  tierId: string | null;
  sold: number | string | null;
};

type TierCountSingleRow = RowDataPacket & {
  sold: number | string | null;
};

async function fetchTierCounts(executor: mysql.Pool | mysql.PoolConnection): Promise<Record<string, number>> {
  const [rows] = await executor.query<TierCountRow[]>(
    `SELECT tier_id AS tierId, COUNT(*) AS sold FROM donations GROUP BY tier_id`
  );

  return rows.reduce<Record<string, number>>((accumulator, row) => {
    if (!row.tierId) {
      return accumulator;
    }
    accumulator[row.tierId] = Number(row.sold) || 0;
    return accumulator;
  }, {});
}

async function fetchTierSoldCount(
  executor: mysql.Pool | mysql.PoolConnection,
  tierId: string,
  options: { forUpdate?: boolean } = {}
): Promise<number> {
  const lockClause = options.forUpdate ? " FOR UPDATE" : "";
  const [rows] = await executor.query<TierCountSingleRow[]>(
    `SELECT COUNT(*) AS sold FROM donations WHERE tier_id = ?${lockClause}`,
    [tierId]
  );

  return Number(rows[0]?.sold) || 0;
}

async function ensureDatabaseExists(connectionString: string): Promise<void> {
  if (databaseInitialization) {
    return databaseInitialization;
  }

  databaseInitialization = (async () => {
    try {
      const url = new URL(connectionString);
      const databaseName = url.pathname.replace(/^\//, "");

      if (!databaseName) {
        return;
      }

      url.pathname = "/";

      const connection = await mysql.createConnection(url.toString());
      await connection.query(
        `CREATE DATABASE IF NOT EXISTS \`${databaseName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
      );
      await connection.end();
    } catch (error) {
      databaseInitialization = null;
      console.error("Failed to ensure database exists", error);
      throw error;
    }
  })();

  await databaseInitialization;
}

async function getPool(): Promise<mysql.Pool | null> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  if (!pool) {
    await ensureDatabaseExists(connectionString);
    pool = mysql.createPool(connectionString);
  }

  return pool;
}

async function ensureSchema(db: mysql.Pool): Promise<void> {
  if (!schemaInitialization) {
    schemaInitialization = db
      .query(`
        CREATE TABLE IF NOT EXISTS donations (
          id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
          order_public_id VARCHAR(255) NOT NULL,
          stripe_payment_id VARCHAR(255) NULL,
          tier_id VARCHAR(100) NOT NULL,
          tier_name VARCHAR(255) NOT NULL,
          amount DECIMAL(12,2) NOT NULL,
          amount_usd DECIMAL(12,2) NOT NULL DEFAULT 0,
          amount_czk DECIMAL(12,2) NOT NULL DEFAULT 0,
          amount_eur DECIMAL(12,2) NOT NULL DEFAULT 0,
          currency_symbol VARCHAR(16) NOT NULL,
          currency_code VARCHAR(8) NULL,
          donor_first_name VARCHAR(255) NOT NULL,
          donor_last_name VARCHAR(255) NOT NULL,
          donor_email VARCHAR(320) NOT NULL,
          donor_notes TEXT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_order_public_id (order_public_id),
          INDEX idx_stripe_payment_id (stripe_payment_id)
        )
        ENGINE=InnoDB
        DEFAULT CHARACTER SET utf8mb4
        COLLATE utf8mb4_unicode_ci;
      `)
      .then(async () => {
        await db.query(`
          ALTER TABLE donations
            ADD COLUMN IF NOT EXISTS amount_usd DECIMAL(12,2) NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS amount_czk DECIMAL(12,2) NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS amount_eur DECIMAL(12,2) NOT NULL DEFAULT 0;
        `);

        await db.query(`
          UPDATE donations
          SET amount_usd = CASE
            WHEN currency_code IS NULL OR UPPER(currency_code) = 'USD' THEN amount
            WHEN UPPER(currency_code) = 'CZK' THEN ROUND(amount / 24)
            WHEN UPPER(currency_code) = 'EUR' THEN ROUND(amount / 0.91)
            ELSE amount
          END,
          amount_czk = CASE
            WHEN currency_code IS NULL OR UPPER(currency_code) = 'USD' THEN ROUND(amount * 24)
            WHEN UPPER(currency_code) = 'CZK' THEN amount
            WHEN UPPER(currency_code) = 'EUR' THEN ROUND((amount / 0.91) * 24)
            ELSE amount
          END,
          amount_eur = CASE
            WHEN currency_code IS NULL OR UPPER(currency_code) = 'USD' THEN ROUND(amount * 0.91)
            WHEN UPPER(currency_code) = 'CZK' THEN ROUND((amount / 24) * 0.91)
            WHEN UPPER(currency_code) = 'EUR' THEN amount
            ELSE amount
          END
          WHERE amount > 0;
        `);
      })
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
    console.warn("Database connection not configured. Set DATABASE_URL for MariaDB/MySQL integration.");
    return null;
  }

  let connection: mysql.PoolConnection | null = null;
  let transactionStarted = false;

  try {
    await ensureSchema(db);

    const amountValue = Number(order.tier.price) || 0;
    const currencySymbol = order.tier.currency.trim();
    const currencyCode = order.currencyCode ?? null;
    const { amountUsd, amountCzk, amountEur } = convertAmounts(amountValue, currencyCode);

    connection = await db.getConnection();
    await connection.beginTransaction();
    transactionStarted = true;

    const tierLimit = getTierLimit(order.tier.id);

    if (tierLimit !== null) {
      const soldCount = await fetchTierSoldCount(connection, order.tier.id, { forUpdate: true });
      if (soldCount >= tierLimit) {
        await connection.rollback();
        throw new TierSoldOutError(order.tier.id, tierLimit);
      }
    }

    const [result] = await connection.execute<ResultSetHeader>(
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
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
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

    await connection.commit();

    return typeof result.insertId === "number" ? result.insertId : null;
  } catch (error) {
    if (connection && transactionStarted) {
      try {
        await connection.rollback();
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
    connection?.release();
  }
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

type TotalsRow = RowDataPacket & {
  totalAmountUsd: number | string | null;
  totalAmountCzk: number | string | null;
  totalAmountEur: number | string | null;
  backers: number | string | null;
};

type DonorContributionRow = RowDataPacket & {
  firstName: string | null;
  lastName: string | null;
  totalAmountUsd: number | string | null;
};

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

    const [rows] = await db.query<TotalsRow[]>(
      `SELECT
        COALESCE(SUM(amount_usd), 0) AS totalAmountUsd,
        COALESCE(SUM(amount_czk), 0) AS totalAmountCzk,
        COALESCE(SUM(amount_eur), 0) AS totalAmountEur,
        COALESCE(COUNT(DISTINCT donor_email), 0) AS backers
       FROM donations`
    );

    const row = rows[0] ?? { totalAmountUsd: 0, totalAmountCzk: 0, totalAmountEur: 0, backers: 0 };
    const tierCounts = await fetchTierCounts(db);

    return {
      totalAmountUsd: Number(row.totalAmountUsd) || 0,
      totalAmountCzk: Number(row.totalAmountCzk) || 0,
      totalAmountEur: Number(row.totalAmountEur) || 0,
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

    const [rows] = await db.query<DonorContributionRow[]>(
      `SELECT
        COALESCE(MAX(donor_first_name), '') AS firstName,
        COALESCE(MAX(donor_last_name), '') AS lastName,
        COALESCE(SUM(amount_usd), 0) AS totalAmountUsd
       FROM donations
       WHERE donor_email IS NOT NULL AND donor_email <> ''
       GROUP BY donor_email
       ORDER BY totalAmountUsd DESC, firstName ASC, lastName ASC
       LIMIT ?`,
      [normalizedLimit]
    );

    return rows.map<DonorContribution>((row) => ({
      firstName: row.firstName ? String(row.firstName) : "",
      lastName: row.lastName ? String(row.lastName) : "",
      totalAmountUsd: Number(row.totalAmountUsd) || 0,
    }));
  } catch (error) {
    console.error("Failed to load donor contributions", error);
    return [];
  }
}
