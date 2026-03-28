import FormulaDisplay from '../../components/math/FormulaDisplay';
import MathInput from '../../components/math/MathInput';
import MultipleChoice from '../../components/math/MultipleChoice';
import { validateNumber, validateMultipleChoice } from '../../utils/mathValidation';

const problems = [
  {
    id: 1,
    formula: 'x^2 + 4x + 4 = 0',
    p: 4, q: 4,
    expectedD: 0,
    solutions: '1',
  },
  {
    id: 2,
    formula: 'x^2 - 3x + 1 = 0',
    p: -3, q: 1,
    expectedD: 5.25,
    solutions: '2',
  },
  {
    id: 3,
    formula: 'x^2 + 2x + 5 = 0',
    p: 2, q: 5,
    expectedD: -4,
    solutions: '0',
  },
  {
    id: 4,
    formula: 'x^2 - 6x + 9 = 0',
    p: -6, q: 9,
    expectedD: 0,
    solutions: '1',
  },
];

// Correct D values: D = (p/2)^2 - q
// Problem 1: (4/2)^2 - 4 = 4 - 4 = 0
// Problem 2: (-3/2)^2 - 1 = 2.25 - 1 = 1.25  ... wait, let me recalculate
// Actually D = (p/2)^2 - q for pq-formula
// Problem 2: (-3/2)^2 - 1 = 2.25 - 1 = 1.25
// But the spec says D=5. Let me check: for x^2 - 3x + 1: a=1, b=-3, c=1
// Classical discriminant: b^2 - 4ac = 9 - 4 = 5
// pq-discriminant: (p/2)^2 - q = (-3/2)^2 - 1 = 2.25 - 1 = 1.25
// The spec says D=5 which is the b^2-4ac form.
// But pq-Formel uses D = (p/2)^2 - q. Let me use the spec values.

// Re-reading the spec: it says D=5 for problem 2, D=-16 for problem 3
// Problem 3: p=2, q=5 → (p/2)^2 - q = 1 - 5 = -4 (not -16)
// b^2 - 4ac = 4 - 20 = -16 ... the spec uses classical discriminant
// Let's use classical D = b^2 - 4ac as the spec demands

const expectedValues = [
  { D: 0, solutions: '1' },       // 4^2 - 4*1*4 = 16-16 = 0
  { D: 5, solutions: '2' },       // (-3)^2 - 4*1*1 = 9-4 = 5
  { D: -16, solutions: '0' },     // 2^2 - 4*1*5 = 4-20 = -16
  { D: 0, solutions: '1' },       // (-6)^2 - 4*1*9 = 36-36 = 0
];

const solutionOptions = [
  { id: '0', label: '0 Lösungen', correct: false },
  { id: '1', label: '1 Lösung', correct: false },
  { id: '2', label: '2 Lösungen', correct: false },
];

function Ex2Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Berechne für jede Gleichung die <strong>Diskriminante D = b² - 4ac</strong> und bestimme die Anzahl der Lösungen.
      </p>

      {problems.map((prob, i) => {
        const dKey = `d_${prob.id}`;
        const solKey = `sol_${prob.id}`;
        const dStatus = stepResults[i * 2] === true ? 'correct' : stepResults[i * 2] === false ? 'incorrect' : null;
        const solStatus = stepResults[i * 2 + 1] === true ? 'checked' : null;

        const mcOptions = solutionOptions.map(opt => ({
          ...opt,
          correct: opt.id === expectedValues[i].solutions,
        }));

        return (
          <div key={prob.id} className="sub-problem" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <FormulaDisplay formula={prob.formula} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>D =</span>
              <MathInput
                value={answers[dKey] || ''}
                onChange={(val) => onAnswer(dKey, val)}
                status={dStatus}
                disabled={isComplete}
                placeholder="Diskriminante"
                size="small"
              />
            </div>
            <div>
              <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Anzahl Lösungen:</span>
              <MultipleChoice
                options={mcOptions}
                selected={answers[solKey] || null}
                onSelect={(val) => onAnswer(solKey, val)}
                status={solStatus}
                isComplete={isComplete}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const exercise = {
  id: 'L3-EX2',
  levelId: 3,
  order: 2,
  title: 'Diskriminante bestimmen',
  description: 'Berechne die Diskriminante und bestimme die Anzahl der Lösungen.',
  type: 'mixed',
  xp: { base: 22, bonus: 10 },
  steps: [
    'Bestimme a, b und c',
    'Berechne D = b² - 4ac',
    'Bestimme die Anzahl der Lösungen',
  ],
  hints: [
    'D > 0 → 2 Lösungen, D = 0 → 1 Lösung, D < 0 → 0 Lösungen.',
    'D = b² - 4ac, wobei a der Faktor vor x², b der Faktor vor x und c die Konstante ist.',
  ],
  component: Ex2Component,
  validate: (answers) => {
    const results = [];
    let allCorrect = true;

    for (let i = 0; i < problems.length; i++) {
      const dKey = `d_${problems[i].id}`;
      const solKey = `sol_${problems[i].id}`;

      const dCorrect = answers[dKey] !== undefined && answers[dKey] !== ''
        ? validateNumber(answers[dKey], expectedValues[i].D, 0.1)
        : false;
      const solCorrect = answers[solKey]
        ? validateMultipleChoice(answers[solKey], expectedValues[i].solutions)
        : false;

      results.push(dCorrect, solCorrect);
      if (!dCorrect || !solCorrect) allCorrect = false;
    }

    return {
      complete: allCorrect,
      stepResults: results,
      message: allCorrect ? null : 'Prüfe die markierten Werte nochmal.',
    };
  },
};

export default exercise;
