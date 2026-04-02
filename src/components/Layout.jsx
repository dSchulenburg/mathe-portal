import { useGame } from '../context/GameContext';
import { getTier, getTierProgress } from '../utils/xp';
import { useTranslation } from '../i18n/useTranslation';
import ProgressBar from './ui/ProgressBar';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * view: current view name ('topics' | 'levels' | 'story' | 'exercise' | 'complete' | 'badges' | 'profile')
 * moduleName: translated name of active module (for LEVELS view)
 * exerciseLabel: e.g. "Level 3 · Übung 2/4" (for EXERCISE view)
 * onBack: called when back button is clicked
 * onNavigate: called with view name for nav buttons
 * onLanguageChange: called with language code
 */
export default function Layout({
  children,
  view,
  moduleName,
  exerciseLabel,
  onBack,
  onNavigate,
  onLanguageChange,
}) {
  const { state } = useGame();
  const { t } = useTranslation();
  const tier = getTier(state.xp);
  const progress = getTierProgress(state.xp);

  const isTopics = view === 'topics';
  const isExercise = view === 'exercise' || view === 'complete';
  const showBack = !isTopics && onBack;

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          {/* Left: back button or logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '140px' }}>
            {showBack ? (
              <button className="back-btn" onClick={onBack} aria-label={t('ui.back')}>
                ← {t('ui.back')}
              </button>
            ) : (
              <a
                href="/dashboard/"
                className="back-btn"
                style={{ textDecoration: 'none', fontSize: '0.8rem' }}
              >
                ← Lernmodule
              </a>
            )}
          </div>

          {/* Center: title */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            {isTopics && (
              <div className="header-title" style={{ cursor: 'default' }}>
                <h1>{t('portal.title')}</h1>
              </div>
            )}
            {view === 'levels' && moduleName && (
              <span className="header-module">{moduleName}</span>
            )}
            {isExercise && exerciseLabel && (
              <span className="header-module">{exerciseLabel}</span>
            )}
          </div>

          {/* Right: nav + lang + profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '140px', justifyContent: 'flex-end' }}>
            {isExercise ? (
              <>
                <div className="header-xp">
                  <span className="tier-icon">{tier.icon}</span>
                  <span className="tier-name" style={{ fontSize: '0.8rem' }}>{state.xp} XP</span>
                </div>
                {state.streak.count > 0 && (
                  <div className="header-streak">🔥 {state.streak.count}</div>
                )}
              </>
            ) : (
              <>
                {onLanguageChange && (
                  <LanguageSwitcher
                    currentLanguage={state.language}
                    onLanguageChange={onLanguageChange}
                  />
                )}
                {!isTopics && (
                  <button className="btn btn-secondary" onClick={() => onNavigate('badges')}>
                    🏅
                  </button>
                )}
                <button className="btn btn-secondary" onClick={() => onNavigate('profile')}>
                  👤
                </button>
              </>
            )}
          </div>
        </div>

        {/* XP progress bar — only in non-exercise views */}
        {!isExercise && (
          <div style={{ maxWidth: '1200px', margin: '0.25rem auto 0', padding: '0 0.5rem' }}>
            <div className="header-stats" style={{ justifyContent: 'flex-end', gap: '0.75rem' }}>
              <span className="tier-icon">{tier.icon}</span>
              <span className="tier-name" style={{ fontSize: '0.8rem' }}>{tier.name}</span>
              <div style={{ width: '120px' }}>
                <ProgressBar value={progress} label={`${state.xp} XP`} />
              </div>
              {state.streak.count > 0 && (
                <div className="header-streak">🔥 {state.streak.count}</div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
