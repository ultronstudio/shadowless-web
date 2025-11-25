'use client';

import { FormEvent, useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import type { DonationTier, Content } from "@/types";

interface StripeCheckoutFormProps {
  tier: DonationTier;
  modalContent: Content["crowdfunding"]["modal"];
  onSuccess: (tier: DonationTier) => void;
  onBack: () => void;
}

export default function StripeCheckoutForm({ tier, modalContent, onSuccess, onBack }: StripeCheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      setMessage("Stripe is still loading. Please try again in a moment.");
      return;
    }

    setIsSubmitting(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: typeof window !== "undefined" ? `${window.location.origin}/thank-you` : undefined,
        payment_method_data: {
          billing_details: {
            name: tier.name,
          },
        },
      },
    });

    if (error) {
      setMessage(error.message ?? "We were unable to process your payment. Please try again.");
      setIsSubmitting(false);
      return;
    }

    if (paymentIntent && ["succeeded", "processing", "requires_capture"].includes(paymentIntent.status)) {
      onSuccess(tier);
      return;
    }

    setMessage("The payment requires additional action. Please follow the instructions provided by Stripe and try again.");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded border border-zinc-800 bg-black/60 p-4">
        <PaymentElement options={{ layout: "tabs" }} />
      </div>

      {message && (
        <div className="rounded border border-blood/40 bg-blood/10 p-3 text-sm text-blood">
          {message}
        </div>
      )}

      <div className="rounded border border-zinc-800 bg-zinc-900/50 p-4 text-xs text-zinc-400">
        {modalContent.testCardNotice}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !stripe || !elements}
        className="w-full bg-blood py-4 font-serif uppercase tracking-widest text-white transition-all hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isSubmitting && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>}
        {isSubmitting ? modalContent.processing : `${modalContent.payBtn} ${tier.price.toLocaleString()}${tier.currency}`}
      </button>
      <button
        type="button"
        onClick={onBack}
        disabled={isSubmitting}
        className="w-full text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
      >
        {modalContent.backToTiers}
      </button>
    </form>
  );
}
