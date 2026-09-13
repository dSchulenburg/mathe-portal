import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LessonConcepts from '../LessonConcepts';
import LessonExamples from '../LessonExamples';
import LessonRealWorld from '../LessonRealWorld';

// Befund 13.09.2026 (Task qqm, Browser-Gegenprobe): Titel wie
// "Signifikanzniveau $\alpha$" oder "Ableitung von $\ln(g(x))$" standen mit
// Dollarzeichen auf dem Bildschirm, weil nur die Beschreibungen durch MathText
// liefen, die Ueberschriften nicht.
const TITLE = 'Signifikanzniveau $\\alpha$';
const t = (key) => (key.endsWith('.title') ? TITLE : 'Text');

function expectRendered(container) {
  expect(container.querySelector('.katex')).not.toBeNull();
  expect(container.textContent).not.toContain('$\\alpha$');
}

describe('Lesson-Ueberschriften rendern Inline-LaTeX', () => {
  it('LessonConcepts', () => {
    const { container } = render(
      <LessonConcepts topicId="x" t={t} accentColor="#fff"
        concepts={[{ titleKey: 'c.title', descriptionKey: 'c.desc', highlight: 'cyan' }]} />
    );
    expectRendered(container);
  });

  it('LessonExamples', () => {
    const { container } = render(
      <LessonExamples topicId="x" t={t} accentColor="#fff"
        examples={[{ titleKey: 'e.title', steps: [{ key: 'e.step1' }] }]} />
    );
    expectRendered(container);
  });

  it('LessonRealWorld', () => {
    const { container } = render(
      <LessonRealWorld topicId="x" t={t} accentColor="#fff"
        examples={[{ icon: '🎲', titleKey: 'r.title', descriptionKey: 'r.desc' }]} />
    );
    expectRendered(container);
  });
});
