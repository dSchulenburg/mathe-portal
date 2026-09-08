import { describe, it, expect } from 'vitest';
import { klartext, vorschauText } from '../mathVorschau';

describe('klartext', () => {
  it('macht aus dem Beispiel des Befunds eine lesbare Zeile', () => {
    // Genau der Fall aus dem Task: 1/6 - Leite die Funktion $f(x) = x^3$ ab.
    expect(klartext('f(x) = x^3')).toBe('f(x) = x³');
  });

  it('loest Brueche zur Schraegstrich-Schreibweise auf', () => {
    expect(klartext('\\dfrac{x^2-9}{x-3}')).toBe('x²-9/x-3');
    expect(klartext('\\frac{1}{2}')).toBe('1/2');
  });

  it('zaehlt verschachtelte Klammern richtig mit', () => {
    // Ohne Klammerzaehlung braeche das am ersten } ab.
    expect(klartext('\\dfrac{\\text{Weg}}{t}')).toBe('Weg/t');
  });

  it('uebersetzt das KaTeX-Dezimalkomma', () => {
    expect(klartext('1{,}70')).toBe('1,70');
    expect(klartext('k = 1{,}5')).toBe('k = 1,5');
  });

  it('macht aus Einheiten mit Abstandsbefehl normalen Text', () => {
    expect(klartext('10\\,\\text{cm}')).toBe('10 cm');
  });

  it('ersetzt ganze Umgebungen, statt sie zerlaufen zu lassen', () => {
    // 86 pmatrix im Bestand -- inline nie sinnvoll darstellbar.
    expect(klartext('\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}')).toBe('a = (…)');
  });

  it('setzt bekannte Symbole und behaelt unbekannte Namen lesbar', () => {
    expect(klartext('3 \\cdot 2^x')).toBe('3 · 2^x');
    expect(klartext('\\pi r^2')).toBe('π r²');
    expect(klartext('\\sin(\\alpha) \\leq 1')).toBe('sin(α) ≤ 1');
  });

  it('laesst einen unbalancierten Befehl stehen statt den Term zu verschlucken', () => {
    expect(klartext('\\frac{1}{2')).toContain('frac');
  });
});

describe('vorschauText', () => {
  it('laesst kurze Texte unberuehrt', () => {
    expect(vorschauText('Berechne die Flaeche.', 80)).toBe('Berechne die Flaeche.');
  });

  it('gibt Text ohne Formeln unveraendert zurueck, nur gekuerzt', () => {
    const lang = 'Ein Wort '.repeat(20);
    const out = vorschauText(lang, 30);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(31);
  });

  it('schneidet NICHT mitten in eine Formel', () => {
    const text = 'Leite ab: $f(x) = 3x^4 - 2x^2 + x$ und pruefe.';
    // Budget endet mitten in der Formel -> sie faellt ganz weg.
    const out = vorschauText(text, 14);
    expect(out).toBe('Leite ab:…');
    expect(out).not.toContain('3x');
  });

  it('nimmt eine Formel mit, wenn sie noch ganz passt', () => {
    const out = vorschauText('Leite ab: $f(x) = x^3$ bitte.', 80);
    expect(out).toBe('Leite ab: f(x) = x³ bitte.');
  });

  it('haengt genau ein Auslassungszeichen an', () => {
    const out = vorschauText('Sehr langer Aufgabentext ohne jede Formel darin, wirklich sehr lang.', 20);
    expect(out.match(/…/g)).toHaveLength(1);
  });

  it('kommt mit leerem und fehlendem Text zurecht', () => {
    expect(vorschauText('', 80)).toBe('');
    expect(vorschauText(undefined, 80)).toBe('');
  });

  it('haelt die Laengenzusage auch mit Formeln ein', () => {
    const text = 'Der Wasserstand folgt $W(t) = 0{,}1t^3 - 1{,}5t^2 + 6t + 10$ (m ueber Pegel).';
    for (const max of [20, 40, 50, 80]) {
      expect(vorschauText(text, max).length).toBeLessThanOrEqual(max + 1);
    }
  });

  it('laesst kein rohes Dollarzeichen durch', () => {
    const text = 'Ein Ball: $h(t) = -5t^2 + 20t$ (h in m). Nach wie vielen Sekunden?';
    expect(vorschauText(text, 80)).not.toContain('$');
  });
});
