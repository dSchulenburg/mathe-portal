import { useState, useEffect } from 'react';

/**
 * Simple hash-based router for Moodle iframe embedding.
 *
 * Routes:
 *   #/                          → home (topic selector)
 *   #/topic/10-quad-funktionen  → single topic view (for iframe)
 *   #/exercise/quad-001         → single exercise (for iframe/OER)
 *   #/checkpoint/10-quad        → selftest (for iframe)
 */

export function parseRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);

  if (parts[0] === 'topics') {
    return { view: 'topics' };
  }
  if (parts[0] === 'topic' && parts[1]) {
    return { view: 'topic', topicId: parts[1] };
  }
  if (parts[0] === 'exercise' && parts[1]) {
    return { view: 'exercise', exerciseId: parts[1] };
  }
  if (parts[0] === 'checkpoint' && parts[1]) {
    return { view: 'checkpoint', topicId: parts[1] };
  }
  return { view: 'home' };
}

export function navigate(path) {
  window.location.hash = path;
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseRoute());

  useEffect(() => {
    const handler = () => setRoute(parseRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return route;
}
