import LessonSection from './LessonSection';

/**
 * Learning objectives checklist — "Nach diesem Thema kannst du..."
 */
export default function LessonObjectives({ objectives, topicId, t, accentColor }) {
  if (!objectives?.length) return null;

  return (
    <LessonSection
      icon="🎯"
      title={t('lesson.objectives')}
      subtitle={t('lesson.objectivesSubtitle')}
      accentColor={accentColor}
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
            {t(`lessons.${topicId}.${key}`)}
          </li>
        ))}
      </ul>
    </LessonSection>
  );
}
