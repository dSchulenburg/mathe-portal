import { describe, it, expect } from 'vitest';
import { derivative, evaluate } from 'mathjs';
import { DIFF_LEVELS } from '../data/types';
import { exercises } from '../data/exercises/11-ableitungsregeln';
import { lesson } from '../data/lessons/11-ableitungsregeln';

/**
 * Ableitungsregeln — Struktur und Quotientenregel.
 *
 * Anlass: DIDAKTIK-ANALYSE.md, Abschnitt "Curriculum-Luecken". Die
 * Quotientenregel stand als Formel und Erklaertext in der Lesson, hatte aber
 * weder einen concepts-Block noch ein Beispiel noch eine einzige Aufgabe —
 * 18 Aufgaben im Thema, null davon zur Quotientenregel.
 *
 * Der interessante Teil ist nicht die Abzaehlung, sondern QUOTIENT_CASES:
 * dort steht der Funktionsterm, und der Test differenziert ihn SYMBOLISCH mit
 * mathjs und vergleicht das Ergebnis mit dem Wert, der in der Aufgabendatei
 * steht. Ein Loesungsschluessel-Bug wie `abi-basis-001` (correctValue 17,
 * Rechenweg 13) faellt damit auf, ohne dass jemand nachrechnet.
 */

// Funktionsterm und Stelle je Aufgabe — bewusst HIER und nicht in den
// Aufgabendaten: sonst pruefte der Test seine eigene Quelle.
const QUOTIENT_CASES = {
  'abl-quot-001': { term: 'x/(x+1)', at: 1 },
  'abl-quot-003': { term: '(2*x^2-3)/(x^2+1)', at: 1 },
};

describe('Ableitungsregeln exercises', () => {
  it('all have required fields', () => {
    exercises.forEach((ex) => {
      expect(ex.id).toBeTruthy();
      expect(ex.topicId).toBe('11-ableitungsregeln');
      expect(DIFF_LEVELS).toContain(ex.diffLevel);
      expect(ex.competencies.length).toBeGreaterThan(0);
      expect(ex.data).toBeDefined();
      expect(ex.solutionKey).toBeTruthy();
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
});

describe('Quotientenregel — Curriculum-Luecke geschlossen', () => {
  const quot = exercises.filter((e) => e.tags?.includes('quotientenregel'));

  it('hat mindestens vier Aufgaben zur Quotientenregel', () => {
    expect(quot.length).toBeGreaterThanOrEqual(4);
  });

  it('verteilt sie ueber mindestens zwei Anforderungsbereiche', () => {
    expect(new Set(quot.map((e) => e.diffLevel)).size).toBeGreaterThanOrEqual(2);
  });

  it('enthaelt eine Fehleranalyse zum Vorzeichen im Zaehler', () => {
    expect(quot.some((e) => e.type === 'error-analysis')).toBe(true);
  });

  it('gibt in jeder Quotienten-Aufgabe mindestens einen Tipp', () => {
    quot.forEach((e) => expect(e.hintKeys?.length ?? 0).toBeGreaterThan(0));
  });

  it('rechnet die numerischen Loesungen unabhaengig nach (mathjs)', () => {
    const ids = Object.keys(QUOTIENT_CASES);
    expect(ids.length).toBeGreaterThan(0);
    ids.forEach((id) => {
      const ex = exercises.find((e) => e.id === id);
      expect(ex, `Aufgabe ${id} fehlt`).toBeDefined();
      const { term, at } = QUOTIENT_CASES[id];
      const soll = evaluate(derivative(term, 'x').toString(), { x: at });
      expect(ex.data.correctValue).toBeCloseTo(soll, 6);
    });
  });

  it('trifft im Stueckkosten-Kontext das Betriebsoptimum', () => {
    const ex = exercises.find((e) => e.id === 'abl-quot-004');
    expect(ex).toBeDefined();
    // k(x) = (0,5x^2 + 8x + 200)/x, Minimum dort wo k'(x) = 0
    const k = '(0.5*x^2+8*x+200)/x';
    const kStrich = derivative(k, 'x').toString();
    // Schritt 3 fragt die optimale Menge, Schritt 4 die Stueckkosten dort.
    // Indizes statt Marker-Felder: die Aufgabendatei bleibt frei von
    // Feldern, die nur der Test braucht.
    const xOpt = ex.data.steps[2].expected;
    expect(evaluate(kStrich, { x: xOpt })).toBeCloseTo(0, 9);
    const kOpt = ex.data.steps[3].expected;
    expect(evaluate(k, { x: xOpt })).toBeCloseTo(kOpt, 6);
  });
});

describe('Quotientenregel — Lesson', () => {
  it('hat einen eigenen concepts-Block', () => {
    expect(lesson.concepts.some((c) => c.titleKey.includes('quotient_rule'))).toBe(true);
  });

  it('hat ein durchgerechnetes Beispiel', () => {
    expect(lesson.examples.some((e) => e.titleKey.includes('quotient_rule'))).toBe(true);
  });

  it('warnt vor dem vertauschten Vorzeichen im Zaehler', () => {
    expect(lesson.mistakes.some((m) => m.wrongKey.includes('quotient'))).toBe(true);
  });
});
