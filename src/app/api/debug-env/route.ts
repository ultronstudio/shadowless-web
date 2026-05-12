import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    DATABASE_URL: process.env.DATABASE_URL,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV
  });
}