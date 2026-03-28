import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useMathStore } from '../../store/mathStore';

export default function MultipleChoiceExercise({ exercise, onComplete }) {
  const { data, hintKeys = [], solutionKey, contextKey, id, topicId, points = 10, diffLevel } = exercise;
  const { questionText, options = [] } = data || {};

  const isMultiSelect = options.filter(o => o.correct).length > 1;

  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const submitAnswer = useMathStore(state => state.submitAnswer);
  const confettiFired = useRef(false);

  const toggleOption = useCallback((optId) => {
    if (checked || isComplete) return;
    setSelected(prev => {
      if (isMultiSelect) {
        return prev.includes(optId) ? prev.filter(s => s !== optId) : [...prev, optId];
      }
      return prev.includes(optId) ? [] : [optId];
    });
  }, [checked, isComplete, isMultiSelect]);

  const handleCheck = useCallback(() => {
    if (selected.length === 0) return;
    setChecked(true);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const correctIds = options.filter(o => o.correct).map(o => o.id);
    const allCorrect =
      correctIds.length === selected.length &&
      correctIds.every(id => selected.includes(id));

    if (allCorrect) {
      const earnedPoints = Math.max(1, points - (hintsUsed * 2) - (newAttempts - 1) * 2);
      submitAnswer(id, {
        correct: true,
        attempts: newAttempts,
        hintsUsed,
        points: earnedPoints,
        topicId,
        diffLevel,
      });
      setIsComplete(true);
      if (!confettiFired.current) {
        confettiFired.current = true;
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
      }
      onComplete?.();
    } else {
      if (newAttempts >= 3) {
        setShowSolution(true);
        submitAnswer(id, {
          correct: false,
          attempts: newAttempts,
          hintsUsed,
          points: 0,
          topicId,
          diffLevel,
        });
      }
    }
  }, [selected, attempts, hintsUsed, options, id, points, topicId, diffLevel, submitAnswer, onComplete]);

  const handleTryAgain = useCallback(() => {
    setChecked(false);
    setSelected([]);
  }, []);

  const handleShowHint = useCallback(() => {
    if (hintsUsed < hintKeys.length) {
      setHintsUsed(prev => prev + 1);
    }
  }, [hintsUsed, hintKeys.length]);

  const correctIds = options.filter(o => o.correct).map(o => o.id);
  const allCorrect = checked &&
    correctIds.length === selected.length &&
    correctIds.every(id => selected.includes(id));

  const getOptionState = (option) => {
    if (!checked) {
      return selected.includes(option.id) ? 'selected' : 'idle';
    }
    const isSelected = selected.includes(option.id);
    if (isSelected && option.correct) return 'correct';
    if (isSelected && !option.correct) return 'wrong';
    if (!isSelected && option.correct) return 'missed';
    return 'idle';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Context */}
      {contextKey && (
        <p style={{ color: 'var(--mp-muted)', fontStyle: 'italic', margin: 0 }}>
          {contextKey}
        </p>
      )}

      {/* Question */}
      <h3 style={{ color: 'var(--mp-text)', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
        {questionText}
      </h3>

      {/* Multi-select hint */}
      {isMultiSelect && (
        <p style={{ color: 'var(--mp-muted)', fontSize: '0.85rem', margin: 0 }}>
          (Mehrere Antworten möglich)
        </p>
      )}

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {options.map((option, i) => {
          const state = getOptionState(option);
          const borderColor =
            state === 'selected' ? 'var(--mp-primary)' :
            state === 'correct' ? 'var(--mp-success)' :
            state === 'wrong' ? 'var(--mp-error)' :
            state === 'missed' ? 'var(--mp-success)' :
            'var(--mp-border)';
          const bgColor =
            state === 'correct' ? 'rgba(52,211,153,0.12)' :
            state === 'wrong' ? 'rgba(251,113,133,0.12)' :
            state === 'missed' ? 'rgba(52,211,153,0.06)' :
            state === 'selected' ? 'rgba(167,139,250,0.1)' :
            'var(--mp-surface)';

          return (
            <motion.button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={!checked && !isComplete ? { scale: 1.01 } : {}}
              whileTap={!checked && !isComplete ? { scale: 0.99 } : {}}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                minHeight: '48px',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: `2px solid ${borderColor}`,
                background: bgColor,
                cursor: checked || isComplete ? 'default' : 'pointer',
                textAlign: 'left',
                color: 'var(--mp-text)',
                fontSize: '1rem',
                transition: 'border-color 0.2s, background 0.2s',
                width: '100%',
                outline: 'none',
              }}
            >
              {/* Indicator */}
              <span style={{
                flexShrink: 0,
                width: '20px',
                height: '20px',
                borderRadius: isMultiSelect ? '4px' : '50%',
                border: `2px solid ${borderColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                background: state === 'selected' || state === 'correct' || state === 'wrong'
                  ? borderColor : 'transparent',
                color: '#fff',
              }}>
                {state === 'correct' && '✓'}
                {state === 'wrong' && '✕'}
                {state === 'selected' && !checked && '·'}
                {state === 'missed' && ''}
              </span>

              <span style={{ flex: 1 }}>{option.text}</span>

              {/* Status icons */}
              {state === 'correct' && <span style={{ color: 'var(--mp-success)' }}>✓</span>}
              {state === 'wrong' && <span style={{ color: 'var(--mp-error)' }}>✕</span>}
              {state === 'missed' && (
                <span style={{ color: 'var(--mp-success)', fontSize: '0.8rem', opacity: 0.7 }}>
                  (richtig)
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Hints */}
      <AnimatePresence>
        {hintsUsed > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              background: 'rgba(167,139,250,0.08)',
              border: '1px solid var(--mp-primary)',
              color: 'var(--mp-muted)',
              fontSize: '0.9rem',
            }}
          >
            <strong style={{ color: 'var(--mp-primary)' }}>Hinweis {hintsUsed}/{hintKeys.length}:</strong>{' '}
            {hintKeys[hintsUsed - 1]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution */}
      <AnimatePresence>
        {showSolution && solutionKey && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              background: 'rgba(52,211,153,0.08)',
              border: '1px solid var(--mp-success)',
              color: 'var(--mp-text)',
              fontSize: '0.9rem',
            }}
          >
            <strong style={{ color: 'var(--mp-success)' }}>Lösung:</strong>{' '}
            {solutionKey}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {!checked && !isComplete && (
          <>
            <button
              onClick={handleCheck}
              disabled={selected.length === 0}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                background: selected.length > 0 ? 'var(--mp-primary)' : 'var(--mp-border)',
                color: selected.length > 0 ? '#fff' : 'var(--mp-muted)',
                border: 'none',
                cursor: selected.length > 0 ? 'pointer' : 'not-allowed',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'background 0.2s',
              }}
            >
              Prüfen
            </button>

            {hintKeys.length > 0 && hintsUsed < hintKeys.length && (
              <button
                onClick={handleShowHint}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: 'var(--mp-primary)',
                  border: '1px solid var(--mp-primary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Hinweis ({hintKeys.length - hintsUsed} übrig)
              </button>
            )}
          </>
        )}

        {checked && !allCorrect && !showSolution && (
          <button
            onClick={handleTryAgain}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              background: 'var(--mp-surface)',
              color: 'var(--mp-text)',
              border: '1px solid var(--mp-border)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Nochmal versuchen ({3 - attempts} Versuche übrig)
          </button>
        )}

        {isComplete && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              background: 'rgba(52,211,153,0.15)',
              color: 'var(--mp-success)',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Richtig! 🎉
          </motion.div>
        )}
      </div>
    </div>
  );
}
