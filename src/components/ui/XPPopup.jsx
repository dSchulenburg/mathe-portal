import { motion, AnimatePresence } from 'framer-motion';

export default function XPPopup({ xp, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="xp-popup"
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: -30, scale: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8 }}
        >
          +{xp} XP
        </motion.div>
      )}
    </AnimatePresence>
  );
}
