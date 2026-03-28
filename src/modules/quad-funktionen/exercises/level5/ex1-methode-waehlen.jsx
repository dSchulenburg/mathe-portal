import { useState } from 'react';
import MultipleChoice from '../../../../components/math/MultipleChoice';
import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateNumber } from '../../../../utils/mathValidation';

const problems = [
  {
    formula: 'x^2 - 16 = 0',
    methods: [
      { id: 'binom', label: '3. binomische Formel' },
      { id: 'wurzel', label: 'Wurzelziehen' },
      { id: 'ausklammern', label: 'Ausklammern' },
      { id: 'pq', label: 'pq-Formel' },
    ],
    bestMethods: ['binom', 'wurzel', 'pq'],
    x1: 4, x2: -4,
  },
  {
    formula: 'x^2 + 3x = 0',
    methods: [
      { id: 'binom', label: '3. binomische Formel' },
      { id: 'wurzel', label: 'Wurzelziehen' },
      { id: 'ausklammern', label: 'Ausklammern' },
      { id: 'pq', label: 'pq-Formel' },
    ],
    bestMethods: ['ausklammern', 'pq'],
    x1: 0, x2: -3,
  },
  {
    formula: 'x^2 - 5x + 6 = 0',
    methods: [
      { id: 'binom', label: '3. binomische Formel' },
      { id: 'wurzel', label: 'Wurzelziehen' },
      { id: 'ausklammern', label: 'Ausklammern' },
      { id: 'pq', label: 'pq-Formel' },
    ],
    bestMethods: ['pq'],
    x1: 3, x2: 2,
  },
  {
    formula: '(x - 1)^2 = 9',
    methods: [
      { id: 'binom', label: '3. binomische Formel' },
      { id: 'wurzel', label: 'Wurzelziehen' },
      { id: 'ausklammern', label: 'Ausklammern' },
      { id: 'pq', label: 'pq-Formel' },
    ],
    bestMethods: ['wurzel', 'pq'],
    x1: 4, x2: -2,
  },
];

function solutionsCorrect(ans1, ans2, expected1, expected2) {
  // Accept solutions in either order
  const a = validateNumber(ans1, expected1, 0.1) && validateNumber(ans2, expected2, 0.1);
  const b = validateNumber(ans1, expected2, 0.1) && validateNumber(ans2, expected1, 0.1);
  return a || b;
}

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Wähle für jede Gleichung eine <strong>Lösungsmethode</strong> und berechne die Lösungen.
      </p>

      <div className="tabs" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {problems.map((p, i) => (
          <button
            key={i}
            className={`tab-btn ${activeTab === i ? 'active' : ''} ${stepResults[i] === true ? 'done' : ''}`}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: activeTab === i ? '2px solid var(--accent-blue)' : '1px solid var(--border-color, #555)',
              background: stepResults[i] === true ? 'var(--success-green, #2ecc40)' : activeTab === i ? 'var(--accent-blue)' : 'transparent',
              color: (stepResults[i] === true || activeTab === i) ? '#fff' : 'inherit',
              cursor: 'pointer',
              fontWeight: activeTab === i ? 'bold' : 'normal',
            }}
          >
            Aufgabe {i + 1} {stepResults[i] === true ? '\u2713' : ''}
          </button>
        ))}
      </div>

      {problems.map((problem, i) => (
        <div key={i} style={{ display: activeTab === i ? 'block' : 'none' }}>
          <div className="exercise-formula" style={{ marginBottom: '1rem' }}>
            <FormulaDisplay formula={problem.formula} />
          </div>

          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Welche Methode passt am besten?</p>
          <MultipleChoice
            options={problem.methods.map(m => ({
              id: m.id,
              label: m.label,
              correct: problem.bestMethods.includes(m.id),
            }))}
            selected={answers[`method_${i}`] || null}
            onSelect={(val) => onAnswer(`method_${i}`, val)}
            status={stepResults[i] !== undefined ? 'checked' : null}
            isComplete={isComplete || stepResults[i] === true}
          />

          <div className="input-row" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <MathInput
              label="x\u2081 ="
              value={answers[`x1_${i}`] || ''}
              onChange={(val) => onAnswer(`x1_${i}`, val)}
              status={stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null}
              disabled={isComplete || stepResults[i] === true}
              placeholder="?"
              size="small"
            />
            <MathInput
              label="x\u2082 ="
              value={answers[`x2_${i}`] || ''}
              onChange={(val) => onAnswer(`x2_${i}`, val)}
              status={stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null}
              disabled={isComplete || stepResults[i] === true}
              placeholder="?"
              size="small"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const exercise = {
  id: 'Q5-EX1',
  levelId: 5,
  order: 1,
  title: 'Methode wählen',
  description: 'Wähle die passende Lösungsmethode und löse jede Gleichung.',
  type: 'mixed',
  xp: { base: 28, bonus: 12 },
  steps: [
    'Gleichung 1: x\u00B2 - 16 = 0',
    'Gleichung 2: x\u00B2 + 3x = 0',
    'Gleichung 3: x\u00B2 - 5x + 6 = 0',
    'Gleichung 4: (x-1)\u00B2 = 9',
  ],
  hints: [
    'x\u00B2 - 16 = 0 ist eine Differenz zweier Quadrate \u2014 die 3. binomische Formel oder einfach Wurzelziehen funktioniert.',
    'Wenn kein absolutes Glied vorhanden ist (kein +c), kann man x ausklammern.',
  ],
  component: Ex1Component,
  validate: (answers) => {
    const results = problems.map((p, i) => {
      const x1 = answers[`x1_${i}`];
      const x2 = answers[`x2_${i}`];
      if (x1 === undefined || x1 === '' || x2 === undefined || x2 === '') return null;
      // We only check solutions, any method is accepted
      return solutionsCorrect(x1, x2, p.x1, p.x2);
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${problems.length} Gleichungen richtig gel\u00F6st.`,
    };
  },
};

export default exercise;
