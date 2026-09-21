import { describe, it, expect } from 'vitest';
import { escHtml, renderMathText, katexCssInline } from './math-render.mjs';

describe('escHtml', () => {
  it('maskiert die fünf HTML-Sonderzeichen', () => {
    expect(escHtml('a < b & c > d "e"')).toBe('a &lt; b &amp; c &gt; d &quot;e&quot;');
  });

  it('liefert für leere Eingaben einen leeren String', () => {
    expect(escHtml('')).toBe('');
    expect(escHtml(null)).toBe('');
    expect(escHtml(undefined)).toBe('');
  });
});

describe('renderMathText', () => {
  it('lässt Text ohne Mathe unverändert (nur maskiert)', () => {
    const out = renderMathText('Berechne den Flächeninhalt.');
    expect(out).toBe('Berechne den Flächeninhalt.');
    expect(out).not.toContain('katex');
  });

  it('rendert einen Mathe-Abschnitt zu KaTeX-Markup statt ihn zu drucken', () => {
    const out = renderMathText('Es gilt $x^2 + 1$ für alle x.');
    expect(out).toContain('class="katex"');
    // Der rohe LaTeX-Quelltext darf NICHT mehr als Fließtext dastehen:
    expect(out).not.toContain('$x^2 + 1$');
  });

  it('löst \\frac auf, statt den Befehl zu drucken - der eigentliche Fehler', () => {
    const out = renderMathText('Ergebnis: $\\frac{50}{3}$');
    expect(out).toContain('class="katex"');
    expect(out).not.toContain('\\frac');
  });

  it('maskiert HTML außerhalb der Mathe-Abschnitte weiterhin', () => {
    const out = renderMathText('Wenn a < b, dann $x > 0$');
    expect(out).toContain('a &lt; b');
  });

  it('behandelt < innerhalb von Mathe als Mathe, nicht als Markup', () => {
    const out = renderMathText('$a < b$');
    expect(out).toContain('class="katex"');
  });

  it('stürzt bei ungerader Anzahl Dollarzeichen nicht ab', () => {
    const out = renderMathText('Preis: 5$ und mehr');
    expect(typeof out).toBe('string');
    expect(out).toContain('Preis');
  });

  it('stürzt bei ungültigem LaTeX nicht ab, sondern zeigt den Rohtext', () => {
    const out = renderMathText('$\\nichtexistierenderBefehl{x}$');
    expect(typeof out).toBe('string');
    expect(out.length).toBeGreaterThan(0);
  });

  it('rendert mehrere Abschnitte in einem Text', () => {
    const out = renderMathText('$a=1$ und $b=2$');
    expect(out.match(/class="katex"/g)?.length).toBe(2);
  });

  it('verträgt leere Eingaben', () => {
    expect(renderMathText('')).toBe('');
    expect(renderMathText(null)).toBe('');
  });

  it('lässt einen leeren Mathe-Abschnitt ($$) unfallfrei durch', () => {
    expect(typeof renderMathText('vorher $$ nachher')).toBe('string');
  });
});

describe('katexCssInline', () => {
  it('liefert CSS ohne externe Font-Verweise - sonst fehlen im PDF die Glyphen', () => {
    const css = katexCssInline();
    expect(css).toContain('.katex');
    // Keine Verweise mehr auf Dateien: alles muss als data:-URI eingebettet sein.
    expect(css).not.toMatch(/url\((['"]?)fonts\//);
    expect(css).toContain('data:font/woff2;base64,');
  });

  it('bettet die Kern-Schriftfamilien ein', () => {
    const css = katexCssInline();
    for (const family of ['KaTeX_Main', 'KaTeX_Math', 'KaTeX_Size1']) {
      expect(css).toContain(family);
    }
  });
});
