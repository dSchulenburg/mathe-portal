import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import { validateNumber, allStepsComplete, normalizeExpression } from '../../../../utils/mathValidation';

const steps = [
  { key: 'factor', label: 'Gemeinsamer Faktor:', placeholder: 'z.B. 3x' },
  { key: 'bracket', label: 'In der Klammer: 3x·(...) = 0 →', placeholder: 'z.B. x+4' },
  { key: 'x1', formula: 'x_1 =', placeholder: '?' },
  { key: 'x2', formula: 'x_2 =', placeholder: '?' },
];

const expected = {
  factor: '3x',
  bracket: 'x+4',
  x1: 0,
  x2: -4,
};

function validateFactor(input) {
  if (!input) return false;
  const norm = normalizeExpression(String(input));
  // Accept "3x" or "x" (partial factoring) - but prefer "3x"
  return norm === '3x';
}

function validateBracket(input) {
  if (!input) return false;
  const norm = normalizeExpression(String(input));
  // Accept "x+4" or "(x+4)"
  return norm === 'x+4' || norm === '(x+4)';
}

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Löse die Gleichung durch <strong>Ausklammern</strong>.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="3x^2 + 12x = 0"
      />
    </div>
  );
}

const exercise = {
  id: 'Q4-EX3',
  levelId: 4,
  order: 3,
  title: 'Ausklammern',
  description: 'Löse 3x² + 12x = 0 durch Ausklammern.',
  type: 'step-by-step',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Finde den gemeinsamen Faktor',
    'Klammere aus und bestimme den Klammerinhalt',
    'Setze jeden Faktor gleich null',
  ],
  hints: [
    'Beide Terme haben x und 3 als Faktor gemeinsam: 3x(... ) = 0.',
    '3x · (x + 4) = 0 → x₁ = 0 (aus 3x = 0) oder x + 4 = 0 → x₂ = -4.',
  ],
  component: Ex3Component,
  validate: (answers) => {
    const results = [
      answers.factor ? validateFactor(answers.factor) : null,
      answers.bracket ? validateBracket(answers.bracket) : null,
      answers.x1 !== undefined && answers.x1 !== '' ? validateNumber(answers.x1, expected.x1) : null,
      answers.x2 !== undefined && answers.x2 !== '' ? validateNumber(answers.x2, expected.x2) : null,
    ];
    const complete = allStepsComplete(results);
    return {
      complete,
      stepResults: results,
      message: complete ? null : 'Prüfe die markierten Schritte nochmal.',
    };
  },
};

export default exercise;
