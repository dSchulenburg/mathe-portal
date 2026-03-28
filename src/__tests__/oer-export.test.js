import { describe, it, expect } from 'vitest';
import { exportJSON, exportLaTeX, exportGIFT, generateEmbedCode } from '../lib/oer-export';

const exercise = {
  id: 'quad-scheitel-001',
  topicId: '10-quad-funktionen',
  type: 'numeric-input',
  diffLevel: 'standard',
  competencies: ['kommunikation'],
  points: 5,
  data: { questionText: 'Bestimme den Scheitel von f(x) = (x-3)² + 2', correctValue: 5, tolerance: 0.01 },
  hintKeys: ['Schreibe die Funktion in Scheitelpunktform'],
  solutionKey: 'Der Scheitel liegt bei S(3|2)',
  tags: ['abiturrelevant'],
};

describe('OER Export', () => {
  it('exports valid JSON with license', () => {
    const json = exportJSON(exercise);
    expect(json.id).toBe('quad-scheitel-001');
    expect(json.license).toBe('CC-BY-SA-4.0');
    expect(json.author).toBe('Dirk Schulenburg');
    expect(json.source).toContain('dirk-schulenburg.net');
  });

  it('exports LaTeX', () => {
    const latex = exportLaTeX(exercise);
    expect(latex).toContain('\\begin{exercise}');
    expect(latex).toContain('Bestimme den Scheitel');
    expect(latex).toContain('CC-BY-SA-4.0');
  });

  it('exports GIFT format', () => {
    const gift = exportGIFT(exercise);
    expect(gift).toContain('::quad-scheitel-001::');
    expect(gift).toContain('{#5');
  });

  it('generates embed code', () => {
    const embed = generateEmbedCode('quad-scheitel-001');
    expect(embed).toContain('<iframe');
    expect(embed).toContain('lernmodule.dirk-schulenburg.net');
    expect(embed).toContain('quad-scheitel-001');
  });
});
