import { STEAM_URL, INSTAGRAM_URL } from "@/constants";
import type { Content } from "@/types";
import { FaInstagram, FaSteam } from "react-icons/fa";

interface FooterProps {
  content: Content['footer'];
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex justify-center items-center gap-10 mb-10">
          {/* Steam */}
          <a 
            href={STEAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300"
            aria-label="Steam"
          >
            <div className="p-4 border border-zinc-800 rounded-full bg-zinc-900/30 group-hover:border-white/40 group-hover:bg-zinc-800 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaSteam size={24} className="relative z-10" />
            </div>
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 h-0">Steam</span>
          </a>

          {/* Instagram */}
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <div className="p-4 border border-zinc-800 rounded-full bg-zinc-900/30 group-hover:border-white/40 group-hover:bg-zinc-800 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaInstagram size={24} className="relative z-10" />
            </div>
            <span className="text-[10px] font-serif uppercase tracking-[0.2em] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 h-0">Instagram</span>
          </a>
        </div>

        {/* Unreal Engine Badge */}
        <div className="flex justify-center mb-10">
           <div className="inline-flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity duration-500 cursor-default select-none group">
              <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mb-1 group-hover:text-zinc-300 transition-colors">Made with</span>
              <div className="border border-zinc-700 px-3 py-1 bg-zinc-900/50">
                <span className="font-sans font-bold text-zinc-400 tracking-wider text-sm group-hover:text-white transition-colors">UNREAL ENGINE 5</span>
              </div>
           </div>
        </div>

        <p className="font-serif text-zinc-500 text-sm tracking-widest uppercase mb-2">
          &copy; {new Date().getFullYear()} <a href="https://petrvurm.cz?utm_source=shadowless_web&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Petr Vurm</a>. {content.rights}
        </p>
        <p className="font-body text-zinc-600 text-xs mb-6">
          {content.madeIn}
        </p>
        <div className="w-12 h-px bg-zinc-800 mx-auto mb-6"></div>
        <p className="font-serif text-zinc-600 text-xs italic opacity-70">
          {content.quote}
        </p>

      </div>
    </footer>
  );
}