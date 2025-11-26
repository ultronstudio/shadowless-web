import { headers } from "next/headers";
import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";
import { resolveLanguage } from "@/lib/language";
import { buildPageMetadata } from "@/lib/meta";
import { getCrowdfundingTotals } from "@/lib/db";
import { CROWDFUNDING_DATA } from "@/constants";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));
  return buildPageMetadata(lang, "home", { absoluteTitle: true });
}

export default async function HomePage() {
  const totals = await getCrowdfundingTotals();

  const initialStats = {
    ...CROWDFUNDING_DATA,
    currentAmount: totals.totalAmountUsd ?? CROWDFUNDING_DATA.currentAmount,
    backers: totals.backers ?? CROWDFUNDING_DATA.backers,
  };

  return <HomePageClient initialStats={initialStats} />;
}
