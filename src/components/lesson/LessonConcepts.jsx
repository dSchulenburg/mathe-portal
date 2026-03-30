import FormulaDisplay from '../math/FormulaDisplay';
import MathText from './MathText';
import LessonSection from './LessonSection';

const HIGHLIGHT_COLORS = {
  amber: '#fbbf24',
  purple: '#a78bfa',
  rose: '#fb7185',
  cyan: '#06b6d4',
  green: '#34d399',
};

/**
 * Key concept cards — definitions + formulas in colored cards.
 */
export default function LessonConcepts({ concepts, topicId, t, accentColor, onRead }) {
  if (!concepts?.length) return null;

  return (
    <LessonSection
      icon="🔑"
      title={t('lesson.concepts')}
      accentColor={accentColor}
      onRead={onRead}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}>
        {concepts.map((concept, i) => {
          const color = HIGHLIGHT_COLORS[concept.highlight] || HIGHLIGHT_COLORS.purple;
          return (
            <div key={i} style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              borderLeft: `3px solid ${color}`,
              background: `${color}08`,
            }}>
              <h4 style={{
                margin: 0,
                fontSize: '0.9rem',
                fontWeight: 700,
                color,
              }}>
                {t(`lessons.${topicId}.${concept.titleKey}`)}
              </h4>
              <p style={{
                margin: '0.3rem 0 0',
                fontSize: '0.85rem',
                color: 'var(--mp-text)',
                lineHeight: 1.5,
              }}>
                <MathText text={t(`lessons.${topicId}.${concept.descriptionKey}`)} />
              </p>
              {concept.formula && (
                <div className="lesson-formula" style={{
                  marginTop: '0.5rem',
                  textAlign: 'center',
                  overflow: 'hidden',
                }}>
                  <FormulaDisplay formula={concept.formula} displayMode={true} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </LessonSection>
  );
}
