import { useState } from 'react';
import CurveAnalyzer from '../../components/CurveAnalyzer';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';

const fn = (x) => x * x * x - 3 * x;
const fnDerivative = (x) => 3 * x * x - 3;

const EXPECTED_POINTS = [
  { x: -1, y: 2, type: 'HP' },
  { x: 1, y: -2, type: 'TP' },
];

function D4EX2Component({ answers, onAnswer, stepResults, isComplete }) {
  const [result, setResult] = useState(null);

  function handleResult(res) {
    const correct = res.correct;
    onAnswer('graphResult', correct ? 'correct' : 'wrong');
    setResult(res);
  }

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Markiere die <strong>Extrempunkte</strong> von <em>f(x) = x³ − 3x</em> im Graphen.
        Klicke auf Hoch- und Tiefpunkt.
      </p>
      <div className="exercise-formula" style={{ margin: '0.5rem 0 1rem' }}>
        <FormulaDisplay formula="f(x) = x^3 - 3x \quad f'(x) = 3x^2 - 3" displayMode={false} />
      </div>
      <CurveAnalyzer
        fn={fn}
        fnDerivative={fnDerivative}
        xRange={[-3, 3]}
        yRange={[-4, 4]}
        mode="extrema"
        expectedPoints={EXPECTED_POINTS}
        tolerance={0.4}
        onResult={handleResult}
      />
      {result && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: result.correct ? 'var(--success-bg)' : 'var(--error-bg)',
          borderRadius: '8px',
          textAlign: 'center',
          color: result.correct ? 'var(--mp-success)' : 'var(--mp-error)',
          fontWeight: 600,
        }}>
          {result.correct
            ? 'Perfekt! HP(−1|2) und TP(1|−2) korrekt markiert.'
            : `${result.found.length} von 2 Punkten gefunden. Versuche es nochmal!`}
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D4-EX2',
  levelId: 4,
  order: 2,
  title: 'Extrempunkte markieren',
  description: 'Markiere die Extrempunkte von f(x) = x³ − 3x im Graphen.',
  type: 'graph-interact',
  xp: { base: 15, bonus: 8 },
  steps: ['Hochpunkt markieren', 'Tiefpunkt markieren'],
  hints: [
    'Aus der vorherigen Aufgabe: Extremstellen bei x = −1 und x = 1.',
    'f(−1) = 2 (Hochpunkt), f(1) = −2 (Tiefpunkt).',
    'Klicke direkt auf die entsprechenden Punkte im Graphen.',
  ],
  component: D4EX2Component,
  validate: (answers) => {
    const correct = answers.graphResult === 'correct';
    return {
      complete: correct,
      stepResults: [correct, correct],
      message: correct
        ? null
        : 'Markiere Hochpunkt bei (−1|2) und Tiefpunkt bei (1|−2).',
    };
  },
};
