import { CrowdfundingStats } from "@/types";

export const CAMPAIGN_START_DATE = new Date('2025-12-01T00:00:00');
export const CAMPAIGN_END_DATE = new Date('2029-12-01T00:00:00');

export const CROWDFUNDING_DATA: CrowdfundingStats = {
  currentAmount: 0, // USD - Starting at 0
  targetAmount: 330000, // USD - Core Vision Funded (~300k EUR)
  backers: 0,
  daysLeft: CAMPAIGN_END_DATE.getTime() - CAMPAIGN_START_DATE.getTime() > 0
    ? Math.ceil((CAMPAIGN_END_DATE.getTime() - CAMPAIGN_START_DATE.getTime()) / (1000 * 60 * 60 * 24))
    : 0,
};

CAMPAIGN_END_DATE.setDate(CAMPAIGN_START_DATE.getDate() + CROWDFUNDING_DATA.daysLeft);

export const STEAM_URL = "https://store.steampowered.com/app/3774430/Shadowless";
export const INSTAGRAM_URL = "https://www.instagram.com/shadowlessthegame";