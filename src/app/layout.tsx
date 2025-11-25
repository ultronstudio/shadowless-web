import "./tailwind.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Martel } from "next/font/google";
import RootLayoutClient from "@/components/RootLayoutClient";
import { resolveLanguage } from "@/lib/language";
import { SITE_URL } from "@/constants/meta";
import { buildBaseMetadata } from "@/lib/meta";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel", display: "swap" });
const martel = Martel({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-martel", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));

  return {
    metadataBase: new URL(SITE_URL),
    ...buildBaseMetadata(lang),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerList = await headers();
  const lang = resolveLanguage(headerList.get("accept-language"));

  return (
    <html lang={lang} className={`${cinzel.variable} ${martel.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/assets/img/icon.png" />
      </head>
      <body className="bg-void text-zinc-200 selection:bg-blood selection:text-white min-h-screen overflow-x-hidden font-body">
        <RootLayoutClient initialLang={lang}>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
