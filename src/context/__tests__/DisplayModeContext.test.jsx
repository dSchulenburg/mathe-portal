// mathe-portal/src/context/__tests__/DisplayModeContext.test.jsx
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import { DisplayModeProvider, useDisplayMode } from '../DisplayModeContext';

describe('DisplayModeContext', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    sessionStorage.clear();
  });

  it('defaults to youth mode with no query params', () => {
    const { result } = renderHook(() => useDisplayMode(), {
      wrapper: DisplayModeProvider,
    });
    expect(result.current.mode).toBe('youth');
    expect(result.current.embed).toBe(false);
  });

  it('reads mode=adult from query params', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    const { result } = renderHook(() => useDisplayMode(), {
      wrapper: DisplayModeProvider,
    });
    expect(result.current.mode).toBe('adult');
  });

  it('reads embed=1 from query params', () => {
    window.history.replaceState({}, '', '/?embed=1');
    const { result } = renderHook(() => useDisplayMode(), {
      wrapper: DisplayModeProvider,
    });
    expect(result.current.embed).toBe(true);
  });

  it('persists mode in sessionStorage across provider remounts', () => {
    window.history.replaceState({}, '', '/?mode=adult');
    renderHook(() => useDisplayMode(), { wrapper: DisplayModeProvider });
    // Simulate a remount with clean URL (deep-link navigation inside SPA)
    window.history.replaceState({}, '', '/');
    const { result } = renderHook(() => useDisplayMode(), {
      wrapper: DisplayModeProvider,
    });
    expect(result.current.mode).toBe('adult');
  });
});
