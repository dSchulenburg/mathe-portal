const STORAGE_KEY = 'mathe-bootcamp-v1';
const STORAGE_VERSION = 1;

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== STORAGE_VERSION) return null;
    return data.state;
  } catch {
    return null;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: STORAGE_VERSION, state }));
  } catch { /* quota exceeded */ }
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
}
