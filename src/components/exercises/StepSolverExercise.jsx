import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import FormulaDisplay from '../math/FormulaDisplay';
import { useMathStore } from '../../store/mathStore';

function parseInlineFormulas(text) {
  if (!text || !text.includes('$')) return [{ type: 'text', content: text }];
  const parts = [];
  const regex = /\$([^$]+)\$/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'formula', content: match[1] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) });
  }
  return parts;
}

function InlineContent({ text }) {
  const parts = parseInlineFormulas(text);
  if (!parts.some(p => p.type === 'formula')) return <span>{text}</span>;
  return (
    <>
      {parts.map((part, i) =>
        part.type === 'formula'
          ? <FormulaDisplay key={i} formula={part.content} displayMode={false} />
          : <span key={i}>{part.content}</span>
      )}
    </>
  );
}

function StepInput({ step, value, onChange, disabled }) {
  if (step.type === 'numeric-input') {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Antwort"
        style={{
          width: '140px',
          minHeight: '44px',
          fontSize: '1.1rem',
          textAlign: 'center',
          borderRadius: '8px',
          border: '2px solid var(--mp-border)',
          background: 'var(--mp-surface)',
          color: 'var(--mp-text)',
          padding: '0.3rem 0.5rem',
          outline: 'none',
        }}
      />
    );
  }

  if (step.type === 'expression-input') {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="z.B. x^5"
        style={{
          width: '200px',
          minHeight: '44px',
          fontSize: '1.1rem',
          fontFamily: "'Courier New', monospace",
          textAlign: 'center',
          borderRadius: '8px',
          border: '2px solid var(--mp-border)',
          background: 'var(--mp-surface)',
          color: 'var(--mp-text)',
          padding: '0.3rem 0.5rem',
          outline: 'none',
        }}
      />
    );
  }

  if (step.type === 'multiple-choice') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {step.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => !disabled && onChange(opt.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: `2px solid ${value === opt.id ? 'var(--mp-primary)' : 'var(--mp-border)'}`,
              background: value === opt.id ? 'rgba(167,139,250,0.1)' : 'var(--mp-surface)',
              color: 'var(--mp-text)',
              cursor: disabled ? 'default' : 'pointer',
              textAlign: 'left',
              fontSize: '0.95rem',
              width: '100%',
            }}
          >
            <span style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: `2px solid ${value === opt.id ? 'var(--mp-primary)' : 'var(--mp-border)'}`,
              background: value === opt.id ? 'var(--mp-primary)' : 'transparent',
              flexShrink: 0,
            }} />
            <InlineContent text={opt.text} />
          </button>
        ))}
      </div>
    );
  }

  return null;
}

function validateStepAnswer(step, value) {
  if (value === '' || value === null || value === undefined) return null;

  if (step.type === 'numeric-input') {
    const num = parseFloat(value);
    if (isNaN(num)) return false;
    const tolerance = step.tolerance ?? 0.01;
    return Math.abs(num - step.expected) <= tolerance;
  }

  if (step.type === 'expression-input') {
    const normalized = (v) => v.replace(/\s+/g, '').toLowerCase();
    const acceptedAnswers = Array.isArray(step.expected) ? step.expected : [step.expected];
    return acceptedAnswers.some(a => normalized(value) === normalized(a));
  }

  if (step.type === 'multiple-choice') {
    return value === step.correctId;
  }

  return null;
}

