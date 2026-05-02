import { exercises as quadFunktionenEx } from './exercises/10-quad-funktionen';
import { lesson as quadFunktionenLesson } from './lessons/10-quad-funktionen';
import { lesson as pythagorasLesson } from './lessons/10-pythagoras';
import { lesson as wahrscheinlichkeitLesson } from './lessons/10-wahrscheinlichkeit';
import { lesson as quadGleichungenLesson } from './lessons/10-quad-gleichungen';
import { lesson as trigonometrieLesson } from './lessons/10-trigonometrie';
import { lesson as expWachstumLesson } from './lessons/10-exp-wachstum';
import { lesson as koerperLesson } from './lessons/10-koerper';
import { lesson as potenzgesetzeLesson } from './lessons/10-potenzgesetze';
import { lesson as aehnlichkeitLesson } from './lessons/10-aehnlichkeit';
import { lesson as periodischLesson } from './lessons/10-periodisch';
import { lesson as diffEinfuehrungLesson } from './lessons/10-diff-einfuehrung';
import { lesson as funktionsklassenLesson } from './lessons/10-funktionsklassen';
import { exercises as quadGleichungenEx } from './exercises/10-quad-gleichungen';
import { exercises as trigonometrieEx } from './exercises/10-trigonometrie';
import { exercises as expWachstumEx } from './exercises/10-exp-wachstum';
import { exercises as wahrscheinlichkeitEx } from './exercises/10-wahrscheinlichkeit';
import { exercises as pythagorasEx } from './exercises/10-pythagoras';
import { exercises as koerperEx } from './exercises/10-koerper';
import { exercises as potenzgesetzeEx } from './exercises/10-potenzgesetze';
import { exercises as aehnlichkeitEx } from './exercises/10-aehnlichkeit';
import { exercises as periodischEx } from './exercises/10-periodisch';
import { exercises as diffEinfuehrungEx } from './exercises/10-diff-einfuehrung';
import { exercises as funktionsklassenEx } from './exercises/10-funktionsklassen';

// Klasse 11
import { exercises as ableitungsregelnEx } from './exercises/11-ableitungsregeln';
import { exercises as kurvendiskussionEx } from './exercises/11-kurvendiskussion';
import { exercises as extremwertEx } from './exercises/11-extremwertaufgaben';
import { exercises as integralrechnungEx } from './exercises/11-integralrechnung';
import { exercises as expLogEx } from './exercises/11-exp-log';
import { exercises as binomialEx } from './exercises/11-binomialverteilung';
import { exercises as bedingteWkEx } from './exercises/11-bedingte-wk';
import { exercises as vektorrechnungEx } from './exercises/11-vektorrechnung';
import { lesson as ableitungsregelnLesson } from './lessons/11-ableitungsregeln';
import { lesson as kurvendiskussionLesson } from './lessons/11-kurvendiskussion';
import { lesson as extremwertLesson } from './lessons/11-extremwertaufgaben';
import { lesson as integralrechnungLesson } from './lessons/11-integralrechnung';
import { lesson as expLogLesson } from './lessons/11-exp-log';
import { lesson as binomialLesson } from './lessons/11-binomialverteilung';
import { lesson as bedingteWkLesson } from './lessons/11-bedingte-wk';
import { lesson as vektorrechnungLesson } from './lessons/11-vektorrechnung';

// Klasse 12
import { exercises as eFunktionLnEx } from './exercises/12-e-funktion-ln';
import { exercises as integralVertieftEx } from './exercises/12-integralrechnung-v';
import { exercises as analytischeGeoEx } from './exercises/12-analytische-geo';
import { exercises as hypothesentestsEx } from './exercises/12-hypothesentests';
import { exercises as normalverteilungEx } from './exercises/12-normalverteilung';
import { exercises as matrizenEx } from './exercises/12-matrizen';
import { exercises as abivorbereitungEx } from './exercises/12-abiturvorbereitung';
import { lesson as eFunktionLnLesson } from './lessons/12-e-funktion-ln';
import { lesson as integralVertieftLesson } from './lessons/12-integralrechnung-v';
import { lesson as analytischeGeoLesson } from './lessons/12-analytische-geo';
import { lesson as hypothesentestsLesson } from './lessons/12-hypothesentests';
import { lesson as normalverteilungLesson } from './lessons/12-normalverteilung';
import { lesson as matrizenLesson } from './lessons/12-matrizen';
import { lesson as abivorbereitungLesson } from './lessons/12-abiturvorbereitung';

