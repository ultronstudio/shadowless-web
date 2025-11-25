import "./tailwind.css";
import type { ReactNode } from "react";
import { Cinzel, Martel } from "next/font/google";
import RootLayoutClient from "@/components/RootLayoutClient";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel", display: "swap" });
const martel = Martel({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-martel", display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${martel.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/assets/img/icon.png" />
      </head>
      <body className="bg-void text-zinc-200 selection:bg-blood selection:text-white min-h-screen overflow-x-hidden font-body">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
