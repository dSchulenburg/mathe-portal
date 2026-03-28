import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const STEPS = [
  {
    key: 's1',
    formula: '\\frac{d}{dx}(3x^2) = ?',
    placeholder: 'Ableitung des ersten Terms',
  },
  {
    key: 's2',
    formula: '\\frac{d}{dx}(2x) = ?',
    placeholder: 'Ableitung des zweiten Terms',
  },
  {
    key: 's3',
    formula: '\\frac{d}{dx}(-5) = ?',
    placeholder: 'Ableitung der Konstante',
  },
  {
    key: 's4',
    formula: "f'(x) = ?",
    placeholder: 'Alle Terme zusammenfassen',
  },
];

const ACCEPTED = {
  s1: ['6x'],
  s2: ['2'],
  s3: ['0'],
  s4: ['6x+2', '2+6x'],
};

function validateStep(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D2EX3Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite <strong>f(x) = 3x² + 2x − 5</strong> mit der <strong>Summenregel</strong> ab:
        Jeder Term wird einzeln abgeleitet.
      </p>
      <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
        <FormulaDisplay formula="f(x) = 3x^2 + 2x - 5" />
      </div>
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
      />
      {stepResults[3] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <FormulaDisplay formula="f'(x) = 6x + 2" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D2-EX3',
  levelId: 2,
  order: 3,
  title: 'Summenregel',
  description: 'Leite f(x) = 3x² + 2x − 5 term-weise ab.',
  type: 'step-by-step',
  xp: { base: 10, bonus: 5 },
  steps: ['Ableitung 3x²', 'Ableitung 2x', 'Ableitung −5', 'Gesamtergebnis'],
  hints: [
    'Summenregel: Jeder Summand wird einzeln abgeleitet.',
    'Ableitung einer Konstanten ist immer 0.',
    'f\'(x) = 6x + 2 + 0 = 6x + 2',
  ],
  component: D2EX3Component,
  validate: (answers) => {
    const stepResults = [
      (!answers.s1 || answers.s1 === '') ? null : validateStep(answers.s1, ACCEPTED.s1),
      (!answers.s2 || answers.s2 === '') ? null : validateStep(answers.s2, ACCEPTED.s2),
      (!answers.s3 || answers.s3 === '') ? null : validateStep(answers.s3, ACCEPTED.s3),
      (!answers.s4 || answers.s4 === '') ? null : validateStep(answers.s4, ACCEPTED.s4),
    ];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 4 Schritten richtig. Leite jeden Term einzeln ab!`,
    };
  },
};
