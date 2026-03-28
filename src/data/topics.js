import { exercises as quadFunktionenEx } from './exercises/10-quad-funktionen';
import { exercises as quadGleichungenEx } from './exercises/10-quad-gleichungen';
import { exercises as trigonometrieEx } from './exercises/10-trigonometrie';
import { exercises as expWachstumEx } from './exercises/10-exp-wachstum';
import { exercises as wahrscheinlichkeitEx } from './exercises/10-wahrscheinlichkeit';

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
