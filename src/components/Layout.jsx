import { useGame } from '../context/GameContext';
import { getTier, getTierProgress } from '../utils/xp';
import ProgressBar from './ui/ProgressBar';

export default function Layout({ children, onNavigate }) {
  const { state } = useGame();
  const tier = getTier(state.xp);
  const progress = getTierProgress(state.xp);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title" onClick={() => onNavigate('levels')}>
            <h1>🧮 Mathe-Bootcamp</h1>
            <p className="app-subtitle">Quadratische Gleichungen & pq-Formel</p>
          </div>
          <div className="header-stats">
            <div className="header-xp">
              <span className="tier-icon">{tier.icon}</span>
              <span className="tier-name">{tier.name}</span>
              <ProgressBar value={progress} label={`${state.xp} XP`} />
            </div>
            {state.streak.count > 0 && (
              <div className="header-streak">🔥 {state.streak.count} Tage</div>
            )}
          </div>
          <nav className="header-nav">
            <button className="btn btn-secondary" onClick={() => onNavigate('badges')}>🏅 Badges</button>
            <button className="btn btn-secondary" onClick={() => onNavigate('profile')}>👤 Profil</button>
          </nav>
        </div>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
