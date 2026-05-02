import { useEffect, useState, useRef } from 'react';
import { MikroCard } from '@lernmodule/journal/MikroCard';
import { createJournalStore } from '@lernmodule/journal/store';
import { pickFallbackPrompt } from '@lernmodule/journal/fallbackPrompts';

const MODULE_ID = 'mathe-portal';
const HEATMAP_ENTRY_URL =
  'https://dashboard.dirk-schulenburg.net/api/journal/heatmap/entry';
const HEATMAP_POST_TIMEOUT_MS = 3000;

const store = typeof window !== 'undefined' ? createJournalStore() : null;

// Fire-and-forget anonymous POST to the heatmap endpoint when the learner
// has opted into swarm visibility. Sends ONLY (moduleId, sectionId) — no
// transcript, no user id. Silent on any failure: this is best-effort.
function postHeatmapEntry(sectionId) {
  if (typeof fetch !== 'function') return;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), HEATMAP_POST_TIMEOUT_MS);
  fetch(HEATMAP_ENTRY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ moduleId: MODULE_ID, sectionId }),
    signal: ctrl.signal,
    // No credentials — anonymous by design.
    credentials: 'omit',
    keepalive: true,
  })
    .catch(() => { /* silent */ })
    .finally(() => clearTimeout(timer));
}

/**
 * Mount-component for the journal MikroCard. Listens for the
 * `journal:section-complete` window event, fetches a reflection prompt
 * (with offline fallback), and shows the voice-first overlay.
 *
 * The component itself renders nothing when idle.
 */
export default function MikroCardMount() {
  const [trigger, setTrigger] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const recentPromptsRef = useRef([]);

  useEffect(() => {
    if (!store) return;

    function handleSectionComplete(event) {
      const detail = event.detail || {};
      const { moduleId, sectionId, concepts = [], character } = detail;
      if (moduleId !== MODULE_ID) return;
      if (!sectionId) return;
      // Skip if user already skipped this section in this session
      if (store.isSkippedThisSession(moduleId, sectionId)) return;
      // Or if there's already an entry for this section today
      if (store.hasEntryForSectionToday(moduleId, sectionId)) return;

      setTrigger({ sectionId, concepts, character });
    }

    window.addEventListener('journal:section-complete', handleSectionComplete);
    return () => window.removeEventListener('journal:section-complete', handleSectionComplete);
  }, []);

  // Fetch prompt when trigger arrives — fall back to static prompt on any failure
  useEffect(() => {
    if (!trigger) {
      setPrompt(null);
      return;
    }

    let cancelled = false;
    const fallback = pickFallbackPrompt(recentPromptsRef.current);
    setPrompt(fallback);  // optimistic

    // Try to fetch a smart prompt (with 1.5s timeout in promptApi)
    import('@lernmodule/journal/promptApi')
      .then(({ fetchPrompt }) =>
        fetchPrompt({
          moduleId: MODULE_ID,
          sectionId: trigger.sectionId,
          concepts: trigger.concepts,
          character: trigger.character,
        })
      )
      .then((p) => {
        if (cancelled || !p) return;
        setPrompt(p);
      })
      .catch(() => {
        // Stick with fallback
      });

    return () => { cancelled = true; };
  }, [trigger]);

  if (!trigger || !prompt || !store) return null;

  function handleSave(entry) {
    store.addEntry(entry);
    recentPromptsRef.current = [prompt, ...recentPromptsRef.current].slice(0, 8);
    // Stigmergie: if the learner has opted into swarm visibility, contribute
    // an anonymous (moduleId, sectionId) tuple to the heatmap aggregate.
    // Skip "skip"-modality entries — those are non-reflections.
    try {
      const settings = store.getSettings();
      if (settings.swarmOptedIn && entry.modality !== 'skip' && entry.sectionId) {
        postHeatmapEntry(entry.sectionId);
      }
    } catch {
      /* settings unreadable → don't post */
    }
    setTrigger(null);
  }

  function handleSkip() {
    if (trigger) {
      store.markSkippedThisSession(MODULE_ID, trigger.sectionId);
    }
    setTrigger(null);
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Lerntagebuch"
    >
      <div
        style={{
          background: 'var(--mp-surface, #fff)',
          borderRadius: '14px',
          maxWidth: '480px',
          width: '100%',
          padding: '1.5rem',
          boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
        }}
      >
        <MikroCard
          prompt={prompt}
          moduleId={MODULE_ID}
          sectionId={trigger.sectionId}
          context={{ concepts: trigger.concepts, character: trigger.character }}
          onSave={handleSave}
          onSkip={handleSkip}
        />
      </div>
    </div>
  );
}
