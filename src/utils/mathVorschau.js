/**
 * Klartext-Vorschau fuer Aufgabentexte mit Inline-LaTeX.
 *
 * Warum das hier steht: Die zusammengeklappte Aufgabenliste auf der Themenseite
 * zeigte `questionText` roh und hart auf 50 bzw. 80 Zeichen gekuerzt. Auf dem
 * Bildschirm stand dadurch buchstaeblich
 *
 *     1/6 - Leite die Funktion $f(x) = x^3$ ab. Welchen Wert hat $f'(2)$?
 *
 * Die Aufgaben selbst sind in Ordnung -- alle Exercise-Komponenten rendern ueber
 * MathText. Nur die Vorschauzeile nicht. Gleiche Fehlerfamilie wie
 * LessonConnections (06.09.2026) und LessonObjectives (07.09.2026): der Fehler
 * sitzt in der anzeigenden Komponente, nicht in den Daten, und ist in keinem
 * Daten-Diff sichtbar.
 *
 * WARUM KLARTEXT UND NICHT KaTeX: In einer kompakten Listenzeile bricht KaTeX
 * das Layout, und die harte Kuerzung koennte mitten in eine Formel schneiden.
 * Deshalb Klartext -- aber mit Kuerzung AN der Formelgrenze statt mittendrin.
 *
 * WORAUF DIE UMWANDLUNG AUSGERICHTET IST (gemessen am 08.09.2026 ueber alle 598
 * questionTexts, 306 davon mit Formeln): dominant sind einfache Terme wie
 * `$s(t) = 2t^2 + 10t$`, die als Klartext gut lesbar sind. Die haeufigsten
 * Konstrukte sind \\begin{pmatrix} (86), \\vec (77), \\cdot (72), \\text (39)
 * und \\dfrac/\\frac (47). Ganze Umgebungen wie pmatrix lassen sich inline nicht
 * sinnvoll darstellen und werden deshalb zu (…) -- ehrlicher als eine
 * zerlaufene Matrix.
 */

// Dieselbe Aufteilung wie MathText.jsx. Bewusst identisch: was dort als Formel
// gilt, muss hier als Formel behandelt werden, sonst laufen Vorschau und
// Aufgabe auseinander.
const TEILE = /(\$[^$]+\$)/g;

const ZEICHEN = {
  cdot: '·', times: '×', div: ':', pm: '±',
  leq: '≤', geq: '≥', neq: '≠', approx: '≈', sim: '∼', equiv: '≡',
  to: '→', infty: '∞', in: '∈', cap: '∩', cup: '∪', mid: '|', parallel: '∥',
  ldots: '…', dots: '…', colon: ':', prime: '′', circ: '°', degree: '°',
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varphi: 'φ',
  lambda: 'λ', mu: 'μ', pi: 'π', sigma: 'σ', tau: 'τ', omega: 'ω', theta: 'θ',
  Delta: 'Δ', Phi: 'Φ', Omega: 'Ω', Sigma: 'Σ',
  int: '∫', sum: '∑', sqrt: '√',
};

// Befehle ohne eigene Bedeutung fuer eine Klartextzeile.
const KOSMETIK = /\\(?:displaystyle|limits|left|right|!|,|;|:|quad|qquad)/g;

const HOCH = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', n: 'ⁿ' };
const TIEF = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };

/**
 * Liest ein {...}-Argument ab Position `i` (die auf der oeffnenden Klammer
 * steht) und zaehlt dabei verschachtelte Klammern mit. Ohne das wuerde
 * \dfrac{\text{Weg}}{t} beim ersten } abbrechen.
 * @returns {{ inhalt: string, ende: number } | null}
 */
function lesArgument(s, i) {
  if (s[i] !== '{') return null;
  let tiefe = 0;
  for (let j = i; j < s.length; j += 1) {
    if (s[j] === '{') tiefe += 1;
    else if (s[j] === '}') {
      tiefe -= 1;
      if (tiefe === 0) return { inhalt: s.slice(i + 1, j), ende: j + 1 };
    }
  }
  return null; // unbalanciert -- Aufrufer laesst den Befehl dann stehen
}

/** Ersetzt \befehl{a}{b} bzw. \befehl{a} ueber eine Funktion, klammersicher. */
function ersetzeMitArgumenten(s, befehl, stellen, bau) {
  const marke = `\\${befehl}`;
  let out = '';
  let i = 0;
  while (i < s.length) {
    const p = s.indexOf(marke, i);
    // Kein Treffer, oder direkt danach folgt ein Buchstabe (\int vs. \integral)
    if (p === -1 || /[a-zA-Z]/.test(s[p + marke.length] ?? '')) {
      out += s.slice(i);
      break;
    }
    out += s.slice(i, p);
    let k = p + marke.length;
    const args = [];
    let ok = true;
    for (let n = 0; n < stellen; n += 1) {
      while (s[k] === ' ') k += 1;
      const arg = lesArgument(s, k);
      if (!arg) { ok = false; break; }
      args.push(klartext(arg.inhalt));
      k = arg.ende;
    }
    if (!ok) { out += marke; i = p + marke.length; continue; }
    out += bau(...args);
    i = k;
  }
  return out;
}

