import { motion } from 'framer-motion';
import { useGame, isLevelUnlocked, getLevelStars, isLevelComplete } from '../context/GameContext';
import { useTranslation } from '../i18n/useTranslation';

export default function LevelMap({ moduleId, levels, accentColor, onSelectLevel }) {
  const { state } = useGame();
  const { t } = useTranslation();
  const color = accentColor || '#00A3E0';

  return (
    <div className="level-map">
      {levels.map((level, index) => {
        const unlocked = isLevelUnlocked(state, moduleId, level.id);
        const complete = isLevelComplete(state, moduleId, level.id);
        const stars = getLevelStars(state, moduleId, level.id);
        const maxStars = 12; // 4 exercises × 3 stars

        const levelTitle = t(`levels.${moduleId}.${level.id}.title`);
        const levelSubtitle = t(`levels.${moduleId}.${level.id}.subtitle`);

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
            <div className="level-number" style={{ background: unlocked ? color : '#999' }}>
              {level.id}
            </div>
            <div className="level-icon">{level.icon}</div>
            <h3 className="level-title">{levelTitle}</h3>
            <p className="level-subtitle">{levelSubtitle}</p>
            {unlocked && (
              <>
                <div className="level-stars-summary">
                  <span>⭐ {stars}/{maxStars}</span>
                </div>
                <div className="level-progress">
                  <div className="level-progress-bar" style={{ width: `${(stars / maxStars) * 100}%`, background: color }} />
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
