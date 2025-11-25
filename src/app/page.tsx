/* eslint-disable react-hooks/purity */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/sections/Hero";
import Lore from "@/sections/Lore";
import About from "@/sections/About";
import Crowdfunding from "@/sections/Crowdfunding";
import Gallery from "@/sections/Gallery";
import Footer from "@/sections/Footer";
import { CAMPAIGN_END_DATE, CROWDFUNDING_DATA } from "@/constants";
import { LAST_ORDER_STORAGE_KEY } from "@/constants/storage";
import {
  CURRENCY_SYMBOLS,
  CrowdfundingStats,
  DonationTier,
  OrderDetails,
  RATES,
} from "@/types";
import { useLanguageContext } from "@/context/LanguageContext";

export default function Home() {
  const { lang, content, isSwitching } = useLanguageContext();
  const resolvedContent = content;
  const router = useRouter();
  const [baseStats, setBaseStats] = useState<CrowdfundingStats>(CROWDFUNDING_DATA);

  const currentRate = RATES[lang];
  const currencySymbol = CURRENCY_SYMBOLS[lang];

  const displayedStats: CrowdfundingStats = {
    ...baseStats,
    currentAmount: Math.round(baseStats.currentAmount * currentRate),
    targetAmount: Math.round(baseStats.targetAmount * currentRate),
    daysLeft: Math.max(
      0,
      Math.ceil((CAMPAIGN_END_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    ),
  };

  const handleDonate = (tier: DonationTier) => {
    console.log(`[API] Processing Donation:`, {
      tierId: tier.id,
      amount: tier.price,
      currency: tier.currency,
      timestamp: new Date().toISOString(),
    });

    const amountInUSD = tier.price / currentRate;

    setBaseStats((prev) => ({
      ...prev,
      currentAmount: prev.currentAmount + amountInUSD,
      backers: prev.backers + 1,
    }));

    const order: OrderDetails = {
      tier,
      orderId: `SHD-${Math.floor(Math.random() * 100000)}`,
      date: new Date().toLocaleDateString(),
    };

    try {
      sessionStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order));
    } catch (error) {
      console.error("Failed to persist order details", error);
    }

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

      <Footer content={resolvedContent.footer} />
    </div>
  );
}
