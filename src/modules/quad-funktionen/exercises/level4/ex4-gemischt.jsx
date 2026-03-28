import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import MathInput from '../../../../components/math/MathInput';
import MultipleChoice from '../../../../components/math/MultipleChoice';
import { validateNumber, validateMultipleChoice } from '../../../../utils/mathValidation';

const problems = [
  {
    id: 1,
    formula: 'x^2 - 9 = 0',
    methods: [
      { id: 'ausklammern', label: 'Ausklammern', correct: false },
      { id: 'pq', label: 'pq-Formel', correct: false },
      { id: 'binom', label: 'Dritte binomische Formel', correct: true },
    ],
    correctMethod: 'binom',
    x1: 3,
    x2: -3,
  },
  {
    id: 2,
    formula: 'x^2 + 7x = 0',
    methods: [
      { id: 'ausklammern', label: 'Ausklammern', correct: true },
      { id: 'pq', label: 'pq-Formel', correct: false },
      { id: 'binom', label: 'Dritte binomische Formel', correct: false },
    ],
    correctMethod: 'ausklammern',
    x1: 0,
    x2: -7,
  },
  {
    id: 3,
    formula: 'x^2 - 2x - 8 = 0',
    methods: [
      { id: 'ausklammern', label: 'Ausklammern', correct: false },
      { id: 'pq', label: 'pq-Formel', correct: true },
      { id: 'binom', label: 'Dritte binomische Formel', correct: false },
    ],
    correctMethod: 'pq',
    x1: 4,
    x2: -2,
  },
];

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Wähle für jede Gleichung die <strong>beste Lösungsmethode</strong> und berechne die Nullstellen.
      </p>

      {problems.map((prob, i) => {
        const methodKey = `method_${prob.id}`;
        const x1Key = `x1_${prob.id}`;
        const x2Key = `x2_${prob.id}`;

        const methodStatus = stepResults[i * 3] === true ? 'checked' : null;
        const x1Status = stepResults[i * 3 + 1] === true ? 'correct' : stepResults[i * 3 + 1] === false ? 'incorrect' : null;
        const x2Status = stepResults[i * 3 + 2] === true ? 'correct' : stepResults[i * 3 + 2] === false ? 'incorrect' : null;

        return (
          <div key={prob.id} className="sub-problem" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <FormulaDisplay formula={prob.formula} />
            </div>

            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Methode:</span>
              <MultipleChoice
                options={prob.methods}
                selected={answers[methodKey] || null}
                onSelect={(val) => onAnswer(methodKey, val)}
                status={methodStatus}
                isComplete={isComplete}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FormulaDisplay formula="x_1 =" displayMode={false} />
                <MathInput
                  value={answers[x1Key] || ''}
                  onChange={(val) => onAnswer(x1Key, val)}
                  status={x1Status}
                  disabled={isComplete}
                  placeholder="?"
                  size="small"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FormulaDisplay formula="x_2 =" displayMode={false} />
                <MathInput
                  value={answers[x2Key] || ''}
                  onChange={(val) => onAnswer(x2Key, val)}
                  status={x2Status}
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
  id: 'Q4-EX4',
  levelId: 4,
  order: 4,
  title: 'Gemischte Aufgaben',
  description: 'Wähle die richtige Methode und löse die Gleichungen.',
  type: 'mixed',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Erkenne die passende Lösungsmethode',
    'Berechne die Nullstellen',
  ],
  hints: [
    'x² - 9 = 0 ist eine Differenz zweier Quadrate: (x-3)(x+3) = 0.',
    'Wenn kein konstanter Term vorhanden ist (z.B. x² + 7x = 0), kannst du x ausklammern.',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const results = [];
    let allCorrect = true;

    for (const prob of problems) {
      const methodKey = `method_${prob.id}`;
      const x1Key = `x1_${prob.id}`;
      const x2Key = `x2_${prob.id}`;

      const methodCorrect = answers[methodKey]
        ? validateMultipleChoice(answers[methodKey], prob.correctMethod)
        : false;

      // Accept x1 and x2 in either order
      const x1Val = answers[x1Key];
      const x2Val = answers[x2Key];
      let x1Correct = false;
      let x2Correct = false;

      if (x1Val !== undefined && x1Val !== '' && x2Val !== undefined && x2Val !== '') {
        // Check both orderings
        const order1 = validateNumber(x1Val, prob.x1) && validateNumber(x2Val, prob.x2);
        const order2 = validateNumber(x1Val, prob.x2) && validateNumber(x2Val, prob.x1);
        if (order1 || order2) {
          x1Correct = true;
          x2Correct = true;
        } else {
          // Check individually for partial feedback
          x1Correct = validateNumber(x1Val, prob.x1) || validateNumber(x1Val, prob.x2);
          x2Correct = validateNumber(x2Val, prob.x1) || validateNumber(x2Val, prob.x2);
        }
      }

      results.push(methodCorrect, x1Correct, x2Correct);
      if (!methodCorrect || !x1Correct || !x2Correct) allCorrect = false;
    }

    return {
      complete: allCorrect,
      stepResults: results,
      message: allCorrect ? null : 'Prüfe die markierten Felder nochmal.',
    };
  },
};

export default exercise;
