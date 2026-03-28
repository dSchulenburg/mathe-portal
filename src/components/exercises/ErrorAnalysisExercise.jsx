import { useState, useEffect } from 'react';
import { useMathStore } from '../../store/mathStore';

function ConfettiPiece({ style }) {
  return (
    <div
      style={{
        position: 'fixed',
        width: 8,
        height: 8,
        borderRadius: 2,
        animation: 'confetti-fall 1.2s ease-out forwards',
        ...style,
      }}
    />
  );
}

const CONFETTI_COLORS = ['#a78bfa', '#34d399', '#fb7185', '#fbbf24', '#60a5fa'];

export default function ErrorAnalysisExercise({ exercise, onComplete }) {
  const submitAnswer = useMathStore((s) => s.submitAnswer);

  const [selectedStep, setSelectedStep] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const { questionText, steps } = exercise.data;

  useEffect(() => {
    if (!showConfetti) return;
    const t = setTimeout(() => setShowConfetti(false), 1400);
    return () => clearTimeout(t);
  }, [showConfetti]);

  function handleStepClick(idx) {
    if (checked && isCorrect) return;
    setSelectedStep(idx);
    // reset wrong flash when user picks a new step after a wrong attempt
    if (checked && !isCorrect) {
      setChecked(false);
    }
  }

  function handleCheck() {
    if (selectedStep === null) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (steps[selectedStep].hasError) {
      setIsCorrect(true);
      setChecked(true);
      setShowConfetti(true);

      submitAnswer(exercise.id, {
        correct: true,
        attempts: newAttempts,
        hintsUsed: 0,
        points: exercise.points,
        topicId: exercise.topicId,
        diffLevel: exercise.diffLevel,
      });

      if (onComplete) onComplete({ correct: true, attempts: newAttempts });
    } else {
      setIsCorrect(false);
      setChecked(true);
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 600);
    }
  }

  const confettiPieces = showConfetti
    ? Array.from({ length: 22 }, (_, i) => ({
        id: i,
        style: {
          left: `${10 + Math.random() * 80}%`,
          top: `${10 + Math.random() * 40}%`,
          background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
          animationDelay: `${Math.random() * 0.3}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
        },
      }))
    : [];

  return (
    <>
      <style>{`
        @keyframes confetti-fall {
          0%   { opacity: 1; transform: translateY(0) rotate(0deg); }
          100% { opacity: 0; transform: translateY(80px) rotate(360deg); }
        }
        @keyframes wrong-flash {
          0%, 100% { background: var(--mp-surface); }
          50%       { background: rgba(251,113,133,0.18); }
        }
        .eae-step--wrong-flash {
          animation: wrong-flash 0.6s ease;
        }
      `}</style>

      {confettiPieces.map((p) => (
        <ConfettiPiece key={p.id} style={p.style} />
      ))}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Question */}
        <p style={{ margin: 0, color: 'var(--mp-text)', fontWeight: 600, fontSize: 15 }}>
          {questionText}
        </p>

        {/* Context */}
        {exercise.contextKey && (
          <p style={{
            margin: 0,
            padding: '8px 12px',
            borderRadius: 6,
            background: 'var(--mp-surface-hover)',
            color: 'var(--mp-muted)',
            fontSize: 13,
            fontStyle: 'italic',
          }}>
            {exercise.contextKey}
          </p>
        )}

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {steps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            const showResult = checked && isCorrect;

            let borderColor = 'var(--mp-border)';
            let bgColor = 'var(--mp-surface)';
            let extraClass = '';

            if (showResult) {
              if (step.hasError) {
                borderColor = 'var(--mp-error)';
                bgColor = 'rgba(251,113,133,0.08)';
              } else {
                borderColor = 'var(--mp-success)';
                bgColor = 'rgba(52,211,153,0.06)';
              }
            } else if (isSelected) {
              if (checked && !isCorrect && wrongFlash) {
                extraClass = 'eae-step--wrong-flash';
                borderColor = 'var(--mp-error)';
              } else {
                borderColor = 'var(--mp-primary)';
                bgColor = 'rgba(167,139,250,0.08)';
              }
            }

            return (
              <div
                key={idx}
                className={extraClass}
                onClick={() => handleStepClick(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  minHeight: 48,
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: `2px solid ${borderColor}`,
                  background: bgColor,
                  cursor: showResult ? 'default' : 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                  userSelect: 'none',
                }}
              >
                {/* Step number */}
                <span style={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: showResult
                    ? (step.hasError ? 'var(--mp-error)' : 'var(--mp-success)')
                    : (isSelected ? 'var(--mp-primary)' : 'var(--mp-border)'),
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                  transition: 'background 0.15s',
                }}>
                  {showResult
                    ? (step.hasError ? '✗' : '✓')
                    : idx + 1}
                </span>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <code style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 14,
                    color: 'var(--mp-text)',
                    whiteSpace: 'pre-wrap',
                    display: 'block',
                    paddingLeft: 4,
                  }}>
                    {step.content}
                  </code>

                  {/* Error explanation */}
                  {showResult && step.hasError && step.errorExplanation && (
                    <p style={{
                      margin: '6px 0 0',
                      paddingLeft: 4,
                      fontSize: 13,
                      color: 'var(--mp-error)',
                      fontStyle: 'italic',
                    }}>
                      {step.errorExplanation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Wrong hint */}
        {checked && !isCorrect && (
          <p style={{
            margin: 0,
            fontSize: 13,
            color: 'var(--mp-error)',
            textAlign: 'center',
          }}>
            Nicht dieser Schritt — schau nochmal genau hin.
          </p>
        )}

        {/* Prüfen button */}
        {!isCorrect && (
          <button
            onClick={handleCheck}
            disabled={selectedStep === null}
            style={{
              alignSelf: 'flex-start',
              padding: '10px 24px',
              borderRadius: 8,
              border: 'none',
              background: selectedStep !== null ? 'var(--mp-primary)' : 'var(--mp-border)',
              color: selectedStep !== null ? '#fff' : 'var(--mp-muted)',
              fontWeight: 600,
              fontSize: 14,
              cursor: selectedStep !== null ? 'pointer' : 'not-allowed',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            Prüfen
          </button>
        )}

        {/* Success message */}
        {isCorrect && (
          <p style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--mp-success)',
            textAlign: 'center',
          }}>
            Richtig! Du hast den Fehler gefunden.
          </p>
        )}
      </div>
    </>
  );
}
