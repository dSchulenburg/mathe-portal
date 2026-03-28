/**
 * Validate a numeric answer with tolerance
 */
export function validateNumber(input, expected, tolerance = 0.01) {
  const parsed = parseNumberInput(input);
  if (parsed === null) return false;
  return Math.abs(parsed - expected) <= tolerance;
}

/**
 * Parse user input as number (handles German comma decimal)
 */
export function parseNumberInput(input) {
  if (typeof input !== 'string') input = String(input);
  const cleaned = input.trim().replace(',', '.');
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}

/**
 * Validate multiple choice selection
 */
export function validateMultipleChoice(selected, correct) {
  if (Array.isArray(correct)) {
    return correct.length === selected.length && correct.every(c => selected.includes(c));
  }
  return selected === correct;
}

/**
 * Validate step-by-step solution (array of inputs vs array of expected)
 * Returns array of booleans for each step
 */
export function validateSteps(inputs, expectedSteps) {
  return expectedSteps.map((expected, i) => {
    const input = inputs[i];
    if (input === undefined || input === '') return false;
    if (typeof expected === 'number') {
      return validateNumber(input, expected, 0.01);
    }
    // String comparison (normalized)
    return normalizeExpression(String(input)) === normalizeExpression(String(expected));
  });
}

/**
 * Normalize a math expression for comparison
 * Strips spaces, lowercases, normalizes minus signs
 */
export function normalizeExpression(expr) {
  return expr
    .replace(/\s+/g, '')
    .replace(/\u2212/g, '-')  // en-dash to hyphen
    .replace(/,/g, '.')
    .toLowerCase();
}

/**
 * Check if all steps are complete
 */
export function allStepsComplete(stepResults) {
  return stepResults.length > 0 && stepResults.every(r => r === true);
}

/**
 * Calculate stars based on attempts
 */
export function calculateStars(attempts) {
  if (attempts <= 1) return 3;
  if (attempts <= 2) return 2;
  return 1;
}
