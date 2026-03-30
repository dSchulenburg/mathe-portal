import { getTopic } from '../../data/topics';
import LessonSection from './LessonSection';

/**
 * Prerequisite topic links — clickable cards to navigate back.
 */
export default function LessonPrerequisites({ prerequisites, t, accentColor, onNavigate }) {
  if (!prerequisites?.length) return null;

  const topics = prerequisites.map(id => getTopic(id)).filter(Boolean);
  if (!topics.length) return null;

  return (
    <LessonSection
      icon="🔗"
      title={t('lesson.prerequisites')}
      subtitle={t('lesson.prerequisitesSubtitle')}
      accentColor={accentColor}
      defaultOpen={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onNavigate?.(topic.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid var(--mp-border)',
              background: 'var(--mp-surface)',
              cursor: 'pointer',
              color: 'var(--mp-text)',
              textAlign: 'left',
              width: '100%',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>{topic.icon}</span>
            <span style={{ flex: 1, fontSize: '0.85rem', fontWeight: 500 }}>
              {topic.titleKey}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--mp-muted)' }}>
              {topic.period} →
            </span>
          </button>
        ))}
      </div>
    </LessonSection>
  );
}
