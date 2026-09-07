import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LessonObjectives from '../LessonObjectives';
import LessonConcepts from '../LessonConcepts';

/**
 * Lernziele muessen ihre Formeln rendern.
 *
 * Am 07.09.2026 im Browser gegen die Produktion gemessen: LessonObjectives
 * war die einzige Lesson-Komponente mit Formeln im Text und ohne
 * Mathe-Renderer. 27 Lernziel-Zeilen in 14 Themen zeigten ihren LaTeX-
 * Quelltext roh an — "Die Potenzregel sicher anwenden: $f(x) = x^n$
 * ableiten" stand buchstaeblich so auf dem Bildschirm.
 *
 * Derselbe Fehlertyp wie am 06.09. bei LessonConnections. Im Diff der
 * Sprachdateien ist er unsichtbar: er steckt in der Komponente, nicht in
 * den Daten. Deshalb prueft dieser Test die Komponente und vergleicht sie
 * mit einer Schwester, die es richtig macht.
 */

const FORMEL = 'Die Potenzregel anwenden: $f(x) = x^n$ ableiten';
const t = (key) => (key.startsWith('lessons.') ? FORMEL : key);

describe('LessonObjectives rendert Mathe', () => {
  it('zeigt keinen rohen LaTeX-Quelltext an', () => {
    const { container } = render(
      <LessonObjectives objectives={['objectives.power_rule']} topicId="11-ableitungsregeln" t={t} />,
    );
    expect(container.textContent).not.toContain('$f(x) = x^n$');
  });

  it('erzeugt echtes KaTeX-Markup', () => {
    const { container } = render(
      <LessonObjectives objectives={['objectives.power_rule']} topicId="11-ableitungsregeln" t={t} />,
    );
    expect(container.querySelectorAll('.katex').length).toBeGreaterThan(0);
  });

  it('laesst Text ohne Formel unveraendert', () => {
    const schlicht = () => 'Grenzwerte anschaulich verstehen';
    const { container } = render(
      <LessonObjectives objectives={['objectives.x']} topicId="10-stetigkeit" t={schlicht} />,
    );
    expect(container.textContent).toContain('Grenzwerte anschaulich verstehen');
  });

  it('verhaelt sich wie die Schwesterkomponente LessonConcepts', () => {
    const ziele = render(
      <LessonObjectives objectives={['objectives.power_rule']} topicId="11-ableitungsregeln" t={t} />,
    );
    const konzepte = render(
      <LessonConcepts
        concepts={[{ titleKey: 'c.title', descriptionKey: 'c.desc', formula: 'x^2', highlight: 'cyan' }]}
        topicId="11-ableitungsregeln"
        t={t}
      />,
    );
    const hatKatex = (r) => r.container.querySelectorAll('.katex').length > 0;
    expect(hatKatex(ziele)).toBe(hatKatex(konzepte));
  });
});
