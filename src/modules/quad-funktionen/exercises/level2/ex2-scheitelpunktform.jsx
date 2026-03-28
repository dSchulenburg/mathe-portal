import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import { validateNumber } from '../../../../utils/mathValidation';

const steps = [
  { key: 'b_val', label: 'Bestimme b (Koeffizient von x):', placeholder: '-6' },
  { key: 'b_half', label: 'Berechne b/2:', placeholder: '-3' },
  { key: 'b_half_sq', label: 'Berechne (b/2)²:', placeholder: '9' },
  { key: 'confirm', formula: '(x^2 - 6x + 9) - 9 + 5', label: 'Ergänze und kompensiere — Ergebnis der Klammer:', placeholder: '9' },
  { key: 'xs', label: 'Scheitelpunkt x_S:', placeholder: '3' },
  { key: 'ys', label: 'Scheitelpunkt y_S:', placeholder: '-4' },
];

const expected = {
  b_val: -6,
  b_half: -3,
  b_half_sq: 9,
  confirm: 9,
  xs: 3,
  ys: -4,
};

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bestimme die <strong>Scheitelpunktform</strong> durch quadratische Ergänzung.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="f(x) = x^2 - 6x + 5"
      />
    </div>
  );
}

const exercise = {
  id: 'Q2-EX2',
  levelId: 2,
  order: 2,
  title: 'Scheitelpunktform bestimmen',
  description: 'Wandle eine Normalform durch quadratische Ergänzung in die Scheitelpunktform um.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 15 },
  steps: steps.map(s => s.label),
  hints: [
    'Bei quadratischer Ergänzung: (b/2)² wird addiert und gleich wieder subtrahiert.',
    'Der Scheitelpunkt ist S(−b/2 | f(−b/2)). Hier: S(3 | −4).',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const results = steps.map(s => {
      const val = answers[s.key];
      if (val === undefined || val === '') return null;
      return validateNumber(val, expected[s.key], 0.1);
    });

    const complete = results.every(r => r === true);

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : 'Noch nicht alle Schritte richtig. Arbeite Schritt für Schritt!',
    };
  },
};

export default exercise;
