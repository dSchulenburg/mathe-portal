// mathe-portal/src/context/DisplayModeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const DisplayModeContext = createContext({ mode: 'youth', embed: false });

const STORAGE_KEY = 'mathePortal.displayMode';

function readInitialMode() {
  const params = new URLSearchParams(window.location.search);
  const urlMode = params.get('mode');
  if (urlMode === 'adult' || urlMode === 'youth') {
    return urlMode;
  }
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'adult' || stored === 'youth') {
      return stored;
    }
  } catch (_) {
    // sessionStorage unavailable — fall through to default
  }
  return 'youth';
}

function readInitialEmbed() {
  const params = new URLSearchParams(window.location.search);
  return params.get('embed') === '1';
}

export function DisplayModeProvider({ children }) {
  const [mode] = useState(readInitialMode);
  const [embed] = useState(readInitialEmbed);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, mode);
    } catch (_) {
      // sessionStorage may be unavailable (private browsing, quota exceeded) — fail silent
    }
  }, [mode]);

  return (
    <DisplayModeContext.Provider value={{ mode, embed }}>
      {children}
    </DisplayModeContext.Provider>
  );
}

// Intentionally returns the default { mode: 'youth', embed: false } outside a provider,
// rather than throwing, so consumer components can be rendered in isolation (e.g. in tests)
// without needing to wrap them. Mirrors the defaults set in createContext().
export function useDisplayMode() {
  return useContext(DisplayModeContext);
}
