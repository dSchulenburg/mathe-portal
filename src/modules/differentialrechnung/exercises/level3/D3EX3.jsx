import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const STEPS = [
  {
    key: 'outer',
    formula: '\\text{Äußere Funktion: } g(u) = ?',
    placeholder: 'z.B. u^4',
  },
  {
    key: 'inner',
    formula: '\\text{Innere Funktion: } u = ?',
    placeholder: 'z.B. 2x+3',
  },
  {
    key: 'douter',
    formula: "g'(u) = ?",
    placeholder: 'Äußere ableiten',
  },
  {
    key: 'dinner',
    formula: "u' = ?",
    placeholder: 'Innere ableiten',
  },
  {
    key: 'result',
    formula: "f'(x) = g'(u) \\cdot u' = ?",
    placeholder: 'Ergebnis',
  },
];

const ACCEPTED = {
  outer: ['u^4', 'u4', 'u⁴'],
  inner: ['2x+3'],
  douter: ['4u^3', '4u³', '4u3', '4(2x+3)^3', '4(2x+3)³'],
  dinner: ['2'],
  result: ['8(2x+3)^3', '8(2x+3)³', '8(2x+3)3'],
};

function validateStep(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D3EX3Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Leite <strong>f(x) = (2x+3)⁴</strong> mit der <strong>Kettenregel</strong> ab:
      </p>
      <div className="exercise-formula" style={{ marginBottom: '0.5rem' }}>
        <FormulaDisplay formula="f'(x) = g'(u) \cdot u' \quad \text{mit} \quad u = \text{innere Funktion}" />
      </div>
      <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
        <FormulaDisplay formula="f(x) = (2x+3)^4" />
      </div>
      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults}
        isComplete={isComplete}
      />
      {stepResults[4] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <FormulaDisplay formula="f'(x) = 4(2x+3)^3 \cdot 2 = 8(2x+3)^3" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D3-EX3',
  levelId: 3,
  order: 3,
  title: 'Kettenregel',
  description: 'Leite f(x) = (2x+3)⁴ mit der Kettenregel ab.',
  type: 'step-by-step',
  xp: { base: 12, bonus: 6 },
  steps: ['Äußere Funktion bestimmen', 'Innere Funktion bestimmen', 'Äußere ableiten', 'Innere ableiten', 'Ergebnis'],
  hints: [
    'Kettenregel: f\'(x) = g\'(u) · u\', wobei u die innere Funktion ist.',
    'Hier ist u = 2x+3 (innen) und g(u) = u⁴ (außen).',
    'g\'(u) = 4u³ = 4(2x+3)³, u\' = 2 → f\'(x) = 4(2x+3)³ · 2 = 8(2x+3)³',
  ],
  component: D3EX3Component,
  validate: (answers) => {
    const stepResults = [
      (!answers.outer || answers.outer === '') ? null : validateStep(answers.outer, ACCEPTED.outer),
      (!answers.inner || answers.inner === '') ? null : validateStep(answers.inner, ACCEPTED.inner),
      (!answers.douter || answers.douter === '') ? null : validateStep(answers.douter, ACCEPTED.douter),
      (!answers.dinner || answers.dinner === '') ? null : validateStep(answers.dinner, ACCEPTED.dinner),
      (!answers.result || answers.result === '') ? null : validateStep(answers.result, ACCEPTED.result),
    ];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 5 Schritten richtig. Tipp: 4(2x+3)³ · 2 = 8(2x+3)³`,
    };
  },
};
