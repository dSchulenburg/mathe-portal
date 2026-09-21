// Mathe-Satz für die Arbeitsblatt-PDFs.
//
// Vorgeschichte: Der Generator hat Aufgabentexte durch escHtml() geschickt und
// damit auch das LaTeX darin wörtlich gedruckt — auf 48 von 48 Blättern stand
// "\frac{50}{3}" statt eines Bruchs (Task acn, gemessen 20.09.2026). Der Text
// enthält 4960 Inline-Abschnitte der Form $...$; Display-Mathe ($$...$$) kommt
// in den Daten nicht vor.
//
// KaTeX läuft hier SERVERSEITIG. Das ist Absicht: Der PDF-Lauf benutzt
// page.setContent(), d.h. es gibt keine Basis-URL und nichts wird nachgeladen.
// Ein <script src=...> von einem CDN würde in genau dem Moment still scheitern,
// in dem der Rechner offline ist — und wieder unbemerkt falsche Blätter drucken.

import katex from 'katex';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** Die fünf HTML-Sonderzeichen maskieren. */
export function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Setzt $...$-Abschnitte mit KaTeX und maskiert alles dazwischen als HTML.
 *
 * Ungerade Dollarzeichen (etwa "5$ und mehr") bleiben schlicht Text — ein
 * Preis im Aufgabentext darf den Lauf nicht abbrechen. Ungültiges LaTeX
 * ebenso nicht: throwOnError=false setzt den Rohtext sichtbar rot, was beim
 * Korrekturlesen auffällt, statt 66 PDFs scheitern zu lassen.
 */
export function renderMathText(str) {
  if (!str) return '';
  const text = String(str);
  const parts = [];
  let last = 0;

  // $...$ ohne Zeilenumbruch und ohne leeren Inhalt.
  const re = /\$([^$\n]+?)\$/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    parts.push(escHtml(text.slice(last, m.index)));
    parts.push(renderSegment(m[1]));
    last = m.index + m[0].length;
  }
  parts.push(escHtml(text.slice(last)));
  return parts.join('');
}

function renderSegment(tex) {
  try {
    return katex.renderToString(tex, {
      throwOnError: false,
      output: 'html',       // kein MathML danebenlegen - halbiert das Markup
      displayMode: false,
      strict: false,        // deutsche Kommas wie 17{,}3 nicht anmeckern
    });
  } catch {
    // Sollte wegen throwOnError:false nie passieren; wenn doch, lieber der
    // Rohtext als ein abgebrochener Lauf.
    return escHtml(`$${tex}$`);
  }
}

let cssCache = null;

/**
 * KaTeX-CSS mit eingebetteten Schriften.
 *
 * Die Schriften MÜSSEN als data:-URI drin stehen. setContent() lädt nichts
 * nach, und ohne die Schriften setzt Chrome die Mathematik in einer
 * Ersatzschrift - Klammern und Wurzelzeichen sehen dann falsch aus, ohne
 * dass irgendetwas als Fehler meldet.
 *
 * woff2 reicht: Der Renderer ist immer ein aktuelles Chromium. Die woff- und
 * ttf-Alternativen werden entfernt, sonst verdreifacht sich das eingebettete
 * Volumen ohne jeden Nutzen.
 */
export function katexCssInline() {
  if (cssCache) return cssCache;

  const cssPath = require.resolve('katex/dist/katex.min.css');
  const fontsDir = path.join(path.dirname(cssPath), 'fonts');
  let css = fs.readFileSync(cssPath, 'utf8');

  css = css.replace(
    /src:url\(fonts\/([A-Za-z0-9_-]+)\.woff2\)\s*format\("woff2"\)[^;}]*/g,
    (whole, name) => {
      const file = path.join(fontsDir, `${name}.woff2`);
      if (!fs.existsSync(file)) return whole; // lieber unverändert als kaputt
      const b64 = fs.readFileSync(file).toString('base64');
      return `src:url(data:font/woff2;base64,${b64}) format("woff2")`;
    },
  );

  cssCache = css;
  return css;
}
