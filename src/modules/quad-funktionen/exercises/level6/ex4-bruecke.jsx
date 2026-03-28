import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../../../utils/mathValidation';

const steps = [
  { key: 'x1', formula: 'x_1 = \\text{(erste Nullstelle)} =', placeholder: 'Meter' },
  { key: 'x2', formula: 'x_2 = \\text{(zweite Nullstelle)} =', placeholder: 'Meter' },
  { key: 'breite', label: 'Breite = x\u2082 - x\u2081 =', placeholder: 'Meter' },
  { key: 'xs', formula: 'x_S = \\text{(Scheitelpunkt x)} =', placeholder: 'Meter' },
  { key: 'hmax', formula: 'f(x_S) = \\text{(maximale H\u00F6he)} =', placeholder: 'Meter' },
];

const expected = {
  x1: 0,
  x2: 100,
  breite: 100,
  xs: 50,
  hmax: 50,
};

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
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
          Ein <strong>Br\u00FCckenbogen</strong> wird beschrieben durch die Funktion:
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Dabei sind <em>x</em> und <em>f(x)</em> in Metern gemessen.
          Die Br\u00FCcke beginnt und endet auf Bodenniveau (f(x) = 0).
        </p>
      </div>

      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="f(x) = -0{,}02x^2 + 2x"
      />

      {complete && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Br\u00FCckenbogen:</p>
          <ParabolaGraph
            a={-0.02}
            b={2}
            c={0}
            xRange={[-10, 110]}
            yRange={[-5, 60]}
            showVertex={true}
            showZeros={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'Q6-EX4',
  levelId: 6,
  order: 4,
  title: 'Br\u00FCckenbogen',
  description: 'Berechne Breite und H\u00F6he eines Br\u00FCckenbogens.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 12 },
  steps: [
    'Nullstellen bestimmen (Br\u00FCckenanf\u00E4nge)',
    'Breite der Br\u00FCcke berechnen',
    'Scheitelpunkt und maximale H\u00F6he bestimmen',
  ],
  hints: [
    'Setze f(x) = 0: -0,02x\u00B2 + 2x = 0 \u2192 x(-0,02x + 2) = 0. Also x = 0 oder x = 100.',
    'Der Scheitelpunkt liegt bei x = -b/(2a) = -2/(2\u00B7(-0,02)) = 50.',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const keys = steps.map(s => s.key);
    const results = keys.map(key => {
      if (answers[key] === undefined || answers[key] === '') return false;

      // x1 and x2 can be in either order
      if (key === 'x1' || key === 'x2') {
        const a1 = validateNumber(answers.x1, 0, 0.1) && validateNumber(answers.x2, 100, 0.1);
        const a2 = validateNumber(answers.x1, 100, 0.1) && validateNumber(answers.x2, 0, 0.1);
        return a1 || a2;
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
