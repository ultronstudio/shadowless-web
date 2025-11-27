/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/purity */
'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { CAMPAIGN_END_DATE, CROWDFUNDING_DATA } from "@/constants";
import { TRANSLATIONS } from "@/translations";
import {
  CrowdfundingStats,
  CURRENCY_SYMBOLS,
  DonationTier,
  Language,
  OrderDetails,
  RATES,
  type Content,
} from "@/types";

export type ViewState = "home" | "thank-you";

interface LayoutContextValue {
  lang: Language;
  content: Content;
  isSwitching: boolean;
  view: ViewState;
  displayedStats: CrowdfundingStats;
  currencySymbol: string;
  lastOrder: OrderDetails | null;
  handleLangChange: (lang: Language) => void;
  handleDonate: (tier: DonationTier) => void;
  handleBackToSite: () => void;
  setView: (view: ViewState) => void;
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [isSwitching, setIsSwitching] = useState(false);
  const [view, setView] = useState<ViewState>("home");
  const [baseStats, setBaseStats] = useState<CrowdfundingStats>(CROWDFUNDING_DATA);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);

  const content = TRANSLATIONS[lang];
  const currentRate = RATES[lang];
  const currencySymbol = CURRENCY_SYMBOLS[lang];

  const displayedStats = useMemo(() => {
    const daysRemaining = Math.max(
      0,
      Math.ceil((CAMPAIGN_END_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
    );

    return {
      ...baseStats,
      currentAmount: Math.round(baseStats.currentAmount * currentRate),
      targetAmount: Math.round(baseStats.targetAmount * currentRate),
      daysLeft: daysRemaining,
    } satisfies CrowdfundingStats;
  }, [baseStats, currentRate]);

  const handleLangChange = (newLang: Language) => {
    if (newLang === lang) return;
    setIsSwitching(true);
    setLang(newLang);
    setTimeout(() => setIsSwitching(false), 500);
  };

  const handleDonate = (tier: DonationTier) => {
    // Placeholder for integration with payment backend
    console.log("[API] Processing Donation", {
      tierId: tier.id,
      amount: tier.price,
      currency: tier.currency,
      timestamp: new Date().toISOString(),
    });

    const amountInUSD = tier.price / currentRate;

    setBaseStats((prev) => ({
      ...prev,
      currentAmount: prev.currentAmount + amountInUSD,
      backersCount: prev.backers + 1,
    }));

    setLastOrder({
      tier,
      orderId: `SHD-${Math.floor(Math.random() * 100000)}`,
      date: new Date().toLocaleDateString(),
      donor: {} as any,
    });

    setView("thank-you");
  };

  const handleBackToSite = () => {
    setView("home");
    setLastOrder(null);
  };

  const value: LayoutContextValue = {
    lang,
    content,
    isSwitching,
    view,
    displayedStats,
    currencySymbol,
    lastOrder,
    handleLangChange,
    handleDonate,
    handleBackToSite,
    setView,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
}
