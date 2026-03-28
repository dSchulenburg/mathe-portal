import MultipleChoice from '../../../../components/math/MultipleChoice';
import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateMultipleChoice, normalizeExpression } from '../../../../utils/mathValidation';

const MC_QUESTIONS = [
  {
    key: 'mc1',
    formula: 'f(x) = x^2 \\cdot \\sin(x)',
    correctId: 'produkt',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'produkt', label: 'Produktregel' },
      { id: 'quotient', label: 'Quotientenregel' },
      { id: 'kette', label: 'Kettenregel' },
    ],
  },
  {
    key: 'mc2',
    formula: 'f(x) = (3x+1)^5',
    correctId: 'kette',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'produkt', label: 'Produktregel' },
      { id: 'quotient', label: 'Quotientenregel' },
      { id: 'kette', label: 'Kettenregel' },
    ],
  },
  {
    key: 'mc3',
    formula: 'f(x) = \\frac{x^3}{x+2}',
    correctId: 'quotient',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'produkt', label: 'Produktregel' },
      { id: 'quotient', label: 'Quotientenregel' },
      { id: 'kette', label: 'Kettenregel' },
    ],
  },
];

const CALC_ACCEPTED = ['15(3x+1)^4', '15(3x+1)4', '15(3x+1)⁴'];

function matchesAccepted(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D3EX4Component({ answers, onAnswer, stepResults, isComplete }) {
  const calcIdx = MC_QUESTIONS.length;
  const calcStatus = stepResults[calcIdx] === true ? 'correct' : stepResults[calcIdx] === false ? 'incorrect' : null;

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        <strong>Teil 1:</strong> Welche Ableitungsregel wird hier angewendet?
      </p>

      {MC_QUESTIONS.map((q, i) => (
        <div key={q.key} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--mp-primary)' }}>{i + 1}.</span>
            <FormulaDisplay formula={q.formula} displayMode={false} />
          </div>
          <MultipleChoice
            options={q.options}
            selected={answers[q.key] || null}
            onSelect={(val) => onAnswer(q.key, val)}
            multiSelect={false}
            isComplete={isComplete}
            compact={true}
          />
        </div>
      ))}

      <div style={{ borderTop: '1px solid var(--mp-border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
        <p className="exercise-prompt">
          <strong>Teil 2:</strong> Berechne f'(x) für f(x) = (3x+1)⁵ mit der Kettenregel.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ minWidth: '200px' }}>
            <FormulaDisplay formula="f(x) = (3x+1)^5" displayMode={false} />
          </div>
          <MathInput
            label="f'(x) ="
            value={answers.calc || ''}
            onChange={(val) => onAnswer('calc', val)}
            status={calcStatus}
            disabled={isComplete}
            placeholder="z.B. 15(3x+1)^4"
            size="medium"
          />
        </div>
        {stepResults[calcIdx] === true && (
          <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
            <FormulaDisplay formula="f'(x) = 5(3x+1)^4 \cdot 3 = 15(3x+1)^4" displayMode={false} />
          </div>
        )}
      </div>
    </div>
  );
}

export const exercise = {
  id: 'D3-EX4',
  levelId: 3,
  order: 4,
  title: 'Regelauswahl',
  description: 'Erkenne die passende Ableitungsregel und wende die Kettenregel an.',
  type: 'mixed',
  xp: { base: 12, bonus: 6 },
  steps: [
    'Regel für x²·sin(x)',
    'Regel für (3x+1)⁵',
    'Regel für x³/(x+2)',
    'Ableitung von (3x+1)⁵',
  ],
  hints: [
    'Produktregel: Produkt zweier Funktionen | Kettenregel: verkettete Funktion | Quotientenregel: Bruch',
    '(3x+1)⁵: Die innere Funktion ist 3x+1, die äußere ist u⁵ → Kettenregel.',
    'f\'(x) = 5(3x+1)⁴ · 3 = 15(3x+1)⁴',
  ],
  component: D3EX4Component,
  validate: (answers) => {
    const mc1 = !answers.mc1 ? null : validateMultipleChoice(answers.mc1 ? [answers.mc1] : [], ['produkt']);
    const mc2 = !answers.mc2 ? null : validateMultipleChoice(answers.mc2 ? [answers.mc2] : [], ['kette']);
    const mc3 = !answers.mc3 ? null : validateMultipleChoice(answers.mc3 ? [answers.mc3] : [], ['quotient']);
    const calc = (!answers.calc || answers.calc === '') ? null : matchesAccepted(answers.calc, CALC_ACCEPTED);

    const stepResults = [mc1, mc2, mc3, calc];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 4 Aufgaben richtig.`,
    };
  },
};
