import { motion } from 'framer-motion';
import MathText from './MathText';
import { useDisplayMode } from '../../context/DisplayModeContext';

/**
 * Story resolution at the end of a topic.
 * Shows how the character solved their problem + progress + teaser for next topic.
 */
export default function StoryOutro({ character, topicId, topicIndex, totalTopics, t }) {
  const { mode } = useDisplayMode();
  if (mode === 'adult') return null;
  if (!character) return null;

  const outro = t(`lessons.${topicId}.story.outro`);
  // If no outro text exists, don't render
  if (!outro || outro === `lessons.${topicId}.story.outro`) return null;

  const progressPct = totalTopics > 0 ? Math.round(((topicIndex + 1) / totalTopics) * 100) : 0;
  const barWidth = `${progressPct}%`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{
        padding: '1rem',
        borderRadius: '12px',
        background: character.colorDark,
        border: `1px solid ${character.color}30`,
        marginTop: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: `linear-gradient(to right, ${character.color}, transparent)`,
      }} />

      {/* Outro text */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'flex-start',
      }}>
        <img
          src={character.portrait}
          alt={character.name}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `2px solid ${character.color}`,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <p style={{
            margin: 0,
            fontSize: '0.88rem',
            color: character.colorText,
            lineHeight: 1.6,
          }}>
            <MathText text={outro} />
          </p>
        </div>
      </div>

      {/* Project progress */}
      <div style={{ marginTop: '0.75rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.3rem',
        }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--mp-muted)' }}>
            📊 {character.story} — Projektfortschritt
          </span>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: character.color,
          }}>
            {progressPct}%
          </span>
        </div>
        <div style={{
          height: 6,
          borderRadius: 3,
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: barWidth }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              height: '100%',
              borderRadius: 3,
              background: `linear-gradient(to right, ${character.color}, ${character.color}80)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
