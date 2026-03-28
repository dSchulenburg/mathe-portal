const BASE_URL = 'https://lernmodule.dirk-schulenburg.net/mathe-portal';
const AUTHOR = 'Dirk Schulenburg';
const LICENSE = 'CC-BY-SA-4.0';

export function exportJSON(exercise) {
  return {
    ...exercise,
    license: LICENSE,
    author: AUTHOR,
    source: `${BASE_URL}/#/exercise/${exercise.id}`,
    exportedAt: new Date().toISOString(),
    format: 'mathe-db-exercise-v1',
  };
}

export function exportLaTeX(exercise) {
  const question = exercise.data.questionKey || exercise.data.questionText || '';
  const solution = exercise.solutionKey || '';
  const hints = (exercise.hintKeys || []).map((h, i) => `  \\item ${h}`).join('\n');

  return `% ${exercise.id} — ${LICENSE} — ${AUTHOR}
% Source: ${BASE_URL}/#/exercise/${exercise.id}

\\begin{exercise}{${exercise.id}}
${question}

${exercise.type === 'numeric-input' ? `\\textbf{Antwort:} \\underline{\\hspace{3cm}} ${exercise.data.unit || ''}` : ''}
\\end{exercise}

${hints ? `\\begin{hints}\n${hints}\n\\end{hints}` : ''}

\\begin{solution}
${solution}
\\end{solution}
`;
}

export function exportGIFT(exercise) {
  const question = exercise.data.questionKey || exercise.data.questionText || '';

  if (exercise.type === 'numeric-input') {
    const { correctValue, tolerance } = exercise.data;
    const tol = tolerance || 0.01;
    return `::${exercise.id}::${question}{#${correctValue}:${tol}}`;
  }

  if (exercise.type === 'multiple-choice' && exercise.data.options) {
    const options = exercise.data.options.map(o =>
      `${o.correct ? '=' : '~'}${o.label || o.formula || o.text}`
    ).join('\n');
    return `::${exercise.id}::${question}{\n${options}\n}`;
  }

  return `::${exercise.id}::${question}{}`;
}

export function generateEmbedCode(exerciseId) {
  return `<iframe
  src="${BASE_URL}/#/exercise/${exerciseId}"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Mathe-Aufgabe ${exerciseId}"
  loading="lazy">
</iframe>

<!-- License: ${LICENSE} — Author: ${AUTHOR} -->`;
}
