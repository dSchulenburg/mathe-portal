import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../../../utils/mathValidation';

const steps = [
  { key: 'p', label: 'Teile durch -2: x\u00B2 - 60x + 500 = 0. p =', placeholder: '?' },
  { key: 'q', label: 'q =', placeholder: '?' },
  { key: 'x1', formula: 'x_1 = \\text{(untere Gewinnschwelle)} =', placeholder: 'Tausend St\u00FCck' },
  { key: 'x2', formula: 'x_2 = \\text{(obere Gewinnschwelle)} =', placeholder: 'Tausend St\u00FCck' },
  { key: 'xmax', formula: 'x_{max} =', placeholder: 'Tausend St\u00FCck' },
  { key: 'gmax', formula: 'G(x_{max}) =', placeholder: 'Gewinneinheiten' },
];

const expected = {
  p: -60,
  q: 500,
  x1: 10,
  x2: 50,
  xmax: 30,
  gmax: 800,
};

function solutionsCorrectUnordered(answers, key1, key2, val1, val2) {
  const a = validateNumber(answers[key1], val1, 0.1) && validateNumber(answers[key2], val2, 0.1);
  const b = validateNumber(answers[key1], val2, 0.1) && validateNumber(answers[key2], val1, 0.1);
  return a || b;
}

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const complete = allStepsComplete(stepResults);

  return (
    <div className="exercise-content">
      <div className="story-context" style={{
        background: 'var(--card-bg, rgba(255,255,255,0.05))',
        border: '1px solid var(--border-color, #444)',
        borderRadius: '8px',
        padding: '1.2rem',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
      }}>
        <p>
          Ein Unternehmen hat die <strong>Gewinnfunktion</strong>:
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <em>x</em> ist die St\u00FCckzahl in Tausend, <em>G(x)</em> der Gewinn.
        </p>
      </div>

      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="G(x) = -2x^2 + 120x - 1000"
      />

      {complete && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Gewinnfunktion:</p>
          <ParabolaGraph
            a={-2}
            b={120}
            c={-1000}
            xRange={[0, 65]}
            yRange={[-1100, 1000]}
            showZeros={true}
            showVertex={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'Q6-EX3',
  levelId: 6,
  order: 3,
  title: 'Gewinnfunktion',
  description: 'Analysiere die Gewinnfunktion eines Unternehmens.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 12 },
  steps: [
    'Gleichung normieren (durch -2 teilen)',
    'Gewinnschwellen berechnen (Nullstellen)',
    'Gewinnmaximum bestimmen',
  ],
  hints: [
    'G(x) = 0 ergibt die Gewinnschwellen. Teile zuerst durch -2.',
    'Das Maximum liegt bei x = -b/(2a) = -120/(2\u00B7(-2)) = 30.',
  ],
  component: Ex3Component,
  validate: (answers) => {
    const results = steps.map((s) => {
      const key = s.key;
      if (answers[key] === undefined || answers[key] === '') return false;

      // x1 and x2 can be in either order
      if (key === 'x1' || key === 'x2') {
        return solutionsCorrectUnordered(answers, 'x1', 'x2', expected.x1, expected.x2);
      }
      return validateNumber(answers[key], expected[key], 0.1);
    });

    const complete = allStepsComplete(results);
    return {
      complete,
      stepResults: results,
      message: complete ? null : 'Pr\u00FCfe die markierten Schritte nochmal.',
    };
  },
};

export default exercise;
