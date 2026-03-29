import { exercises as quadFunktionenEx } from './exercises/10-quad-funktionen';
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
    plotter: null,
    station: 'DiceSim',
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
    plotter: null,
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
    plotter: null,
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
