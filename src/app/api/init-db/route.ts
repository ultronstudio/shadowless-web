import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

function getConnectionString(): string | null {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL_NON_POOLING ?? process.env.POSTGRES_URL ?? null;
}

export async function GET(request: NextRequest) {
  try {
    const connectionString = getConnectionString();
    if (!connectionString) {
      return NextResponse.json(
        { error: "Database connection not configured" },
        { status: 500 }
      );
    }

    const pool = new Pool({ 
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? true : { rejectUnauthorized: false }
    });

    await pool.query(`
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
    `);

    await pool.end();

    return NextResponse.json({
      success: true,
      message: "Database schema initialized successfully"
    });
  } catch (error) {
    console.error("Database initialization error:", error);
    return NextResponse.json(
      { error: "Failed to initialize database schema" },
      { status: 500 }
    );
  }
}
