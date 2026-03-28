import { useGame, getModuleProgress, getModuleTotalStars } from '../context/GameContext';
import { useTranslation } from '../i18n/useTranslation';
import { getTier, getNextTier, getTierProgress, TIERS } from '../utils/xp';
import { getAllModules } from '../modules/registry';
import ProgressBar from './ui/ProgressBar';

export default function ProfileCard({ onBack }) {
  const { state, dispatch } = useGame();
  const { t } = useTranslation();
  const tier = getTier(state.xp);
  const nextTier = getNextTier(state.xp);
  const progress = getTierProgress(state.xp);
  const allModules = getAllModules();

  // Aggregate stats across all modules
  const totalExercises = allModules.reduce((sum, mod) => {
    return sum + Object.keys(state.modules[mod.id]?.exerciseResults || {}).length;
  }, 0);
  const totalStars = allModules.reduce((sum, mod) => {
    return sum + getModuleTotalStars(state, mod.id);
  }, 0);
  const perfectCount = allModules.reduce((sum, mod) => {
    const results = state.modules[mod.id]?.exerciseResults || {};
    return sum + Object.values(results).filter(r => r.stars === 3).length;
  }, 0);
  const totalBadges = allModules.reduce((sum, mod) => {
    return sum + (state.modules[mod.id]?.badges || []).length;
  }, 0);

  const handleReset = () => {
    if (window.confirm(t('ui.confirmReset'))) {
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <div className="profile-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>👤 {t('ui.profile')}</h2>
        <button className="btn btn-secondary" onClick={onBack}>← {t('ui.back')}</button>
      </div>

      <div className="profile-tier">
        <span className="tier-big-icon">{tier.icon}</span>
        <div>
          <h3>{tier.name}</h3>
          {nextTier && (
            <p>Noch {nextTier.minXP - state.xp} XP bis {nextTier.icon} {nextTier.name}</p>
          )}
          {!nextTier && <p>Höchster Rang erreicht! 🎉</p>}
        </div>
      </div>

      <ProgressBar value={progress} label={`${state.xp} XP`} />

      <div className="profile-stats">
        <div className="stat-box">
          <div className="stat-number">{totalExercises}</div>
          <div className="stat-label">Aufgaben gelöst</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{totalStars}</div>
          <div className="stat-label">Sterne ⭐</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{perfectCount}</div>
          <div className="stat-label">Perfekt 💎</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{totalBadges}</div>
          <div className="stat-label">Badges 🏅</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{state.streak.count}</div>
          <div className="stat-label">Tage-Streak 🔥</div>
        </div>
      </div>

      {/* Per-module progress */}
      {allModules.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <h4 style={{ marginBottom: '0.75rem', color: 'var(--mp-primary)' }}>Module</h4>
          {allModules.map(mod => {
            const modProgress = getModuleProgress(state, mod.id);
            const modStars = getModuleTotalStars(state, mod.id);
            const maxStars = (mod.totalLevels || 6) * 4 * 3;
            return (
              <div key={mod.id} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem' }}>
                  <span>{mod.icon} {t(`modules.${mod.id}.title`)}</span>
                  <span style={{ color: 'var(--mp-muted)' }}>⭐ {modStars}/{maxStars}</span>
                </div>
                <ProgressBar value={modProgress} label={`${modProgress}%`} />
              </div>
            );
          })}
        </div>
      )}

      <div className="tier-overview">
        <h4>Ränge</h4>
        {TIERS.map(t_item => (
          <div key={t_item.name} className={`tier-row ${t_item.name === tier.name ? 'current' : ''} ${state.xp >= t_item.minXP ? 'reached' : ''}`}>
            <span>{t_item.icon} {t_item.name}</span>
            <span>{t_item.minXP} XP</span>
          </div>
        ))}
      </div>

      <button className="btn btn-secondary" onClick={handleReset} style={{ marginTop: '2rem', color: '#ef4444' }}>
        🗑️ {t('ui.reset')}
      </button>
    </div>
  );
}
