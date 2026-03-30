import FormulaDisplay from '../math/FormulaDisplay';
import MathText from './MathText';
import LessonSection from './LessonSection';

/**
 * Real-world examples — "Where do you encounter this in daily life?"
 * Makes math tangible with relatable scenarios from students' world.
 */
export default function LessonRealWorld({ examples, topicId, t, accentColor }) {
  if (!examples?.length) return null;

  return (
    <LessonSection
      icon="🌍"
      title={t('lesson.realWorld')}
      accentColor={accentColor}
    >
      <div style={{
        display: 'grid',
        gap: '0.5rem',
      }}>
        {examples.map((ex, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '0.6rem',
            alignItems: 'flex-start',
            padding: '0.6rem 0.75rem',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--mp-border)',
          }}>
            {/* Icon */}
            <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>
              {ex.icon}
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              <strong style={{
                fontSize: '0.85rem',
                color: 'var(--mp-text)',
                display: 'block',
              }}>
                {t(`lessons.${topicId}.${ex.titleKey}`)}
              </strong>
              <p style={{
                margin: '0.2rem 0 0',
                fontSize: '0.82rem',
                color: 'var(--mp-muted)',
                lineHeight: 1.5,
              }}>
                <MathText text={t(`lessons.${topicId}.${ex.descriptionKey}`)} />
              </p>
              {ex.formula && (
                <div className="lesson-formula" style={{ marginTop: '0.3rem', overflow: 'hidden' }}>
                  <FormulaDisplay formula={ex.formula} displayMode={true} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </LessonSection>
  );
}
