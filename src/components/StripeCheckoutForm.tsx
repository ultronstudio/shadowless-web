'use client';

import { FormEvent, useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import type { DonationTier, Content, DonorDetails } from "@/types";

type CheckoutStep = "card" | "review";

interface StripeCheckoutFormProps {
  tier: DonationTier;
  modalContent: Content["crowdfunding"]["modal"];
  paymentStep: CheckoutStep;
  onStepChange: (step: CheckoutStep) => void;
  onSuccess: (tier: DonationTier) => void;
  onBackToDetails: () => void;
  donorDetails: DonorDetails;
}

export default function StripeCheckoutForm({
  tier,
  modalContent,
  paymentStep,
  onStepChange,
  onSuccess,
  onBackToDetails,
  donorDetails,
}: StripeCheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const formattedAmount = `${tier.price.toLocaleString()}${tier.currency}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      setMessage("Stripe is still loading. Please try again in a moment.");
      return;
    }

    if (paymentStep === "card") {
      setIsAdvancing(true);
      const { error } = await elements.submit();

      if (error) {
        setMessage(error.message ?? "We were unable to process your payment details. Please review the form and try again.");
        setIsAdvancing(false);
        return;
      }

      onStepChange("review");
      setIsAdvancing(false);
      return;
    }

    setIsSubmitting(true);

    const billingName = `${donorDetails.firstName} ${donorDetails.lastName}`.trim();

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: typeof window !== "undefined" ? `${window.location.origin}/thank-you` : undefined,
        payment_method_data: {
          billing_details: {
            name: billingName,
            email: donorDetails.email,
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

  const handleEditPayment = () => {
    setMessage(null);
    onStepChange("card");
  };

  const handleEditDetails = () => {
    setMessage(null);
    onBackToDetails();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={`${paymentStep === "review" ? "hidden" : "block"} rounded border border-zinc-800 bg-black/60 p-4`} aria-hidden={paymentStep === "review"}>
        <PaymentElement options={{ layout: "tabs" }} />
      </div>

      {paymentStep === "review" && (
        <div className="rounded border border-zinc-800 bg-black/50 p-5 space-y-4">
          <div className="text-xs uppercase tracking-widest text-zinc-500">{modalContent.summaryHeading}</div>
          <div className="space-y-4 text-sm text-zinc-300">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">{modalContent.summaryContact}</div>
              <div className="text-white font-serif text-lg">{donorDetails.firstName} {donorDetails.lastName}</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest mt-1">{donorDetails.email}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">{modalContent.summaryNotes}</div>
              <div className="whitespace-pre-line text-zinc-300 text-sm">
                {donorDetails.notes ? donorDetails.notes : modalContent.notesEmpty}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-white font-serif">
              <span className="text-xs uppercase tracking-wider text-zinc-500">{modalContent.summaryAmount}</span>
              <span>{formattedAmount}</span>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div className="rounded border border-blood/40 bg-blood/10 p-3 text-sm text-blood">
          {message}
        </div>
      )}

      <div className="rounded border border-zinc-800 bg-zinc-900/50 p-4 text-xs text-zinc-400">
        {modalContent.testCardNotice}
      </div>

      {paymentStep === "card" ? (
        <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={handleEditDetails}
            disabled={isAdvancing}
            className="cursor-pointer text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300 disabled:opacity-60"
          >
            {modalContent.backToDetails}
          </button>
          <button
            type="submit"
            disabled={isAdvancing || !stripe || !elements}
            className="cursor-pointer inline-flex w-full md:w-auto items-center justify-center gap-2 bg-blood px-6 py-3 font-serif uppercase tracking-widest text-white transition-colors hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isAdvancing && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>}
            {isAdvancing ? modalContent.processing : modalContent.reviewBtn}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting || !stripe || !elements}
            className="cursor-pointer w-full bg-blood py-4 font-serif uppercase tracking-widest text-white transition-all hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isSubmitting && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>}
            {isSubmitting ? modalContent.processing : `${modalContent.payBtn} ${formattedAmount}`}
          </button>
          <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleEditPayment}
              className="cursor-pointer transition-colors hover:text-zinc-300"
            >
              {modalContent.editPayment}
            </button>
            <button
              type="button"
              onClick={handleEditDetails}
              className="cursor-pointer transition-colors hover:text-zinc-300"
            >
              {modalContent.editDetails}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
