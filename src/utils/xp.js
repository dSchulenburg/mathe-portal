export const TIERS = [
  { name: 'Anfänger:in', icon: '🌱', minXP: 0 },
  { name: 'Lehrling', icon: '📐', minXP: 100 },
  { name: 'Fortgeschritten', icon: '🧮', minXP: 300 },
  { name: 'Expert:in', icon: '🎯', minXP: 600 },
  { name: 'Mathe-Genie', icon: '🏆', minXP: 1000 },
];

export function calculateXP(baseXP, stars) {
  return stars === 3 ? Math.round(baseXP * 1.5) : baseXP;
}

export function getTier(xp) {
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (xp >= TIERS[i].minXP) return TIERS[i];
  }
  return TIERS[0];
}

export function getNextTier(xp) {
  const current = getTier(xp);
  const idx = TIERS.indexOf(current);
  return idx < TIERS.length - 1 ? TIERS[idx + 1] : null;
}

export function getTierProgress(xp) {
  const current = getTier(xp);
  const next = getNextTier(xp);
  if (!next) return 1;
  return (xp - current.minXP) / (next.minXP - current.minXP);
}
