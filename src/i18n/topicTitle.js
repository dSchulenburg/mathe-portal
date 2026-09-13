/**
 * Uebersetzter Themen-Titel. topics.js traegt im Feld titleKey historisch den
 * deutschen Klartext; der eigentliche Key ist topics.<id>.title (portal-batch1).
 * Fehlt er, liefert t() den Key selbst zurueck — dann gilt der Klartext.
 */
export function topicTitle(t, topic) {
  if (!topic) return '';
  if (typeof t !== 'function') return topic.titleKey;
  const key = `topics.${topic.id}.title`;
  const str = t(key);
  return typeof str === 'string' && str !== key ? str : topic.titleKey;
}

/**
 * Sprechblase der n-ten Bruecke eines Themas, Rueckfall auf den deutschen Text
 * aus data/lessons.
 */
export function bridgeText(t, topicId, n, fallback) {
  if (typeof t !== 'function' || !topicId) return fallback;
  const key = `bridges.${topicId}.${n}`;
  const str = t(key);
  return typeof str === 'string' && str !== key ? str : fallback;
}
