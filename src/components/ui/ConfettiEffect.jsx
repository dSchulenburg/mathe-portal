import { useEffect } from 'react';
import { fireConfetti, fireStarConfetti } from '../../utils/confetti';

export default function ConfettiEffect({ type = 'standard', trigger }) {
  useEffect(() => {
    if (trigger) {
      if (type === 'star') fireStarConfetti();
      else fireConfetti();
    }
  }, [trigger, type]);

  return null; // confetti renders on canvas overlay
}
