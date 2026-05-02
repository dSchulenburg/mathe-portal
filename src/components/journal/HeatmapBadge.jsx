import { useEffect, useState } from 'react';
import { createJournalStore } from '@lernmodule/journal/store';

const MODULE_ID = 'mathe-portal';
const HEATMAP_URL =
  'https://dashboard.dirk-schulenburg.net/api/journal/heatmap?moduleId=' +
  MODULE_ID;
const FETCH_TIMEOUT_MS = 4000;

const store = typeof window !== 'undefined' ? createJournalStore() : null;

// Module-level cache so every TopicCard mount on the same page shares one
// fetch — the badge appears next to ~30 topics on the grid view.
let swarmPromise = null;
function loadSwarm() {
  if (swarmPromise) return swarmPromise;
  if (typeof fetch !== 'function') return Promise.resolve(null);

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  swarmPromise = fetch(HEATMAP_URL, { signal: ctrl.signal })
    .then((r) => {
      clearTimeout(timer);
      if (!r.ok) throw new Error(`heatmap ${r.status}`);
      return r.json();
    })
    .catch(() => {
      clearTimeout(timer);
      // Silent fail — the badge is "invisible at 0", which already handles
      // the offline / not-yet-deployed case gracefully.
      return null;
    });
  return swarmPromise;
}

function getLocalCount(topicId) {
  if (!store) return 0;
  const entries = store.getEntriesForModule(MODULE_ID);
  const sectionId = `topic-${topicId}`;
  return entries.filter(
    (e) => e.sectionId === sectionId && e.modality !== 'skip',
  ).length;
}

/**
 * Stigmergie-Badge: shows how many anonymous reflections exist for a topic.
 *
 * Phase 2: fetches aggregated counts from the dashboard-api heatmap endpoint
 * (one request per page mount, shared across all badges via module cache).
 * Falls back to local-only counts on network failure — the badge is
 * "invisible at 0", so a silent failure just shows the user's own data.
 *
 * Renders nothing if the merged count is 0.
 */
export default function HeatmapBadge({ topicId }) {
  const [swarmCount, setSwarmCount] = useState(null);
  const localCount = getLocalCount(topicId);

  useEffect(() => {
    let cancelled = false;
    loadSwarm().then((data) => {
      if (cancelled) return;
      if (!data) {
        setSwarmCount(0);
        return;
      }
      const sectionId = `topic-${topicId}`;
      setSwarmCount(Number(data[sectionId]) || 0);
    });
    return () => {
      cancelled = true;
    };
  }, [topicId]);

  // Combine local (own) and swarm (others) counts. Local entries are also
  // counted in the swarm aggregate iff the user opted in — but we can't
  // tell that from here, so we take the max to avoid double-counting in
  // the common opted-in case while still showing local-only entries when
  // opted out or before the first POST has propagated.
  const count = Math.max(localCount, swarmCount ?? 0);

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
