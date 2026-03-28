const OLD_KEY = 'mathe-bootcamp-v1';
const STORAGE_KEY = 'mathe-portal-v2';

function migrateExerciseIds(results) {
  const migrated = {};
  for (const [key, value] of Object.entries(results)) {
    const newKey = key.replace(/^L(\d)/, 'Q$1');
    migrated[newKey] = value;
  }
  return migrated;
}

function migrateV1(saved) {
  return {
    _version: 'v2',
    language: 'de',
    playerName: saved.playerName || '',
    xp: saved.xp || 0,
    streak: saved.streak || { count: 0, lastDate: null },
    globalBadges: [],
    modules: {
      'quad-funktionen': {
        exerciseResults: migrateExerciseIds(saved.exerciseResults || {}),
        badges: saved.badges || [],
      },
    },
  };
}

export function loadState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed._version === 'v2') return parsed;
    }
    raw = localStorage.getItem(OLD_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const data = parsed.version === 1 ? parsed.data : parsed;
      const migrated = migrateV1(data);
      saveState(migrated);
      localStorage.removeItem(OLD_KEY);
      return migrated;
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
  return null;
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(OLD_KEY);
}
