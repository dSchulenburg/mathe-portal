import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';

// Note: HeatmapBadge holds a module-level swarmPromise cache so all badges
// on a page share one fetch. We re-import the module fresh via vi.resetModules
// before each test so the cache doesn't leak between cases.

describe('HeatmapBadge', () => {
  let originalFetch;

  beforeEach(() => {
    vi.resetModules();
    originalFetch = globalThis.fetch;
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    globalThis.fetch = originalFetch;
  });

  it('renders nothing when both local and swarm counts are 0', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
    const { default: HeatmapBadge } = await import('../HeatmapBadge.jsx');
    const { container } = render(<HeatmapBadge topicId="10-wahrscheinlichkeit" />);
    // Wait one microtask cycle for the effect's then-callback.
    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it('renders the swarm count when fetch returns data', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ 'topic-10-wahrscheinlichkeit': 5 }),
    });
    const { default: HeatmapBadge } = await import('../HeatmapBadge.jsx');
    render(<HeatmapBadge topicId="10-wahrscheinlichkeit" />);
    await screen.findByText('📓 5');
  });

  it('falls back to local count when fetch fails', async () => {
    // Seed local store with two entries for this topic.
    const sectionId = 'topic-10-test';
    localStorage.setItem('journal:module-ids', JSON.stringify(['mathe-portal']));
    localStorage.setItem(
      'journal:entries:mathe-portal',
      JSON.stringify([
        { id: '1', timestamp: 1, moduleId: 'mathe-portal', sectionId, modality: 'voice', context: { concepts: [] }, prompt: 'p' },
        { id: '2', timestamp: 2, moduleId: 'mathe-portal', sectionId, modality: 'text', context: { concepts: [] }, prompt: 'p' },
      ]),
    );

    globalThis.fetch = vi.fn().mockRejectedValue(new Error('network down'));
    const { default: HeatmapBadge } = await import('../HeatmapBadge.jsx');
    render(<HeatmapBadge topicId="10-test" />);
    await screen.findByText('📓 2');
  });

  it('hits the heatmap endpoint exactly once across multiple mounts', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ 'topic-a': 3, 'topic-b': 2 }),
    });
    globalThis.fetch = fetchMock;
    const { default: HeatmapBadge } = await import('../HeatmapBadge.jsx');
    render(
      <>
        <HeatmapBadge topicId="a" />
        <HeatmapBadge topicId="b" />
        <HeatmapBadge topicId="c" />
      </>,
    );
    await screen.findByText('📓 3');
    await screen.findByText('📓 2');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
