export interface TierLimitDefinition {
  id: string;
  limit: number | null;
}

const RAW_DEFINITIONS: TierLimitDefinition[] = [
  { id: "tier1", limit: null },
  { id: "tier2", limit: null },
  { id: "tier3", limit: null },
  { id: "tier4", limit: null },
  { id: "tier5", limit: 500 },
  { id: "tier6", limit: 300 },
  { id: "tier7", limit: 200 },
  { id: "tier8", limit: 150 },
  { id: "tier9", limit: 100 },
  { id: "tier10", limit: 75 },
  { id: "tier11", limit: 40 },
  { id: "tier12", limit: 20 },
  { id: "tier13", limit: 10 },
  { id: "tier14", limit: 5 }
];

export const TIER_LIMITS: Record<string, number | null> = RAW_DEFINITIONS.reduce<Record<string, number | null>>(
  (accumulator, definition) => {
    accumulator[definition.id] = definition.limit;
    return accumulator;
  },
  {}
);

export function getTierLimit(tierId: string): number | null {
  return Object.prototype.hasOwnProperty.call(TIER_LIMITS, tierId) ? TIER_LIMITS[tierId] ?? null : null;
}

export function isTierLimited(tierId: string): boolean {
  const limit = getTierLimit(tierId);
  return typeof limit === "number" && Number.isFinite(limit);
}

export function listTierLimitDefinitions(): TierLimitDefinition[] {
  return RAW_DEFINITIONS.map((definition) => ({ ...definition }));
}
