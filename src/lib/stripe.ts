import { loadStripe, type Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

if (publishableKey) {
  stripePromise = loadStripe(publishableKey);
} else {
  stripePromise = Promise.resolve(null);
}

export function getStripe() {
  return stripePromise;
}
