import FormulaDisplay from '../../components/math/FormulaDisplay';
import MathInput from '../../components/math/MathInput';
import { validateNumber, parseNumberInput } from '../../utils/mathValidation';

const problems = [
  {
    text: 'F\u00FCr welches k hat die Gleichung genau eine L\u00F6sung?',
    formula: 'x^2 + 6x + k = 0',
    hint: 'D = (p/2)\u00B2 - q = 9 - k = 0',
    validate: (input) => validateNumber(input, 9, 0.1),
  },
  {
    text: 'F\u00FCr welches k hat die Gleichung genau eine L\u00F6sung?',
    formula: 'x^2 + kx + 9 = 0',
    hint: 'D = (k/2)\u00B2 - 9 = 0 \u2192 k\u00B2 = 36',
    validate: (input) => validateNumber(input, 6, 0.1) || validateNumber(input, -6, 0.1),
  },
  {
    text: 'F\u00FCr welches k hat die Gleichung keine L\u00F6sung? Gib ein Beispiel f\u00FCr k an.',
    formula: 'x^2 - 4x + k = 0',
    hint: 'D = 4 - k < 0, also k > 4',
    validate: (input) => {
      const num = parseNumberInput(input);
      return num !== null && num > 4;
    },
  },
];

function Ex3Component({ exercise, answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bestimme den <strong>Parameter k</strong>, damit die Gleichung die geforderte Eigenschaft hat.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {problems.map((p, i) => {
          const status = stepResults[i] === true ? 'correct' : stepResults[i] === false ? 'incorrect' : null;
          return (
            <div
              key={i}
              style={{
                padding: '1.2rem',
                borderRadius: '8px',
                border: stepResults[i] === true ? '1px solid var(--success-green, #2ecc40)' : '1px solid var(--border-color, #444)',
                background: stepResults[i] === true ? 'rgba(46,204,64,0.1)' : 'var(--card-bg, rgba(255,255,255,0.05))',
              }}
            >
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {i + 1}. {p.text}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <FormulaDisplay formula={p.formula} />
              </div>
              <MathInput
                label="k ="
                value={answers[`k_${i}`] || ''}
                onChange={(val) => onAnswer(`k_${i}`, val)}
                status={status}
                disabled={isComplete || stepResults[i] === true}
                placeholder="?"
                size="medium"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const exercise = {
  id: 'L5-EX3',
  levelId: 5,
  order: 3,
  title: 'Parameter bestimmen',
  description: 'Finde den Parameter k f\u00FCr bestimmte L\u00F6sungseigenschaften.',
  type: 'mixed',
  xp: { base: 28, bonus: 12 },
  steps: [
    'k bestimmen f\u00FCr genau eine L\u00F6sung (Aufgabe 1)',
    'k bestimmen f\u00FCr genau eine L\u00F6sung (Aufgabe 2)',
    'k bestimmen f\u00FCr keine L\u00F6sung (Aufgabe 3)',
  ],
  hints: [
    'Genau eine L\u00F6sung bedeutet: Diskriminante D = 0.',
    'Keine L\u00F6sung bedeutet: Diskriminante D < 0, also (p/2)\u00B2 - q < 0.',
  ],
  component: Ex3Component,
  validate: (answers) => {
    const results = problems.map((p, i) => {
      const input = answers[`k_${i}`];
      if (input === undefined || input === '') return false;
      return p.validate(input);
    });

    const complete = results.every(r => r === true);
    const doneCount = results.filter(r => r === true).length;

    return {
      complete,
      stepResults: results,
      message: complete
        ? null
        : `${doneCount} von ${problems.length} Aufgaben richtig. Denke an die Diskriminante!`,
    };
  },
};

export default exercise;
