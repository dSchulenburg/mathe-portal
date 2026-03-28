/**
 * build-worksheets.mjs
 * PDF Worksheet Generator for Mathe-Portal
 * Personal Branding: Violett (#a78bfa) + Gold (#fbbf24)
 * License: CC BY-SA 4.0 | dirk-schulenburg.net
 *
 * Usage:
 *   node scripts/build-worksheets.mjs                          # all topics
 *   node scripts/build-worksheets.mjs --topic 10-quad-funktionen
 */

import puppeteer from 'puppeteer-core';
import { readFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

// ─── Config ─────────────────────────────────────────────────────────────────

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUTPUT_DIR  = './worksheets';
const EXERCISES_DIR = './src/data/exercises';

// ─── CLI Args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const topicFlag = args.indexOf('--topic');
const filterTopic = topicFlag !== -1 ? args[topicFlag + 1] : null;

// ─── Branding ────────────────────────────────────────────────────────────────

const COLORS = {
  primary:   '#a78bfa',  // Violett
  accent:    '#fbbf24',  // Gold
  text:      '#1a1a2e',  // Dark
  muted:     '#6b7280',
  lightBg:   '#faf8ff',
  border:    '#d1d5db',
  basis:     '#86efac',  // green
  standard:  '#fbbf24',  // gold
  erweitert: '#f97316',  // orange
};

// ─── Topic name map ──────────────────────────────────────────────────────────

const TOPIC_NAMES = {
  '10-aehnlichkeit':     'Ähnlichkeit',
  '10-diff-einfuehrung': 'Einführung in die Differentialrechnung',
  '10-exp-wachstum':     'Exponentielles Wachstum',
  '10-funktionsklassen': 'Funktionsklassen',
  '10-koerper':          'Körper und Volumina',
  '10-periodisch':       'Periodische Funktionen',
  '10-potenzgesetze':    'Potenzgesetze',
  '10-pythagoras':       'Satz des Pythagoras',
  '10-quad-funktionen':  'Quadratische Funktionen',
  '10-quad-gleichungen': 'Quadratische Gleichungen',
  '10-trigonometrie':    'Trigonometrie',
  '10-wahrscheinlichkeit': 'Wahrscheinlichkeitsrechnung',
};

// ─── Competency labels ───────────────────────────────────────────────────────

const COMP_LABELS = {
  'kommunikation':       { label: 'Kommunikation',       color: '#bfdbfe' },
  'kritisches-denken':   { label: 'Krit. Denken',        color: '#fde68a' },
  'kreativitaet':        { label: 'Kreativität',          color: '#d9f99d' },
  'kollaboration':       { label: 'Kollaboration',        color: '#fbcfe8' },
};

// ─── Load exercises ───────────────────────────────────────────────────────────

async function loadExercisesForTopic(filePath) {
  const url = pathToFileURL(path.resolve(filePath)).href;
  try {
    const mod = await import(url);
    return mod.exercises || [];
  } catch (e) {
    console.warn(`  Warning: Could not load ${filePath}: ${e.message}`);
    return [];
  }
}

async function loadAllTopics() {
  const files = readdirSync(EXERCISES_DIR)
    .filter(f => f.endsWith('.js') && f.startsWith('10-'));

  const topics = {};
  for (const file of files) {
    const topicId = file.replace('.js', '');
    if (filterTopic && topicId !== filterTopic) continue;
    const exercises = await loadExercisesForTopic(path.join(EXERCISES_DIR, file));
    if (exercises.length > 0) {
      topics[topicId] = exercises;
    }
  }
  return topics;
}

// ─── HTML Helpers ─────────────────────────────────────────────────────────────

function diffBadge(level) {
  const colors = { basis: COLORS.basis, standard: COLORS.standard, erweitert: COLORS.erweitert };
  const labels = { basis: 'Basis', standard: 'Standard', erweitert: 'Erweitert' };
  const bg = colors[level] || '#e5e7eb';
  return `<span class="badge" style="background:${bg}; color:#1a1a2e;">${labels[level] || level}</span>`;
}

function compTags(competencies) {
  if (!competencies || competencies.length === 0) return '';
  const pills = competencies.map(c => {
    const info = COMP_LABELS[c] || { label: c, color: '#e5e7eb' };
    return `<span class="comp-tag" style="background:${info.color};">${info.label}</span>`;
  }).join('');
  return `<span class="comp-tags">${pills}</span>`;
}

function renderMultipleChoice(data, withSolution, idx) {
  const options = data.options || [];
  return options.map(opt => {
    let checkmark = '☐';
    let extra = '';
    if (withSolution && opt.correct) {
      checkmark = '☑';
      extra = ` style="font-weight:600; color:${COLORS.primary};"`;
    }
    return `<div class="mc-option"${extra}>${checkmark} ${escHtml(opt.text)}</div>`;
  }).join('');
}

function renderNumericInput(data, withSolution) {
  if (withSolution) {
    return `<div class="answer-line solution-value">Antwort: <strong>${data.correctValue}</strong></div>`;
  }
  return `<div class="answer-line">Antwort: <span class="answer-blank">___________</span></div>`;
}

function renderErrorAnalysis(data, withSolution) {
  const steps = data.steps || [];
  let html = '<div class="error-steps">';
  steps.forEach((step, i) => {
    let rowClass = 'error-step';
    let marker = '';
    if (withSolution && step.hasError) {
      rowClass += ' step-error';
      marker = `<span class="error-marker">✗ Fehler!</span>`;
      if (step.errorExplanation) {
        marker += `<div class="error-explanation">${escHtml(step.errorExplanation)}</div>`;
      }
    }
    html += `<div class="${rowClass}">
      <span class="step-num">${i + 1}.</span>
      <span class="step-content">${escHtml(step.content)}</span>
      ${marker}
    </div>`;
  });
  html += '</div>';

  if (!withSolution) {
    html += `<div class="error-mark-instruction">Markiere den fehlerhaften Schritt:</div>
             <div class="error-mark-box"></div>`;
  }
  return html;
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderExercise(ex, num, withSolution) {
  const { type, data, diffLevel, competencies, contextKey, hintKeys, solutionKey, points } = ex;

  let bodyHtml = '';
  if (type === 'multiple-choice')  bodyHtml = renderMultipleChoice(data, withSolution, num);
  else if (type === 'numeric-input') bodyHtml = renderNumericInput(data, withSolution);
  else if (type === 'error-analysis') bodyHtml = renderErrorAnalysis(data, withSolution);

  const hintHtml = (hintKeys && hintKeys.length > 0 && !withSolution)
    ? `<div class="hint-box">
        <span class="hint-label">Tipp:</span>
        ${hintKeys.map(h => `<div>${escHtml(h)}</div>`).join('')}
       </div>`
    : '';

  const solutionHtml = withSolution && solutionKey
    ? `<div class="solution-box">
        <span class="solution-label">Lösung:</span>
        <div>${escHtml(solutionKey)}</div>
       </div>`
    : '';

  const contextHtml = contextKey
    ? `<div class="context-box">${escHtml(contextKey)}</div>`
    : '';

  const pointsLabel = points ? `<span class="points-badge">${points} Pkt.</span>` : '';

  return `
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-num">${num}</span>
        <div class="exercise-meta">
          ${diffBadge(diffLevel)}
          ${compTags(competencies)}
          ${pointsLabel}
        </div>
      </div>
      ${contextHtml}
      <div class="question-text">${escHtml(data.questionText)}</div>
      <div class="exercise-body">${bodyHtml}</div>
      ${hintHtml}
      ${solutionHtml}
    </div>`;
}

// ─── HTML Template ────────────────────────────────────────────────────────────

function buildHtml(topicId, exercises, withSolution) {
  const topicName = TOPIC_NAMES[topicId] || topicId;
  const subtitle  = withSolution ? 'Lösungsblatt — Klasse 10' : 'Aufgabenblatt — Klasse 10';

  const exercisesHtml = exercises
    .map((ex, i) => renderExercise(ex, i + 1, withSolution))
    .join('\n');

  // ── Logo area ──────────────────────────────────────────────────────────────
  // LOGO: Replace the span below with:
  //   <img src="data:image/png;base64,XXXX" height="28" alt="Logo" style="height:28px;"/>
  // when a logo_base64.txt is available.
  const logoHtml = `<!-- LOGO: Replace with <img src="data:image/png;base64,[base64content]" height="28" alt="Mathe-Portal"> when available -->
    <span style="font-size:24px; font-weight:bold; color:#a78bfa; line-height:28px;">∫</span>`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${topicName} — ${subtitle}</title>
<style>
  /* ── Reset & Base ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #1a1a2e; background: #fff; }

  /* ── Repeating Header via table/thead technique ── */
  table.page-table { width: 100%; border-collapse: collapse; }
  table.page-table thead { display: table-header-group; }
  table.page-table tbody { display: table-row-group; }
  table.page-table tfoot { display: table-footer-group; }

  .header-row td { padding: 0; }
  .header-inner {
    display: flex;
    align-items: center;
    padding: 8px 0 6px;
    border-bottom: 2pt solid #a78bfa;
    gap: 12px;
  }
  .header-logo {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    min-width: 40px;
  }
  .header-title {
    flex: 1 1 auto;
    text-align: center;
  }
  .header-title .main-title {
    font-size: 13pt;
    font-weight: bold;
    color: #a78bfa;
    display: block;
  }
  .header-title .sub-title {
    font-size: 9pt;
    color: #6b7280;
    display: block;
    margin-top: 2px;
  }
  .header-meta {
    flex: 0 0 auto;
    font-size: 9pt;
    color: #1a1a2e;
    white-space: nowrap;
  }
  .header-meta table { border-collapse: collapse; }
  .header-meta td { padding: 1px 2px; }
  .header-meta .label { font-weight: normal; color: #6b7280; padding-right: 2px; }
  .header-meta .blank { border-bottom: 1px solid #1a1a2e; min-width: 100px; display: inline-block; }

  /* ── Content area ── */
  .content-area { padding: 10px 0; }

  /* ── Exercise Cards ── */
  .exercise-card {
    border: 1.5px solid #d1d5db;
    border-radius: 4px;
    padding: 12px 14px;
    margin-bottom: 12px;
    page-break-inside: avoid;
    background: #faf8ff;
  }
  .exercise-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .exercise-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #a78bfa;
    color: #fff;
    font-size: 10pt;
    font-weight: bold;
    flex: 0 0 auto;
  }
  .exercise-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    flex: 1;
  }
  .badge {
    font-size: 8pt;
    padding: 2px 7px;
    border-radius: 12px;
    font-weight: 600;
  }
  .comp-tags { display: inline-flex; gap: 3px; flex-wrap: wrap; }
  .comp-tag {
    font-size: 7.5pt;
    padding: 1px 6px;
    border-radius: 10px;
    color: #1a1a2e;
  }
  .points-badge {
    margin-left: auto;
    font-size: 8pt;
    color: #6b7280;
    font-style: italic;
  }

  /* ── Context ── */
  .context-box {
    font-style: italic;
    color: #4b5563;
    border-left: 3px solid #fbbf24;
    background: #fffbeb;
    padding: 6px 10px;
    margin-bottom: 8px;
    border-radius: 0 4px 4px 0;
    font-size: 10.5pt;
  }

  /* ── Question ── */
  .question-text {
    font-size: 10.5pt;
    margin-bottom: 8px;
    line-height: 1.45;
  }

  /* ── Multiple Choice ── */
  .mc-option {
    padding: 4px 8px;
    margin-bottom: 4px;
    font-size: 10.5pt;
  }

  /* ── Numeric Input ── */
  .answer-line {
    font-size: 10.5pt;
    margin-top: 6px;
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .answer-blank {
    font-family: 'Courier New', Courier, monospace;
    font-size: 13pt;
    color: #a78bfa;
    letter-spacing: 2px;
    border-bottom: 1.5px solid #a78bfa;
    min-width: 70pt;
    display: inline-block;
  }
  .solution-value {
    color: #a78bfa;
    font-style: italic;
  }

  /* ── Error Analysis ── */
  .error-steps { margin-top: 4px; }
  .error-step {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 4px 6px;
    border-bottom: 1px dotted #d1d5db;
    font-family: 'Courier New', Courier, monospace;
    font-size: 11pt;
  }
  .step-num { color: #6b7280; font-size: 9pt; min-width: 16px; flex: 0 0 auto; }
  .step-content { flex: 1; }
  .step-error { background: #fef2f2; border-radius: 2px; }
  .error-marker { color: #ef4444; font-weight: bold; font-size: 9pt; font-family: Arial, sans-serif; }
  .error-explanation { font-size: 9pt; color: #374151; font-style: italic; font-family: Arial, sans-serif; margin-top: 2px; }
  .error-mark-instruction { margin-top: 8px; font-size: 10pt; color: #374151; }
  .error-mark-box {
    margin-top: 4px;
    min-height: 28px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #f9fafb;
  }

  /* ── Hint Box ── */
  .hint-box {
    margin-top: 8px;
    background: #f5f0ff;
    border-left: 3px solid #fbbf24;
    padding: 6px 10px;
    border-radius: 0 4px 4px 0;
    font-size: 10pt;
    color: #374151;
    page-break-inside: avoid;
  }
  .hint-label { font-weight: bold; color: #fbbf24; margin-right: 4px; }

  /* ── Solution Box ── */
  .solution-box {
    margin-top: 8px;
    background: #f0fdf4;
    border-left: 3px solid #a78bfa;
    padding: 6px 10px;
    border-radius: 0 4px 4px 0;
    font-size: 10pt;
    color: #374151;
    page-break-inside: avoid;
  }
  .solution-label { font-weight: bold; color: #a78bfa; margin-right: 4px; }

  /* ── Section Heading ── */
  .section-heading {
    font-size: 10pt;
    font-weight: bold;
    color: #a78bfa;
    margin: 16px 0 6px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 3px;
  }

  /* ── Page break utility ── */
  .page-break { page-break-before: always; }

  @media print {
    .exercise-card { page-break-inside: avoid; }
  }
</style>
</head>
<body>

<table class="page-table">
  <thead>
    <tr class="header-row">
      <td>
        <div class="header-inner">
          <div class="header-logo">
            ${logoHtml}
          </div>
          <div class="header-title">
            <span class="main-title">${escHtml(topicName)}</span>
            <span class="sub-title">${escHtml(subtitle)}</span>
          </div>
          <div class="header-meta">
            <table>
              <tr><td class="label">Name:</td><td><span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td></tr>
              <tr><td class="label">Datum:</td><td><span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td></tr>
            </table>
          </div>
        </div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="content-area">
          ${exercisesHtml}
        </div>
      </td>
    </tr>
  </tbody>
</table>

</body>
</html>`;
}

// ─── PDF Generation ───────────────────────────────────────────────────────────

async function generatePDF(html, outputPath, browser) {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '15mm', bottom: '20mm', left: '14mm', right: '14mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="width:100%; text-align:center; font-size:8px; color:#999; font-family:Arial,sans-serif; padding:0 14mm;">
        Seite <span class="pageNumber"></span> von <span class="totalPages"></span>
        &nbsp;|&nbsp; dirk-schulenburg.net &nbsp;|&nbsp; CC BY-SA 4.0 &nbsp;|&nbsp; OER
      </div>`,
  });

  await page.close();
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  console.log('Loading exercise data...');
  const topics = await loadAllTopics();

  const topicCount = Object.keys(topics).length;
  if (topicCount === 0) {
    console.error('No topics found. Check --topic flag and exercise directory.');
    process.exit(1);
  }
  console.log(`Found ${topicCount} topic(s): ${Object.keys(topics).join(', ')}`);

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const [topicId, exercises] of Object.entries(topics)) {
      console.log(`\nGenerating worksheets for: ${topicId} (${exercises.length} exercises)`);

      // ── Aufgabenblatt ──────────────────────────────────────────────────────
      const aufgabenHtml = buildHtml(topicId, exercises, false);
      const aufgabenPath = path.join(OUTPUT_DIR, `${topicId}-aufgaben.pdf`);
      await generatePDF(aufgabenHtml, aufgabenPath, browser);
      console.log(`  ✓ ${aufgabenPath}`);

      // ── Lösungsblatt ───────────────────────────────────────────────────────
      const loesungenHtml = buildHtml(topicId, exercises, true);
      const loesungenPath = path.join(OUTPUT_DIR, `${topicId}-loesungen.pdf`);
      await generatePDF(loesungenHtml, loesungenPath, browser);
      console.log(`  ✓ ${loesungenPath}`);
    }
  } finally {
    await browser.close();
  }

  console.log(`\nDone! PDFs saved to ${OUTPUT_DIR}/`);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