export default function StepSolverExercise({ exercise, onComplete }) {
  const { data, hintKeys = [], solutionKey, id, topicId, diffLevel, points = 10 } = exercise;
  const { questionText, steps, contextKey } = data;

  const submitAnswer = useMathStore((s) => s.submitAnswer);
  const confettiFired = useRef(false);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(() => steps.map(() => ''));
  const [stepResults, setStepResults] = useState(() => steps.map(() => null));
  const [hintsUsed, setHintsUsed] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleAnswerChange = useCallback((value) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentStep] = value;
      return next;
    });
  }, [currentStep]);

  const handleCheckStep = useCallback(() => {
    const step = steps[currentStep];
    const answer = answers[currentStep];
    const result = validateStepAnswer(step, answer);

    if (result === null) return;

    setTotalAttempts((a) => a + 1);

    if (result) {
      const newResults = [...stepResults];
      newResults[currentStep] = true;
      setStepResults(newResults);

      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep((s) => s + 1), 600);
      } else {
        setIsComplete(true);
        const earnedPoints = Math.max(1, points - (hintsUsed * 2) - (totalAttempts) * 1);
        submitAnswer(id, {
          correct: true,
          attempts: totalAttempts + 1,
          hintsUsed,
          points: earnedPoints,
          topicId,
          diffLevel,
        });
        if (!confettiFired.current) {
          confettiFired.current = true;
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.65 } });
        }
        onComplete?.(id);
      }
    } else {
      const newResults = [...stepResults];
      newResults[currentStep] = false;
      setStepResults(newResults);
      setTimeout(() => {
        const resetResults = [...newResults];
        resetResults[currentStep] = null;
        setStepResults(resetResults);
      }, 800);
    }
  }, [currentStep, answers, steps, stepResults, totalAttempts, hintsUsed, points, id, topicId, diffLevel, submitAnswer, onComplete]);

  const handleShowHint = useCallback(() => {
    if (hintsUsed < hintKeys.length) {
      setHintsUsed((h) => h + 1);
    }
  }, [hintsUsed, hintKeys.length]);

  const completedSteps = stepResults.filter(Boolean).length;
  const progressPercent = Math.round((completedSteps / steps.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {contextKey && (
        <p style={{ color: 'var(--mp-muted)', fontStyle: 'italic', margin: 0, fontSize: '0.9rem' }}>
          {contextKey}
        </p>
      )}

      <h3 style={{ color: 'var(--mp-text)', margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
        <InlineContent text={questionText} />
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          flex: 1,
          height: '6px',
          background: 'var(--mp-surface-hover)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: isComplete ? 'var(--mp-success)' : 'var(--mp-primary)',
            borderRadius: '999px',
            transition: 'width 0.4s ease',
          }} />
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--mp-muted)', whiteSpace: 'nowrap' }}>
          Schritt {Math.min(currentStep + 1, steps.length)}/{steps.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {steps.map((step, idx) => {
          const isActive = idx === currentStep && !isComplete;
          const isDone = stepResults[idx] === true;
          const isFuture = idx > currentStep && !isDone;
          const isWrong = stepResults[idx] === false;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isFuture ? 0.4 : 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: `2px solid ${
                  isDone ? 'var(--mp-success)' :
                  isWrong ? 'var(--mp-error)' :
                  isActive ? 'var(--mp-primary)' :
                  'var(--mp-border)'
                }`,
                background: isDone ? 'rgba(52,211,153,0.06)' :
                  isWrong ? 'rgba(251,113,133,0.06)' :
                  isActive ? 'rgba(167,139,250,0.06)' :
                  'var(--mp-surface)',
                transition: 'border-color 0.2s, background 0.2s',
                animation: isWrong ? 'mp-shake 0.55s ease' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: isActive ? '0.75rem' : 0 }}>
                <span style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isDone ? 'var(--mp-success)' : isActive ? 'var(--mp-primary)' : 'var(--mp-border)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {isDone ? '✓' : idx + 1}
                </span>
                <span style={{
                  fontSize: '0.95rem',
                  color: isFuture ? 'var(--mp-muted)' : 'var(--mp-text)',
                  fontWeight: isActive ? 600 : 400,
                }}>
                  <InlineContent text={step.instruction} />
                </span>
              </div>

              {isActive && (
                <div style={{ marginLeft: '2rem' }}>
                  <StepInput
                    step={step}
                    value={answers[idx]}
                    onChange={handleAnswerChange}
                    disabled={isDone}
                  />
                </div>
              )}

              {isDone && step.showAnswer && (
                <p style={{
                  marginLeft: '2rem',
                  marginTop: '0.25rem',
                  fontSize: '0.85rem',
                  color: 'var(--mp-success)',
                }}>
                  <InlineContent text={step.showAnswer} />
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {hintsUsed > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
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

      {showSolution && solutionKey && (
        <div style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          background: 'rgba(52,211,153,0.08)',
          border: '1px solid var(--mp-success)',
          fontSize: '0.9rem',
          color: 'var(--mp-text)',
        }}>
          <strong style={{ color: 'var(--mp-success)' }}>Lösung:</strong>{' '}
          <InlineContent text={solutionKey} />
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {!isComplete && (
          <>
            <button
              onClick={handleCheckStep}
              disabled={answers[currentStep] === '' || answers[currentStep] === null}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                background: answers[currentStep] ? 'var(--mp-primary)' : 'var(--mp-border)',
                color: answers[currentStep] ? '#fff' : 'var(--mp-muted)',
                border: 'none',
                cursor: answers[currentStep] ? 'pointer' : 'not-allowed',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              Schritt prüfen
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

            {totalAttempts >= 5 && !showSolution && solutionKey && (
              <button
                onClick={() => setShowSolution(true)}
                style={{
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: 'var(--mp-muted)',
                  border: '1px solid var(--mp-border)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >
                Lösung anzeigen
              </button>
            )}
          </>
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
            Alle Schritte gelöst! 🎉
          </motion.div>
        )}
      </div>
    </div>
  );
}
