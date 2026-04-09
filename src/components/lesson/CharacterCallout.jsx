import { useDisplayMode } from '../../context/DisplayModeContext';

/**
 * Character speech bubble — "Mia sagt: ..."
 * Shows character portrait with a callout message.
 */
export default function CharacterCallout({ character, children }) {
  const { mode } = useDisplayMode();
  if (mode === 'adult') return null;
  if (!character) return null;

  return (
    <div style={{
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-start',
      padding: '0.75rem',
      borderRadius: '10px',
      background: `${character.color}10`,
      border: `1px solid ${character.color}30`,
      margin: '0.5rem 0',
    }}>
      <img
        src={character.portrait}
        alt={character.name}
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `2px solid ${character.color}`,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: character.color,
        }}>
          {character.name} sagt:
        </span>
        <div style={{
          fontSize: '0.9rem',
          color: 'var(--mp-text)',
          marginTop: 2,
          lineHeight: 1.5,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}
