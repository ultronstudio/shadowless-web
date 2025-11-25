import { CrowdfundingStats } from "@/types";

export const CAMPAIGN_START_DATE = new Date('2025-12-01T00:00:00');
export const CAMPAIGN_END_DATE = new Date(CAMPAIGN_START_DATE);

CAMPAIGN_END_DATE.setDate(CAMPAIGN_START_DATE.getDate() + 60);

export const CROWDFUNDING_DATA: CrowdfundingStats = {
  currentAmount: 0, // USD - Starting at 0
  targetAmount: 330000, // USD - Core Vision Funded (~300k EUR)
  backers: 0,
  daysLeft: 60 // Will be calculated dynamically in App.tsx
};

export const STEAM_URL = "https://store.steampowered.com/app/3774430/Shadowless";
export const INSTAGRAM_URL = "https://www.instagram.com/shadowlessthegame";