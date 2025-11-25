import { headers } from "next/headers";
import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";
import { resolveLanguage } from "@/lib/language";
import { buildPageMetadata } from "@/lib/meta";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));
  return buildPageMetadata(lang, "home", { absoluteTitle: true });
}

export default function HomePage() {
  return <HomePageClient />;
}
