'use client';
/* eslint-disable @next/next/no-img-element */

import { ChevronDown } from "lucide-react";
import { STEAM_URL } from "@/constants";
import type { Content } from "@/types";

interface HeroProps {
  content: Content["hero"];
}

export default function Hero({ content }: HeroProps) {
  const scrollToLore = () => {
    document.getElementById("lore")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/img/hero.png"
          alt="Shadowless atmosphere"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-void via-void/60 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-void/50 to-void"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in">
        <div className="mb-6 flex items-center gap-4 opacity-80">
          <div className="h-px w-12 bg-blood"></div>
          <h2 className="text-zinc-300 font-serif tracking-[0.3em] text-xs md:text-sm uppercase">
            {content.subtitle}
          </h2>
          <div className="h-px w-12 bg-blood"></div>
        </div>

        <div className="mb-8 opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] select-none">
            SHADOWLESS
          </h1>
        </div>

        <p className="font-body text-zinc-200 text-lg md:text-2xl mb-12 max-w-2xl leading-relaxed italic border-l-2 border-blood pl-6 text-left opacity-0 animate-[fadeIn_1s_ease-in_forwards_0.5s]">
          {content.quote}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards_1s]">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-transparent border border-zinc-600 hover:border-blood transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blood translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative font-serif text-white tracking-[0.2em] uppercase text-sm z-10 group-hover:text-white transition-colors">
              {content.wishlist}
            </span>
          </a>

          <button
            onClick={() => document.getElementById("crowdfunding")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 text-zinc-400 hover:text-white transition-all duration-300 font-serif tracking-[0.2em] uppercase text-sm border-b border-transparent hover:border-white cursor-pointer"
          >
            {content.support}
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-12 cursor-pointer text-zinc-500 hover:text-blood transition-colors animate-bounce"
        onClick={scrollToLore}
      >
        <ChevronDown size={40} strokeWidth={1} />
      </div>
    </section>
  );
}