/**
 * Topic metadata registry.
 * Each topic defines its metadata + which exercises belong to it.
 */
export const TOPICS = [
  {
    id: '10-quad-funktionen',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Quadratische Funktionen',
    icon: '📈',
    color: '#f59e0b',
    period: 'Klasse 10',
    exercises: quadFunktionenEx,
    lesson: quadFunktionenLesson,
    // FunctionPlotter config (optional, only for topics that have one)
    plotter: {
      title: 'Erkunde die Parabel',
      functions: [{ expression: 'a*x^2 + b*x + c', color: '#f59e0b', label: 'f(x) = ax² + bx + c' }],
      sliders: [
        { param: 'a', min: -3, max: 3, step: 0.1, initial: 1, label: 'Streckung a' },
        { param: 'b', min: -5, max: 5, step: 0.5, initial: 0, label: 'Verschiebung b' },
        { param: 'c', min: -5, max: 5, step: 0.5, initial: 0, label: 'y-Verschiebung c' },
      ],
      xRange: [-6, 6],
      yRange: [-8, 12],
    },
  },
  {
    id: '10-quad-gleichungen',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Quadratische Gleichungen',
    icon: '🧮',
    color: '#f97316',
    period: 'Klasse 10',
    exercises: quadGleichungenEx,
    lesson: quadGleichungenLesson,
    plotter: null,
    station: 'DiscriminantViz',
  },
  {
    id: '10-trigonometrie',
    grade: 10,
    domain: 'geometrie',
    titleKey: 'Trigonometrie',
    icon: '📐',
    color: '#ec4899',
    period: 'Klasse 10',
    exercises: trigonometrieEx,
    lesson: trigonometrieLesson,
    plotter: {
      title: 'Erkunde Sinus und Kosinus',
      functions: [
        { expression: 'a * sin(b * x + c)', color: '#ec4899', label: 'f(x) = a·sin(bx + c)' },
        { expression: 'cos(x)', color: '#3b82f6', label: 'g(x) = cos(x)' },
      ],
      sliders: [
        { param: 'a', min: -3, max: 3, step: 0.1, initial: 1, label: 'Amplitude a' },
        { param: 'b', min: 0.5, max: 4, step: 0.1, initial: 1, label: 'Frequenz b' },
        { param: 'c', min: -3.14, max: 3.14, step: 0.1, initial: 0, label: 'Phase c' },
      ],
      xRange: [-7, 7],
      yRange: [-4, 4],
    },
    station: 'Einheitskreis',
  },
  {
    id: '10-exp-wachstum',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Exponentielles Wachstum',
    icon: '🚀',
    color: '#22c55e',
    period: 'Klasse 10',
    exercises: expWachstumEx,
    lesson: expWachstumLesson,
    plotter: {
      title: 'Erkunde Exponentialfunktionen',
      functions: [
        { expression: 'a * b^x', color: '#22c55e', label: 'f(x) = a·bˣ' },
      ],
      sliders: [
        { param: 'a', min: 0.1, max: 5, step: 0.1, initial: 1, label: 'Startwert a' },
        { param: 'b', min: 0.1, max: 3, step: 0.1, initial: 2, label: 'Basis b' },
      ],
      xRange: [-3, 5],
      yRange: [-2, 20],
    },
  },
  {
    id: '10-wahrscheinlichkeit',
    grade: 10,
    domain: 'stochastik',
    titleKey: 'Wahrscheinlichkeitsrechnung',
    icon: '🎲',
    color: '#3b82f6',
    period: 'Klasse 10',
    exercises: wahrscheinlichkeitEx,
    lesson: wahrscheinlichkeitLesson,
    plotter: null,
    station: 'ProbabilityTree',
  },
  {
    id: '10-pythagoras',
    grade: 10,
    domain: 'geometrie',
    titleKey: 'Satz des Pythagoras',
    icon: '📏',
    color: '#f472b6',
    period: 'Klasse 10',
    exercises: pythagorasEx,
    lesson: pythagorasLesson,
    plotter: null,
    station: 'PythagorasExplorer',
  },
  {
    id: '10-koerper',
    grade: 10,
    domain: 'geometrie',
    titleKey: 'Körper: Pyramide, Kegel, Kugel',
    icon: '🔺',
    color: '#e879f9',
    period: 'Klasse 10',
    exercises: koerperEx,
    lesson: koerperLesson,
    plotter: null,
    station: 'BodyExplorer3D',
  },
  {
    id: '10-potenzgesetze',
    grade: 10,
    domain: 'algebra',
    titleKey: 'Potenzgesetze',
    icon: '🔢',
    color: '#34d399',
    period: 'Klasse 10',
    exercises: potenzgesetzeEx,
    lesson: potenzgesetzeLesson,
    plotter: null,
  },
  {
    id: '10-aehnlichkeit',
    grade: 10,
    domain: 'geometrie',
    titleKey: 'Ähnlichkeit & Strahlensätze',
    icon: '🔍',
    color: '#fb923c',
    period: 'Klasse 10',
    exercises: aehnlichkeitEx,
    lesson: aehnlichkeitLesson,
    plotter: null,
    station: 'StrahlensatzExplorer',
  },
  {
    id: '10-periodisch',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Periodische Vorgänge',
    icon: '🌊',
    color: '#38bdf8',
    period: 'Klasse 10',
    exercises: periodischEx,
    lesson: periodischLesson,
    plotter: {
      title: 'Erkunde Schwingungen',
      functions: [
        { expression: 'a * sin(b * x + c) + d', color: '#38bdf8', label: 'f(x) = a·sin(bx+c)+d' },
      ],
      sliders: [
        { param: 'a', min: 0.5, max: 4, step: 0.1, initial: 2, label: 'Amplitude a' },
        { param: 'b', min: 0.5, max: 4, step: 0.1, initial: 1, label: 'Frequenz b' },
        { param: 'c', min: -3.14, max: 3.14, step: 0.1, initial: 0, label: 'Phase c' },
        { param: 'd', min: -3, max: 3, step: 0.5, initial: 0, label: 'Verschiebung d' },
      ],
      xRange: [-7, 7],
      yRange: [-6, 6],
    },
  },
  {
    id: '10-diff-einfuehrung',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Einführung Differentialrechnung',
    icon: '📊',
    color: '#a78bfa',
    period: 'Klasse 10',
    exercises: diffEinfuehrungEx,
    lesson: diffEinfuehrungLesson,
    plotter: {
      title: 'Erkunde Tangenten & Sekanten',
      functions: [
        { expression: 'x^2', color: '#a78bfa', label: 'f(x) = x²' },
        { expression: '2*a*x - a^2', color: '#fbbf24', label: 'Tangente bei x = a' },
      ],
      sliders: [
        { param: 'a', min: -3, max: 3, step: 0.1, initial: 1, label: 'Berührpunkt a' },
      ],
      xRange: [-4, 4],
      yRange: [-2, 10],
    },
    station: 'SekanteTangente',
  },
  {
    id: '10-funktionsklassen',
    grade: 10,
    domain: 'analysis',
    titleKey: 'Funktionsklassen (Überblick)',
    icon: '📋',
    color: '#94a3b8',
    period: 'Klasse 10',
    exercises: funktionsklassenEx,
    lesson: funktionsklassenLesson,
    plotter: {
      title: 'Vergleiche Funktionstypen',
      functions: [
        { expression: 'a * x + 1', color: '#3b82f6', label: 'linear: ax + 1' },
        { expression: 'a * x^2', color: '#f59e0b', label: 'quadratisch: ax²' },
        { expression: 'a^x', color: '#22c55e', label: 'exponentiell: aˣ' },
      ],
      sliders: [
        { param: 'a', min: 0.5, max: 3, step: 0.1, initial: 1, label: 'Parameter a' },
      ],
      xRange: [-4, 5],
      yRange: [-3, 15],
    },
  },
  // ─── KLASSE 11 ──────────────────────────────────────────────────────────────

  {
    id: '11-ableitungsregeln',
    grade: 11,
    domain: 'analysis',
    titleKey: 'Ableitungsregeln',
    icon: '✏️',
    color: '#a78bfa',
    period: 'Klasse 11',
    exercises: ableitungsregelnEx,
    lesson: ableitungsregelnLesson,
    plotter: {
      title: 'Erkunde Ableitungsregeln',
      functions: [
        { expression: 'a*x^3 + b*x^2 + c*x', color: '#a78bfa', label: 'f(x)' },
        { expression: '3*a*x^2 + 2*b*x + c', color: '#fbbf24', label: "f'(x)" },
      ],
      sliders: [
        { param: 'a', min: -2, max: 2, step: 0.1, initial: 1, label: 'a' },
        { param: 'b', min: -3, max: 3, step: 0.5, initial: 0, label: 'b' },
        { param: 'c', min: -3, max: 3, step: 0.5, initial: 0, label: 'c' },
      ],
      xRange: [-5, 5],
      yRange: [-10, 15],
    },
  },
  {
    id: '11-kurvendiskussion',
    grade: 11,
    domain: 'analysis',
    titleKey: 'Kurvendiskussion',
    icon: '📉',
    color: '#c084fc',
    period: 'Klasse 11',
    exercises: kurvendiskussionEx,
    lesson: kurvendiskussionLesson,
    plotter: {
      title: 'Kurvendiskussion interaktiv',
      functions: [
        { expression: 'a*x^3 - 3*a*x', color: '#c084fc', label: 'f(x) = ax³ - 3ax' },
      ],
      sliders: [
        { param: 'a', min: -2, max: 2, step: 0.1, initial: 1, label: 'Parameter a' },
      ],
      xRange: [-4, 4],
      yRange: [-8, 8],
    },
  },
  {
    id: '11-extremwertaufgaben',
    grade: 11,
    domain: 'analysis',
    titleKey: 'Extremwertaufgaben',
    icon: '🏆',
    color: '#f59e0b',
    period: 'Klasse 11',
    exercises: extremwertEx,
    lesson: extremwertLesson,
    plotter: null,
  },
  {
    id: '11-integralrechnung',
    grade: 11,
    domain: 'analysis',
    titleKey: 'Integralrechnung (Einführung)',
    icon: '∫',
    color: '#06b6d4',
    period: 'Klasse 11',
    exercises: integralrechnungEx,
    lesson: integralrechnungLesson,
    plotter: {
      title: 'Fläche unter der Kurve',
      functions: [
        { expression: 'x^2 - a', color: '#06b6d4', label: 'f(x) = x² - a' },
      ],
      sliders: [
        { param: 'a', min: -2, max: 4, step: 0.5, initial: 1, label: 'Verschiebung a' },
      ],
      xRange: [-4, 4],
      yRange: [-4, 10],
    },
  },
  {
    id: '11-exp-log',
    grade: 11,
    domain: 'analysis',
    titleKey: 'Exponential- & Logarithmusfunktionen',
    icon: '📈',
    color: '#22c55e',
    period: 'Klasse 11',
    exercises: expLogEx,
    lesson: expLogLesson,
    plotter: {
      title: 'e-Funktion und Logarithmus',
      functions: [
        { expression: 'a * exp(b * x)', color: '#22c55e', label: 'f(x) = a·e^(bx)' },
        { expression: 'log(x) / log(exp(1))', color: '#fbbf24', label: 'g(x) = ln(x)' },
      ],
      sliders: [
        { param: 'a', min: 0.1, max: 5, step: 0.1, initial: 1, label: 'Startwert a' },
        { param: 'b', min: -2, max: 2, step: 0.1, initial: 1, label: 'Wachstumsrate b' },
      ],
      xRange: [-3, 5],
      yRange: [-3, 15],
    },
  },
  {
    id: '11-binomialverteilung',
    grade: 11,
    domain: 'stochastik',
    titleKey: 'Binomialverteilung',
    icon: '🎯',
    color: '#3b82f6',
    period: 'Klasse 11',
    exercises: binomialEx,
    lesson: binomialLesson,
    plotter: null,
    station: 'BinomialHistogram',
  },
  {
    id: '11-bedingte-wahrscheinlichkeit',
    grade: 11,
    domain: 'stochastik',
    titleKey: 'Bedingte Wahrscheinlichkeit',
    icon: '🔗',
    color: '#6366f1',
    period: 'Klasse 11',
    exercises: bedingteWkEx,
    lesson: bedingteWkLesson,
    plotter: null,
    station: 'ProbabilityTree',
  },
  {
    id: '11-vektorrechnung',
    grade: 11,
    domain: 'geometrie',
    titleKey: 'Vektorrechnung (Einführung)',
    icon: '➡️',
    color: '#f472b6',
    period: 'Klasse 11',
    exercises: vektorrechnungEx,
    lesson: vektorrechnungLesson,
    plotter: null,
    station: 'VectorExplorer',
  },

  // ─── KLASSE 12 ──────────────────────────────────────────────────────────────

  {
    id: '12-e-funktion-ln',
    grade: 12,
    domain: 'analysis',
    titleKey: 'e-Funktion & ln (vertieft)',
    icon: '🔬',
    color: '#10b981',
    period: 'Klasse 12',
    exercises: eFunktionLnEx,
    lesson: eFunktionLnLesson,
    plotter: {
      title: 'e-Funktionen und ihre Ableitungen',
      functions: [
        { expression: 'a * x * exp(-b * x)', color: '#10b981', label: 'f(x) = ax·e^(-bx)' },
        { expression: 'a * exp(-b * x) * (1 - b * x)', color: '#fbbf24', label: "f'(x)" },
      ],
      sliders: [
        { param: 'a', min: 0.5, max: 5, step: 0.1, initial: 1, label: 'Faktor a' },
        { param: 'b', min: 0.1, max: 3, step: 0.1, initial: 1, label: 'Dämpfung b' },
      ],
      xRange: [-1, 8],
      yRange: [-2, 5],
    },
  },
  {
    id: '12-integralrechnung-vertieft',
    grade: 12,
    domain: 'analysis',
    titleKey: 'Integralrechnung (vertieft)',
    icon: '🔢',
    color: '#0ea5e9',
    period: 'Klasse 12',
    exercises: integralVertieftEx,
    lesson: integralVertieftLesson,
    plotter: {
      title: 'Fläche zwischen Kurven',
      functions: [
        { expression: 'sin(x) + 2', color: '#0ea5e9', label: 'f(x) = sin(x) + 2' },
        { expression: '0.5 * x', color: '#f472b6', label: 'g(x) = 0,5x' },
      ],
      sliders: [],
      xRange: [-1, 7],
      yRange: [-1, 5],
    },
  },
  {
    id: '12-analytische-geometrie',
    grade: 12,
    domain: 'geometrie',
    titleKey: 'Analytische Geometrie',
    icon: '🌐',
    color: '#e879f9',
    period: 'Klasse 12',
    exercises: analytischeGeoEx,
    lesson: analytischeGeoLesson,
    plotter: null,
  },
  {
    id: '12-hypothesentests',
    grade: 12,
    domain: 'stochastik',
    titleKey: 'Hypothesentests',
    icon: '⚖️',
    color: '#8b5cf6',
    period: 'Klasse 12',
    exercises: hypothesentestsEx,
    lesson: hypothesentestsLesson,
    plotter: null,
    station: 'BinomialHistogram',
  },
  {
    id: '12-normalverteilung',
    grade: 12,
    domain: 'stochastik',
    titleKey: 'Normalverteilung',
    icon: '🔔',
    color: '#2563eb',
    period: 'Klasse 12',
    exercises: normalverteilungEx,
    lesson: normalverteilungLesson,
    plotter: {
      title: 'Die Normalverteilung',
      functions: [
        { expression: '(1/(b*sqrt(2*pi))) * exp(-0.5*((x-a)/b)^2)', color: '#2563eb', label: 'N(µ, σ)' },
      ],
      sliders: [
        { param: 'a', min: -5, max: 5, step: 0.1, initial: 0, label: 'Erwartungswert µ' },
        { param: 'b', min: 0.3, max: 3, step: 0.1, initial: 1, label: 'Standardabweichung σ' },
      ],
      xRange: [-8, 8],
      yRange: [-0.1, 1.5],
    },
  },
  {
    id: '12-matrizen',
    grade: 12,
    domain: 'algebra',
    titleKey: 'Matrizen & Übergangsprozesse',
    icon: '🔲',
    color: '#34d399',
    period: 'Klasse 12',
    exercises: matrizenEx,
    lesson: matrizenLesson,
    plotter: null,
  },
  {
    id: '12-abiturvorbereitung',
    grade: 12,
    domain: 'analysis',
    titleKey: 'Abiturvorbereitung',
    icon: '🎓',
    color: '#fbbf24',
    period: 'Klasse 12',
    exercises: abivorbereitungEx,
    lesson: abivorbereitungLesson,
    plotter: null,
  },
];

export function getTopic(topicId) {
  return TOPICS.find(t => t.id === topicId);
}

export function getTopicsByGrade(grade) {
  return TOPICS.filter(t => t.grade === grade);
}

export function getAllTopicIds() {
  return TOPICS.map(t => t.id);
}
