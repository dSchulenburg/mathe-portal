// XP per level base amounts (increases with difficulty)
const LEVEL_BASE_XP = { 1: 15, 2: 18, 3: 22, 4: 25, 5: 28, 6: 30 };

// Player tiers
export const TIERS = [
  { name: 'Anfaenger', minXP: 0, icon: '\u{1F331}' },
  { name: 'Lehrling', minXP: 100, icon: '\u{1F4D0}' },
  { name: 'Fortgeschritten', minXP: 300, icon: '\u{1F9EE}' },
  { name: 'Experte', minXP: 600, icon: '\u{1F3AF}' },
  { name: 'Mathe-Genie', minXP: 1000, icon: '\u{1F3C6}' },
];

export function getBaseXP(levelId) {
  return LEVEL_BASE_XP[levelId] || 20;
}

export function calculateXP(levelId, stars) {
  const base = getBaseXP(levelId);
  const bonus = stars === 3 ? Math.round(base * 0.5) : 0;
  return base + bonus;
}

export function getTier(xp) {
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (xp >= TIERS[i].minXP) return TIERS[i];
  }
  return TIERS[0];
}

export function getNextTier(xp) {
  for (const tier of TIERS) {
    if (xp < tier.minXP) return tier;
  }
  return null; // max tier reached
}

export function getTierProgress(xp) {
  const current = getTier(xp);
  const next = getNextTier(xp);
  if (!next) return 1; // max tier
  const currentMin = current.minXP;
  const nextMin = next.minXP;
  return (xp - currentMin) / (nextMin - currentMin);
}
