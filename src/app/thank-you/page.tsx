"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThankYou from "@/sections/ThankYou";
import Footer from "@/sections/Footer";
import { LAST_ORDER_STORAGE_KEY } from "@/constants/storage";
import type { OrderDetails } from "@/types";
import { useLanguageContext } from "@/context/LanguageContext";

export default function ThankYouPage() {
  const { content, isSwitching } = useLanguageContext();
  const router = useRouter();
  const [order, setOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
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

      <Footer content={content.footer} />
    </div>
  );
}
