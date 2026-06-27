import { headers } from "next/headers";
import type { Metadata } from "next";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";
import { resolveLanguage } from "@/lib/language";
import { buildPageMetadata } from "@/lib/meta";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));
  return buildPageMetadata(lang, "privacy");
}

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
