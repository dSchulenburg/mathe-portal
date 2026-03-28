import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import ParabolaGraph from '../../../../components/math/ParabolaGraph';
import { validateNumber, allStepsComplete } from '../../../../utils/mathValidation';

const steps = [
  { key: 'p', label: 'Teile durch a=3. p =', placeholder: '?' },
  { key: 'q', label: 'q =', placeholder: '?' },
  { key: 'pHalf', formula: '\\frac{p}{2} =', placeholder: '?' },
  { key: 'pHalfSq', formula: '\\left(\\frac{p}{2}\\right)^2 =', placeholder: '?' },
  { key: 'D', formula: 'D = \\left(\\frac{p}{2}\\right)^2 - q =', placeholder: '?' },
  { key: 'sqrtD', formula: '\\sqrt{D} =', placeholder: '?' },
  { key: 'x1', formula: 'x_1 = -\\frac{p}{2} + \\sqrt{D} =', placeholder: '?' },
  { key: 'x2', formula: 'x_2 = -\\frac{p}{2} - \\sqrt{D} =', placeholder: '?' },
];

const expected = {
  p: -4,
  q: 3,
  pHalf: -2,
  pHalfSq: 4,
  D: 1,
  sqrtD: 1,
  x1: 3,
  x2: 1,
};

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const complete = allStepsComplete(stepResults);

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        L\u00F6se die Gleichung <strong>komplett</strong> mit der pq-Formel.
        Teile zuerst durch den Leitkoeffizienten a = 3.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="3x^2 - 12x + 9 = 0"
      />

      {complete && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Graph der Parabel:</p>
          <ParabolaGraph
            a={3}
            b={-12}
            c={9}
            xRange={[-1, 5]}
            yRange={[-2, 12]}
            showZeros={true}
            showVertex={true}
          />
        </div>
      )}
    </div>
  );
}

const exercise = {
  id: 'Q5-EX4',
  levelId: 5,
  order: 4,
  title: 'Komplett l\u00F6sen',
  description: 'L\u00F6se 3x\u00B2 - 12x + 9 = 0 vollst\u00E4ndig mit der pq-Formel.',
  type: 'step-by-step',
  xp: { base: 28, bonus: 12 },
  steps: [
    'Durch a = 3 teilen, p und q bestimmen',
    'p/2 und (p/2)\u00B2 berechnen',
    'Diskriminante berechnen',
    'Nullstellen x\u2081 und x\u2082 berechnen',
  ],
  hints: [
    '3x\u00B2 - 12x + 9 = 0 \u2192 durch 3 teilen: x\u00B2 - 4x + 3 = 0. Also p = -4, q = 3.',
    'p/2 = -2, (p/2)\u00B2 = 4, D = 4 - 3 = 1.',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const keys = steps.map(s => s.key);
    const results = keys.map(key =>
      answers[key] !== undefined && answers[key] !== ''
        ? validateNumber(answers[key], expected[key])
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
