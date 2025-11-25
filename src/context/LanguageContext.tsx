'use client';

import { createContext, useContext } from 'react';
import type { Content, Language } from '@/types';

export interface LanguageContextValue {
  lang: Language;
  content: Content;
  isSwitching: boolean;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguageContext(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageContext.Provider');
  }
  return context;
}

export default LanguageContext;
