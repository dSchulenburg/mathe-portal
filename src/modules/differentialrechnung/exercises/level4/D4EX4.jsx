import StepByStepSolver from '../../../../components/math/StepByStepSolver';
import MultipleChoice from '../../../../components/math/MultipleChoice';
import FunctionGraph from '../../components/FunctionGraph';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression, validateNumber } from '../../../../utils/mathValidation';

const fn = (x) => -x * x * x + 3 * x * x - 1;

// Steps 0-3: text inputs, Steps 4-5: MC
const STEPS = [
  {
    key: 'df',
    formula: "f'(x) = ?",
    placeholder: 'Ableitung berechnen',
  },
  {
    key: 'zeros',
    formula: "f'(x) = 0 \\Rightarrow x(-3x+6)=0 \\Rightarrow x_1 = ?, x_2 = ?",
    placeholder: 'z.B. 0 und 2',
  },
  {
    key: 'y0',
    formula: 'f(0) = ?',
    placeholder: 'y-Wert bei x = 0',
  },
  {
    key: 'y2',
    formula: 'f(2) = ?',
    placeholder: 'y-Wert bei x = 2',
  },
];

const ACCEPTED_DF = ['-3x^2+6x', '-3x²+6x', '6x-3x^2', '6x-3x²', '-3x2+6x'];

function validateDf(input) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return ACCEPTED_DF.some(a => normalizeExpression(a) === norm);
}

function validateZeros(input) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  return (norm.includes('0') && norm.includes('2'));
}

const MC_TYPE_OPTIONS = [
  { id: 'minimum', label: 'Minimum' },
  { id: 'maximum', label: 'Maximum' },
];

function D4EX4Component({ answers, onAnswer, stepResults, isComplete }) {
  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Vollständige Extremwertanalyse für <strong>f(x) = −x³ + 3x² − 1</strong>:
      </p>
      <FunctionGraph
        fn={fn}
        xRange={[-1, 4]}
        yRange={[-3, 4]}
        showGrid={true}
        highlightPoints={
          stepResults[2] === true && stepResults[3] === true
            ? [
                { x: 0, y: -1, color: 'var(--mp-secondary)', label: 'TP(0|-1)' },
                { x: 2, y: 3, color: 'var(--mp-primary)', label: 'HP(2|3)' },
              ]
            : []
        }
      />
      <div className="exercise-formula" style={{ margin: '0.75rem 0' }}>
        <FormulaDisplay formula="f(x) = -x^3 + 3x^2 - 1" />
      </div>

      <StepByStepSolver
        steps={STEPS}
        answers={answers}
        onAnswer={onAnswer}
        stepResults={stepResults.slice(0, 4)}
        isComplete={isComplete}
      />

      <div style={{ borderTop: '1px solid var(--mp-border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
        <p className="exercise-prompt"><strong>Art der Extrempunkte:</strong></p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--mp-primary)' }}>x₁ = 0 ist ein:</span>
          </div>
          <MultipleChoice
            options={MC_TYPE_OPTIONS}
            selected={answers.type0 || null}
            onSelect={(val) => onAnswer('type0', val)}
            multiSelect={false}
            isComplete={isComplete}
            compact={true}
          />
        </div>

        <div>
          <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--mp-primary)' }}>x₂ = 2 ist ein:</span>
          </div>
          <MultipleChoice
            options={MC_TYPE_OPTIONS}
            selected={answers.type2 || null}
            onSelect={(val) => onAnswer('type2', val)}
            multiSelect={false}
            isComplete={isComplete}
            compact={true}
          />
        </div>
      </div>

      {stepResults.every(Boolean) && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontWeight: 600 }}>Vollständige Analyse korrekt!</p>
          <FormulaDisplay formula="TP(0|-1), \quad HP(2|3)" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D4-EX4',
  levelId: 4,
  order: 4,
  title: 'Kompletter Extremwert-Workflow',
  description: 'Vollständige Extremwertanalyse für f(x) = −x³ + 3x² − 1.',
  type: 'step-by-step',
  xp: { base: 15, bonus: 8 },
  steps: [
    'f\'(x) berechnen',
    'Nullstellen von f\'(x)',
    'f(0) berechnen',
    'f(2) berechnen',
    'Art von x₁ = 0',
    'Art von x₂ = 2',
  ],
  hints: [
    'f\'(x) = −3x² + 6x, f\'(x) = 0: x(−3x + 6) = 0 → x = 0 oder x = 2.',
    'f(0) = 0 + 0 − 1 = −1 | f(2) = −8 + 12 − 1 = 3',
    'Vorzeichenwechsel von f\': Bei x = 0 von + nach − → Minimum? Nein! Bei negativem Vorzeichen von −3x² ist x = 0 ein Minimum und x = 2 ein Maximum.',
  ],
  component: D4EX4Component,
  validate: (answers) => {
    const dfOk = (!answers.df || answers.df === '') ? null : validateDf(answers.df);
    const zerosOk = (!answers.zeros || answers.zeros === '') ? null : validateZeros(answers.zeros);
    const y0Ok = (!answers.y0 && answers.y0 !== 0) ? null : validateNumber(answers.y0, -1, 0.1);
    const y2Ok = (!answers.y2 && answers.y2 !== 0) ? null : validateNumber(answers.y2, 3, 0.1);
    // x=0 is minimum (f' changes + to -... actually for -x^3+3x^2-1 at x=0: f''=-6x+6, f''(0)=6>0 → minimum)
    const type0Ok = answers.type0 === undefined || answers.type0 === null ? null : answers.type0 === 'minimum';
    const type2Ok = answers.type2 === undefined || answers.type2 === null ? null : answers.type2 === 'maximum';

    const stepResults = [dfOk, zerosOk, y0Ok, y2Ok, type0Ok, type2Ok];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 6 Schritten richtig. Tipp: f\'(x) = −3x² + 6x, Nullstellen x = 0 und x = 2.`,
    };
  },
};
