import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useTranslation } from '../i18n/useTranslation';
import { getModule } from '../modules/registry';
import Badge from './ui/Badge';

export default function BadgeWall({ moduleId, onBack }) {
  const { state } = useGame();
  const { t } = useTranslation();

  // Get badges from module definition (or empty if no moduleId)
  const module = moduleId ? getModule(moduleId) : null;
  const badgeDefs = module?.badges || [];
  const earnedBadges = moduleId ? (state.modules[moduleId]?.badges || []) : [];

  const badgesWithMeta = badgeDefs.map(def => ({
    ...def,
    name: t(`badges.${def.id}.name`),
    description: t(`badges.${def.id}.description`),
  }));

  return (
    <div className="badge-wall">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'white', margin: 0 }}>
          🏅 {t('ui.badges')} ({earnedBadges.length}/{badgeDefs.length})
        </h2>
        <button className="btn btn-secondary" onClick={onBack}>← {t('ui.back')}</button>
      </div>
      <div className="badge-grid">
        {badgesWithMeta.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <Badge
              badge={badge}
              earned={earnedBadges.includes(badge.id)}
            />
          </motion.div>
        ))}
        {badgesWithMeta.length === 0 && (
          <p style={{ color: 'var(--mp-muted)', gridColumn: '1/-1', textAlign: 'center', padding: '2rem 0' }}>
            Wähle ein Modul, um seine Badges zu sehen.
          </p>
        )}
      </div>
    </div>
  );
}
