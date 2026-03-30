import FormulaDisplay from '../math/FormulaDisplay';
import MathText from './MathText';
import CharacterCallout from './CharacterCallout';
import LessonSection from './LessonSection';

/**
 * Explanatory text section — text blocks, formulas, and character callouts.
 */
export default function LessonExplanation({ blocks, topicId, character, t, accentColor, onRead }) {
  if (!blocks?.length) return null;

  return (
    <LessonSection
      icon="📖"
      title={t('lesson.explanation')}
      accentColor={accentColor}
      onRead={onRead}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {blocks.map((block, i) => {
          switch (block.type) {
            case 'text':
              return (
                <p key={i} style={{
                  margin: 0,
                  fontSize: '0.9rem',
                  color: 'var(--mp-text)',
                  lineHeight: 1.7,
                }}>
                  <MathText text={t(`lessons.${topicId}.${block.key}`)} />
                </p>
              );

            case 'formula':
              return (
                <div key={i} className="lesson-formula" style={{
                  textAlign: 'center',
                  overflow: 'hidden',
                }}>
                  <FormulaDisplay formula={block.latex} displayMode={true} />
                </div>
              );

            case 'callout':
              return (
                <CharacterCallout key={i} character={character}>
                  <MathText text={t(`lessons.${topicId}.${block.key}`)} />
                </CharacterCallout>
              );

            default:
              return null;
          }
        })}
      </div>
    </LessonSection>
  );
}
