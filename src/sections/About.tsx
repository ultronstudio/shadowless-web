/* eslint-disable @next/next/no-img-element */

import type { Content } from "@/types";

interface AboutProps {
  content: Content["about"];
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-32 bg-void text-zinc-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-void-light/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-4xl text-white mb-6">
                {content.title} <span className="text-blood">{content.titleHighlight}</span>
              </h2>
              <p className="font-body text-zinc-300 leading-relaxed text-lg">{content.envDescription}</p>
            </div>

            <div className="border-l border-zinc-800 pl-8 space-y-6">
              <h3 className="font-serif text-2xl text-white">{content.gameplayTitle}</h3>
              <ul className="space-y-4 font-body text-zinc-400">
                {content.gameplayPoints.map((point, index) => (
                  <li key={point} className="flex gap-4">
                    <span className="text-blood font-bold">0{index + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-2 bg-linear-to-tr from-blood/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img
              src="/assets/img/cover.png"
              alt="Shadowless atmosphere"
              className="w-full h-auto aspect-square object-cover border border-zinc-800 shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-zinc-800">
          {content.features.map((feature) => (
            <div
              key={feature.title}
              className="border-r border-b border-zinc-800 p-10 hover:bg-zinc-900/30 transition-colors group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-blood group-hover:h-full transition-all duration-300"></div>
              <h3 className="font-serif text-lg text-white mb-4 uppercase tracking-widest">{feature.title}</h3>
              <p className="font-body text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}