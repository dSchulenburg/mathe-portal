import { useState, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import FormulaDisplay from '../math/FormulaDisplay';
import ExerciseCard from './ExerciseCard';
import { validateNumber } from '../../utils/mathValidation';
import { useMathStore } from '../../store/mathStore';

/**
 * Splits a string with $...$ inline LaTeX into segments of text + formulas.
 * Returns an array of { type: 'text'|'formula', content: string }.
 */
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

function InlineQuestion({ text }) {
  const parts = parseInlineFormulas(text);
  const hasFormula = parts.some(p => p.type === 'formula');
  if (!hasFormula) return <span>{text}</span>;
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

const shakeKeyframes = `
@keyframes mp-shake {
  0%, 100% { transform: translateX(0); }
  15%       { transform: translateX(-6px); }
  30%       { transform: translateX(6px); }
  45%       { transform: translateX(-5px); }
  60%       { transform: translateX(5px); }
  75%       { transform: translateX(-3px); }
  90%       { transform: translateX(3px); }
}
`;

// Inject shake animation once
if (typeof document !== 'undefined' && !document.getElementById('mp-shake-style')) {
  const style = document.createElement('style');
  style.id = 'mp-shake-style';
  style.textContent = shakeKeyframes;
  document.head.appendChild(style);
}

export default function NumericInputExercise({ exercise, onComplete, index = 0, total = 1 }) {
  const { data, hintKeys = [], solutionKey, contextKey, id, topicId, diffLevel, points = 5 } = exercise;
  const { questionText, correctValue, tolerance = 0.01, unit } = data;

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle'); // idle | correct | wrong
  const [attempts, setAttempts] = useState(0);
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionVisible, setSolutionVisible] = useState(false);
  const [shaking, setShaking] = useState(false);

  const inputRef = useRef(null);
  const submitAnswer = useMathStore(s => s.submitAnswer);

  const triggerShake = useCallback(() => {
    setShaking(true);
    setTimeout(() => setShaking(false), 600);
  }, []);

  const handleCheck = useCallback(() => {
    if (status === 'correct') return;

    const isCorrect = validateNumber(inputValue, correctValue, tolerance);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (isCorrect) {
      setStatus('correct');
      // Fire confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#34d399', '#6ee7b7', '#a7f3d0', '#fff'],
      });
      // Submit to store
      submitAnswer(id, {
        correct: true,
        attempts: newAttempts,
        hintsUsed: hintsShown,
        points: Math.max(1, points - hintsShown),
        topicId,
        diffLevel,
      });
      if (onComplete) {
        setTimeout(() => onComplete(id, null), 1200);
      }
    } else {
      setStatus('wrong');
      triggerShake();
      setTimeout(() => setStatus('idle'), 800);
    }
  }, [inputValue, correctValue, tolerance, status, attempts, hintsShown, id, topicId, diffLevel, points, submitAnswer, onComplete, triggerShake]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  const showNextHint = () => {
    if (hintsShown < hintKeys.length) {
      setHintsShown(h => h + 1);
    }
  };

  // Derive border style
  const borderColor =
    status === 'correct' ? 'var(--mp-success)' :
    status === 'wrong'   ? 'var(--mp-error)' :
                           'var(--mp-border)';
  const bgColor =
    status === 'correct' ? 'rgba(52,211,153,0.08)' :
    status === 'wrong'   ? 'rgba(251,113,133,0.08)' :
                           'var(--mp-surface)';

  return (
    <ExerciseCard exercise={exercise} index={index} total={total}>
      {/* Context */}
      {contextKey && (
        <p style={{ fontStyle: 'italic', color: 'var(--mp-muted)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
          {contextKey}
        </p>
      )}

      {/* Question */}
      <p style={{ fontSize: '1.05rem', color: 'var(--mp-text)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
        <InlineQuestion text={questionText} />
      </p>

      {/* Input row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1 1 160px', minWidth: '120px', maxWidth: '320px' }}>
          <input
            ref={inputRef}
            type="number"
            role="spinbutton"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={status === 'correct'}
            placeholder="Antwort"
            style={{
              width: '100%',
              minHeight: '48px',
              fontSize: '1.25rem',
              textAlign: 'center',
              borderRadius: '8px',
              border: `2px solid ${borderColor}`,
              background: bgColor,
              color: 'var(--mp-text)',
              padding: '0.4rem 0.75rem',
              outline: 'none',
              transition: 'border-color 0.25s, background 0.25s',
              animation: shaking ? 'mp-shake 0.55s ease' : 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {unit && (
          <span style={{ fontSize: '1.1rem', color: 'var(--mp-muted)', whiteSpace: 'nowrap' }}>
            {unit}
          </span>
        )}

        {/* Check button */}
        <button
          onClick={handleCheck}
          disabled={status === 'correct' || inputValue === ''}
          style={{
            minHeight: '48px',
            minWidth: '90px',
            padding: '0.4rem 1.2rem',
            borderRadius: '8px',
            border: 'none',
            background: status === 'correct' ? 'var(--mp-success)' : 'var(--mp-primary)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: status === 'correct' || inputValue === '' ? 'not-allowed' : 'pointer',
            opacity: inputValue === '' ? 0.6 : 1,
            transition: 'background 0.2s, opacity 0.2s',
          }}
        >
          {status === 'correct' ? '✓ Richtig!' : 'Prüfen'}
        </button>
      </div>

      {/* Wrong feedback */}
      {status === 'wrong' && attempts > 0 && (
        <p style={{ color: 'var(--mp-error)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
          Leider falsch. {attempts > 1 ? `Versuch ${attempts}` : 'Versuche es nochmal.'}
        </p>
      )}

      {/* Correct feedback */}
      {status === 'correct' && (
        <p style={{ color: 'var(--mp-success)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          Super! Aufgabe gelöst in {attempts} {attempts === 1 ? 'Versuch' : 'Versuchen'}.
        </p>
      )}

      {/* Hint button + hints list */}
      {hintKeys.length > 0 && status !== 'correct' && (
        <div style={{ marginTop: '0.5rem' }}>
          {hintsShown < hintKeys.length && (
            <button
              onClick={showNextHint}
              style={{
                minHeight: '44px',
                padding: '0.3rem 1rem',
                borderRadius: '6px',
                border: '1px solid var(--mp-primary)',
                background: 'transparent',
                color: 'var(--mp-primary)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                marginBottom: hintsShown > 0 ? '0.5rem' : '0',
              }}
            >
              Tipp {hintsShown + 1}/{hintKeys.length}
            </button>
          )}

          {hintsShown > 0 && (
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0' }}>
              {hintKeys.slice(0, hintsShown).map((hint, i) => (
                <li
                  key={i}
                  style={{
                    padding: '0.5rem 0.75rem',
                    marginBottom: '0.35rem',
                    borderLeft: '3px solid var(--mp-primary)',
                    background: 'rgba(var(--mp-primary-rgb, 139,92,246), 0.07)',
                    borderRadius: '0 6px 6px 0',
                    fontSize: '0.9rem',
                    color: 'var(--mp-text)',
                  }}
                >
                  {hint}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Solution reveal after 3 wrong attempts */}
      {attempts >= 3 && status !== 'correct' && solutionKey && !solutionVisible && (
        <button
          onClick={() => setSolutionVisible(true)}
          style={{
            minHeight: '44px',
            marginTop: '0.75rem',
            padding: '0.3rem 1rem',
            borderRadius: '6px',
            border: '1px solid var(--mp-muted)',
            background: 'transparent',
            color: 'var(--mp-muted)',
            fontSize: '0.88rem',
            cursor: 'pointer',
          }}
        >
          Lösung anzeigen
        </button>
      )}

      {solutionVisible && solutionKey && (
        <div
          style={{
            marginTop: '0.75rem',
            padding: '0.6rem 0.85rem',
            borderRadius: '8px',
            background: 'var(--mp-surface)',
            border: '1px solid var(--mp-border)',
            fontSize: '0.95rem',
            color: 'var(--mp-text)',
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--mp-muted)', marginRight: '0.5rem' }}>Lösung:</span>
          {solutionKey}
        </div>
      )}
    </ExerciseCard>
  );
}
