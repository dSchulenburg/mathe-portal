import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useTranslation } from '../i18n/useTranslation';
import { getAllModules } from '../modules/registry';
import { getTier, getTierProgress } from '../utils/xp';
import ModuleCard from './ModuleCard';
import ProgressBar from './ui/ProgressBar';

export default function TopicSelector({ onSelectModule }) {
  const { state } = useGame();
  const { t } = useTranslation();
  const tier = getTier(state.xp);
  const tierProgress = getTierProgress(state.xp);
  const allModules = getAllModules();

  return (
    <motion.div
      className="topic-selector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="topic-header">
        <h1 className="topic-title">{t('portal.title')}</h1>
        <p className="topic-subtitle">{t('portal.subtitle')}</p>
      </div>

      <div className="module-grid">
        {allModules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
            onClick={() => onSelectModule(module.id)}
          />
        ))}
      </div>

      <div className="portal-stats">
        <span>{tier.icon} {tier.name}</span>
        <span>·</span>
        <span>{state.xp} XP</span>
        {state.streak.count > 0 && (
          <>
            <span>·</span>
            <span>🔥 {state.streak.count} {t('ui.streak', { count: state.streak.count })}</span>
          </>
        )}
      </div>

      <div style={{ maxWidth: '300px', margin: '0 auto 1rem' }}>
        <ProgressBar value={tierProgress} label={`${state.xp} XP`} />
      </div>

      <div className="portal-footer">
        <p>
          Open Educational Resources ·{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>
          {' · '}
          <a href="https://dirk-schulenburg.net" target="_blank" rel="noopener noreferrer">
            dirk-schulenburg.net
          </a>
        </p>
      </div>
    </motion.div>
  );
}
