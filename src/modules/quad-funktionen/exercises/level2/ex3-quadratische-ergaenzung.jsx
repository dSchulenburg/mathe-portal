import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import MathInput from '../../../../components/math/MathInput';
import { validateNumber } from '../../../../utils/mathValidation';

const steps = [
  { key: 'half', label: 'Halbiere den Koeffizienten von x: 4/2 =', placeholder: '2' },
  { key: 'square', label: 'Quadriere das Ergebnis: 2² =', placeholder: '4' },
  { key: 'confirm', formula: '(x^2 + 4x + 4) - 4 + 1', label: 'Ergänze und kompensiere — welche Zahl wird ergänzt?', placeholder: '4' },
  { key: 'bracket', label: 'Klammer zusammen: (x + ?)²', placeholder: '2' },
  { key: 'constant', label: 'Berechne die Konstante: -4 + 1 =', placeholder: '-3' },
  { key: 'sx', label: 'Scheitelpunkt x_S =', placeholder: '-2' },
  { key: 'sy', label: 'Scheitelpunkt y_S =', placeholder: '-3' },
];

const expected = {
  half: 2,
  square: 4,
  confirm: 4,
  bracket: 2,
  constant: -3,
  sx: -2,
  sy: -3,
};

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Führe die <strong>quadratische Ergänzung</strong> durch und bestimme den Scheitelpunkt.
      </p>
      <StepByStepSolver
        steps={steps}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="f(x) = x^2 + 4x + 1"
      />
    </div>
  );
}

const exercise = {
  id: 'Q2-EX3',
  levelId: 2,
  order: 3,
  title: 'Quadratische Ergänzung',
  description: 'Führe die quadratische Ergänzung Schritt für Schritt durch.',
  type: 'step-by-step',
  xp: { base: 30, bonus: 15 },
  steps: steps.map(s => s.label),
  hints: [
    'Nimm den Koeffizienten von x, halbiere ihn und quadriere das Ergebnis.',
    'Die ergänzte Zahl wird addiert UND subtrahiert — so ändert sich der Funktionswert nicht.',
  ],
  component: Ex3Component,
  validate: (answers) => {
    const results = steps.map(s => {
      const val = answers[s.key];
      if (val === undefined || val === '') return false;
      return validateNumber(val, expected[s.key], 0.1);
    });

    const complete = results.every(r => r === true);

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : 'Noch nicht alle Schritte korrekt. Tipp: Arbeite von oben nach unten!',
    };
  },
};

export default exercise;
