import { motion } from 'framer-motion';

const LEVEL_STORIES = {
  1: {
    icon: '\u{1F4D0}',
    title: 'Grundlagen',
    text: 'Willkommen im Mathe-Bootcamp! Bevor du Gleichungen l\u00f6st, lernst du die Parabel kennen. Quadratische Funktionen begegnen dir \u00fcberall \u2014 vom Basketballwurf bis zur Br\u00fcckenarchitektur.',
    motivation: 'Bereit f\u00fcr deine erste Parabel?'
  },
  2: {
    icon: '\u{1F504}',
    title: 'Formen umwandeln',
    text: 'Jede quadratische Funktion kann in verschiedenen Formen geschrieben werden: Normalform, Scheitelpunktform und Faktorform. Jede Form hat ihre St\u00e4rken \u2014 lerne sie alle zu beherrschen!',
    motivation: 'Zeig den Formen, wer der Boss ist!'
  },
  3: {
    icon: '\u{1F9EE}',
    title: 'Die pq-Formel',
    text: 'Die pq-Formel ist dein Schweizer Taschenmesser f\u00fcr quadratische Gleichungen. Egal wie kompliziert die Gleichung aussieht \u2014 mit der pq-Formel findest du IMMER die L\u00f6sung.',
    motivation: 'Mach dich bereit f\u00fcr die wichtigste Formel!'
  },
  4: {
    icon: '\u2702\uFE0F',
    title: 'Faktorisieren',
    text: 'Manchmal ist die pq-Formel Overkill. Wenn du die Nullstellen schon kennst oder einen gemeinsamen Faktor siehst, geht Faktorisieren viel schneller. Der Satz von Vieta ist dabei dein bester Freund.',
    motivation: 'Teile und herrsche!'
  },
  5: {
    icon: '\u{1F3AF}',
    title: 'Mix & Match',
    text: 'Jetzt wird es ernst: Du bekommst Gleichungen und musst selbst entscheiden, welche Methode am besten passt. pq-Formel, Faktorisieren oder doch einfach Ausklammern?',
    motivation: 'Zeig, dass du alle Methoden drauf hast!'
  },
  6: {
    icon: '\u{1F4DD}',
    title: 'Textaufgaben',
    text: 'Das Finale! Hier triffst du quadratische Funktionen in der echten Welt: Wurfparabeln, Fl\u00e4chenoptimierung und Gewinnfunktionen. Du musst die Gleichung selbst aufstellen und l\u00f6sen.',
    motivation: 'Letzte Runde \u2014 gib alles!'
  }
};

export default function StoryIntro({ levelId, onStart }) {
  const story = LEVEL_STORIES[levelId];
  if (!story) return null;

  return (
    <motion.div
      className="story-intro"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="story-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {story.icon}
      </motion.div>
      <h2 className="story-title">Level {levelId}: {story.title}</h2>
      <p className="story-text">{story.text}</p>
      <p className="story-motivation"><strong>{story.motivation}</strong></p>
      <motion.button
        className="btn btn-start"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Los geht's! {'\u{1F680}'}
      </motion.button>
    </motion.div>
  );
}
