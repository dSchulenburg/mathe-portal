import FormulaDisplay from '../math/FormulaDisplay';
import MathText from './MathText';
import CharacterCallout from './CharacterCallout';
import LessonSection from './LessonSection';

/**
 * Common mistakes section — wrong vs. right with explanations.
 */
export default function LessonMistakes({ mistakes, topicId, character, t, accentColor, onRead }) {
  if (!mistakes?.length) return null;

  return (
    <LessonSection
      icon="⚠️"
      title={t('lesson.mistakes')}
      subtitle={t('lesson.mistakesSubtitle')}
      accentColor={accentColor}
      onRead={onRead}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {mistakes.map((mistake, i) => (
          <div key={i} style={{
            padding: '0.75rem',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--mp-border)',
          }}>
            {/* Wrong vs Right */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.5rem',
              marginBottom: '0.5rem',
            }}>
              {/* Wrong */}
              <div style={{
                padding: '0.5rem',
                borderRadius: '6px',
                background: 'rgba(251,113,133,0.08)',
                border: '1px solid rgba(251,113,133,0.25)',
                textAlign: 'center',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--mp-error)',
                  marginBottom: '0.3rem',
                }}>
                  ✗ <MathText text={t(`lessons.${topicId}.${mistake.wrongKey}`)} />
                </span>
                {mistake.wrongFormula && (
                  <FormulaDisplay formula={mistake.wrongFormula} displayMode={false} />
                )}
              </div>

              {/* Right */}
              <div style={{
                padding: '0.5rem',
                borderRadius: '6px',
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.25)',
                textAlign: 'center',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--mp-success)',
                  marginBottom: '0.3rem',
                }}>
                  ✓ <MathText text={t(`lessons.${topicId}.${mistake.correctKey}`)} />
                </span>
                {mistake.correctFormula && (
                  <FormulaDisplay formula={mistake.correctFormula} displayMode={false} />
                )}
              </div>
            </div>

            {/* Explanation */}
            <p style={{
              margin: 0,
              fontSize: '0.82rem',
              color: 'var(--mp-text)',
              lineHeight: 1.5,
            }}>
              <MathText text={t(`lessons.${topicId}.${mistake.explanationKey}`)} />
            </p>

            {/* Character warning */}
            {mistake.characterWarning && character && (
              <div style={{ marginTop: '0.4rem' }}>
                <CharacterCallout character={character}>
                  <MathText text={t(`lessons.${topicId}.${mistake.characterWarning}`)} />
                </CharacterCallout>
              </div>
            )}
          </div>
        ))}
      </div>
    </LessonSection>
  );
}
