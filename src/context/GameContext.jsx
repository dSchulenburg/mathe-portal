import { createContext, useContext, useReducer, useEffect, useRef } from 'react';
import { loadState, saveState } from '../utils/storage.js';
import { calculateXP } from '../utils/xp.js';

// --- Badge definitions ---
const BADGE_DEFS = [
  { id: 'first-solve', name: 'Erste L\u00f6sung', icon: '\u2B50', check: (s) => Object.keys(s.exerciseResults).length >= 1 },
  { id: 'parabel-pro', name: 'Parabel-Pro', icon: '\u{1F4C8}', check: (s) => isLevelComplete(s, 1) },
  { id: 'pq-meister', name: 'pq-Meister', icon: '\u{1F9EE}', check: (s) => isLevelComplete(s, 3) },
  { id: 'faktor-fuchs', name: 'Faktor-Fuchs', icon: '\u2702\uFE0F', check: (s) => isLevelComplete(s, 4) },
  { id: 'textaufgaben-koenig', name: 'Textaufgaben-K\u00f6nig', icon: '\u{1F451}', check: (s) => isLevelComplete(s, 6) },
  { id: 'perfect-score', name: 'Perfektionist', icon: '\u{1F48E}', check: (s) => Object.values(s.exerciseResults).some(r => r.stars === 3) },
  { id: 'streak-3', name: '3-Tage-Streak', icon: '\u{1F525}', check: (s) => s.streak.count >= 3 },
  { id: 'vollstaendig', name: 'Bootcamp Absolvent', icon: '\u{1F3C6}', check: (s) => Object.keys(s.exerciseResults).length >= 24 },
];

// --- Initial state ---
const INITIAL_STATE = {
  playerName: '',
  xp: 0,
  badges: [],
  exerciseResults: {},  // { 'L1-EX1': { stars: 3, attempts: 1 } }
  streak: { count: 0, lastDate: null },
};

// --- Helper functions ---

export function isLevelComplete(state, levelId) {
  for (let ex = 1; ex <= 4; ex++) {
    const key = `L${levelId}-EX${ex}`;
    if (!state.exerciseResults[key]) return false;
  }
  return true;
}

export function isLevelUnlocked(state, levelId) {
  if (levelId === 1) return true;
  return isLevelComplete(state, levelId - 1);
}

export function isExerciseUnlocked(state, exerciseId) {
  // Parse exerciseId like "L2-EX3"
  const match = exerciseId.match(/^L(\d+)-EX(\d+)$/);
  if (!match) return false;
  const levelId = parseInt(match[1], 10);
  const exNum = parseInt(match[2], 10);

  // Level must be unlocked
  if (!isLevelUnlocked(state, levelId)) return false;

  // First exercise of an unlocked level is always unlocked
  if (exNum === 1) return true;

  // Otherwise, previous exercise in this level must have results
  const prevKey = `L${levelId}-EX${exNum - 1}`;
  return !!state.exerciseResults[prevKey];
}

export function getLevelStars(state, levelId) {
  let total = 0;
  for (let ex = 1; ex <= 4; ex++) {
    const key = `L${levelId}-EX${ex}`;
    const result = state.exerciseResults[key];
    if (result) total += result.stars;
  }
  return total;
}

// --- Check for new badges ---
function checkBadges(state) {
  const newBadges = [];
  for (const def of BADGE_DEFS) {
    if (!state.badges.includes(def.id) && def.check(state)) {
      newBadges.push(def.id);
    }
  }
  return newBadges;
}

// --- Today as YYYY-MM-DD ---
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// --- Was the given date string yesterday? ---
function wasYesterday(dateStr) {
  if (!dateStr) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return dateStr === yesterday.toISOString().slice(0, 10);
}

// --- Reducer ---
function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_PROFILE': {
      return { ...state, playerName: action.payload.playerName };
    }

    case 'COMPLETE_EXERCISE': {
      const { exerciseId, stars, levelId } = action.payload;
      const existing = state.exerciseResults[exerciseId];
      let xpGain = 0;

      if (!existing) {
        // First attempt
        xpGain = calculateXP(levelId, stars);
      } else if (stars > existing.stars) {
        // Improved — award difference only
        const oldXP = calculateXP(levelId, existing.stars);
        const newXP = calculateXP(levelId, stars);
        xpGain = newXP - oldXP;
      }

      const updatedResults = {
        ...state.exerciseResults,
        [exerciseId]: {
          stars: existing ? Math.max(existing.stars, stars) : stars,
          attempts: existing ? existing.attempts + 1 : 1,
        },
      };

      const newState = {
        ...state,
        xp: state.xp + xpGain,
        exerciseResults: updatedResults,
      };

      // Check for new badges
      const earnedBadges = checkBadges(newState);
      if (earnedBadges.length > 0) {
        newState.badges = [...newState.badges, ...earnedBadges];
      }

      return newState;
    }

    case 'UPDATE_STREAK': {
      const today = todayStr();
      const { lastDate, count } = state.streak;

      if (lastDate === today) {
        // Already counted today
        return state;
      }

      if (wasYesterday(lastDate)) {
        return { ...state, streak: { count: count + 1, lastDate: today } };
      }

      // Streak broken or first day
      return { ...state, streak: { count: 1, lastDate: today } };
    }

    case 'LOAD_STATE': {
      return { ...INITIAL_STATE, ...action.payload };
    }

    case 'RESET': {
      return { ...INITIAL_STATE };
    }

    default:
      return state;
  }
}

// --- Context ---
const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  const initialized = useRef(false);

  // On mount: hydrate from storage, then update streak
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: saved });
    }
    dispatch({ type: 'UPDATE_STREAK' });
    initialized.current = true;
  }, []);

  // Save to localStorage on every state change (after initialization)
  useEffect(() => {
    if (initialized.current) {
      saveState(state);
    }
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return ctx;
}

export { BADGE_DEFS };
