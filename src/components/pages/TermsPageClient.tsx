"use client";

import Link from "next/link";
import { useLanguageContext } from "@/context/LanguageContext";

export default function TermsPageClient() {
  const { content, isSwitching } = useLanguageContext();
  const terms = content.terms;

  return (
    <main
      className={`min-h-screen bg-void text-zinc-100 py-24 transition-opacity duration-300 ${
        isSwitching ? "opacity-80" : "opacity-100"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            {terms.lastUpdatedLabel}: {terms.lastUpdatedValue}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.2em]">
            {terms.title}
          </h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            {terms.intro}
          </p>
        </header>

        <section className="rounded border border-blood/30 bg-blood/10 p-6 text-sm text-blood shadow-[0_0_25px_rgba(138,11,11,0.15)]">
          <h2 className="font-serif uppercase tracking-[0.2em] text-blood mb-2 text-lg">
            {terms.pledgeReminderHeading}
          </h2>
          <p className="text-blood/90">{terms.pledgeReminderBody}</p>
        </section>

        <div className="space-y-12">
          {terms.sections.map((section) => (
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
            {terms.contactHeading}
          </h2>
          <dl className="space-y-3 text-sm md:text-base text-zinc-300 leading-relaxed">
            <div>
              <dt className="uppercase tracking-[0.25em] text-xs text-zinc-500">
                {terms.contactBusinessLabel}
              </dt>
              <dd>{terms.contactBusinessValue}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.25em] text-xs text-zinc-500">
                {terms.contactBusinessIdLabel}
              </dt>
              <dd>{terms.contactBusinessIdValue}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.25em] text-xs text-zinc-500">
                {terms.contactEmailLabel}
              </dt>
              <dd>
                <a
                  href={`mailto:${terms.contactEmail}`}
                  className="text-blood hover:text-red-400 transition-colors"
                >
                  {terms.contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
          >
            &larr; {terms.backLinkLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
