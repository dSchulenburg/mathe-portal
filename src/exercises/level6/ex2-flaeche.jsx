import StepByStepSolver from '../../components/math/StepByStepSolver';
import ParabolaGraph from '../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../utils/mathValidation';

const steps = [
  { key: 'bmax', formula: 'b_{max} = -\\frac{p}{2a} =', placeholder: 'Meter' },
  { key: 'a_side', label: 'a = 40 - 2b =', placeholder: 'Meter' },
  { key: 'amax', label: 'Maximale Fl\u00E4che A =', placeholder: 'm\u00B2' },
];

const expected = {
  bmax: 10,
  a_side: 20,
  amax: 200,
};

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
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
          Du hast <strong>40 m Zaun</strong>. Eine Seite des Rechtecks grenzt an eine
          Hauswand (kein Zaun n\u00F6tig). Wie m\u00FCssen die Seiten gew\u00E4hlt werden,
          damit die <strong>Fl\u00E4che maximal</strong> wird?
        </p>
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          Nenne die Seite parallel zur Wand &laquo;a&raquo; und die senkrechte Seite &laquo;b&raquo;.
          Dann gilt: a + 2b = 40, also a = 40 - 2b.
        </p>
      </div>

      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="A(b) = -2b^2 + 40b"
      />

      {complete && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Fl\u00E4chenfunktion:</p>
          <ParabolaGraph
            a={-2}
            b={40}
            c={0}
            xRange={[0, 22]}
            yRange={[-10, 210]}
            showVertex={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'L6-EX2',
  levelId: 6,
  order: 2,
  title: 'Fl\u00E4chenoptimierung',
  description: 'Maximiere die eingez\u00E4unte Fl\u00E4che mit 40 m Zaun.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 12 },
  steps: [
    'Optimale Seitenl\u00E4nge b bestimmen',
    'Seite a berechnen',
    'Maximale Fl\u00E4che berechnen',
  ],
  hints: [
    'A(b) = (40 - 2b) \u00B7 b = -2b\u00B2 + 40b. Das Maximum liegt bei b = -40/(2\u00B7(-2)) = 10.',
    'Mit b = 10 ist a = 40 - 20 = 20. Die Fl\u00E4che ist 20 \u00B7 10 = 200 m\u00B2.',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const keys = steps.map(s => s.key);
    const results = keys.map(key =>
      answers[key] !== undefined && answers[key] !== ''
        ? validateNumber(answers[key], expected[key], 0.1)
        : false
    );
    const complete = allStepsComplete(results);
    return {
      complete,
      stepResults: results,
      message: complete ? null : 'Pr\u00FCfe die markierten Schritte nochmal.',
    };
  },
};

export default exercise;
