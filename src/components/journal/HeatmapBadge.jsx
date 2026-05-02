import { useMemo } from 'react';
import { createJournalStore } from '@lernmodule/journal/store';

const MODULE_ID = 'mathe-portal';
const store = typeof window !== 'undefined' ? createJournalStore() : null;

/**
 * Stigmergie-Badge: shows how many anonymous reflections exist for a topic.
 * Phase 1: only the user's own entries (via local store). Real swarm data
 * follows when the dashboard-api gets a /api/journal/heatmap endpoint —
 * the network call goes here in `useEffect` (TODO).
 *
 * Renders nothing if there are no entries — invisible until something
 * is actually there.
 */
export default function HeatmapBadge({ topicId }) {
  const count = useMemo(() => {
    if (!store) return 0;
    const entries = store.getEntriesForModule(MODULE_ID);
    const sectionId = `topic-${topicId}`;
    return entries.filter(
      (e) => e.sectionId === sectionId && e.modality !== 'skip'
    ).length;
  }, [topicId]);

  if (count === 0) return null;

  // Heat scale: 1-2 entries = lukewarm, 3-7 = warm, 8+ = hot
  const intensity = count >= 8 ? 'hot' : count >= 3 ? 'warm' : 'lukewarm';
  const palette = {
    lukewarm: { bg: '#fde68a40', fg: '#b45309', border: '#fbbf24' },
    warm: { bg: '#fb923c30', fg: '#c2410c', border: '#f97316' },
    hot: { bg: '#ef444430', fg: '#b91c1c', border: '#ef4444' },
  };
  const c = palette[intensity];

  return (
    <span
      title={`${count} Reflexion${count === 1 ? '' : 'en'} im Lerntagebuch`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0.15rem 0.45rem',
        borderRadius: '999px',
        fontSize: '0.65rem',
        fontWeight: 600,
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.border}`,
        fontFamily: 'ui-monospace, monospace',
      }}
    >
      📓 {count}
    </span>
  );
}
