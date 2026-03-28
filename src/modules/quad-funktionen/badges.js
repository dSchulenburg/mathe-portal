import { isLevelComplete } from '../../context/GameContext';

export const badges = [
  {
    id: 'first-solve',
    icon: '⭐',
    check: (state, moduleId) => Object.keys(state.modules[moduleId]?.exerciseResults || {}).length > 0,
  },
  {
    id: 'parabel-pro',
    icon: '📐',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 1),
  },
  {
    id: 'pq-meister',
    icon: '🧮',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 3),
  },
  {
    id: 'faktor-fuchs',
    icon: '✂️',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 4),
  },
  {
    id: 'textaufgaben-koenig',
    icon: '📝',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 6),
  },
  {
    id: 'perfect-score',
    icon: '✨',
    check: (state, moduleId) => {
      const results = state.modules[moduleId]?.exerciseResults || {};
      return Object.values(results).some(r => r.stars === 3);
    },
  },
  {
    id: 'streak-3',
    icon: '🔥',
    check: (state) => state.streak.count >= 3,
  },
  {
    id: 'vollstaendig',
    icon: '🏆',
    check: (state, moduleId) => {
      const results = state.modules[moduleId]?.exerciseResults || {};
      return Object.keys(results).length >= 24;
    },
  },
];
