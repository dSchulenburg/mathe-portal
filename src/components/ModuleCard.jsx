import { motion } from 'framer-motion';
import { useGame, getModuleProgress, getModuleTotalStars } from '../context/GameContext';
import { useTranslation } from '../i18n/useTranslation';

export default function ModuleCard({ module, index, onClick }) {
  const { state } = useGame();
  const { t } = useTranslation();
  const progress = getModuleProgress(state, module.id);
  const stars = getModuleTotalStars(state, module.id);
  const maxStars = (module.totalLevels || 6) * 4 * 3; // levels × exercises × max_stars

  const title = t(`modules.${module.id}.title`);
  const subtitle = t(`modules.${module.id}.subtitle`, {
    levels: module.totalLevels || 6,
    exercises: module.exerciseCount || 24,
  });

  return (
    <motion.div
      className="module-card"
      style={{ '--accent': module.accentColor || 'var(--mp-primary)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="module-card-icon">{module.icon}</div>
      <h3 className="module-card-title">{title}</h3>
      <p className="module-card-subtitle">{subtitle}</p>
      <div className="level-progress" style={{ margin: '0.5rem 0 0.25rem' }}>
        <div
          className="level-progress-bar"
          style={{
            width: `${progress}%`,
            background: module.accentColor || 'var(--mp-primary)',
            height: '100%',
            borderRadius: '3px',
            transition: 'width 0.6s ease',
          }}
        />
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--mp-muted)', marginTop: '0.25rem' }}>
        {progress}% · ⭐ {stars}/{maxStars}
      </div>
    </motion.div>
  );
}
