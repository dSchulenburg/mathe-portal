import { useState } from 'react';

export default function MathInput({
  value,
  onChange,
  placeholder = 'Antwort eingeben...',
  status = null,  // null | 'correct' | 'incorrect'
  disabled = false,
  label = null,
  size = 'medium', // 'small' | 'medium' | 'large'
}) {
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`math-input-wrapper ${size}`}>
      {label && <label className="math-input-label">{label}</label>}
      <input
        type="text"
        className={`math-input ${status || ''} ${focused ? 'focused' : ''}`}
        value={value || ''}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        spellCheck={false}
      />
      {status === 'correct' && <span className="math-input-icon correct-icon" aria-label="Richtig">&#x2705;</span>}
      {status === 'incorrect' && <span className="math-input-icon incorrect-icon" aria-label="Falsch">&#x274C;</span>}
    </div>
  );
}
