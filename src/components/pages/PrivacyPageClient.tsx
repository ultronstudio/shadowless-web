"use client";

import Link from "next/link";
import { useLanguageContext } from "@/context/LanguageContext";

export default function PrivacyPageClient() {
  const { content, isSwitching } = useLanguageContext();
  const privacy = content.privacy;

  return (
    <main
      className={`min-h-screen bg-void text-zinc-100 py-24 transition-opacity duration-300 ${
        isSwitching ? "opacity-80" : "opacity-100"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            {privacy.lastUpdatedLabel}: {privacy.lastUpdatedValue}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.2em]">
            {privacy.title}
          </h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            {privacy.intro}
          </p>
        </header>

        <div className="space-y-12">
          {privacy.sections.map((section) => (
            <article key={section.id} className="space-y-4">
              <h2 className="font-serif text-xl uppercase tracking-[0.25em] text-white">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.id}-paragraph-${index}`}
                  className="text-sm md:text-base text-zinc-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc list-inside text-sm md:text-base text-zinc-300 space-y-1">
                  {section.bullets.map((item, bulletIndex) => (
                    <li key={`${section.id}-bullet-${bulletIndex}`}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <section className="rounded border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="font-serif uppercase tracking-[0.25em] text-white text-xl mb-4">
            {privacy.contactHeading}
          </h2>
          <a
            href={`mailto:${privacy.contactEmail}`}
            className="text-blood hover:text-red-400 transition-colors text-sm"
          >
            {privacy.contactEmail}
          </a>
        </section>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
          >
            &larr; {privacy.backLinkLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
