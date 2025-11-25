'use client';

import { Check, Lock } from 'lucide-react';
import type { StretchGoal } from '@/types';

interface StretchGoalCardProps {
  goal: StretchGoal;
  currencySymbol: string;
  isUnlocked: boolean;
}

export default function StretchGoalCard({ goal, currencySymbol, isUnlocked }: StretchGoalCardProps) {
  const containerClasses = isUnlocked
    ? 'bg-gradient-to-r from-zinc-900 to-black border-blood/30 shadow-[0_0_20px_rgba(138,11,11,0.1)]'
    : 'bg-black border-zinc-800 opacity-60 grayscale';

  const badgeClasses = isUnlocked
    ? 'bg-blood border-blood text-white'
    : 'bg-zinc-900 border-zinc-700 text-zinc-500';

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center gap-6 p-6 border transition-all duration-500 ${containerClasses}`}
    >
      <div className="flex items-center gap-4 min-w-[150px]">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${badgeClasses}`}>
          {isUnlocked ? <Check size={16} /> : <Lock size={16} />}
        </div>
        <span className={`font-bold font-serif text-xl ${isUnlocked ? 'text-white' : 'text-zinc-500'}`}>
          {goal.amount.toLocaleString()}{currencySymbol}
        </span>
      </div>

      <div className="flex-1">
        <h4 className={`font-serif text-lg mb-1 ${isUnlocked ? 'text-white' : 'text-zinc-400'}`}>{goal.title}</h4>
        <p className={`font-body text-sm ${isUnlocked ? 'text-zinc-400' : 'text-zinc-500'}`}>{goal.description}</p>
      </div>
    </div>
  );
}
