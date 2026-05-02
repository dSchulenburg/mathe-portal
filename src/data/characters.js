/**
 * Character registry and topic-story mapping.
 * Three characters guide students through the three grade levels.
 */

export const CHARACTERS = {
  mia: {
    id: 'mia',
    name: 'Mia Kovács',
    age: 26,
    role: 'Mathematikerin & Indie-Game-Entwicklerin',
    story: 'Hafenlichter',
    storyDesc: '2D-Platformer am Hamburger Hafen',
    portrait: new URL('../../assets/mia/portrait.svg', import.meta.url).href,
    color: '#c4b5fd',
    colorDark: '#1a1525',
    colorText: '#e8e4f0',
    grade: 10,
    team: ['Tim (Programmierer)', 'Jule (Sound & Art)', 'Lumi (Spielcharakter)'],
  },
  amir: {
    id: 'amir',
    name: 'Amir Yılmaz',
    age: 22,
    role: 'Informatik-Student & Fintech-Praktikant',
    story: 'DataPulse',
    storyDesc: 'ML-Algorithmus für Musik-Empfehlungen',
    portrait: new URL('../../assets/amir/portrait.svg', import.meta.url).href,
    color: '#06b6d4',
    colorDark: '#1e293b',
    colorText: '#e2e8f0',
    grade: 11,
    team: ['Yara (UX-Designerin)', 'Finn (Backend-Dev)', 'Prof. Nguyen (Mentorin)'],
  },
  kai: {
    id: 'kai',
    name: 'Kai Okonkwo',
    age: 27,
    role: 'Game-Designer & 3D-Artist',
    story: 'Hafenlichter 3D',
    storyDesc: '3D-Sequel von Mias Indie-Game',
    portrait: new URL('../../assets/kai/portrait.svg', import.meta.url).href,
    color: '#f97316',
    colorDark: '#0f172a',
    colorText: '#f1f5f9',
    grade: 12,
    team: ['Mia (Mathe-Beratung)', 'Amir (Daten-Pipeline)', 'Studio Polygon Harbor'],
  },
  euklid: {
    id: 'euklid',
    name: 'Euklid',
    age: null,
    role: 'Brücken-Geist der Mathematik',
    story: null,
    storyDesc: 'Taucht auf, wenn Themen Brücken zueinander bauen',
    portrait: null,
    emoji: '🦉',
    color: '#a8a29e',
    colorDark: '#292524',
    colorText: '#f5f5f4',
    grade: null,
    team: null,
  },
};

/**
 * Maps each topic ID to its character, audio file, and story context.
 */
