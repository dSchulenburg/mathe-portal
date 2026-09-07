import LessonSection from './LessonSection';
import MathText from './MathText';

/**
 * Learning objectives checklist — "Nach diesem Thema kannst du..."
 *
 * Der Text laeuft durch MathText: 27 Lernziel-Zeilen in 14 Themen enthalten
 * Formeln, die hier bis zum 07.09.2026 als roher LaTeX-Quelltext auf dem
 * Bildschirm standen. Siehe __tests__/LessonObjectives.math.test.jsx.
 */
export default function LessonObjectives({ objectives, topicId, t, accentColor, onRead }) {
  if (!objectives?.length) return null;

  return (
    <LessonSection
      icon="🎯"
      title={t('lesson.objectives')}
      subtitle={t('lesson.objectivesSubtitle')}
      accentColor={accentColor}
      onRead={onRead}
    >
      <ul style={{
        margin: 0,
        paddingLeft: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
      }}>
        {objectives.map((key, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            fontSize: '0.9rem',
            color: 'var(--mp-text)',
            lineHeight: 1.5,
          }}>
            <span style={{ color: 'var(--mp-success)', flexShrink: 0 }}>✓</span>
            <MathText text={t(`lessons.${topicId}.${key}`)} />
          </li>
        ))}
      </ul>
    </LessonSection>
  );
}
