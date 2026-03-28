/**
 * @typedef {'basis' | 'standard' | 'erweitert' | 'ea'} DiffLevel
 * @typedef {'kreativitaet' | 'kritisches-denken' | 'kommunikation' | 'kollaboration'} Competency4K
 * @typedef {'analysis' | 'geometrie' | 'stochastik' | 'algebra'} Domain
 * @typedef {10 | 11 | 12} Grade
 * @typedef {'multiple-choice' | 'numeric-input' | 'expression-input' | 'drag-match' | 'graph-interact' | 'step-solver' | 'error-analysis' | 'multi-path'} ExerciseType
 */

export const DIFF_LEVELS = ['basis', 'standard', 'erweitert', 'ea'];

export const COMPETENCIES_4K = [
  { id: 'kreativitaet', icon: '💡', colorClass: 'text-amber-400' },
  { id: 'kritisches-denken', icon: '🔍', colorClass: 'text-blue-400' },
  { id: 'kommunikation', icon: '💬', colorClass: 'text-green-400' },
  { id: 'kollaboration', icon: '🤝', colorClass: 'text-pink-400' },
];

export const DIFF_LEVEL_META = {
  basis:     { label: 'AFB I',  icon: '⭐',  color: '#86efac' },
  standard:  { label: 'AFB II', icon: '⭐⭐', color: '#fbbf24' },
  erweitert: { label: 'AFB III', icon: '⭐⭐⭐', color: '#f97316' },
  ea:        { label: 'eA',     icon: '🔬',   color: '#ef4444' },
};

export const DOMAINS = {
  analysis:    { label: 'Analysis',       icon: '📈', color: '#f59e0b' },
  geometrie:   { label: 'Geometrie',      icon: '📐', color: '#f472b6' },
  stochastik:  { label: 'Stochastik',     icon: '🎲', color: '#3b82f6' },
  algebra:     { label: 'Lineare Algebra', icon: '🔢', color: '#34d399' },
};
