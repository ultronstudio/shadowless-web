"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ThankYou from "@/sections/ThankYou";
import { LAST_ORDER_STORAGE_KEY } from "@/constants/storage";
import type { OrderDetails } from "@/types";
import { useLanguageContext } from "@/context/LanguageContext";

export default function ThankYouPageClient() {
  const { content, isSwitching } = useLanguageContext();
  const router = useRouter();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }

    // Prevent Strict Mode double invocation from re-running the redirect logic
    isInitialized.current = true;

    try {
      const stored = sessionStorage.getItem(LAST_ORDER_STORAGE_KEY);
      if (!stored) {
        router.replace("/");
        return;
      }

      const parsed = JSON.parse(stored) as OrderDetails;
      setOrder(parsed);
      sessionStorage.removeItem(LAST_ORDER_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to load order details", error);
      router.replace("/");
    }
  }, [router]);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen">
      <main
        className={`transition-opacity duration-300 ${
          isSwitching ? "opacity-80" : "opacity-100"
        }`}
      >
        {order ? (
          <ThankYou content={content.thankYou} orderDetails={order} onBack={handleBack} />
        ) : (
          <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center text-zinc-500 font-serif text-lg">
            {content.thankYou.subtitle}
          </div>
        )}
      </main>
    </div>
  );
}
