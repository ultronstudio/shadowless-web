import mysql, { ResultSetHeader } from "mysql2/promise";
import type { OrderDetails } from "@/types";

let pool: mysql.Pool | null = null;

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

export async function recordDonation(order: OrderDetails): Promise<number | null> {
  const db = getPool();

  if (!db) {
    console.warn("Database connection not configured. Set DATABASE_URL for MariaDB/MySQL integration.");
    return null;
  }

  try {
    const amountValue = Number(order.tier.price) || 0;
    const currencySymbol = order.tier.currency.trim();
    const currencyCode = order.currencyCode ?? null;

    const [result] = await db.execute<ResultSetHeader>(
      `INSERT INTO donations (
        order_public_id,
        stripe_payment_id,
        tier_id,
        tier_name,
        amount,
        currency_symbol,
        currency_code,
        donor_first_name,
        donor_last_name,
        donor_email,
        donor_notes,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        order.orderId,
        order.stripePaymentIntentId ?? null,
        order.tier.id,
        order.tier.name,
        amountValue,
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