/** Wandelt einen LaTeX-Ausdruck in eine lesbare Klartextzeile. */
export function klartext(formel) {
  let s = formel;

  // Ganze Umgebungen (pmatrix, cases, array …) sind inline nicht darstellbar.
  s = s.replace(/\\begin\{[^}]*\}[\s\S]*?\\end\{[^}]*\}/g, '(…)');

  // KaTeX-Idiom fuer das deutsche Dezimalkomma: 1{,}70 -> 1,70
  s = s.replace(/\{,\}/g, ',');

  s = ersetzeMitArgumenten(s, 'dfrac', 2, (a, b) => `${a}/${b}`);
  s = ersetzeMitArgumenten(s, 'tfrac', 2, (a, b) => `${a}/${b}`);
  s = ersetzeMitArgumenten(s, 'frac', 2, (a, b) => `${a}/${b}`);
  s = ersetzeMitArgumenten(s, 'binom', 2, (a, b) => `C(${a},${b})`);
  s = ersetzeMitArgumenten(s, 'sqrt', 1, (a) => `√(${a})`);
  for (const b of ['text', 'mathrm', 'mathbf', 'operatorname']) {
    s = ersetzeMitArgumenten(s, b, 1, (a) => a);
  }
  for (const b of ['vec', 'overline', 'overrightarrow', 'hat', 'bar']) {
    s = ersetzeMitArgumenten(s, b, 1, (a) => a);
  }

  s = s.replace(KOSMETIK, ' ');

  // Exponenten und Indizes: ^2 -> ², _1 -> ₁. Auch geklammert: ^{12} -> ¹².
  s = s.replace(/\^\{([0-9n]+)\}/g, (_, g) => [...g].map((c) => HOCH[c] ?? c).join(''));
  s = s.replace(/\^([0-9n])/g, (_, g) => HOCH[g] ?? `^${g}`);
  s = s.replace(/_\{([0-9]+)\}/g, (_, g) => [...g].map((c) => TIEF[c] ?? c).join(''));
  s = s.replace(/_([0-9])/g, (_, g) => TIEF[g] ?? `_${g}`);

  // Bekannte Symbole, dann alles Uebrige entschaerfen: der Backslash faellt weg,
  // der Name bleibt stehen (\sin -> sin). Besser ein gelesener Funktionsname als
  // ein verschluckter Term.
  s = s.replace(/\\([a-zA-Z]+)/g, (treffer, name) => ZEICHEN[name] ?? name);

  s = s.replace(/[{}]/g, '');
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Vorschauzeile: LaTeX zu Klartext, dann auf `maxLen` gekuerzt -- aber nie
 * mitten in eine Formel. Passt eine Formel nicht mehr ganz, endet die Vorschau
 * davor. Genau das war der Grund, das nicht mit einem simplen slice() zu machen.
 */
export function vorschauText(text, maxLen) {
  if (!text) return '';
  if (!text.includes('$')) {
    return text.length > maxLen ? `${kuerzeAnWortgrenze(text, maxLen)}…` : text;
  }

  let out = '';
  let abgeschnitten = false;
  for (const teil of text.split(TEILE)) {
    if (!teil) continue;
    const rest = maxLen - out.length;
    if (rest <= 0) { abgeschnitten = true; break; }

    const istFormel = teil.startsWith('$') && teil.endsWith('$') && teil.length > 2;
    const stueck = istFormel ? klartext(teil.slice(1, -1)) : teil;

    if (stueck.length <= rest) {
      out += stueck;
      continue;
    }
    // Passt nicht mehr ganz: Klartext darf an der Wortgrenze brechen, eine
    // Formel nicht -- die bliebe sonst als Fragment stehen.
    if (!istFormel) out += kuerzeAnWortgrenze(stueck, rest);
    abgeschnitten = true;
    break;
  }

  out = out.replace(/\s+$/, '');
  return abgeschnitten ? `${out}…` : out;
}

function kuerzeAnWortgrenze(s, maxLen) {
  const roh = s.slice(0, maxLen);
  const luecke = roh.lastIndexOf(' ');
  return (luecke > maxLen * 0.5 ? roh.slice(0, luecke) : roh).replace(/\s+$/, '');
}
