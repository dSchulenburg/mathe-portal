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
    portrait: `${import.meta.env.BASE_URL}assets/mia/portrait.svg`,
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
    portrait: `${import.meta.env.BASE_URL}assets/amir/portrait.svg`,
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
    portrait: `${import.meta.env.BASE_URL}assets/kai/portrait.svg`,
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
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec01-quad-funktionen.mp3`,
    challenge: 'Sprungphysik der Spielfigur',
  },
  '10-quad-gleichungen': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec02-quad-gleichungen.mp3`,
    challenge: 'Kollisionszeitpunkt berechnen',
  },
  '10-trigonometrie': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec03-trigonometrie.mp3`,
    challenge: 'Sprite-Rotation und Winkel',
  },
  '10-exp-wachstum': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec04-exp-wachstum.mp3`,
    challenge: 'Schwierigkeits-Skalierung',
  },
  '10-wahrscheinlichkeit': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec05-wahrscheinlichkeit.mp3`,
    challenge: 'Loot-Drop-System balancieren',
  },
  '10-pythagoras': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec06-pythagoras.mp3`,
    challenge: 'Kollisionserkennung',
  },
  '10-koerper': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec07-koerper.mp3`,
    challenge: '3D-Hitboxen für Power-Ups',
  },
  '10-potenzgesetze': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec08-potenzgesetze.mp3`,
    challenge: 'Speicher-Management',
  },
  '10-aehnlichkeit': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec09-aehnlichkeit.mp3`,
    challenge: 'Sprite-Skalierung',
  },
  '10-periodisch': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec10-periodisch.mp3`,
    challenge: 'Animations-Zyklen',
  },
  '10-diff-einfuehrung': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec11-diff-einfuehrung.mp3`,
    challenge: 'Frame-Rate-Optimierung',
  },
  '10-funktionsklassen': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec12-funktionsklassen.mp3`,
    challenge: 'Balancing-Kurven',
  },
  '10-lineare-funktionen': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec14-lineare-funktionen.mp3`,
    challenge: 'Plattform-Bewegung mit konstanter Geschwindigkeit',
  },
  '10-kreis': {
    characterId: 'mia',
    audioFile: `${import.meta.env.BASE_URL}assets/mia/audio/sec15-kreis.mp3`,
    challenge: 'Runde Hitboxen für rotierende Spielobjekte',
  },

  // ── Klasse 11 — Amir & DataPulse ──
  '11-ableitungsregeln': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec01-ableitungsregeln.mp3`,
    challenge: 'Gradient Descent optimieren',
  },
  '11-kurvendiskussion': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec02-kurvendiskussion.mp3`,
    challenge: 'Feature-Analyse der Daten',
  },
  '11-extremwertaufgaben': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec03-extremwertaufgaben.mp3`,
    challenge: 'Hyperparameter-Tuning',
  },
  '11-integralrechnung': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec04-integralrechnung.mp3`,
    challenge: 'Daten-Aggregation',
  },
  '11-exp-log': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec05-exp-log.mp3`,
    challenge: 'Wachstumsmodelle trainieren',
  },
  '11-binomialverteilung': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec06-binomialverteilung.mp3`,
    challenge: 'A/B-Testing auswerten',
  },
  '11-bedingte-wahrscheinlichkeit': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec07-bedingte-wk.mp3`,
    challenge: 'Empfehlungsfilter verbessern',
  },
  '11-vektorrechnung': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec08-vektorrechnung.mp3`,
    challenge: 'Embedding-Räume visualisieren',
  },
  '11-rationale-funktionen': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec09-rationale-funktionen.mp3`,
    challenge: 'Lat encoder mit Polstellen-Behandlung',
  },
  '11-lgs-gauss': {
    characterId: 'amir',
    audioFile: `${import.meta.env.BASE_URL}assets/amir/audio/sec10-lgs-gauss.mp3`,
    challenge: 'Feature-Gewichte aus Trainingsdaten lösen',
  },

  // ── Klasse 12 — Kai & Hafenlichter 3D ──
  '12-e-funktion-ln': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec01-e-funktion-ln.mp3`,
    challenge: 'Partikel-Decay-Systeme',
  },
  '12-integralrechnung-vertieft': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec02-integralrechnung-v.mp3`,
    challenge: 'Level-Geometrie berechnen',
  },
  '12-analytische-geometrie': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec03-analytische-geo.mp3`,
    challenge: '3D-Koordinatensystem',
  },
  '12-hypothesentests': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec04-hypothesentests.mp3`,
    challenge: 'Playtesting-Statistik',
  },
  '12-normalverteilung': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec05-normalverteilung.mp3`,
    challenge: 'Loot-Balancing',
  },
  '12-matrizen': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec06-matrizen.mp3`,
    challenge: '3D-Transformationsmatrizen',
  },
  '12-abiturvorbereitung': {
    characterId: 'kai',
    audioFile: `${import.meta.env.BASE_URL}assets/kai/audio/sec07-abiturvorbereitung.mp3`,
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
