import { useState, useRef, useEffect } from 'react';
import { LANGUAGES } from '../i18n/I18nProvider';

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  return (
    <div className="language-switcher" ref={ref}>
      <button
        className="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        {current.flag} {current.code.toUpperCase()}
      </button>
      {isOpen && (
        <div className="language-switcher-dropdown">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              className={`language-option ${lang.code === currentLanguage ? 'active' : ''}`}
              onClick={() => { onLanguageChange(lang.code); setIsOpen(false); }}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
