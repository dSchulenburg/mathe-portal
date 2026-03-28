import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

// Accepted answers (normalized)
const ACCEPTED = {
  step1: ['(x+h)^2-x^2)/h', '(x²+2xh+h²-x²)/h', '2xh+h^2)/h', '(2xh+h^2)/h'],
  step2: ['2x+h'],
  step3: ['2x+h'],
  step4: ['2x'],
};

function matchesAny(input, accepted) {
  const norm = normalizeExpression(input || '');
  return accepted.some(a => normalizeExpression(a) === norm || norm.includes(normalizeExpression(a)));
}

function validateStep1(input) {
  const norm = normalizeExpression(input || '');
  // Accept anything that contains "2xh" and "h²" or "h^2" (simplified numerator)
  return (
    (norm.includes('2xh') && (norm.includes('h²') || norm.includes('h^2') || norm.includes('h2'))) ||
    norm === '2x+h' ||
    norm === '2xh+h^2' ||
    norm === '2xh+h²'
  );
}

const STEPS = [
  {
    key: 's1',
    formula: '\\frac{(x+h)^2 - x^2}{h} = \\frac{?}{h}',
    placeholder: 'Zähler ausrechnen',
  },
  {
    key: 's2',
    formula: '\\frac{2xh + h^2}{h} = ?',
    placeholder: 'h ausklammern / kürzen',
  },
  {
    key: 's3',
    formula: '\\text{Grenzwert: } \\lim_{h \\to 0} (2x + h) = ?',
    placeholder: 'h → 0 einsetzen',
  },
];

function D1EX3Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite <strong>f(x) = x²</strong> mit dem Differenzenquotienten her.
      </p>
      <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
        <FormulaDisplay formula="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
      </div>
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
        headerFormula="f(x) = x^2"
      />
      {stepResults[2] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <FormulaDisplay formula="f'(x) = 2x" displayMode={false} /> — Herleitung abgeschlossen!
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D1-EX3',
  levelId: 1,
  order: 3,
  title: 'Differenzenquotient → Differentialquotient',
  description: 'Leite f(x) = x² schrittweise mit dem Grenzwert-Begriff ab.',
  type: 'step-by-step',
  xp: { base: 15, bonus: 8 },
  steps: ['Zähler ausmultiplizieren', 'h kürzen', 'Grenzwert h→0 bilden'],
  hints: [
    '(x+h)² = x² + 2xh + h² — multipliziere das aus und subtrahiere x².',
    'Im Zähler bleibt 2xh + h². Durch h kürzen ergibt 2x + h.',
    'Für h → 0 verschwindet der Term h — es bleibt f\'(x) = 2x.',
  ],
  component: D1EX3Component,
  validate: (answers) => {
    const r1 = validateStep1(answers.s1);
    // Step 2: accept "2x+h" (after dividing by h)
    const norm2 = normalizeExpression(answers.s2 || '');
    const r2 = norm2 === '2x+h' || norm2 === 'h+2x';
    // Step 3: accept "2x"
    const norm3 = normalizeExpression(answers.s3 || '');
    const r3 = norm3 === '2x';
    const stepResults = [r1, r2, r3];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 3 Schritten richtig.`,
    };
  },
};
