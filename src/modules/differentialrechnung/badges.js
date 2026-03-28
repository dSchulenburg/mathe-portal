import { isLevelComplete } from '../../context/GameContext';

export const badges = [
  {
    id: 'erste-ableitung',
    icon: '✨',
    check: (state, moduleId) => Object.keys(state.modules[moduleId]?.exerciseResults || {}).length > 0,
  },
  {
    id: 'grenzwert-versteher',
    icon: '🔭',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 1),
  },
  {
    id: 'regelmeister',
    icon: '🧩',
    check: (state, moduleId) =>
      isLevelComplete(state, moduleId, 2) && isLevelComplete(state, moduleId, 3),
  },
  {
    id: 'kurvendiskussion-I',
    icon: '🔬',
    check: (state, moduleId) => isLevelComplete(state, moduleId, 4),
  },
  {
    id: 'diff-starter',
    icon: '🌟',
    check: (state, moduleId) => {
      const results = state.modules[moduleId]?.exerciseResults || {};
      return Object.keys(results).length >= 16;
    },
  },
];
