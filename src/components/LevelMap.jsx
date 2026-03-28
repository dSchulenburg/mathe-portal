import { motion } from 'framer-motion';
import { useGame, isLevelUnlocked, getLevelStars, isLevelComplete } from '../context/GameContext';

const LEVELS = [
  { id: 1, title: 'Grundlagen', subtitle: 'Parabeln erkennen', icon: '📐', color: '#00A3E0' },
  { id: 2, title: 'Formen umwandeln', subtitle: 'Normal ↔ Scheitelform', icon: '🔄', color: '#0088cc' },
  { id: 3, title: 'pq-Formel', subtitle: 'Nullstellen berechnen', icon: '🧮', color: '#006699' },
  { id: 4, title: 'Faktorisieren', subtitle: 'Satz von Vieta', icon: '✂️', color: '#004d80' },
  { id: 5, title: 'Mix & Match', subtitle: 'Methoden kombinieren', icon: '🎯', color: '#003366' },
  { id: 6, title: 'Textaufgaben', subtitle: 'Mathe im Alltag', icon: '📝', color: '#002244' },
];

export { LEVELS };

export default function LevelMap({ onSelectLevel }) {
  const { state } = useGame();

  return (
    <div className="level-map">
      {LEVELS.map((level, index) => {
        const unlocked = isLevelUnlocked(state, level.id);
        const complete = isLevelComplete(state, level.id);
        const stars = getLevelStars(state, level.id);
        const maxStars = 12; // 4 exercises x 3 stars

        return (
          <motion.div
            key={level.id}
            className={`level-card ${!unlocked ? 'locked' : ''} ${complete ? 'completed' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={unlocked ? { scale: 1.03, y: -5 } : {}}
            whileTap={unlocked ? { scale: 0.98 } : {}}
            onClick={() => unlocked && onSelectLevel(level.id)}
            style={{ cursor: unlocked ? 'pointer' : 'default' }}
          >
            {!unlocked && <div className="lock-overlay">🔒</div>}
            <div className="level-number" style={{ background: unlocked ? level.color : '#999' }}>
              {level.id}
            </div>
            <div className="level-icon">{level.icon}</div>
            <h3 className="level-title">{level.title}</h3>
            <p className="level-subtitle">{level.subtitle}</p>
            {unlocked && (
              <>
                <div className="level-stars-summary">
                  <span>⭐ {stars}/{maxStars}</span>
                </div>
                <div className="level-progress">
                  <div className="level-progress-bar" style={{ width: `${(stars / maxStars) * 100}%`, background: level.color }} />
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
