import { useRef, useEffect } from 'react';
import katex from 'katex';

export default function FormulaDisplay({ formula, displayMode = true, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && formula) {
      try {
        katex.render(formula, ref.current, {
          displayMode,
          throwOnError: false,
          errorColor: '#ef4444',
        });
      } catch (e) {
        ref.current.textContent = formula;
      }
    }
  }, [formula, displayMode]);

  return <span ref={ref} className={`${displayMode ? 'formula-display' : 'formula-inline'} ${className}`} />;
}
