import { serve } from "https://deno.land/std@0.210.0/http/server.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");

const createErrorResponse = (message: string, status = 500) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return createErrorResponse("Method not allowed.", 405);
  }

  if (!STRIPE_SECRET_KEY) {
    return createErrorResponse("Stripe secret key is not configured.", 500);
  }

  let payload: { amount?: number; currency?: string; tierId?: string };
  try {
    payload = await req.json();
  } catch {
    return createErrorResponse("Invalid JSON payload.", 400);
  }

  const { amount, currency, tierId } = payload;
  if (!amount || !currency || !tierId) {
    return createErrorResponse("Missing required parameters.", 400);
  }

  if (!Number.isInteger(amount) || amount <= 0) {
    return createErrorResponse("Amount must be a positive integer.", 400);
  }

  const body = new URLSearchParams();
  body.append("amount", amount.toString());
  body.append("currency", currency);
  body.append("metadata[tierId]", tierId);
  body.append("automatic_payment_methods[enabled]", "true");

  const response = await fetch("https://api.stripe.com/v1/payment_intents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage = responseData.error?.message ?? "Failed to create payment intent.";
    return createErrorResponse(errorMessage, 500);
  }

  const clientSecret = responseData.client_secret;
  if (!clientSecret) {
    return createErrorResponse("Stripe did not return a client secret.", 500);
  }

  return new Response(JSON.stringify({ clientSecret }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
});
