import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../../../utils/mathValidation';

const steps = [
  { key: 'h0', label: 'h(0) =', placeholder: 'Meter' },
  { key: 'tmax', formula: 't_{max} = -\\frac{b}{2a} =', placeholder: 'Sekunden' },
  { key: 'hmax', formula: 'h(t_{max}) =', placeholder: 'Meter' },
  { key: 'p', label: 'Setze h(t) = 0, teile durch -5: t\u00B2 - 4t - 0,4 = 0. p =', placeholder: '?' },
  { key: 'q', label: 'q =', placeholder: '?' },
  { key: 't_boden', label: 't (positive L\u00F6sung) =', placeholder: 'Sekunden' },
];

const expected = {
  h0: 2,
  tmax: 2,
  hmax: 22,
  p: -4,
  q: -0.4,
  t_boden: 4.1,
};

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
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
          Ein Ball wird geworfen. Seine H\u00F6he in Metern nach <em>t</em> Sekunden
          wird beschrieben durch:
        </p>
      </div>

      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="h(t) = -5t^2 + 20t + 2"
      />

      {complete && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Flugbahn des Balls:</p>
          <ParabolaGraph
            a={-5}
            b={20}
            c={2}
            xRange={[0, 5]}
            yRange={[-2, 25]}
            showVertex={true}
            showZeros={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'Q6-EX1',
  levelId: 6,
  order: 1,
  title: 'Wurfparabel',
  description: 'Analysiere die Flugbahn eines geworfenen Balls.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 12 },
  steps: [
    'Anfangsh\u00F6he bestimmen',
    'Zeitpunkt der maximalen H\u00F6he berechnen',
    'Maximale H\u00F6he berechnen',
    'Aufprallzeitpunkt mit pq-Formel bestimmen',
  ],
  hints: [
    'h(0) ergibt sich durch Einsetzen von t = 0.',
    'Der Scheitelpunkt liegt bei t = -b/(2a) = -20/(2\u00B7(-5)) = 2.',
  ],
  component: Ex1Component,
  validate: (answers) => {
    const keys = steps.map(s => s.key);
    const results = keys.map(key => {
      if (answers[key] === undefined || answers[key] === '') return null;
      if (key === 't_boden') {
        // Accept 4.09 to 4.1
        return validateNumber(answers[key], expected[key], 0.1);
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
