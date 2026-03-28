import MathInput from '../../../../components/math/MathInput';
import FunctionGraph from '../../components/FunctionGraph';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';
import { normalizeExpression } from '../../../../utils/mathValidation';

const fn = (x) => x * x * x - 12 * x;

// Accept answers that mention both critical values -2 and 2
function validateMonotony(input, rising) {
  const norm = normalizeExpression(input || '');
  if (!norm) return false;
  const has2 = norm.includes('2');
  const hasMinus2 = norm.includes('-2');
  if (!has2 || !hasMinus2) return false;
  if (rising) {
    // rising: x < -2 OR x > 2 — should NOT contain interval like (-2,2)
    // Accept: "x<-2 oder x>2", "(-inf,-2)u(2,inf)", etc.
    // Key: must mention -2 and 2, and have the right structure
    const hasOr = norm.includes('oder') || norm.includes('union') || norm.includes('∪') || norm.includes('u(') || norm.includes('),(');
    return hasOr || (norm.includes('<-2') || norm.includes('x<-2')) || norm.includes(',-2');
  } else {
    // falling: -2 < x < 2 — interval between -2 and 2
    const hasBetween =
      norm.includes('(-2,2)') ||
      norm.includes('-2<x<2') ||
      norm.includes('-2<x') ||
      (norm.includes('-2') && norm.includes('<x<2')) ||
      (norm.includes('>-2') && norm.includes('<2')) ||
      norm.includes('-2,2)');
    return hasBetween;
  }
}

function D4EX3Component({ answers, onAnswer, stepResults, isComplete }) {
  const s1Status = stepResults[0] === true ? 'correct' : stepResults[0] === false ? 'incorrect' : null;
  const s2Status = stepResults[1] === true ? 'correct' : stepResults[1] === false ? 'incorrect' : null;

  return (
    <div className="exercise-content">
      <p className="exercise-prompt">
        Bestimme die <strong>Monotonie-Intervalle</strong> von <em>f(x) = x³ − 12x</em>.
      </p>
      <FunctionGraph
        fn={fn}
        xRange={[-4, 4]}
        yRange={[-20, 20]}
        showGrid={true}
        highlightPoints={[
          { x: -2, y: 16, color: 'var(--mp-primary)', label: 'HP(-2|16)' },
          { x: 2, y: -16, color: 'var(--mp-secondary)', label: 'TP(2|-16)' },
        ]}
      />
      <div className="exercise-formula" style={{ margin: '0.75rem 0' }}>
        <FormulaDisplay formula="f(x) = x^3 - 12x \quad f'(x) = 3x^2 - 12 = 0 \Rightarrow x = \pm 2" displayMode={false} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <MathInput
          label="f steigt in:"
          value={answers.rising || ''}
          onChange={(val) => onAnswer('rising', val)}
          status={s1Status}
          disabled={isComplete}
          placeholder="z.B. x<-2 oder x>2"
          size="large"
        />
        <MathInput
          label="f fällt in:"
          value={answers.falling || ''}
          onChange={(val) => onAnswer('falling', val)}
          status={s2Status}
          disabled={isComplete}
          placeholder="z.B. -2<x<2"
          size="large"
        />
      </div>
      {stepResults[0] === true && stepResults[1] === true && (
        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'var(--success-bg)', borderRadius: '8px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Richtig!</p>
          <FormulaDisplay formula="f \text{ steigt für } x < -2 \text{ und } x > 2" displayMode={false} />
          <FormulaDisplay formula="f \text{ fällt für } -2 < x < 2" displayMode={false} />
        </div>
      )}
    </div>
  );
}

export const exercise = {
  id: 'D4-EX3',
  levelId: 4,
  order: 3,
  title: 'Monotonie-Intervalle',
  description: 'Bestimme die Monotonie-Intervalle von f(x) = x³ − 12x.',
  type: 'input',
  xp: { base: 15, bonus: 8 },
  steps: ['Steigendes Intervall angeben', 'Fallendes Intervall angeben'],
  hints: [
    'Bestimme die Extremstellen: f\'(x) = 3x² − 12 = 0 → x = ±2.',
    'Prüfe das Vorzeichen von f\'(x) in den Teilintervallen.',
    'f\'(-3) = 27 − 12 = 15 > 0 (steigend), f\'(0) = −12 < 0 (fallend), f\'(3) = 27 − 12 = 15 > 0 (steigend)',
  ],
  component: D4EX3Component,
  validate: (answers) => {
    const risingOk = (!answers.rising || answers.rising === '') ? null : validateMonotony(answers.rising, true);
    const fallingOk = (!answers.falling || answers.falling === '') ? null : validateMonotony(answers.falling, false);
    const stepResults = [risingOk, fallingOk];
    const complete = stepResults.every(Boolean);
    const doneCount = stepResults.filter(Boolean).length;
    return {
      complete,
      stepResults,
      message: complete
        ? null
        : `${doneCount} von 2 Antworten richtig. Tipp: Kritische Werte sind x = −2 und x = 2.`,
    };
  },
};
