/**
 * Bruecken zwischen den Themen.
 *
 * Am 06.09.2026 hatten 20 von 31 Themen connections. Die elf ohne waren nicht
 * zufaellig verteilt: neun von ihnen waren bereits ZIEL fremder Bruecken, es
 * ging also hin, aber nicht zurueck. Zwei (Potenzgesetze, Quadratische
 * Gleichungen) hingen ganz ohne Verbindung im Netz, ausgerechnet zwei
 * Fundamentthemen der Klasse 10.
 */
import { describe, it, expect } from 'vitest';
import { TOPICS, getTopic } from '../data/topics';
import { CHARACTERS } from '../data/characters';

const RELATIONEN = ['baut-auf', 'fuehrt-zu', 'verwandt', 'anwendung'];
const bruecken = TOPICS.flatMap(t =>
  (t.lesson?.connections ?? []).map(c => ({ ...c, von: t.id })),
);

describe('Themen-Bruecken', () => {
  it('gibt jedem Thema mindestens zwei Bruecken', () => {
    const arm = TOPICS
      .filter(t => (t.lesson?.connections?.length ?? 0) < 2)
      .map(t => t.id);
    expect(arm).toEqual([]);
  });

  it('zeigt nur auf Themen, die es gibt', () => {
    const tot = bruecken.filter(c => !getTopic(c.topicId)).map(c => `${c.von} -> ${c.topicId}`);
    expect(tot).toEqual([]);
  });

  it('verwendet nur bekannte Relationen', () => {
    const unbekannt = [...new Set(bruecken.map(c => c.relation))].filter(r => !RELATIONEN.includes(r));
    expect(unbekannt).toEqual([]);
  });

  it('laesst kein Thema auf sich selbst zeigen', () => {
    expect(bruecken.filter(c => c.topicId === c.von).map(c => c.von)).toEqual([]);
  });

  it('nennt in jeder Sprechblase einen bekannten Charakter', () => {
    const fremd = bruecken
      .filter(c => c.bubble && !CHARACTERS[c.bubble.character])
      .map(c => `${c.von}: ${c.bubble.character}`);
    expect(fremd).toEqual([]);
  });

  it('gibt jeder Bruecke eine Begruendung und eine Sprechblase', () => {
    const duenn = bruecken
      .filter(c => !c.why?.trim() || !c.bubble?.text?.trim())
      .map(c => `${c.von} -> ${c.topicId}`);
    expect(duenn).toEqual([]);
  });

  it('nennt dasselbe Ziel je Thema nur einmal', () => {
    const doppelt = TOPICS.flatMap(t => {
      const ziele = (t.lesson?.connections ?? []).map(c => c.topicId);
      return ziele.filter((z, i) => ziele.indexOf(z) !== i).map(z => `${t.id} -> ${z}`);
    });
    expect(doppelt).toEqual([]);
  });
});

/**
 * Die Sprechblasen enthalten Inline-LaTeX zwischen Dollarzeichen. Bis zum
 * 06.09.2026 war LessonConnections die einzige Lesson-Komponente ohne
 * Mathe-Renderer — die Formeln standen als Quelltext auf dem Bildschirm.
 */
describe('LessonConnections rendert Formeln', () => {
  it('schickt den Sprechblasen-Text durch MathText', async () => {
    const quelle = await import('fs').then(fs =>
      fs.readFileSync('src/components/lesson/LessonConnections.jsx', 'utf8'),
    );
    expect(quelle).toContain("import MathText from './MathText'");
    expect(quelle).toMatch(/<MathText\s+text=\{conn\.bubble\.text\}/);
  });
});
