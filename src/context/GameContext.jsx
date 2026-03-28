import { createContext, useContext, useReducer, useEffect } from 'react';
import { loadState, saveState } from '../utils/storage';
import { calculateXP } from '../utils/xp';
import { getModule } from '../modules/registry';

const GameContext = createContext();

const INITIAL_STATE = {
  _version: 'v2',
  language: 'de',
  playerName: '',
  xp: 0,
  streak: { count: 0, lastDate: null },
  globalBadges: [],
  modules: {},
};

function getModuleState(state, moduleId) {
  return state.modules[moduleId] || { exerciseResults: {}, badges: [] };
}

export function isLevelComplete(state, moduleId, levelId) {
  const mod = getModuleState(state, moduleId);
  const module = getModule(moduleId);
  const prefix = module?.exercisePrefix || (moduleId === 'quad-funktionen' ? 'Q' : 'D');
  return [1, 2, 3, 4].every(
    ex => mod.exerciseResults[`${prefix}${levelId}-EX${ex}`]
  );
}

export function isLevelUnlocked(state, moduleId, levelId) {
  if (levelId === 1) return true;
  return isLevelComplete(state, moduleId, levelId - 1);
}

export function isExerciseUnlocked(state, moduleId, exerciseId) {
  const match = exerciseId.match(/^([A-Z])(\d+)-EX(\d+)$/);
  if (!match) return false;
  const [, prefix, level, ex] = match;
  const levelId = parseInt(level);
  const exNum = parseInt(ex);
  if (!isLevelUnlocked(state, moduleId, levelId)) return false;
  if (exNum === 1) return true;
  const prevId = `${prefix}${levelId}-EX${exNum - 1}`;
  return !!getModuleState(state, moduleId).exerciseResults[prevId];
}

export function getLevelStars(state, moduleId, levelId) {
  const mod = getModuleState(state, moduleId);
  const module = getModule(moduleId);
  const prefix = module?.exercisePrefix || (moduleId === 'quad-funktionen' ? 'Q' : 'D');
  let total = 0;
  for (let i = 1; i <= 4; i++) {
    const r = mod.exerciseResults[`${prefix}${levelId}-EX${i}`];
    if (r) total += r.stars;
  }
  return total;
}

export function getModuleProgress(state, moduleId) {
  const mod = getModuleState(state, moduleId);
  const module = getModule(moduleId);
  if (!module) return 0;
  const completed = Object.keys(mod.exerciseResults).length;
  return Math.round((completed / module.exerciseCount) * 100);
}

export function getModuleTotalStars(state, moduleId) {
  const mod = getModuleState(state, moduleId);
  return Object.values(mod.exerciseResults).reduce((sum, r) => sum + (r.stars || 0), 0);
}

function checkModuleBadges(state, moduleId) {
  const module = getModule(moduleId);
  if (!module) return [];
  return module.badges
    .filter(b => b.check(state, moduleId))
    .map(b => b.id);
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function wasYesterday(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return d.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0];
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload.language };

    case 'SET_PROFILE':
      return { ...state, playerName: action.payload.playerName };

    case 'COMPLETE_EXERCISE': {
      const { moduleId, exerciseId, stars, baseXP } = action.payload;
      const mod = getModuleState(state, moduleId);
      const existing = mod.exerciseResults[exerciseId];
      const attempts = existing ? existing.attempts + 1 : 1;
      const finalStars = existing ? Math.max(existing.stars, stars) : stars;
      const earnedXP = existing ? 0 : calculateXP(baseXP || 10, stars);

      const newResults = {
        ...mod.exerciseResults,
        [exerciseId]: { stars: finalStars, attempts },
      };
      const newModState = { ...mod, exerciseResults: newResults };
      const newState = {
        ...state,
        xp: state.xp + earnedXP,
        modules: { ...state.modules, [moduleId]: newModState },
      };
      const earnedBadges = checkModuleBadges(newState, moduleId);
      newState.modules[moduleId] = { ...newModState, badges: earnedBadges };
      return newState;
    }

    case 'UPDATE_STREAK': {
      const today = todayStr();
      const { lastDate, count } = state.streak;
      if (lastDate === today) return state;
      const newCount = wasYesterday(lastDate) ? count + 1 : 1;
      return { ...state, streak: { count: newCount, lastDate: today } };
    }

    case 'LOAD_STATE':
      return { ...INITIAL_STATE, ...action.payload };

    case 'RESET':
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  useEffect(() => {
    const saved = loadState();
    if (saved) dispatch({ type: 'LOAD_STATE', payload: saved });
  }, []);

  useEffect(() => {
    if (state !== INITIAL_STATE) saveState(state);
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
