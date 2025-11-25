import type { Content } from "@/types";

interface LoreProps {
  content: Content["lore"];
}

export default function Lore({ content }: LoreProps) {
  return (
    <section id="lore" className="py-32 bg-zinc-950 relative border-y border-zinc-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-blood/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-serif text-blood tracking-[0.4em] text-xs uppercase mb-4 block">
            {content.label}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">{content.title}</h2>
          <div className="h-px w-24 bg-zinc-800 mx-auto"></div>
        </div>

        <div className="mx-auto max-w-3xl text-zinc-300 font-body leading-relaxed text-center space-y-8">
          <p>{content.p2}</p>

          <p>{content.p3}</p>

          <p className="italic text-xl text-white/90 border-l-2 border-blood pl-6 py-2 my-10 bg-linear-to-r from-blood/5 to-transparent text-left">
            {content.quote}
          </p>

          <p>{content.p4}</p>
        </div>
      </div>
    </section>
  );
}