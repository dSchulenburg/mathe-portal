import { motion } from 'framer-motion';

export default function MultipleChoice({
  options,       // [{ id: 'a', label: 'f(x) = 2x^2', correct: true }, ...]
  selected,      // 'a' or ['a', 'b'] for multi-select
  onSelect,      // (id) => void
  multiSelect = false,
  status = null, // null | 'checked' (show correct/incorrect coloring)
  isComplete = false,
}) {
  const handleSelect = (id) => {
    if (isComplete) return;
    if (multiSelect) {
      const current = Array.isArray(selected) ? selected : [];
      const newSelected = current.includes(id)
        ? current.filter(s => s !== id)
        : [...current, id];
      onSelect(newSelected);
    } else {
      onSelect(id);
    }
  };

  return (
    <div className="multiple-choice">
      {options.map((option, i) => {
        const isSelected = multiSelect
          ? (Array.isArray(selected) && selected.includes(option.id))
          : selected === option.id;

        let cardClass = 'choice-card';
        if (isSelected) cardClass += ' selected';
        if (status === 'checked' && isSelected && option.correct) cardClass += ' correct';
        if (status === 'checked' && isSelected && !option.correct) cardClass += ' incorrect';
        if (status === 'checked' && !isSelected && option.correct) cardClass += ' was-correct';

        return (
          <motion.div
            key={option.id}
            className={cardClass}
            onClick={() => handleSelect(option.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={!isComplete ? { scale: 1.02 } : {}}
            whileTap={!isComplete ? { scale: 0.98 } : {}}
          >
            <div className="choice-indicator">
              {multiSelect ? (isSelected ? '\u2611' : '\u2610') : (isSelected ? '\u25C9' : '\u25CB')}
            </div>
            <div className="choice-label">{option.label}</div>
            {option.image && <div className="choice-image">{option.image}</div>}
          </motion.div>
        );
      })}
    </div>
  );
}
