import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateNumber } from '../../../../utils/mathValidation';

const problems = [
  {
    id: 1,
    x1: 1, x2: 5,
    label: 'x_1 = 1, \\; x_2 = 5',
    expectedP: -6,
    expectedQ: 5,
    resultFormula: 'x^2 - 6x + 5 = 0',
  },
  {
    id: 2,
    x1: -2, x2: 3,
    label: 'x_1 = -2, \\; x_2 = 3',
    expectedP: -1,
    expectedQ: -6,
    resultFormula: 'x^2 - x - 6 = 0',
  },
  {
    id: 3,
    x1: -4, x2: -1,
    label: 'x_1 = -4, \\; x_2 = -1',
    expectedP: 5,
    expectedQ: 4,
    resultFormula: 'x^2 + 5x + 4 = 0',
  },
];

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bestimme mit dem <strong>Satz von Vieta</strong> die Koeffizienten p und q.
      </p>
      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
        <FormulaDisplay formula="x_1 + x_2 = -p \\quad \\text{und} \\quad x_1 \\cdot x_2 = q" />
      </div>

      {problems.map((prob, i) => {
        const pKey = `p_${prob.id}`;
        const qKey = `q_${prob.id}`;
        const pStatus = stepResults[i * 2] === true ? 'correct' : stepResults[i * 2] === false ? 'incorrect' : null;
        const qStatus = stepResults[i * 2 + 1] === true ? 'correct' : stepResults[i * 2 + 1] === false ? 'incorrect' : null;

        return (
          <div key={prob.id} className="sub-problem" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <FormulaDisplay formula={prob.label} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>p =</span>
                <MathInput
                  value={answers[pKey] || ''}
                  onChange={(val) => onAnswer(pKey, val)}
                  status={pStatus}
                  disabled={isComplete}
                  placeholder="?"
                  size="small"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>q =</span>
                <MathInput
                  value={answers[qKey] || ''}
                  onChange={(val) => onAnswer(qKey, val)}
                  status={qStatus}
                  disabled={isComplete}
                  placeholder="?"
                  size="small"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const exercise = {
  id: 'Q4-EX2',
  levelId: 4,
  order: 2,
  title: 'Satz von Vieta',
  description: 'Bestimme p und q aus den Nullstellen mit dem Satz von Vieta.',
  type: 'input',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Berechne p = -(x₁ + x₂)',
    'Berechne q = x₁ · x₂',
  ],
  hints: [
    'Satz von Vieta: x₁ + x₂ = -p und x₁ · x₂ = q.',
    'Beispiel: x₁=1, x₂=5 → p = -(1+5) = -6, q = 1·5 = 5.',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const results = [];
    let allCorrect = true;

    for (const prob of problems) {
      const pKey = `p_${prob.id}`;
      const qKey = `q_${prob.id}`;

      const pCorrect = answers[pKey] !== undefined && answers[pKey] !== ''
        ? validateNumber(answers[pKey], prob.expectedP, 0.01)
        : null;
      const qCorrect = answers[qKey] !== undefined && answers[qKey] !== ''
        ? validateNumber(answers[qKey], prob.expectedQ, 0.01)
        : null;

      results.push(pCorrect, qCorrect);
      if (!pCorrect || !qCorrect) allCorrect = false;
    }

    return {
      complete: allCorrect,
      stepResults: results,
      message: allCorrect ? null : 'Prüfe die markierten Werte nochmal.',
    };
  },
};

export default exercise;
