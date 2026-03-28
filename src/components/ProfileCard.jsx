import { useGame } from '../context/GameContext';
import { getTier, getNextTier, getTierProgress, TIERS } from '../utils/xp';
import ProgressBar from './ui/ProgressBar';

export default function ProfileCard({ onBack }) {
  const { state, dispatch } = useGame();
  const tier = getTier(state.xp);
  const nextTier = getNextTier(state.xp);
  const progress = getTierProgress(state.xp);

  const totalExercises = Object.keys(state.exerciseResults).length;
  const totalStars = Object.values(state.exerciseResults).reduce((sum, r) => sum + (r.stars || 0), 0);
  const perfectCount = Object.values(state.exerciseResults).filter(r => r.stars === 3).length;

  const handleReset = () => {
    if (window.confirm('Wirklich den gesamten Fortschritt zurücksetzen?')) {
      dispatch({ type: 'RESET' });
    }
  };

  return (
    <div className="profile-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>{'\u{1F464}'} Dein Profil</h2>
        <button className="btn btn-secondary" onClick={onBack}>{'\u2190'} Zur{'\u00fc'}ck</button>
      </div>

      <div className="profile-tier">
        <span className="tier-big-icon">{tier.icon}</span>
        <div>
          <h3>{tier.name}</h3>
          {nextTier && (
            <p>Noch {nextTier.minXP - state.xp} XP bis {nextTier.icon} {nextTier.name}</p>
          )}
          {!nextTier && <p>H{'\u00f6'}chster Rang erreicht! {'\u{1F389}'}</p>}
        </div>
      </div>

      <ProgressBar value={progress} label={`${state.xp} XP`} />

      <div className="profile-stats">
        <div className="stat-box">
          <div className="stat-number">{totalExercises}</div>
          <div className="stat-label">Aufgaben gel{'\u00f6'}st</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{totalStars}</div>
          <div className="stat-label">Sterne {'\u2B50'}</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{perfectCount}</div>
          <div className="stat-label">Perfekt {'\u{1F48E}'}</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{state.badges.length}</div>
          <div className="stat-label">Badges {'\u{1F3C5}'}</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{state.streak.count}</div>
          <div className="stat-label">Tage-Streak {'\u{1F525}'}</div>
        </div>
      </div>

      <div className="tier-overview">
        <h4>R{'\u00e4'}nge</h4>
        {TIERS.map(t => (
          <div key={t.name} className={`tier-row ${t.name === tier.name ? 'current' : ''} ${state.xp >= t.minXP ? 'reached' : ''}`}>
            <span>{t.icon} {t.name}</span>
            <span>{t.minXP} XP</span>
          </div>
        ))}
      </div>

      <button className="btn btn-secondary" onClick={handleReset} style={{ marginTop: '2rem', color: '#ef4444' }}>
        {'\u{1F5D1}\uFE0F'} Fortschritt zur{'\u00fc'}cksetzen
      </button>
    </div>
  );
}
