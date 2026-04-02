import { batch1 } from '../lessons-10-batch1-it';
import { batch2 } from '../lessons-10-batch2-it';
import { batch3 } from '../lessons-10-batch3-it';
import { batch11a } from '../lessons-11-batch1-it';
import { batch11b } from '../lessons-11-batch2-it';
import { batch12a } from '../lessons-12-batch1-it';
import { batch12b } from '../lessons-12-batch2-it';

export default {
  portal: {
    title: '∫nfinity',
    subtitle: '∫nfinity',
    oerBadge: 'Risorse Educative Aperte',
    progress: 'Il tuo progresso',
    comingSoon: 'Prossimamente',
  },
  modules: {
    'quad-funktionen': {
      title: '∫nfinity',
      subtitle: '∫nfinity',
    },
    differentialrechnung: {
      title: '∫nfinity',
      subtitle: '∫nfinity',
    },
  },
  ui: {
    back: 'Indietro',
    next: 'Avanti',
    check: 'Verificare',
    hint: 'Suggerimento',
    hints: 'Suggerimenti',
    stars: '{count} stelle',
    xp: '{count} XP',
    streak: '{count} giorni',
    level: 'Livello {n}',
    exercise: 'Esercizio {n}',
    exerciseOf: 'Esercizio {current}/{total}',
    correct: 'Esattamente giusto! Ottimo lavoro!',
    incorrect: 'Non proprio. Riprova.',
    almostCorrect: 'Quasi! Ecco un suggerimento...',
    levelComplete: 'Hai padroneggiato il livello {n}! Continua così!',
    allComplete: 'Tutti gli esercizi completati — fantastico!',
    start: 'Andiamo!',
    reset: 'Reimposta il progresso',
    confirmReset: 'Reimpostare davvero tutto?',
    yes: 'Sì',
    no: 'No',
    badges: 'Scoperte',
    profile: 'Profilo',
    locked: 'Ancora bloccato',
    earned: 'Ottenuto!',
  },
  levels: {
    'quad-funktionen': {
      1: { title: '∫nfinity' },
      2: { title: '∫nfinity' },
      3: { title: '∫nfinity' },
      4: { title: '∫nfinity' },
      5: { title: '∫nfinity' },
      6: { title: '∫nfinity' },
    },
    differentialrechnung: {
      1: { title: '∫nfinity' },
      2: { title: '∫nfinity' },
      3: { title: '∫nfinity' },
      4: { title: '∫nfinity' },
    },
  },
  stories: {
    'quad-funktionen': {
      1: { icon: '📐', text: 'Benvenuto/a nel Portale di Matematica! Le funzioni quadratiche sono ovunque — dalla traiettoria di una palla lanciata alla forma di un\'antenna parabolica. Scopri come funzionano le parabole!', motivation: 'Pronto/a per la tua prima parabola?' },
      2: { icon: '🔄', text: 'Ogni funzione quadratica ha diversi volti. Forma standard, forma vertice — notazioni diverse, stessa curva. Impara a passare da una all\'altra!', motivation: 'Decifriamo le forme!' },
      3: { icon: '🧮', text: 'Dove la parabola attraversa l\'asse x? La formula quadratica ti dà la risposta. Uno strumento che non dimenticherai mai!', motivation: 'Gli zeri ti aspettano!' },
      4: { icon: '✂️', text: 'Fattorizzare significa scomporre una funzione nei suoi fattori. Le formule di Vieta aiutano — in modo elegante ed efficiente.', motivation: 'È tempo di scomporre!' },
      5: { icon: '🎯', text: 'Conosci già molti strumenti. Quale si adatta quando? Qui impari a scegliere il metodo giusto per ogni problema.', motivation: 'Combina le tue conoscenze!' },
      6: { icon: '📝', text: 'La matematica non vive solo sulla carta. Qui incontri le funzioni quadratiche nella vita reale — costruendo ponti, giardinaggio e ottimizzazione.', motivation: 'La matematica incontra la realtà!' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Sei su un ponte e osservi una barca. A che velocità si muove ADESSO? Non in media — in questo preciso momento. Questa è la domanda che Newton e Leibniz si ponevano 350 anni fa...', motivation: 'Scopri il tasso di variazione istantaneo!' },
      2: { icon: '🧩', text: 'Calcolare il limite ogni volta? Sarebbe come calcolare 7×8 tramite addizione ripetuta. Per fortuna ci sono scorciatoie — le regole di derivazione...', motivation: 'Impara le scorciatoie!' },
      3: { icon: '🚀', text: 'Le regole di base sono come imparare a camminare. Ora impari a saltare. Quando le funzioni vengono moltiplicate, divise o annidate, hai bisogno di nuovi strumenti...', motivation: 'Pronto/a per il passo successivo?' },
      4: { icon: '🔬', text: 'Un(a) imprenditore(trice) chiede: "A quale quantità è maggiore il mio profitto?" Un biologo chiede: "Quando cresce più velocemente la popolazione?" La risposta sta nella derivata...', motivation: 'Trova i punti estremi!' },
    },
  },
  badges: {
    'first-solve': { name: 'Prima soluzione', description: 'Primo esercizio risolto' },
    'parabel-pro': { name: 'Esploratore di parabole', description: 'Livello 1 padroneggiato' },
    'pq-meister': { name: 'Esperto di formule', description: 'Livello 3 padroneggiato' },
    'faktor-fuchs': { name: 'Esperto di fattorizzazione', description: 'Livello 4 padroneggiato' },
    'textaufgaben-koenig': { name: 'Esperto di problemi di testo', description: 'Livello 6 padroneggiato' },
    'perfect-score': { name: 'Perfezionista', description: '3 stelle in un esercizio' },
    'streak-3': { name: 'Serie di 3 giorni', description: '3 giorni di pratica consecutivi' },
    vollstaendig: { name: 'Laureato/a del modulo', description: 'Tutti gli esercizi di un modulo completati' },
    'erste-ableitung': { name: 'Prima scoperta', description: 'Primo esercizio di calcolo risolto' },
    'grenzwert-versteher': { name: 'Esploratore di limiti', description: 'Livello 1 padroneggiato' },
    regelmeister: { name: 'Esperto di regole', description: 'Livelli 2 e 3 padroneggiati' },
    'kurvendiskussion-I': { name: 'Ricercatore di curve', description: 'Livello 4 padroneggiato' },
    'diff-starter': { name: 'In cammino', description: 'Tutti i 16 esercizi completati' },
  },
  exercises: {
    differentialrechnung: {
      'D1-EX1': { title: '∫nfinity' },
      'D1-EX2': { title: '∫nfinity' },
      'D1-EX3': { title: '∫nfinity' },
      'D1-EX4': { title: '∫nfinity' },
      'D2-EX1': { title: '∫nfinity' },
      'D2-EX2': { title: '∫nfinity' },
      'D2-EX3': { title: '∫nfinity' },
      'D2-EX4': { title: '∫nfinity' },
      'D3-EX1': { title: '∫nfinity' },
      'D3-EX2': { title: '∫nfinity' },
      'D3-EX3': { title: '∫nfinity' },
      'D3-EX4': { title: '∫nfinity' },
      'D4-EX1': { title: '∫nfinity' },
      'D4-EX2': { title: '∫nfinity' },
      'D4-EX3': { title: '∫nfinity' },
      'D4-EX4': { title: '∫nfinity' },
    },
  },
  // ── Lesson Layer Labels ──
  lesson: {
    objectives: 'Obiettivi di apprendimento',
    objectivesSubtitle: '∫nfinity',
    explanation: 'Spiegazione',
    concepts: 'Concetti chiave',
    examples: 'Esempi guida',
    examplesSubtitle: '∫nfinity',
    realWorld: 'Dove lo incontri?',
    mistakes: 'Errori tipici',
    mistakesSubtitle: '∫nfinity',
    prerequisites: 'Conoscenze pregresse',
    prerequisitesSubtitle: '∫nfinity',
    collapseLesson: 'Comprimi la lezione',
    expandLesson: 'Mostra la lezione',
    skipToExercises: 'Esercitati ora →',
    storyOutro: 'Come continua la storia?',
  },

  // ── Lesson Content per Topic ──
  lessons: {
    ...batch1,
    ...batch2,
    ...batch3,
    ...batch11a,
    ...batch11b,
    ...batch12a,
    ...batch12b,
    '10-quad-funktionen': {
      story: {
        intro: 'Mia e seduta nel suo piccolo ufficio al porto di Amburgo e fissa lo schermo. Lumi, il suo personaggio in "Hafenlichter", deve saltare elegantemente sopra casse e container — ma la curva di salto sembra sbagliata. "La fisica non e giusta", mormora. Per programmare una traiettoria di salto realistica, Mia ha bisogno delle funzioni quadratiche.',
        challenge: 'Lumi deve saltare sopra le casse — ma la curva di salto sembra innaturale.',
        outro: 'Con la forma del vertice Mia ha programmato la curva di salto perfetta! Lumi ora vola in un elegante arco sopra i container di Amburgo. "Finalmente sembra realistico", dice Tim e le da il cinque.',
      },
      objectives: {
        recognize: 'Riconoscere le funzioni quadratiche e descrivere le loro proprieta',
        vertex_form: 'Convertire con sicurezza tra forma standard e forma del vertice',
        pq_formula: 'Calcolare gli zeri con la formula risolutiva',
        graph_properties: 'Leggere dall\'equazione la direzione di apertura, il vertice e l\'asse di simmetria',
      },
      explanation: {
        intro: 'Immagina di lanciare un pallone da basket. La palla vola in un arco verso l\'alto, raggiunge il punto piu alto e ricade. Questa traiettoria ha una forma ben precisa — una parabola. Matematicamente la descriviamo con una funzione quadratica:',
        opening: 'Il numero $a$ determina se la parabola e aperta verso l\'alto ($a > 0$) o verso il basso ($a < 0$) — e quanto e "stretta" o "larga". Piu grande e $|a|$, piu stretta la parabola.',
        mia_tip: 'Nel mio gioco $a$ e negativo, perche la curva di salto va prima su e poi giu — come una U capovolta!',
        vertex_form: 'La forma del vertice ti rivela direttamente il punto piu alto (o piu basso) della parabola. Il vertice $S$ ha le coordinate $(d \\mid e)$:',
        conversion: 'Per passare dalla forma standard alla forma del vertice, usi il completamento del quadrato. Aggiungi e sottrai abilmente un numero, cosi che si formi un quadrato perfetto.',
      },
      concepts: {
        normal_form: { title: '∫nfinity' },
        vertex_form: { title: '∫nfinity' },
        pq_formula: { title: '∫nfinity' },
        discriminant: { title: '∫nfinity' },
      },
      examples: {
        vertex: { title: '∫nfinity' },
        pq: { title: '∫nfinity' },
      },
      realworld: {
        basketball: { title: '∫nfinity' },
        bridge: { title: '∫nfinity' },
        pricing: { title: '∫nfinity' },
      },
      mistakes: {
        sign_error: { wrong: 'Errore di segno', correct: 'Fare attenzione ai segni', why: 'In $f(x) = (x - d)^2 + e$ c\'e un meno davanti a $d$. Significa: $f(x) = (x - 3)^2$ ha il vertice in $d = +3$, non in $-3$!', mia_warning: 'Questo errore di segno mi e costato 3 ore di debugging. La curva di salto di Lumi era spostata a sinistra invece che a destra!' },
        pq_wrong: { wrong: 'Formula risolutiva senza divisione', correct: 'Prima dividere per $a$', why: 'La formula risolutiva funziona solo se il coefficiente di $x^2$ e 1. Per $2x^2 + 4x - 6 = 0$ devi prima dividere per 2: $x^2 + 2x - 3 = 0$.' },
      },
    },
  },
  footer: {
    createdBy: 'Creato da Dirk Schulenburg',
    license: 'Licenziato sotto CC BY-SA 4.0',
    consulting: 'Workshop e consulenza',
  },
};
