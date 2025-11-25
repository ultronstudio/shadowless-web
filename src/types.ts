/**
 * Crowdfunding statistics interface
 * 
 * @property {number} currentAmmount The current amount of funds raised.
 * @property {number} targetAmmount The target amount of funds to be raised.
 * @property {number} backers The number of backers who have contributed.
 * @property {number} daysLeft The number of days left in the crowdfunding campaign.
 */
export interface CrowdfundingStats {
    currentAmount: number;
    targetAmount: number;
    backers: number;
    daysLeft: number;
}

/**
 * Game feature interface
 * 
 * @property {string} title The title of the game feature.
 * @property {string} description A brief description of the game feature.
 * @property {string} icon The icon representing the game feature.
 */
export interface GameFeature {
  title: string;
  description: string;
  icon: string;
}

/**
 * Supported language codes
 * 
 * Suported languages in the application:
 * - 'en' for English
 * - 'cs' for Czech
 * - 'de' for German
 */
export type Language = 'en' | 'cs' | 'de';

export interface DonationTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  rewards: string[];
  recommended?: boolean;
}

export interface OrderDetails {
  tier: DonationTier;
  orderId: string;
  date: string;
}

export interface StretchGoal {
  amount: number;
  title: string;
  description: string;
}

export interface Content {
  nav: {
    story: string;
    game: string;
    campaign: string;
    gallery: string;
    steam: string;
  };
  hero: {
    subtitle: string;
    quote: string;
    wishlist: string;
    support: string;
  };
  lore: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    quote: string;
    p4: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    envDescription: string;
    gameplayTitle: string;
    gameplayPoints: string[];
    features: GameFeature[];
  };
  gallery: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  crowdfunding: {
    title: string;
    intro: string;
    funded: string;
    statusLabel: {
      live: string;
      success: string;
      failed: string;
    };
    backers: string;
    daysLeft: string;
    developerTitle: string;
    developerBio: string;
    developerQuote: string;
    breakdownTitle: string;
    breakdown: {
      dev: string;
      devDesc: string;
      audio: string;
      audioDesc: string;
      tax: string;
      fees: string;
    };
    stretchGoalsTitle: string;
    stretchGoals: StretchGoal[];
    cta: string;
    modal: {
      title: string;
      step1: string;
      step2: string;
      cardLabel: string;
      expiryLabel: string;
      cvcLabel: string;
      payBtn: string;
      processing: string;
      successTitle: string;
      successMsg: string;
      closeBtn: string;
      backToTiers: string;
      selectedTier: string;
      testCardNotice: string;
      tiers: DonationTier[];
    };
  };
  thankYou: {
    title: string;
    subtitle: string;
    orderLabel: string;
    tierLabel: string;
    amountLabel: string;
    emailNote: string;
    backBtn: string;
  };
  footer: {
    rights: string;
    madeIn: string;
    quote: string;
  };
}

export const RATES: Record<Language, number> = {
  en: 1,
  cs: 24, // 330,000 USD * 24 = ~7,920,000 CZK
  de: 0.91 // 330,000 USD * 0.91 = ~300,300 EUR
};

export const CURRENCY_SYMBOLS: Record<Language, string> = {
  en: '$',
  cs: ' Kč',
  de: ' €'
};