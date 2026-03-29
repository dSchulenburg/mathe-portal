import React, { useState, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useMathStore } from '../../store/mathStore';
import FormulaDisplay from '../math/FormulaDisplay';

// Render text that may contain $...$ inline formulas
function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/(\$[^$]+\$)/g);
  if (parts.length === 1) return <span>{text}</span>;
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return (
            <FormulaDisplay
              key={i}
              formula={part.slice(1, -1)}
              displayMode={false}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function DragMatchExercise({ exercise, onComplete }) {
  const { data, hintKeys = [], solutionKey, id, topicId, points = 10, diffLevel } = exercise;
  const { questionText, pairs = [] } = data || {};

  // Shuffled right-side items
  const [rightItems] = useState(() => shuffle(pairs));
  // Map: leftId → rightId (user's current matches)
  const [matches, setMatches] = useState({});
  // Drag state
  const [draggingId, setDraggingId] = useState(null);
  // Click-mode: selected left item id
  const [selectedLeft, setSelectedLeft] = useState(null);

  const [checked, setChecked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const submitAnswer = useMathStore(state => state.submitAnswer);
  const confettiFired = useRef(false);

  const allPaired = pairs.length > 0 && Object.keys(matches).length === pairs.length;

  // ── Drag handlers ──────────────────────────────────────────────────────────
  const handleDragStart = useCallback((e, rightId) => {
    if (checked || isComplete) return;
    setDraggingId(rightId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', rightId);
  }, [checked, isComplete]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, leftId) => {
    e.preventDefault();
    const rightId = e.dataTransfer.getData('text/plain');
    if (!rightId) return;
    setMatches(prev => {
      const next = { ...prev };
      // Remove rightId from any existing binding
      for (const k of Object.keys(next)) {
        if (next[k] === rightId) delete next[k];
      }
      next[leftId] = rightId;
      return next;
    });
    setDraggingId(null);
    setSelectedLeft(null);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingId(null);
  }, []);

  // ── Click-mode handlers ────────────────────────────────────────────────────
  const handleLeftClick = useCallback((leftId) => {
    if (checked || isComplete) return;
    setSelectedLeft(prev => prev === leftId ? null : leftId);
  }, [checked, isComplete]);

  const handleRightClick = useCallback((rightId) => {
    if (checked || isComplete) return;
    if (selectedLeft) {
      setMatches(prev => {
        const next = { ...prev };
        for (const k of Object.keys(next)) {
          if (next[k] === rightId) delete next[k];
        }
        next[selectedLeft] = rightId;
        return next;
      });
      setSelectedLeft(null);
    }
  }, [checked, isComplete, selectedLeft]);

  // ── Check ──────────────────────────────────────────────────────────────────
  const handleCheck = useCallback(() => {
    if (!allPaired) return;
    setChecked(true);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const allCorrect = pairs.every(p => matches[p.id] === p.id);

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
  }, [allPaired, attempts, hintsUsed, pairs, matches, id, points, topicId, diffLevel, submitAnswer, onComplete]);

  const handleTryAgain = useCallback(() => {
    setChecked(false);
    setMatches({});
    setSelectedLeft(null);
  }, []);

  const handleShowHint = useCallback(() => {
    if (hintsUsed < hintKeys.length) {
      setHintsUsed(prev => prev + 1);
    }
  }, [hintsUsed, hintKeys.length]);

  // ── Derived ────────────────────────────────────────────────────────────────
  const allCorrect = checked && pairs.every(p => matches[p.id] === p.id);
  const assignedRight = useMemo(() => new Set(Object.values(matches)), [matches]);

  const getMatchState = useCallback((pairId) => {
    if (!checked) return matches[pairId] ? 'matched' : 'empty';
    return matches[pairId] === pairId ? 'correct' : 'wrong';
  }, [checked, matches]);

  const getRightText = useCallback((rightId) => {
    const found = pairs.find(p => p.id === rightId);
    return found?.right ?? '';
  }, [pairs]);

  // ── Style helpers ──────────────────────────────────────────────────────────
  const itemBase = {
    minHeight: '44px',
    padding: '0.6rem 0.9rem',
    borderRadius: '8px',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'border-color 0.2s, background 0.2s',
    userSelect: 'none',
    lineHeight: 1.3,
  };

  function leftStyle(pair) {
    const isSelected = selectedLeft === pair.id;
    const state = getMatchState(pair.id);
    if (state === 'correct' || isComplete) {
      return { ...itemBase, border: '2px solid var(--mp-success)', background: 'rgba(52,211,153,0.12)', cursor: 'default', color: 'var(--mp-text)' };
    }
    if (state === 'wrong') {
      return { ...itemBase, border: '2px solid var(--mp-error)', background: 'rgba(251,113,133,0.12)', cursor: 'default', color: 'var(--mp-text)' };
    }
    if (isSelected) {
      return { ...itemBase, border: '2px solid var(--mp-primary)', background: 'rgba(167,139,250,0.18)', cursor: 'pointer', color: 'var(--mp-text)', boxShadow: '0 0 0 3px rgba(167,139,250,0.2)' };
    }
    if (state === 'matched') {
      return { ...itemBase, border: '2px solid var(--mp-primary)', background: 'rgba(167,139,250,0.1)', cursor: 'pointer', color: 'var(--mp-text)' };
    }
    return { ...itemBase, border: '2px dashed var(--mp-border)', background: 'var(--mp-surface)', cursor: 'pointer', color: 'var(--mp-text)' };
  }

  function rightChipStyle(item) {
    const isDragging = draggingId === item.id;
    const isUsed = assignedRight.has(item.id);
    if (isDragging) {
      return { ...itemBase, border: '2px solid var(--mp-primary)', background: 'rgba(167,139,250,0.2)', cursor: 'grabbing', opacity: 0.6, color: 'var(--mp-text)' };
    }
    if (checked || isComplete) {
      return { ...itemBase, border: '1px solid var(--mp-border)', background: 'var(--mp-surface)', cursor: 'default', opacity: 0.4, color: 'var(--mp-muted)' };
    }
    if (isUsed) {
      return { ...itemBase, border: '2px solid var(--mp-primary)', background: 'rgba(167,139,250,0.06)', cursor: selectedLeft ? 'pointer' : 'grab', opacity: 0.5, color: 'var(--mp-muted)' };
    }
    return { ...itemBase, border: '2px solid var(--mp-border)', background: 'var(--mp-surface)', cursor: selectedLeft ? 'pointer' : 'grab', color: 'var(--mp-text)' };
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Question */}
      <h3 style={{ color: 'var(--mp-text)', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
        {questionText}
      </h3>

      {/* Instruction */}
      {!isComplete && !checked && (
        <p style={{ color: 'var(--mp-muted)', fontSize: '0.82rem', margin: 0 }}>
          Ziehe die Begriffe auf die passenden Felder — oder klicke erst links, dann rechts.
        </p>
      )}

      {/* Matching grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.5rem', alignItems: 'center' }}>
        {/* Column headers */}
        <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--mp-muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', paddingBottom: '0.25rem' }}>
          Term
        </div>
        <div />
        <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--mp-muted)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', paddingBottom: '0.25rem' }}>
          Vereinfacht
        </div>

        {/* Rows */}
        {pairs.map((pair, i) => {
          const matchedRightId = matches[pair.id];
          const state = getMatchState(pair.id);

          return (
            <React.Fragment key={pair.id}>
              {/* Left: fixed term, click to select, drop target */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleLeftClick(pair.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, pair.id)}
                style={leftStyle(pair)}
              >
                <RichText text={pair.left} />
              </motion.div>

              {/* Arrow + state icon */}
              <div style={{
                textAlign: 'center',
                fontSize: '1rem',
                lineHeight: 1,
                color: state === 'correct' ? 'var(--mp-success)'
                  : state === 'wrong' ? 'var(--mp-error)'
                  : state === 'matched' ? 'var(--mp-primary)'
                  : 'var(--mp-border)',
              }}>
                {state === 'correct' ? '✓' : state === 'wrong' ? '✕' : '→'}
              </div>

              {/* Right: shows matched item or placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  ...itemBase,
                  border: state === 'correct' ? '2px solid var(--mp-success)'
                    : state === 'wrong' ? '2px solid var(--mp-error)'
                    : matchedRightId ? '2px solid var(--mp-primary)'
                    : '2px dashed var(--mp-border)',
                  background: state === 'correct' ? 'rgba(52,211,153,0.12)'
                    : state === 'wrong' ? 'rgba(251,113,133,0.12)'
                    : matchedRightId ? 'rgba(167,139,250,0.1)'
                    : 'var(--mp-surface)',
                  color: matchedRightId ? 'var(--mp-text)' : 'var(--mp-muted)',
                  cursor: 'default',
                  fontSize: '0.9rem',
                }}
              >
                {matchedRightId
                  ? <RichText text={getRightText(matchedRightId)} />
                  : <span style={{ fontSize: '0.78rem', opacity: 0.6 }}>— zuordnen →</span>
                }
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Right-side item pool */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        padding: '0.75rem',
        borderRadius: '8px',
        background: 'rgba(0,0,0,0.03)',
        border: '1px solid var(--mp-border)',
        minHeight: '60px',
      }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--mp-muted)', width: '100%', marginBottom: '0.2rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Auswahl
        </div>
        {rightItems.map((item) => (
          <motion.div
            key={item.id}
            draggable={!checked && !isComplete}
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragEnd={handleDragEnd}
            onClick={() => handleRightClick(item.id)}
            whileHover={!checked && !isComplete ? { scale: 1.04 } : {}}
            whileTap={!checked && !isComplete ? { scale: 0.97 } : {}}
            style={rightChipStyle(item)}
          >
            <RichText text={item.right} />
          </motion.div>
        ))}
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
              disabled={!allPaired}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                background: allPaired ? 'var(--mp-primary)' : 'var(--mp-border)',
                color: allPaired ? '#fff' : 'var(--mp-muted)',
                border: 'none',
                cursor: allPaired ? 'pointer' : 'not-allowed',
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
            Richtig! Alle Paare korrekt zugeordnet!
          </motion.div>
        )}
      </div>
    </div>
  );
}
