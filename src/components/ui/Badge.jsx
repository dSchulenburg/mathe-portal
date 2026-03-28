import { motion } from 'framer-motion';

export default function Badge({ badge, earned = false, size = 'medium' }) {
  return (
    <motion.div
      className={`badge-card ${earned ? 'earned' : 'locked'} badge-${size}`}
      whileHover={earned ? { scale: 1.05 } : {}}
    >
      <div className="badge-icon">
        {earned ? badge.icon : '?'}
      </div>
      <div className="badge-name">{earned ? badge.name : '???'}</div>
      {earned && badge.description && (
        <div className="badge-description">{badge.description}</div>
      )}
    </motion.div>
  );
}