export const TOPIC_STORIES = {
  // ── Klasse 10 — Mia & Hafenlichter ──
  '10-quad-funktionen': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec01-quad-funktionen.mp3', import.meta.url).href,
    challenge: 'Sprungphysik der Spielfigur',
  },
  '10-quad-gleichungen': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec02-quad-gleichungen.mp3', import.meta.url).href,
    challenge: 'Kollisionszeitpunkt berechnen',
  },
  '10-trigonometrie': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec03-trigonometrie.mp3', import.meta.url).href,
    challenge: 'Sprite-Rotation und Winkel',
  },
  '10-exp-wachstum': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec04-exp-wachstum.mp3', import.meta.url).href,
    challenge: 'Schwierigkeits-Skalierung',
  },
  '10-wahrscheinlichkeit': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec05-wahrscheinlichkeit.mp3', import.meta.url).href,
    challenge: 'Loot-Drop-System balancieren',
  },
  '10-pythagoras': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec06-pythagoras.mp3', import.meta.url).href,
    challenge: 'Kollisionserkennung',
  },
  '10-koerper': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec07-koerper.mp3', import.meta.url).href,
    challenge: '3D-Hitboxen für Power-Ups',
  },
  '10-potenzgesetze': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec08-potenzgesetze.mp3', import.meta.url).href,
    challenge: 'Speicher-Management',
  },
  '10-ähnlichkeit': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec09-ähnlichkeit.mp3', import.meta.url).href,
    challenge: 'Sprite-Skalierung',
  },
  '10-periodisch': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec10-periodisch.mp3', import.meta.url).href,
    challenge: 'Animations-Zyklen',
  },
  '10-diff-einführung': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec11-diff-einführung.mp3', import.meta.url).href,
    challenge: 'Frame-Rate-Optimierung',
  },
  '10-funktionsklassen': {
    characterId: 'mia',
    audioFile: new URL('../../assets/mia/audio/sec12-funktionsklassen.mp3', import.meta.url).href,
    challenge: 'Balancing-Kurven',
  },
  '10-lineare-funktionen': {
    characterId: 'mia',
    audioFile: null,
    challenge: 'Plattform-Bewegung mit konstanter Geschwindigkeit',
  },

  // ── Klasse 11 — Amir & DataPulse ──
  '11-ableitungsregeln': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec01-ableitungsregeln.mp3', import.meta.url).href,
    challenge: 'Gradient Descent optimieren',
  },
  '11-kurvendiskussion': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec02-kurvendiskussion.mp3', import.meta.url).href,
    challenge: 'Feature-Analyse der Daten',
  },
  '11-extremwertaufgaben': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec03-extremwertaufgaben.mp3', import.meta.url).href,
    challenge: 'Hyperparameter-Tuning',
  },
  '11-integralrechnung': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec04-integralrechnung.mp3', import.meta.url).href,
    challenge: 'Daten-Aggregation',
  },
  '11-exp-log': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec05-exp-log.mp3', import.meta.url).href,
    challenge: 'Wachstumsmodelle trainieren',
  },
  '11-binomialverteilung': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec06-binomialverteilung.mp3', import.meta.url).href,
    challenge: 'A/B-Testing auswerten',
  },
  '11-bedingte-wk': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec07-bedingte-wk.mp3', import.meta.url).href,
    challenge: 'Empfehlungsfilter verbessern',
  },
  '11-vektorrechnung': {
    characterId: 'amir',
    audioFile: new URL('../../assets/amir/audio/sec08-vektorrechnung.mp3', import.meta.url).href,
    challenge: 'Embedding-Räume visualisieren',
  },

  // ── Klasse 12 — Kai & Hafenlichter 3D ──
  '12-e-funktion-ln': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec01-e-funktion-ln.mp3', import.meta.url).href,
    challenge: 'Partikel-Decay-Systeme',
  },
  '12-integralrechnung-v': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec02-integralrechnung-v.mp3', import.meta.url).href,
    challenge: 'Level-Geometrie berechnen',
  },
  '12-analytische-geo': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec03-analytische-geo.mp3', import.meta.url).href,
    challenge: '3D-Koordinatensystem',
  },
  '12-hypothesentests': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec04-hypothesentests.mp3', import.meta.url).href,
    challenge: 'Playtesting-Statistik',
  },
  '12-normalverteilung': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec05-normalverteilung.mp3', import.meta.url).href,
    challenge: 'Loot-Balancing',
  },
  '12-matrizen': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec06-matrizen.mp3', import.meta.url).href,
    challenge: '3D-Transformationsmatrizen',
  },
  '12-abiturvorbereitung': {
    characterId: 'kai',
    audioFile: new URL('../../assets/kai/audio/sec07-abiturvorbereitung.mp3', import.meta.url).href,
    challenge: 'Release-Party — alles zusammen!',
  },
};

/** Get the character for a given topic ID */
export function getCharacterForTopic(topicId) {
  const story = TOPIC_STORIES[topicId];
  if (!story) return null;
  return CHARACTERS[story.characterId];
}

/** Get story info for a given topic ID */
export function getTopicStory(topicId) {
  const story = TOPIC_STORIES[topicId];
  if (!story) return null;
  return {
    ...story,
    character: CHARACTERS[story.characterId],
  };
}

/** Get a character by ID — useful for connection bubbles where the character may differ from the topic's main character */
export function getCharacterById(id) {
  return CHARACTERS[id] || null;
}
