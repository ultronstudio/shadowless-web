import mysql, { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import type { OrderDetails } from "@/types";

let pool: mysql.Pool | null = null;
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

function getPool(): mysql.Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  if (!pool) {
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
  const db = getPool();

  if (!db) {
    console.warn("Database connection not configured. Set DATABASE_URL for MariaDB/MySQL integration.");
    return null;
  }

  try {
    await ensureSchema(db);

    const amountValue = Number(order.tier.price) || 0;
    const currencySymbol = order.tier.currency.trim();
    const currencyCode = order.currencyCode ?? null;
    const { amountUsd, amountCzk, amountEur } = convertAmounts(amountValue, currencyCode);

    const [result] = await db.execute<ResultSetHeader>(
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

    return typeof result.insertId === "number" ? result.insertId : null;
  } catch (error) {
    console.error("Failed to persist donation record", error);
    return null;
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

export interface CrowdfundingTotals {
  totalAmountUsd: number;
  totalAmountCzk: number;
  totalAmountEur: number;
  backers: number;
}

export async function getCrowdfundingTotals(): Promise<CrowdfundingTotals> {
  const db = getPool();

  if (!db) {
    return { totalAmountUsd: 0, totalAmountCzk: 0, totalAmountEur: 0, backers: 0 };
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

    return {
      totalAmountUsd: Number(row.totalAmountUsd) || 0,
      totalAmountCzk: Number(row.totalAmountCzk) || 0,
      totalAmountEur: Number(row.totalAmountEur) || 0,
      backers: Number(row.backers) || 0,
    };
  } catch (error) {
    console.error("Failed to load crowdfunding totals", error);
    return { totalAmountUsd: 0, totalAmountCzk: 0, totalAmountEur: 0, backers: 0 };
  }
}
