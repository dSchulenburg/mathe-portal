import MultipleChoice from '../../../../components/math/MultipleChoice';
import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { validateMultipleChoice, normalizeExpression } from '../../../../utils/mathValidation';

// MC questions: which rule applies?
const MC_QUESTIONS = [
  {
    key: 'mc1',
    formula: 'f(x) = 5x^3',
    correctId: 'potenz',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'faktor', label: 'Faktorregel' },
      { id: 'summe', label: 'Summenregel' },
      { id: 'produkt', label: 'Produktregel' },
    ],
  },
  {
    key: 'mc2',
    formula: 'f(x) = 3x^2 + x',
    correctId: 'summe',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'faktor', label: 'Faktorregel' },
      { id: 'summe', label: 'Summenregel' },
      { id: 'produkt', label: 'Produktregel' },
    ],
  },
  {
    key: 'mc3',
    formula: 'f(x) = \\frac{1}{2}x^4',
    correctId: 'faktor',
    options: [
      { id: 'potenz', label: 'Potenzregel' },
      { id: 'faktor', label: 'Faktorregel' },
      { id: 'summe', label: 'Summenregel' },
      { id: 'produkt', label: 'Produktregel' },
    ],
  },
];

// Calculation inputs
const CALC_PROBLEMS = [
  {
    key: 'c1',
    formula: 'f(x) = 4x^3 - 2x + 1',
    accepted: ['12x^2-2', '12x²-2', '-2+12x^2', '-2+12x²'],
    display: "f'(x) = 12x² − 2",
  },
  {
    key: 'c2',
    formula: 'f(x) = x^4 + 3x^2',
    accepted: ['4x^3+6x', '4x³+6x', '6x+4x^3', '6x+4x³'],
    display: "f'(x) = 4x³ + 6x",
  },
];

function matchesAccepted(input, accepted) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return accepted.some(a => normalizeExpression(a) === norm);
}

function D2EX4Component({ answers, onAnswer, stepResults, isComplete }) {
  // stepResults layout: [mc1, mc2, mc3, c1, c2]
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        <strong>Teil 1:</strong> Welche Ableitungsregel wird hier hauptsächlich angewendet?
      </p>

      {MC_QUESTIONS.map((q, i) => {
        const mcStatus = stepResults[i] !== undefined && stepResults[i] !== null ? 'checked' : null;
        return (
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
              status={mcStatus}
              isComplete={isComplete}
              compact={true}
            />
          </div>
        );
      })}

      <div style={{ borderTop: '1px solid var(--mp-border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
        <p className="exercise-prompt">
          <strong>Teil 2:</strong> Berechne die Ableitung.
        </p>
        {CALC_PROBLEMS.map((prob, i) => {
          const idx = MC_QUESTIONS.length + i;
          const status = stepResults[idx] === true ? 'correct' : stepResults[idx] === false ? 'incorrect' : null;
          return (
            <div key={prob.key} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div style={{ minWidth: '200px' }}>
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
    </div>
  );
}

export const exercise = {
  id: 'D2-EX4',
  levelId: 2,
  order: 4,
  title: 'Gemischte Übungen',
  description: 'Erkenne die richtige Ableitungsregel und berechne Ableitungen.',
  type: 'mixed',
  xp: { base: 10, bonus: 5 },
  steps: [
    'Regel für 5x³',
    'Regel für 3x²+x',
    'Regel für ½x⁴',
    'Ableitung von 4x³−2x+1',
    'Ableitung von x⁴+3x²',
  ],
  hints: [
    'Potenzregel: xⁿ → n·x^(n-1) | Faktorregel: c·xⁿ → c·n·x^(n-1) | Summenregel: Summen gliedweise ableiten',
    'f(x) = 4x³ − 2x + 1: Summenregel anwenden, jeder Term einzeln ableiten.',
    'f\'(x) = 12x² − 2 (die Konstante 1 ergibt 0)',
  ],
  component: D2EX4Component,
  validate: (answers) => {
    // MC validations
    const mc1 = validateMultipleChoice(answers.mc1 ? [answers.mc1] : [], ['potenz']);
    const mc2 = validateMultipleChoice(answers.mc2 ? [answers.mc2] : [], ['summe']);
    const mc3 = validateMultipleChoice(answers.mc3 ? [answers.mc3] : [], ['faktor']);
    // Calc validations
    const c1 = matchesAccepted(answers.c1, CALC_PROBLEMS[0].accepted);
    const c2 = matchesAccepted(answers.c2, CALC_PROBLEMS[1].accepted);

    const stepResults = [mc1, mc2, mc3, c1, c2];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 5 Aufgaben richtig.`,
    };
  },
};
