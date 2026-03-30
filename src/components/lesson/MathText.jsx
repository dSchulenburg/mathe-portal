import FormulaDisplay from '../math/FormulaDisplay';

/**
 * Parses a string containing $...$ inline LaTeX and renders it as
 * a mix of text spans and KaTeX FormulaDisplay components.
 *
 * Usage: <MathText text="Die Funktion $f(x) = ax^2$ hat..." />
 */
export default function MathText({ text, style }) {
  if (!text) return null;

  // Fast path: no formulas at all
  if (!text.includes('$')) {
    return <span style={style}>{text}</span>;
  }

  // Split on $...$ boundaries, keeping the delimiters as separate parts
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span style={style}>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          return (
            <FormulaDisplay
              key={i}
              formula={part.slice(1, -1)}
              displayMode={false}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
