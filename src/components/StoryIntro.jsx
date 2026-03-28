import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/useTranslation';

export default function StoryIntro({ moduleId, levelId, accentColor, onStart }) {
  const { t } = useTranslation();

  const icon = t(`stories.${moduleId}.${levelId}.icon`);
  const text = t(`stories.${moduleId}.${levelId}.text`);
  const motivation = t(`stories.${moduleId}.${levelId}.motivation`);
  const levelTitle = t(`levels.${moduleId}.${levelId}.title`);

  if (!text || text === `stories.${moduleId}.${levelId}.text`) return null;

  return (
    <motion.div
      className="story-intro"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="story-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {icon}
      </motion.div>
      <h2 className="story-title">Level {levelId}: {levelTitle}</h2>
      <p className="story-text">{text}</p>
      <p className="story-motivation"><strong>{motivation}</strong></p>
      <motion.button
        className="btn btn-start"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={accentColor ? { background: accentColor } : {}}
      >
        {t('ui.start')} 🚀
      </motion.button>
    </motion.div>
  );
}
