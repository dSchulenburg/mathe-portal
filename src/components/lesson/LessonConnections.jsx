import { getTopic } from '../../data/topics';
import { getCharacterById } from '../../data/characters';
import LessonSection from './LessonSection';

const RELATION_LABELS = {
  'baut-auf': 'baut auf',
  'fuehrt-zu': 'führt zu',
  'verwandt': 'verwandt mit',
  'anwendung': 'angewandt in',
};

const RELATION_COLORS = {
  'baut-auf': '#a78bfa',
  'fuehrt-zu': '#22c55e',
  'verwandt': '#06b6d4',
  'anwendung': '#f59e0b',
};

/**
 * Cross-topic bridges with character-narrated speech bubbles.
 * Distinct from LessonPrerequisites: prerequisites are structural ("you must know X first"),
 * connections are conceptual ("this idea reappears here in a new costume").
 */
export default function LessonConnections({ connections, t, accentColor, onNavigate }) {
  if (!connections?.length) return null;

  return (
    <LessonSection
      icon="🌉"
      title={t ? t('lesson.connections') : 'Brücken zu anderen Themen'}
      subtitle={t ? t('lesson.connectionsSubtitle') : 'Wo dieselbe Idee wieder auftaucht'}
      accentColor={accentColor}
      defaultOpen={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {connections.map((conn, idx) => {
          const topic = getTopic(conn.topicId);
          if (!topic) return null;
          const character = getCharacterById(conn.bubble?.character);
          const relColor = RELATION_COLORS[conn.relation] || 'var(--mp-muted)';
          const relLabel = RELATION_LABELS[conn.relation] || conn.relation;

          return (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {conn.bubble && character && (
                <div
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    alignItems: 'flex-start',
                    padding: '0.6rem 0.75rem',
                    borderRadius: '12px',
                    background: 'var(--mp-surface-soft, var(--mp-surface))',
                    border: `1px solid ${character.color}40`,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: '2.2rem',
                      height: '2.2rem',
                      borderRadius: '50%',
                      background: `${character.color}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                    }}
                    title={character.name}
                  >
                    {character.emoji || character.name?.[0] || '?'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.7rem', color: character.color, fontWeight: 600, marginBottom: '0.15rem' }}>
                      {character.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--mp-text)', lineHeight: 1.45 }}>
                      {conn.bubble.text}
                    </div>
                  </div>
                </div>
              )}

              <button
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
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '999px',
                    background: `${relColor}20`,
                    color: relColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                  }}
                >
                  {relLabel}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--mp-muted)' }}>→</span>
              </button>
            </div>
          );
        })}
      </div>
    </LessonSection>
  );
}
