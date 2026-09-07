import { describe, it, expect } from 'vitest';
import { evaluate } from 'mathjs';
import { DIFF_LEVELS } from '../data/types';
import { TOPICS } from '../data/topics';
import { exercises } from '../data/exercises/10-stetigkeit';
import { lesson } from '../data/lessons/10-stetigkeit';

/**
 * Stetigkeit — Curriculum-Luecke aus DIDAKTIK-ANALYSE.md.
 *
 * "Limes wird in 10 eingefuehrt, Stetigkeit nicht." Das Wort kam im ganzen
 * Portal nur als beilaeufiges Adjektiv vor, obwohl 11-rationale-funktionen
 * die "stetige Fortsetzung" bereits als bekannt voraussetzt.
 *
 * Die Zahlenwerte werden hier NACHGERECHNET, nicht abgeschrieben: Grenzwerte
 * numerisch von beiden Seiten, Parameteraufgaben durch Einsetzen in beide
 * Aeste. Ein falscher Loesungsschluessel faellt damit auf.
 */

// Hebbare Luecken: Term und Stelle. Der Test naehert sich x0 von beiden
// Seiten und vergleicht mit dem Wert, der in der Aufgabe steht.
const LUECKEN = {
  'st-basis-002': { term: '(x^2-9)/(x-3)', at: 3 },
  'st-std-002': { term: '(x^2-4)/(x-2)', at: 2 },
};

// Parameteraufgaben: beide Aeste als Term, die Nahtstelle, und der
// Aufgabenschluessel wird als Parameterwert eingesetzt.
const NAHTSTELLEN = {
  'st-std-001': { links: '2*x+p', rechts: 'x^2+3', at: 1 },
  'st-std-004': { links: 'p*x', rechts: 'x+4', at: 2 },
};

describe('Stetigkeit — Thema ist registriert', () => {
  const topic = TOPICS.find((t) => t.id === '10-stetigkeit');

  it('steht in TOPICS', () => {
    expect(topic).toBeDefined();
  });

  it('haengt in Klasse 10 an der Analysis', () => {
    expect(topic.grade).toBe(10);
    expect(topic.domain).toBe('analysis');
  });

  it('bringt Lesson und Aufgaben mit', () => {
    expect(topic.lesson).toBe(lesson);
    expect(topic.exercises).toBe(exercises);
  });

  it('hat einen Plotter, der Luecke und Polstelle nebeneinander zeigt', () => {
    expect(topic.plotter).toBeTruthy();
    expect(topic.plotter.functions.length).toBeGreaterThanOrEqual(2);
    expect(topic.plotter.sliders.length).toBeGreaterThan(0);
  });

  it('setzt den Limes aus der Differentialrechnung voraus', () => {
    expect(lesson.prerequisites).toContain('10-diff-einfuehrung');
  });

  it('baut Bruecken — auch zu den rationalen Funktionen, die es voraussetzen', () => {
    const ziele = lesson.connections.map((c) => c.topicId);
    expect(ziele.length).toBeGreaterThanOrEqual(3);
    expect(ziele).toContain('11-rationale-funktionen');
    const bekannt = new Set(TOPICS.map((t) => t.id));
    ziele.forEach((z) => expect(bekannt.has(z), `Bruecke ins Leere: ${z}`).toBe(true));
  });
});

describe('Stetigkeit exercises', () => {
  it('hat mindestens zwoelf Aufgaben', () => {
    expect(exercises.length).toBeGreaterThanOrEqual(12);
  });

  it('all have required fields', () => {
    exercises.forEach((ex) => {
      expect(ex.id).toBeTruthy();
      expect(ex.topicId).toBe('10-stetigkeit');
      expect(DIFF_LEVELS).toContain(ex.diffLevel);
      expect(ex.competencies.length).toBeGreaterThan(0);
      expect(ex.data).toBeDefined();
      expect(ex.solutionKey).toBeTruthy();
      expect(ex.hintKeys?.length ?? 0).toBeGreaterThan(0);
    });
  });

  it('covers all levels', () => {
    const l = new Set(exercises.map((e) => e.diffLevel));
    expect(l.has('basis')).toBe(true);
    expect(l.has('standard')).toBe(true);
    expect(l.has('erweitert')).toBe(true);
  });

  it('has unique IDs', () => {
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has no duplicate question texts', () => {
    const texts = exercises.map((e) => (e.data.questionText ?? JSON.stringify(e.data)).trim());
    expect(new Set(texts).size).toBe(texts.length);
  });

  it('behandelt alle drei Unstetigkeitsarten', () => {
    const tags = new Set(exercises.flatMap((e) => e.tags ?? []));
    ['hebbare-luecke', 'sprungstelle', 'polstelle'].forEach((t) =>
      expect(tags.has(t), `Unstetigkeitsart fehlt: ${t}`).toBe(true),
    );
  });

  it('enthaelt den Zwischenwertsatz', () => {
    const tags = new Set(exercises.flatMap((e) => e.tags ?? []));
    expect(tags.has('zwischenwertsatz')).toBe(true);
  });
});

describe('Stetigkeit — Zahlen unabhaengig nachgerechnet', () => {
  it('trifft bei hebbaren Luecken den beidseitigen Grenzwert', () => {
    Object.entries(LUECKEN).forEach(([id, { term, at }]) => {
      const ex = exercises.find((e) => e.id === id);
      expect(ex, `Aufgabe ${id} fehlt`).toBeDefined();
      const links = evaluate(term, { x: at - 1e-7 });
      const rechts = evaluate(term, { x: at + 1e-7 });
      expect(links).toBeCloseTo(rechts, 5);
      expect(ex.data.correctValue).toBeCloseTo(links, 5);
    });
  });

  it('macht die Naht mit dem gesuchten Parameter wirklich stetig', () => {
    Object.entries(NAHTSTELLEN).forEach(([id, { links, rechts, at }]) => {
      const ex = exercises.find((e) => e.id === id);
      expect(ex, `Aufgabe ${id} fehlt`).toBeDefined();
      const p = ex.data.correctValue;
      expect(evaluate(links, { x: at, p })).toBeCloseTo(evaluate(rechts, { x: at, p }), 9);
    });
  });

  it('belegt den Vorzeichenwechsel in der Zwischenwertsatz-Aufgabe', () => {
    const ex = exercises.find((e) => e.id === 'st-erw-001');
    expect(ex).toBeDefined();
    // f(x) = x^3 - x - 1 auf [1, 2]: der Satz greift nur bei Vorzeichenwechsel
    expect(evaluate('x^3-x-1', { x: 1 })).toBeLessThan(0);
    expect(evaluate('x^3-x-1', { x: 2 })).toBeGreaterThan(0);
    // Die drei Rechenschritte der Aufgabe fragen f(1), f(2) und f(1,5) —
    // alle drei werden hier unabhaengig nachgerechnet.
    const punkte = [1, 2, 1.5];
    const numerisch = ex.data.steps.filter((s) => s.type === 'numeric-input');
    expect(numerisch).toHaveLength(punkte.length);
    numerisch.forEach((s, i) => {
      expect(s.expected).toBeCloseTo(evaluate('x^3-x-1', { x: punkte[i] }), 6);
    });
  });
});
