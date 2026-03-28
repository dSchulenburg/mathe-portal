import StepByStepSolver from '../../components/math/StepByStepSolver';
import { validateNumber, allStepsComplete } from '../../utils/mathValidation';

const steps = [
  { key: 'p', label: 'p =', placeholder: '?' },
  { key: 'q', label: 'q =', placeholder: '?' },
  { key: 'pHalf', formula: '\\frac{p}{2} =', placeholder: '?' },
  { key: 'pHalfSq', formula: '\\left(\\frac{p}{2}\\right)^2 =', placeholder: '?' },
  { key: 'D', formula: '\\left(\\frac{p}{2}\\right)^2 - q =', placeholder: '?' },
  { key: 'sqrtD', formula: '\\sqrt{D} =', placeholder: '?' },
  { key: 'x1', formula: 'x_1 = -\\frac{p}{2} + \\sqrt{D} =', placeholder: '?' },
  { key: 'x2', formula: 'x_2 = -\\frac{p}{2} - \\sqrt{D} =', placeholder: '?' },
];

const expected = {
  p: 5,
  q: 6,
  pHalf: 2.5,
  pHalfSq: 6.25,
  D: 0.25,
  sqrtD: 0.5,
  x1: -2,
  x2: -3,
};

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Löse die quadratische Gleichung mit der <strong>pq-Formel</strong>. Gehe Schritt für Schritt vor.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="x^2 + 5x + 6 = 0"
      />
    </div>
  );
}

const exercise = {
  id: 'L3-EX1',
  levelId: 3,
  order: 1,
  title: 'pq-Formel Schritt für Schritt',
  description: 'Löse x² + 5x + 6 = 0 mit der pq-Formel.',
  type: 'step-by-step',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Bestimme p und q',
    'Berechne p/2 und (p/2)²',
    'Berechne die Diskriminante D',
    'Berechne die Nullstellen x₁ und x₂',
  ],
  hints: [
    'Die pq-Formel lautet: x₁,₂ = -p/2 ± √((p/2)² - q)',
    'Bei x² + 5x + 6 = 0 ist p = 5 und q = 6.',
  ],
  component: Ex1Component,
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
      message: complete ? null : 'Prüfe die markierten Schritte nochmal.',
    };
  },
};

export default exercise;
