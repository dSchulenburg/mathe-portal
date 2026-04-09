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
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored === 'adult' || stored === 'youth') {
    return stored;
  }
  return 'youth';
}

function readInitialEmbed() {
  const params = new URLSearchParams(window.location.search);
  return params.get('embed') === '1';
}

export function DisplayModeProvider({ children }) {
  const [mode, setMode] = useState(readInitialMode);
  const [embed] = useState(readInitialEmbed);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  return (
    <DisplayModeContext.Provider value={{ mode, embed, setMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
}

export function useDisplayMode() {
  return useContext(DisplayModeContext);
}
