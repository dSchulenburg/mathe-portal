import { batch1 } from '../lessons-10-batch1-nl';
import { batch2 } from '../lessons-10-batch2-nl';
import { batch3 } from '../lessons-10-batch3-nl';
import { batch11a } from '../lessons-11-batch1-nl';
import { batch11b } from '../lessons-11-batch2-nl';
import { batch12a } from '../lessons-12-batch1-nl';
import { batch12b } from '../lessons-12-batch2-nl';

export default {
  portal: {
    title: '∫nfinity',
    subtitle: '∫nfinity',
    oerBadge: 'Open Educatieve Bronnen',
    progress: 'Jouw voortgang',
    comingSoon: 'Binnenkort',
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
    back: 'Terug',
    next: 'Volgende',
    check: 'Controleren',
    hint: 'Hint',
    hints: 'Hints',
    stars: '{count} sterren',
    xp: '{count} XP',
    streak: '{count} dagen',
    level: 'Niveau {n}',
    exercise: 'Oefening {n}',
    exerciseOf: 'Oefening {current}/{total}',
    correct: 'Precies goed! Goed gedaan!',
    incorrect: 'Niet helemaal. Probeer het opnieuw.',
    almostCorrect: 'Bijna! Hier is een hint...',
    levelComplete: 'Je hebt niveau {n} gemeisterd! Ga zo door!',
    allComplete: 'Alle oefeningen gedaan — fantastisch!',
    start: 'Aan de slag!',
    reset: 'Voortgang resetten',
    confirmReset: 'Echt alles resetten?',
    yes: 'Ja',
    no: 'Nee',
    badges: 'Ontdekkingen',
    profile: 'Profiel',
    locked: 'Nog vergrendeld',
    earned: 'Verdiend!',
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
      1: { icon: '📐', text: 'Welkom bij het Wiskunde Portaal! Kwadratische functies zijn overal — van de baan van een gegooid bal tot de vorm van een schotelantenne. Ontdek hoe parabolen werken!', motivation: 'Klaar voor je eerste parabo el?' },
      2: { icon: '🔄', text: 'Elke kwadratische functie heeft verschillende gezichten. Standaardvorm, toppuntvorm — verschillende notaties, dezelfde curve. Leer ertussen te wisselen!', motivation: 'Laten we de vormen ontcijferen!' },
      3: { icon: '🧮', text: 'Waar snijdt de parabo el de x-as? De kwadratische formule geeft je het antwoord. Een hulpmiddel dat je nooit vergeet!', motivation: 'De nulpunten wachten!' },
      4: { icon: '✂️', text: 'Factoriseren betekent een functie in haar bouwstenen ontleden. De formules van Vieta helpen — elegant en efficiënt.', motivation: 'Tijd om te ontleden!' },
      5: { icon: '🎯', text: 'Je kent nu veel hulpmiddelen. Welke past wanneer? Hier leer je de juiste methode voor elk probleem te kiezen.', motivation: 'Combineer jouw kennis!' },
      6: { icon: '📝', text: 'Wiskunde leeft niet alleen op papier. Hier ontmoet je kwadratische functies in het echte leven — bij het bouwen van bruggen, tuinieren en optimaliseren.', motivation: 'Wiskunde ontmoet de werkelijkheid!' },
    },
    differentialrechnung: {
      1: { icon: '🔭', text: 'Je staat op een brug en observeert een boot. Hoe snel beweegt hij PRECIES NU? Niet gemiddeld — op dit exacte moment. Dit is de vraag die Newton en Leibniz 350 jaar geleden stelden...', motivation: 'Ontdek de momentane veranderingssnelheid!' },
      2: { icon: '🧩', text: 'Elke keer de limiet berekenen? Dat zou zijn als 7×8 berekenen via optelling. Gelukkig zijn er snelkoppelingen — de differentiatieregels...', motivation: 'Leer de snelkoppelingen!' },
      3: { icon: '🚀', text: 'De basisregels zijn als leren lopen. Nu leer je springen. Wanneer functies vermenigvuldigd, gedeeld of genest worden, heb je nieuwe hulpmiddelen nodig...', motivation: 'Klaar voor de volgende stap?' },
      4: { icon: '🔬', text: 'Een ondernemer vraagt: "Bij welke hoeveelheid is mijn winst het grootst?" Een bioloog vraagt: "Wanneer groeit de populatie het snelst?" Het antwoord ligt in de afgeleide...', motivation: 'Vind de extremale punten!' },
    },
  },
  badges: {
    'first-solve': { name: 'Eerste oplossing', description: 'Eerste oefening opgelost' },
    'parabel-pro': { name: 'Parabo elontdekker', description: 'Niveau 1 gemeisterd' },
    'pq-meister': { name: 'Formule-expert', description: 'Niveau 3 gemeisterd' },
    'faktor-fuchs': { name: 'Factoriseerexpert', description: 'Niveau 4 gemeisterd' },
    'textaufgaben-koenig': { name: 'Tekstopgave-expert', description: 'Niveau 6 gemeisterd' },
    'perfect-score': { name: 'Perfectionist', description: '3 sterren in één oefening' },
    'streak-3': { name: '3-daagse reeks', description: '3 dagen op rij geoefend' },
    vollstaendig: { name: 'Module-afgestudeerde', description: 'Alle oefeningen van een module gedaan' },
    'erste-ableitung': { name: 'Eerste ontdekking', description: 'Eerste calculus-oefening opgelost' },
    'grenzwert-versteher': { name: 'Limietontdekker', description: 'Niveau 1 gemeisterd' },
    regelmeister: { name: 'Regelexpert', description: 'Niveaus 2 en 3 gemeisterd' },
    'kurvendiskussion-I': { name: 'Curveonderzoeker', description: 'Niveau 4 gemeisterd' },
    'diff-starter': { name: 'Onderweg', description: 'Alle 16 oefeningen gedaan' },
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
    objectives: 'Leerdoelen',
    objectivesSubtitle: '∫nfinity',
    explanation: 'Uitleg',
    concepts: 'Sleutelconcepten',
    examples: 'Voorbeeldopgaven',
    examplesSubtitle: '∫nfinity',
    realWorld: 'Waar kom je dit tegen?',
    mistakes: 'Typische fouten',
    mistakesSubtitle: '∫nfinity',
    prerequisites: 'Voorkennis',
    prerequisitesSubtitle: '∫nfinity',
    collapseLesson: 'Les inklappen',
    expandLesson: 'Les tonen',
    skipToExercises: 'Nu oefenen →',
    storyOutro: 'Hoe gaat het verhaal verder?',
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
        intro: 'Mia zit in haar kleine kantoor aan de Hamburger haven en staart naar het scherm. Lumi, haar spelkarakter in "Hafenlichter", moet elegant over kisten en containers springen — maar de springcurve ziet er gewoon verkeerd uit. "De fysica klopt niet", mompelt ze. Om een realistische springbaan te programmeren heeft Mia kwadratische functies nodig.',
        challenge: 'Lumi moet over kisten springen — maar de springcurve ziet er onnatuurlijk uit.',
        outro: 'Met de toppuntvorm heeft Mia de perfecte springcurve geprogrammeerd! Lumi vliegt nu in een elegante boog over de Hamburger containers. "Eindelijk ziet het er realistisch uit", zegt Tim en geeft haar een high-five.',
      },
      objectives: {
        recognize: 'Kwadratische functies herkennen en hun eigenschappen beschrijven',
        vertex_form: 'Veilig omrekenen tussen standaardvorm en toppuntvorm',
        pq_formula: 'Nulpunten berekenen met de abc-formule',
        graph_properties: 'Uit de vergelijking de openingsrichting, het toppunt en de symmetrieas aflezen',
      },
      explanation: {
        intro: 'Stel je voor dat je een basketbal gooit. De bal vliegt in een boog omhoog, bereikt het hoogste punt en valt weer. Deze vliegbaan heeft een heel bepaalde vorm — een parabool. Wiskundig beschrijven we die met een kwadratische functie:',
        opening: 'Het getal $a$ bepaalt of de parabool naar boven ($a > 0$) of naar beneden ($a < 0$) open is — en hoe "smal" of "breed" ze is. Hoe groter $|a|$, hoe smaller de parabool.',
        mia_tip: 'In mijn spel is $a$ negatief, want de springcurve gaat eerst omhoog en dan weer omlaag — als een omgekeerde U!',
        vertex_form: 'De toppuntvorm onthult direct het hoogste (of laagste) punt van de parabool. Het toppunt $S$ heeft de coordinaten $(d \\mid e)$:',
        conversion: 'Om van de standaardvorm naar de toppuntvorm te gaan, gebruik je het kwadraatafsplitsen. Je voegt slim een getal toe en trekt het weer af, zodat er een perfect kwadraat ontstaat.',
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
        sign_error: { wrong: 'Tekenfout', correct: 'Op tekens letten', why: 'In $f(x) = (x - d)^2 + e$ staat een min voor $d$. Dat betekent: $f(x) = (x - 3)^2$ heeft het toppunt bij $d = +3$, niet bij $-3$!', mia_warning: 'Deze tekenfout heeft me 3 uur debugging gekost. Lumis springcurve was naar links verschoven in plaats van naar rechts!' },
        pq_wrong: { wrong: 'abc-formule zonder deling', correct: 'Eerst door $a$ delen', why: 'De abc-formule werkt alleen als de coefficient voor $x^2$ gelijk is aan 1. Bij $2x^2 + 4x - 6 = 0$ moet je eerst door 2 delen: $x^2 + 2x - 3 = 0$.' },
      },
    },
  },
  footer: {
    createdBy: 'Gemaakt door Dirk Schulenburg',
    license: 'Gelicenseerd onder CC BY-SA 4.0',
    consulting: 'Workshops en advies',
  },
};
