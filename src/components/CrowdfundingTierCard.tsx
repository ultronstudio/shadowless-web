'use client';

import { useLanguageContext } from '@/context/LanguageContext';
import { formatAmountForLanguage } from '@/lib/currency';
import type { Content, DonationTier } from '@/types';

interface CrowdfundingTierCardProps {
  tier: DonationTier;
  onSelect: (tier: DonationTier) => void;
  recommendedLabel?: string;
  availabilityMessages: Content['crowdfunding']['modal']['availability'];
}

export default function CrowdfundingTierCard({ tier, onSelect, recommendedLabel = 'Recommended', availabilityMessages }: CrowdfundingTierCardProps) {
  const { lang } = useLanguageContext();
  const limit = typeof tier.limit === 'number' ? tier.limit : null;
  const sold = typeof tier.sold === 'number' && Number.isFinite(tier.sold) ? Math.max(tier.sold, 0) : 0;
  const remaining = limit !== null ? Math.max(limit - sold, 0) : null;
  const isSoldOut = limit !== null && remaining <= 0;
  const cardStateClasses = tier.recommended
    ? 'bg-zinc-900 border-blood/50 hover:border-blood shadow-[0_0_15px_rgba(138,11,11,0.1)]'
    : 'bg-black border-zinc-800 hover:border-zinc-600';
  const availabilityLabel = (() => {
    if (limit === null) {
      return null;
    }
    if (isSoldOut) {
      return availabilityMessages.soldOut;
    }
    return availabilityMessages.available
      .replace('{remaining}', remaining?.toString() ?? '0')
      .replace('{total}', limit.toString());
  })();

  const handleSelect = () => {
    if (isSoldOut) {
      return;
    }
    onSelect(tier);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      disabled={isSoldOut}
      className={`w-full text-left border p-6 transition-all duration-300 relative group overflow-hidden ${cardStateClasses} ${isSoldOut ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {tier.recommended && (
        <span className="absolute top-0 right-0 bg-blood text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest">
          {recommendedLabel}
        </span>
      )}
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-serif text-lg text-white group-hover:text-blood transition-colors">{tier.name}</h4>
        <span className="font-bold text-xl text-white">{formatAmountForLanguage(tier.price, tier.currency, lang)}</span>
      </div>
      <ul className="text-sm text-zinc-400 space-y-1">
        {tier.rewards.map((reward, index) => (
          <li key={`${tier.id}-reward-${index}`} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
            {reward}
          </li>
        ))}
      </ul>
      {availabilityLabel && (
        <div className={`mt-4 text-xs uppercase tracking-widest ${isSoldOut ? 'text-blood' : 'text-zinc-500'}`}>
          {availabilityLabel}
        </div>
      )}
    </button>
  );
}
