/**
 * EXERCISE TEMPLATE
 *
 * Kopiere diese Datei und passe sie an deine Übung an.
 * Jede Übung exportiert:
 * 1. Eine React-Komponente (default export) — rendert die Aufgabe
 * 2. Ein exercise-Objekt (named export) — definiert Metadaten + Validierung
 */

import MathInput from '../../../../components/math/MathInput';
import FormulaDisplay from '../../../../components/math/FormulaDisplay';

/**
 * Die Übungskomponente erhält drei Props:
 * @param {object} answers - Aktuelle Antworten { key: value }
 * @param {function} onAnswer - (key, value) => void — speichert eine Antwort
 * @param {array} stepResults - [true|false|null, ...] — Validierungsergebnis pro Schritt
 */
export default function TemplateExercise({ answers, onAnswer, stepResults }) {
  return (
    <div className="exercise-content">
      {/* Aufgabenstellung */}
      <p style={{ color: 'var(--mp-text)' }}>
        Berechne die Ableitung von f(x) = 3x²:
      </p>

      {/* Formel anzeigen */}
      <FormulaDisplay formula="f(x) = 3x^2" />

      {/* Eingabefeld */}
      <MathInput
        value={answers.result || ''}
        onChange={(val) => onAnswer('result', val)}
        placeholder="f'(x) = ?"
        status={
          stepResults?.[0] === true ? 'correct' :
          stepResults?.[0] === false ? 'incorrect' : null
        }
      />
    </div>
  );
}

/**
 * Exercise-Metadaten
 *
 * id: Eindeutig im Format {Prefix}{Level}-EX{Nr}
 *     Prefix: Q = Quad-Funktionen, D = Differentialrechnung
 * levelId: Zu welchem Level gehört die Übung
 * order: Reihenfolge innerhalb des Levels (1-4)
 * type: 'input' | 'step-by-step' | 'multiple-choice' | 'graph-interact' | 'mixed' | 'drag-drop'
 * xp: { base: Basis-XP, bonus: Bonus bei 3 Sternen }
 * hints: Array von Hilfestellungen (werden nacheinander angezeigt)
 * component: Die React-Komponente (siehe oben)
 * validate: (answers) => { complete, stepResults, message }
 */
export const exercise = {
  id: 'X1-EX1',           // ÄNDERN: z.B. 'D5-EX1'
  levelId: 1,              // ÄNDERN: Level-Nummer
  order: 1,                // ÄNDERN: Position im Level (1-4)
  title: 'exercises.MODULE.X1-EX1.title',        // i18n-Key
  description: 'exercises.MODULE.X1-EX1.description', // i18n-Key
  type: 'input',
  xp: { base: 10, bonus: 5 },
  hints: [
    'Wende die Potenzregel an: d/dx(xⁿ) = n·xⁿ⁻¹',
    'Vergiss den Faktor 3 nicht!',
  ],
  component: TemplateExercise,
  validate: (answers) => {
    const normalized = (answers.result || '').replace(/\s/g, '');
    const correct = ['6x', '6*x', '6·x'].includes(normalized);
    return {
      complete: correct,
      stepResults: [correct],
      message: correct
        ? 'Genau richtig! f\'(x) = 6x'
        : 'Prüfe deine Rechnung. Tipp: Potenzregel anwenden.',
    };
  },
};
