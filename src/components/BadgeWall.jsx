import { motion } from 'framer-motion';
import { useGame, BADGE_DEFS } from '../context/GameContext';
import Badge from './ui/Badge';

// Extend BADGE_DEFS with descriptions for display purposes
const BADGE_DISPLAY = BADGE_DEFS.map(def => ({
  ...def,
  description: {
    'first-solve': 'Erste Aufgabe gel\u00f6st',
    'parabel-pro': 'Level 1 abgeschlossen',
    'pq-meister': 'Level 3 abgeschlossen',
    'faktor-fuchs': 'Level 4 abgeschlossen',
    'textaufgaben-koenig': 'Level 6 abgeschlossen',
    'perfect-score': '3 Sterne bei einer Aufgabe',
    'streak-3': '3 Tage in Folge ge\u00fcbt',
    'vollstaendig': 'Alle 24 Aufgaben gel\u00f6st',
  }[def.id] || '',
}));

export default function BadgeWall({ onBack }) {
  const { state } = useGame();

  return (
    <div className="badge-wall">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'white', margin: 0 }}>{'\u{1F3C5}'} Badges ({state.badges.length}/{BADGE_DEFS.length})</h2>
        <button className="btn btn-secondary" onClick={onBack}>{'\u2190'} Zur\u00fcck</button>
      </div>
      <div className="badge-grid">
        {BADGE_DISPLAY.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <Badge
              badge={badge}
              earned={state.badges.includes(badge.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
