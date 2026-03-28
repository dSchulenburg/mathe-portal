import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { calculateXP } from '../utils/xp';
import { fireConfetti, fireStarConfetti } from '../utils/confetti';
import Badge from './ui/Badge';

export default function LevelComplete({ exerciseId, stars, levelId, onNextExercise, onBackToMap, newBadges = [] }) {
  const { state } = useGame();
  const [showXP, setShowXP] = useState(false);
  const [displayedXP, setDisplayedXP] = useState(0);
  const xpEarned = calculateXP(levelId, stars);

  useEffect(() => {
    // Fire confetti on mount
    if (stars === 3) {
      fireStarConfetti();
    } else {
      fireConfetti();
    }

    // Animate XP counter
    const timer = setTimeout(() => {
      setShowXP(true);
      // Count up animation
      let current = 0;
      const increment = Math.ceil(xpEarned / 20);
      const interval = setInterval(() => {
        current += increment;
        if (current >= xpEarned) {
          current = xpEarned;
          clearInterval(interval);
        }
        setDisplayedXP(current);
      }, 50);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [stars, xpEarned]);

  return (
    <motion.div
      className="level-complete"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Geschafft! {'\u{1F389}'}</h2>

      {/* Stars */}
      <div className="stars-display">
        {[1, 2, 3].map((n) => (
          <motion.span
            key={n}
            className={`star ${n <= stars ? 'earned' : 'empty'}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + n * 0.2, type: 'spring', stiffness: 200 }}
          >
            {n <= stars ? '\u2B50' : '\u2606'}
          </motion.span>
        ))}
      </div>

      {/* Stars message */}
      <p className="stars-message">
        {stars === 3 ? 'Perfekt beim ersten Versuch!' :
         stars === 2 ? 'Gut gemacht!' : 'Weiter üben lohnt sich!'}
      </p>

      {/* XP */}
      <motion.div
        className="xp-earned"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="xp-number">+{displayedXP}</span>
        <span className="xp-label">XP</span>
      </motion.div>

      {/* New badges */}
      {newBadges.length > 0 && (
        <motion.div
          className="badge-unlock"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          <h3>{'\u{1F3C5}'} Neues Badge freigeschaltet!</h3>
          {newBadges.map(badge => (
            <Badge key={badge.id} badge={badge} earned={true} size="large" />
          ))}
        </motion.div>
      )}

      {/* Actions */}
      <div className="complete-actions">
        <motion.button
          className="btn btn-secondary"
          onClick={onBackToMap}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Zur Übersicht
        </motion.button>
        {onNextExercise && (
          <motion.button
            className="btn btn-primary btn-large"
            onClick={onNextExercise}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Weiter \u2192
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
