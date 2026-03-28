import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import MathInput from '../../../../components/math/MathInput';
import { validateNumber } from '../../../../utils/mathValidation';

const problems = [
  {
    id: 1,
    instruction: 'Normalform → Scheitelpunkt: Bestimme den Scheitelpunkt.',
    formula: 'f(x) = x^2 + 2x - 3',
    fields: [
      { key: 'q1_sx', label: 'x_S =', expected: -1 },
      { key: 'q1_sy', label: 'y_S =', expected: -4 },
    ],
  },
  {
    id: 2,
    instruction: 'Scheitelpunktform → Normalform: Bestimme a, b, c.',
    formula: 'f(x) = (x-1)^2 + 2',
    fields: [
      { key: 'q2_a', label: 'a =', expected: 1 },
      { key: 'q2_b', label: 'b =', expected: -2 },
      { key: 'q2_c', label: 'c =', expected: 3 },
    ],
  },
  {
    id: 3,
    instruction: 'Bestimme den Scheitelpunkt der Funktion.',
    formula: 'f(x) = 2x^2 - 8x + 6',
    fields: [
      { key: 'q3_sx', label: 'x_S =', expected: 2 },
      { key: 'q3_sy', label: 'y_S =', expected: -2 },
    ],
  },
];

function Ex4Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Rechne zwischen <strong>Normalform</strong> und <strong>Scheitelpunktform</strong> um.
      </p>
      {problems.map((p, i) => {
        const stepDone = stepResults[i] === true;
        const stepChecked = stepResults.length > 0;

        return (
          <div key={p.id} className="sub-question" style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <strong>{p.id}.</strong> {p.instruction}
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <FormulaDisplay formula={p.formula} displayMode={false} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {p.fields.map(f => {
                const isCorrect = validateNumber(answers[f.key], f.expected, 0.1);
                const status = stepChecked
                  ? (isCorrect ? 'correct' : 'incorrect')
                  : null;

                return (
                  <MathInput
                    key={f.key}
                    label={f.label}
                    value={answers[f.key] || ''}
                    onChange={(val) => onAnswer(f.key, val)}
                    status={status}
                    disabled={isComplete || stepDone}
                    placeholder="?"
                    size="small"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const exercise = {
  id: 'Q2-EX4',
  levelId: 2,
  order: 4,
  title: 'Formen umrechnen',
  description: 'Rechne zwischen Normal- und Scheitelpunktform um.',
  type: 'input',
  xp: { base: 30, bonus: 15 },
  steps: problems.map(p => p.instruction),
  hints: [
    'Normal→Scheitel: Nutze die quadratische Ergänzung oder die Formel x_S = -b/(2a).',
    'Scheitel→Normal: Klammere die Scheitelpunktform aus und vereinfache.',
  ],
  component: Ex4Component,
  validate: (answers) => {
    const results = problems.map(p => {
      return p.fields.every(f => validateNumber(answers[f.key], f.expected, 0.1));
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${problems.length} Aufgaben richtig. Überprüfe deine Umrechnungen!`,
    };
  },
};

export default exercise;
