'use client';

import { useEffect } from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import type { Content, OrderDetails } from '@/types';

interface ThankYouProps {
  content: Content['thankYou'];
  orderDetails: OrderDetails;
  onBack: () => void;
}

export default function ThankYou({ content, orderDetails, onBack }: ThankYouProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-void px-4 pt-20">
      <div className="max-w-2xl w-full bg-zinc-950 border border-zinc-800 p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blood/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-blood/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blood/30">
            <Check size={40} className="text-blood drop-shadow-[0_0_10px_rgba(138,11,11,0.5)]" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 uppercase tracking-widest">
            {content.title}
          </h2>
          <p className="font-body text-zinc-400 text-lg mb-10">
            {content.subtitle}
          </p>

          <div className="bg-black/50 border border-zinc-800 p-6 mb-8 text-left space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span className="text-zinc-500 text-xs uppercase tracking-wider">{content.orderLabel}</span>
              <span className="text-white font-mono">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span className="text-zinc-500 text-xs uppercase tracking-wider">{content.tierLabel}</span>
              <span className="text-blood font-serif text-lg">{orderDetails.tier.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-xs uppercase tracking-wider">{content.amountLabel}</span>
              <span className="text-white font-bold text-xl">{orderDetails.tier.price}{orderDetails.tier.currency}</span>
            </div>
          </div>

          <p className="text-zinc-500 text-sm mb-10 italic">
            {content.emailNote}
          </p>

          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase text-xs tracking-widest group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {content.backBtn}
          </button>
        </div>
      </div>
    </div>
  );
}