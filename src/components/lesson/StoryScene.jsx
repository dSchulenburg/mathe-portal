import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import MathText from './MathText';

/**
 * Character-driven story intro for a topic.
 * Shows portrait, story context, challenge, and audio player.
 */
export default function StoryScene({ character, story, topicStory, t }) {
  if (!character || !story) return null;

  const intro = t(`lessons.${topicStory.topicId}.story.intro`);
  const challenge = t(`lessons.${topicStory.topicId}.story.challenge`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '12px',
        background: `${character.colorDark}`,
        border: `1px solid ${character.color}40`,
        marginBottom: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: `linear-gradient(to bottom, ${character.color}, transparent)`,
      }} />

      {/* Portrait */}
      <div style={{ flexShrink: 0, paddingLeft: '0.5rem' }}>
        <img
          src={character.portrait}
          alt={character.name}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: `2px solid ${character.color}`,
          }}
        />
        <p style={{
          textAlign: 'center',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: character.color,
          marginTop: 4,
        }}>
          {character.name.split(' ')[0]}
        </p>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Story intro text */}
        <p style={{
          margin: 0,
          fontSize: '0.9rem',
          color: character.colorText,
          lineHeight: 1.6,
        }}>
          <MathText text={intro} />
        </p>

        {/* Challenge badge */}
        {challenge && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            marginTop: '0.5rem',
            padding: '0.3rem 0.6rem',
            borderRadius: '6px',
            background: `${character.color}20`,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: character.color,
          }}>
            🎯 {challenge}
          </div>
        )}

        {/* Audio player */}
        {topicStory.audioFile && (
          <div style={{ marginTop: '0.6rem' }}>
            <AudioPlayer
              src={topicStory.audioFile}
              accentColor={character.color}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
