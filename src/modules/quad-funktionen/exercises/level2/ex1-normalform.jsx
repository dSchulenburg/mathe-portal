import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import MathInput from '../../../../components/math/MathInput';
import { validateNumber } from '../../../../utils/mathValidation';

const problems = [
  {
    formula: 'f(x) = 2(x-3)^2 + 1',
    a: 2, b: -12, c: 19,
    expansion: '2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 18 + 1',
  },
  {
    formula: 'f(x) = -(x+2)^2 + 5',
    a: -1, b: -4, c: 1,
    expansion: '-(x^2 + 4x + 4) + 5 = -x^2 - 4x - 4 + 5',
  },
  {
    formula: 'f(x) = 0{,}5(x-4)^2 - 2',
    a: 0.5, b: -4, c: 6,
    expansion: '0{,}5(x^2 - 8x + 16) - 2 = 0{,}5x^2 - 4x + 8 - 2',
  },
];

function Ex1Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Rechne die <strong>Scheitelpunktform</strong> in die <strong>Normalform</strong> um.
        Bestimme die Koeffizienten <em>a</em>, <em>b</em> und <em>c</em>.
      </p>
      {problems.map((p, i) => {
        const stepDone = stepResults[i] === true;
        const stepChecked = stepResults.length > 0;

        const getStatus = (key) => {
          if (!stepChecked) return null;
          const val = answers[key];
          const expected = key.endsWith('_a') ? p.a : key.endsWith('_b') ? p.b : p.c;
          return validateNumber(val, expected, 0.1) ? 'correct' : 'incorrect';
        };

        return (
          <div key={i} className="sub-question" style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong>{i + 1}.</strong>{' '}
              <FormulaDisplay formula={p.formula} displayMode={false} />
            </div>
            <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Normalform: f(x) = ax&sup2; + bx + c
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <MathInput
                label="a ="
                value={answers[`q${i + 1}_a`] || ''}
                onChange={(val) => onAnswer(`q${i + 1}_a`, val)}
                status={stepChecked ? getStatus(`q${i + 1}_a`) : null}
                disabled={isComplete || stepDone}
                placeholder="?"
                size="small"
              />
              <MathInput
                label="b ="
                value={answers[`q${i + 1}_b`] || ''}
                onChange={(val) => onAnswer(`q${i + 1}_b`, val)}
                status={stepChecked ? getStatus(`q${i + 1}_b`) : null}
                disabled={isComplete || stepDone}
                placeholder="?"
                size="small"
              />
              <MathInput
                label="c ="
                value={answers[`q${i + 1}_c`] || ''}
                onChange={(val) => onAnswer(`q${i + 1}_c`, val)}
                status={stepChecked ? getStatus(`q${i + 1}_c`) : null}
                disabled={isComplete || stepDone}
                placeholder="?"
                size="small"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const exercise = {
  id: 'Q2-EX1',
  levelId: 2,
  order: 1,
  title: 'Normalform erkennen',
  description: 'Rechne von der Scheitelpunktform in die Normalform um.',
  type: 'input',
  xp: { base: 25, bonus: 12 },
  steps: problems.map((p, i) => `Aufgabe ${i + 1}: a, b, c bestimmen`),
  hints: [
    'Klammere die Scheitelpunktform aus: a(x-d)² + e = a(x² - 2dx + d²) + e.',
    'Multipliziere a in die Klammer und fasse die Konstanten zusammen.',
  ],
  component: Ex1Component,
  validate: (answers) => {
    const results = problems.map((p, i) => {
      const aOk = validateNumber(answers[`q${i + 1}_a`], p.a, 0.1);
      const bOk = validateNumber(answers[`q${i + 1}_b`], p.b, 0.1);
      const cOk = validateNumber(answers[`q${i + 1}_c`], p.c, 0.1);
      return aOk && bOk && cOk;
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${problems.length} Aufgaben richtig. Überprüfe deine Ausmultiplikation!`,
    };
  },
};

export default exercise;
