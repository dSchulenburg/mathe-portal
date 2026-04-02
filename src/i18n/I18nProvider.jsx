import { createContext, useCallback, useMemo, useState } from 'react';
import de from './locales/de';
import en from './locales/en';
import uk from './locales/uk';
import ru from './locales/ru';
import pl from './locales/pl';
import fr from './locales/fr';
import es from './locales/es';
import pt from './locales/pt';
import nl from './locales/nl';
import it from './locales/it';
import cs from './locales/cs';
import no from './locales/no';
import da from './locales/da';

const locales = { de, en, uk, ru, pl, fr, es, pt, nl, it, cs, no, da };

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem('mathe-portal-language');
    if (stored && locales[stored]) return stored;
  } catch {}
  return 'de';
}

export const LANGUAGES = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
];

export const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);
  const locale = locales[language] || locales.de;

  const setLanguage = useCallback((code) => {
    if (locales[code]) {
      setLanguageState(code);
      try { localStorage.setItem('mathe-portal-language', code); } catch {}
    }
  }, []);

  const t = useCallback((key, params) => {
    let str = key.split('.').reduce((obj, k) => obj?.[k], locale);
    if (str === undefined) {
      str = key.split('.').reduce((obj, k) => obj?.[k], locales.de) || key;
    }
    if (params && typeof str === 'string') {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      });
    }
    return str;
  }, [locale]);

  const value = useMemo(() => ({ t, language, setLanguage }), [t, language, setLanguage]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}
