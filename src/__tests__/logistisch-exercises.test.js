import { describe, it, expect } from 'vitest';
import { evaluate, derivative } from 'mathjs';
import { DIFF_LEVELS } from '../data/types';
import { TOPICS } from '../data/topics';
import { exercises } from '../data/exercises/12-logistisches-wachstum';
import { lesson } from '../data/lessons/12-logistisches-wachstum';

/**
 * Logistisches und beschraenktes Wachstum — Curriculum-Luecke aus
 * DIDAKTIK-ANALYSE.md: "wird in einer Aufgabe in 12 erwaehnt", naemlich in
 * `efn-ea-002` (virale Reichweite). Die Aufgabe blieb, das Thema fehlte —
 * Schueler:innen bekamen ein eA-Modell vorgesetzt, das nirgends erklaert war.
 *
 * Das durchgehende Modell dieses Themas ist der Seerosen-Teich:
 *   N(t) = 500 / (1 + 9 e^{-0,4 t})
 * mit Kapazitaet K = 500, Startwert N(0) = 50, Wachstumsrate r = 0,4.
 * Alle Kennzahlen werden hier aus dem Term hergeleitet, nicht abgeschrieben.
 */

const K = 500;
const A = 9;
const R = 0.4;
const MODELL = `${K}/(1+${A}*exp(-${R}*t))`;

describe('Logistisches Wachstum — Thema ist registriert', () => {
  const topic = TOPICS.find((t) => t.id === '12-logistisches-wachstum');

  it('steht in TOPICS', () => {
    expect(topic).toBeDefined();
  });

  it('haengt in Klasse 12 an der Analysis', () => {
    expect(topic.grade).toBe(12);
    expect(topic.domain).toBe('analysis');
  });

  it('bringt Lesson und Aufgaben mit', () => {
    expect(topic.lesson).toBe(lesson);
    expect(topic.exercises).toBe(exercises);
  });

  it('hat einen Plotter mit Kapazitaets- und Ratenregler', () => {
    expect(topic.plotter).toBeTruthy();
    expect(topic.plotter.sliders.length).toBeGreaterThanOrEqual(2);
  });

  it('setzt die e-Funktion voraus', () => {
    expect(lesson.prerequisites).toContain('12-e-funktion-ln');
  });

  it('baut Bruecken — auch zurueck zum exponentiellen Wachstum aus Klasse 10', () => {
    const ziele = lesson.connections.map((c) => c.topicId);
    expect(ziele.length).toBeGreaterThanOrEqual(3);
    expect(ziele).toContain('10-exp-wachstum');
    expect(ziele).toContain('12-e-funktion-ln');
    const bekannt = new Set(TOPICS.map((t) => t.id));
    ziele.forEach((z) => expect(bekannt.has(z), `Bruecke ins Leere: ${z}`).toBe(true));
  });
});

describe('Logistisches Wachstum exercises', () => {
  it('hat mindestens zwoelf Aufgaben', () => {
    expect(exercises.length).toBeGreaterThanOrEqual(12);
  });

  it('all have required fields', () => {
    exercises.forEach((ex) => {
      expect(ex.id).toBeTruthy();
      expect(ex.topicId).toBe('12-logistisches-wachstum');
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

  it('behandelt beide Wachstumsarten und den Wendepunkt', () => {
    const tags = new Set(exercises.flatMap((e) => e.tags ?? []));
    ['beschraenktes-wachstum', 'logistisches-wachstum', 'wendepunkt'].forEach((t) =>
      expect(tags.has(t), `fehlt: ${t}`).toBe(true),
    );
  });
});

describe('Logistisches Wachstum — Kennzahlen unabhaengig hergeleitet', () => {
  it('trifft den Startwert des Seerosen-Modells', () => {
    const ex = exercises.find((e) => e.id === 'lw-std-001');
    expect(ex).toBeDefined();
    expect(ex.data.correctValue).toBeCloseTo(evaluate(MODELL, { t: 0 }), 6);
  });

  it('setzt den Wendepunkt auf die halbe Kapazitaet', () => {
    const ex = exercises.find((e) => e.id === 'lw-basis-003');
    expect(ex).toBeDefined();
    // Der Wendepunkt liegt bei N = K/2 — hier fuer die Kapazitaet der Aufgabe
    const kAufgabe = 100000;
    expect(ex.data.correctValue).toBeCloseTo(kAufgabe / 2, 6);
    // ... und im Seerosen-Modell laesst sich das nachrechnen:
    const tW = Math.log(A) / R;
    expect(evaluate(MODELL, { t: tW })).toBeCloseTo(K / 2, 6);
  });

  it('trifft Wendezeitpunkt und maximale Zuwachsrate', () => {
    const ex = exercises.find((e) => e.id === 'lw-erw-001');
    expect(ex).toBeDefined();
    const numerisch = ex.data.steps.filter((s) => s.type === 'numeric-input');
    expect(numerisch.length).toBeGreaterThanOrEqual(2);
    // Schritt: Wendezeitpunkt t_W = ln(a)/r — die Aufgabe fragt auf zwei
    // Dezimalstellen, deshalb wird hier auch auf zwei geprueft
    expect(numerisch[0].expected).toBeCloseTo(Math.log(A) / R, 2);
    // Schritt: maximale Zuwachsrate N'(t_W) — muss r*K/4 sein
    const dN = derivative(MODELL, 't').toString();
    expect(numerisch[1].expected).toBeCloseTo(evaluate(dN, { t: Math.log(A) / R }), 3);
    expect(numerisch[1].expected).toBeCloseTo((R * K) / 4, 6);
  });

  it('trifft die Abkuehlung im beschraenkten Wachstum', () => {
    const ex = exercises.find((e) => e.id === 'lw-std-003');
    expect(ex).toBeDefined();
    // Die Aufgabe fragt auf zwei Dezimalstellen. Geprueft wird deshalb gegen
    // die Toleranz, die sie selbst gewaehrt — der hinterlegte Wert muss
    // innerhalb dessen liegen, was ein Lernender als richtig gewertet bekommt.
    const wahr = evaluate('20+60*exp(-0.1*t)', { t: 10 });
    expect(Math.abs(ex.data.correctValue - wahr)).toBeLessThanOrEqual(ex.data.tolerance);
  });

  it('laesst die Kapazitaet als Grenzwert stehen', () => {
    const ex = exercises.find((e) => e.id === 'lw-basis-002');
    expect(ex).toBeDefined();
    // T(t) = 20 + 60 e^{-0,1 t} naehert sich 20 — nach 1000 Stunden praktisch erreicht
    expect(ex.data.correctValue).toBeCloseTo(evaluate('20+60*exp(-0.1*t)', { t: 1000 }), 6);
  });
});
