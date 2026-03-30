import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';
import { getTopicStory } from '../../data/characters';
import StoryScene from './StoryScene';
import LessonObjectives from './LessonObjectives';
import LessonExplanation from './LessonExplanation';
import LessonConcepts from './LessonConcepts';
import LessonExamples from './LessonExamples';
import LessonRealWorld from './LessonRealWorld';
import LessonMistakes from './LessonMistakes';
import LessonPrerequisites from './LessonPrerequisites';

/**
 * Orchestrator component — assembles all lesson sections.
 * Renders between the header and the exercises in TopicView.
 * Each section is independently collapsible via its own header.
 */
export default function LessonLayer({ lesson, topicId, topicColor, completionPct, onNavigateTopic }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(completionPct < 50);

  const topicStory = getTopicStory(topicId);
  const character = topicStory?.character;
  const accentColor = character?.color || topicColor || 'var(--mp-primary)';

  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* Story Scene — always visible */}
      {topicStory && character && (
        <StoryScene
          character={character}
          story={lesson.story}
          topicStory={{ ...topicStory, topicId }}
          t={t}
        />
      )}

      {/* Lesson content — collapsible */}
      {expanded ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <LessonObjectives
            objectives={lesson.objectives}
            topicId={topicId}
            t={t}
            accentColor={accentColor}
          />

          <LessonExplanation
            blocks={lesson.explanation}
            topicId={topicId}
            character={character}
            t={t}
            accentColor={accentColor}
          />

          <LessonConcepts
            concepts={lesson.concepts}
            topicId={topicId}
            t={t}
            accentColor={accentColor}
          />

          <LessonExamples
            examples={lesson.examples}
            topicId={topicId}
            character={character}
            t={t}
            accentColor={accentColor}
          />

          <LessonRealWorld
            examples={lesson.realWorld}
            topicId={topicId}
            t={t}
            accentColor={accentColor}
          />

          <LessonMistakes
            mistakes={lesson.mistakes}
            topicId={topicId}
            character={character}
            t={t}
            accentColor={accentColor}
          />

          <LessonPrerequisites
            prerequisites={lesson.prerequisites}
            t={t}
            accentColor={accentColor}
            onNavigate={onNavigateTopic}
          />

          {/* Collapse link — subtle, not a big button */}
          <div
            onClick={() => setExpanded(false)}
            style={{
              textAlign: 'center',
              padding: '0.3rem',
              fontSize: '0.75rem',
              color: 'var(--mp-muted)',
              cursor: 'pointer',
            }}
          >
            ▲ {t('lesson.collapseLesson')}
          </div>
        </motion.div>
      ) : (
        /* Collapsed banner */
        <button
          onClick={() => setExpanded(true)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            border: `1px solid ${accentColor}30`,
            background: `${accentColor}08`,
            color: accentColor,
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 500,
            marginBottom: '0.5rem',
          }}
        >
          📖 {t('lesson.expandLesson')} ›
        </button>
      )}
    </div>
  );
}
