import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const PROBLEMS = [
  {
    key: 'p1',
    formula: 'f(x) = 3x^2',
    accepted: ['6x'],
    display: '6x',
  },
  {
    key: 'p2',
    formula: 'f(x) = -2x^4',
    accepted: ['-8x^3', '-8x³', '-8x3'],
    display: '-8x³',
  },
  {
    key: 'p3',
    formula: 'f(x) = \\frac{1}{2}x^6',
    accepted: ['3x^5', '3x⁵', '3x5'],
    display: '3x⁵',
  },
  {
    key: 'p4',
    formula: 'f(x) = 7\\sqrt{x}',
    accepted: ['7/(2√x)', '7/(2*sqrt(x))', '3.5x^(-0.5)', '3.5x^(-1/2)', '(7/2)x^(-1/2)', '7/2*x^(-1/2)', '7/(2sqrt(x))'],
    display: '7/(2√x)',
  },
];

function matchesAccepted(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => {
    const normA = normalizeExpression(a);
    return norm === normA || norm.replace(/\*/g, '') === normA.replace(/\*/g, '');
  });
}

function D2EX2Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Wende die <strong>Faktorregel</strong> an: Ein konstanter Faktor bleibt beim Ableiten erhalten.
        <br />
        <em style={{ fontSize: '0.9em', color: 'var(--mp-muted)' }}>f(x) = c · xⁿ → f'(x) = c · n · x^(n−1)</em>
      </p>
      {PROBLEMS.map((prob, i) => {
        const status = stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null;
        return (
          <div key={prob.key} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div style={{ minWidth: '180px' }}>
              <FormulaDisplay formula={prob.formula} displayMode={false} />
            </div>
            <MathInput
              label="f'(x) ="
              value={answers[prob.key] || ''}
              onChange={(val) => onAnswer(prob.key, val)}
              status={status}
              disabled={isComplete}
              placeholder="Ableitung eingeben"
              size="medium"
            />
          </div>
        );
      })}
    </div>
  );
}

export const exercise = {
  id: 'D2-EX2',
  levelId: 2,
  order: 2,
  title: 'Faktorregel',
  description: 'Leite Funktionen mit konstantem Faktor ab.',
  type: 'input',
  xp: { base: 10, bonus: 5 },
  steps: PROBLEMS.map((p, i) => `Ableitung von Funktion ${i + 1}`),
  hints: [
    'Faktorregel: Ein konstanter Vorfaktor bleibt beim Ableiten erhalten.',
    'f(x) = 3x² → f\'(x) = 3 · 2x = 6x',
    'Für 7√x = 7·x^(1/2): f\'(x) = 7 · (1/2) · x^(−1/2) = 7/(2√x)',
  ],
  component: D2EX2Component,
  validate: (answers) => {
    const stepResults = PROBLEMS.map(prob => (!answers[prob.key] || answers[prob.key] === '') ? null : matchesAccepted(answers[prob.key], prob.accepted));
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von ${PROBLEMS.length} Ableitungen richtig. Denke daran: der Faktor bleibt erhalten!`,
    };
  },
};
