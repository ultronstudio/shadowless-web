import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getTierLimit } from "@/constants/tiers";
import { getTierPurchaseCount } from "@/lib/db";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeApiVersion: Stripe.LatestApiVersion = "2024-06-20";

export async function POST(request: NextRequest) {
  if (!stripeSecretKey) {
    return NextResponse.json({ error: "Stripe secret key is not configured." }, { status: 500 });
  }

  let payload: { amount?: number; currency?: string; tierId?: string };

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { amount, currency, tierId } = payload;

  if (!amount || !currency || !tierId) {
    return NextResponse.json({ error: "Missing required parameters." }, { status: 400 });
  }

  if (!Number.isInteger(amount) || amount <= 0) {
    return NextResponse.json({ error: "Amount must be a positive integer representing the smallest currency unit." }, { status: 400 });
  }

  const tierLimit = getTierLimit(tierId);

  if (tierLimit !== null) {
    const soldCount = await getTierPurchaseCount(tierId);

    if (soldCount >= tierLimit) {
      return NextResponse.json({ error: "Tier sold out.", code: "tier_sold_out" }, { status: 409 });
    }
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: stripeApiVersion });

  try {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        tierId,
      },
      automatic_payment_methods: { enabled: true },
    });

    if (!intent.client_secret) {
      throw new Error("Stripe did not return a client secret.");
    }

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create payment intent.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
