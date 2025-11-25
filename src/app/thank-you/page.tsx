import { headers } from "next/headers";
import type { Metadata } from "next";
import ThankYouPageClient from "@/components/pages/ThankYouPageClient";
import { resolveLanguage } from "@/lib/language";
import { buildPageMetadata } from "@/lib/meta";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));
  return buildPageMetadata(lang, "thankYou");
}

export default function ThankYouPage() {
  return <ThankYouPageClient />;
}
