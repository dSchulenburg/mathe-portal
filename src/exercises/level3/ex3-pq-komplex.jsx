import StepByStepSolver from '../../components/math/StepByStepSolver';
import { validateNumber, allStepsComplete } from '../../utils/mathValidation';

const steps = [
  { key: 'p', label: 'Teile durch a=2. Neues p =', placeholder: '?' },
  { key: 'q', label: 'Neues q =', placeholder: '?' },
  { key: 'pHalf', formula: '\\frac{p}{2} =', placeholder: '?' },
  { key: 'pHalfSq', formula: '\\left(\\frac{p}{2}\\right)^2 =', placeholder: '?' },
  { key: 'D', formula: '\\left(\\frac{p}{2}\\right)^2 - q = 4 - (-5) =', placeholder: '?' },
  { key: 'sqrtD', formula: '\\sqrt{D} =', placeholder: '?' },
  { key: 'x1', formula: 'x_1 =', placeholder: '?' },
  { key: 'x2', formula: 'x_2 =', placeholder: '?' },
];

const expected = {
  p: 4,
  q: -5,
  pHalf: 2,
  pHalfSq: 4,
  D: 9,
  sqrtD: 3,
  x1: 1,
  x2: -5,
};

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Löse die Gleichung mit der <strong>pq-Formel</strong>.
        <br />
        <em>Achtung: Du musst zuerst durch den Faktor vor x² teilen!</em>
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="2x^2 + 8x - 10 = 0"
      />
    </div>
  );
}

const exercise = {
  id: 'L3-EX3',
  levelId: 3,
  order: 3,
  title: 'pq-Formel für Fortgeschrittene',
  description: 'Löse 2x² + 8x - 10 = 0. Teile zuerst durch den Koeffizienten.',
  type: 'step-by-step',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Teile durch den Faktor vor x²',
    'Bestimme p und q der Normalform',
    'Wende die pq-Formel an',
    'Berechne x₁ und x₂',
  ],
  hints: [
    'Teile zuerst beide Seiten durch den Faktor vor x².',
    '2x² + 8x - 10 = 0 → x² + 4x - 5 = 0, also p = 4, q = -5.',
  ],
  component: Ex3Component,
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
