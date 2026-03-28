import { motion } from 'framer-motion';

export default function ProgressBar({ value, label, color = 'var(--bswi-lightblue)' }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-track">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(value * 100, 100)}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ background: color }}
        />
      </div>
      {label && <span className="progress-bar-label">{label}</span>}
    </div>
  );
}
