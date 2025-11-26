"use client";

/* eslint-disable react-hooks/purity */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/sections/Hero";
import Lore from "@/sections/Lore";
import About from "@/sections/About";
import Crowdfunding from "@/sections/Crowdfunding";
import Gallery from "@/sections/Gallery";
import { CAMPAIGN_END_DATE, CROWDFUNDING_DATA } from "@/constants";
import { LAST_ORDER_STORAGE_KEY } from "@/constants/storage";
import {
  CURRENCY_CODES,
  CURRENCY_SYMBOLS,
  CrowdfundingStats,
  DonationTier,
  DonorDetails,
  OrderDetails,
  RATES,
} from "@/types";
import { useLanguageContext } from "@/context/LanguageContext";

type HomePageClientProps = {
  initialStats?: CrowdfundingStats;
};

export default function HomePageClient({ initialStats }: HomePageClientProps) {
  const { lang, content, isSwitching } = useLanguageContext();
  const resolvedContent = content;
  const router = useRouter();
  const fallbackStats = initialStats ?? CROWDFUNDING_DATA;
  const [baseStats, setBaseStats] = useState<CrowdfundingStats>(fallbackStats);

  useEffect(() => {
    setBaseStats(initialStats ?? CROWDFUNDING_DATA);
  }, [initialStats]);

  const currentRate = RATES[lang];
  const currencySymbol = CURRENCY_SYMBOLS[lang];

  const toCurrencyAmount = (value: number) => Math.round(value * currentRate);

  const displayedStats: CrowdfundingStats = {
    ...baseStats,
    currentAmount: toCurrencyAmount(baseStats.currentAmount),
    targetAmount: toCurrencyAmount(baseStats.targetAmount),
    daysLeft: Math.max(
      0,
      Math.ceil((CAMPAIGN_END_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    ),
  };

  const handleDonate = (tier: DonationTier, donor: DonorDetails, paymentIntentId: string) => {
    console.log(`[API] Processing Donation:`, {
      tierId: tier.id,
      amount: tier.price,
      currency: tier.currency,
      timestamp: new Date().toISOString(),
      donor,
      paymentIntentId,
    });

    const amountInUSD = Math.round(((tier.price / currentRate) + Number.EPSILON) * 100) / 100;

    const order: OrderDetails = {
      tier,
      orderId: `SHD-${Math.floor(Math.random() * 100000)}`,
      date: new Date().toLocaleDateString(),
      donor,
      stripePaymentIntentId: paymentIntentId,
      currencyCode: CURRENCY_CODES[lang],
    };

    try {
      sessionStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order));
    } catch (error) {
      console.error("Failed to persist order details", error);
    }

    const origin = typeof window !== "undefined" ? window.location.origin : undefined;

    const dispatchConfirmationEmail = async () => {
      try {
        const response = await fetch("/api/send-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order,
            thankYouContent: resolvedContent.thankYou,
            origin,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed with status ${response.status}`);
        }

        const data = (await response.json()) as {
          totals?: {
            totalAmountUsd?: number;
            totalAmountCzk?: number;
            totalAmountEur?: number;
            backers?: number;
          };
        };

        if (data?.totals &&
            typeof data.totals.totalAmountUsd === "number" &&
            typeof data.totals.backers === "number") {
          setBaseStats((prev) => ({
            ...prev,
            currentAmount: data.totals.totalAmountUsd,
            backers: data.totals.backers,
          }));
        } else {
          setBaseStats((prev) => ({
            ...prev,
            currentAmount: prev.currentAmount + amountInUSD,
            backers: prev.backers + 1,
          }));
        }
      } catch (error) {
        console.error("Failed to send confirmation email", error);
        setBaseStats((prev) => ({
          ...prev,
          currentAmount: prev.currentAmount + amountInUSD,
          backers: prev.backers + 1,
        }));
      }
    };

    void dispatchConfirmationEmail();

    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen">
      <main
        className={`transition-opacity duration-300 ${
          isSwitching ? "opacity-80" : "opacity-100"
        }`}
      >
        <Hero content={resolvedContent.hero} />
        <Lore content={resolvedContent.lore} />
        <About content={resolvedContent.about} />
        <Crowdfunding
          content={resolvedContent.crowdfunding}
          stats={displayedStats}
          currencySymbol={currencySymbol}
          onDonate={handleDonate}
        />
        <Gallery content={resolvedContent.gallery} />
      </main>
    </div>
  );
}
