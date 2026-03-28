import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function DragDropFactors({
  options,       // ['(x+1)', '(x+2)', '(x+3)', '(x-1)', '(x-2)', '(x-3)']
  dropZones = 2, // Number of drop zones (usually 2 for two factors)
  onAnswer,      // (zones) => void  -- called with array of placed items
  answer,        // Current answer: [null, null] or ['(x+2)', '(x+3)']
  status = null, // null | 'correct' | 'incorrect'
  isComplete = false,
  equation = '', // Display equation above, e.g. "x^2 + 5x + 6 = 0"
}) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [zones, setZones] = useState(answer || Array(dropZones).fill(null));

  const handleDragStart = (item) => {
    if (isComplete) return;
    setDraggedItem(item);
  };

  const handleDrop = useCallback((zoneIndex) => {
    if (!draggedItem || isComplete) return;
    const newZones = [...zones];
    // Remove from other zone if already placed
    const existingIndex = newZones.indexOf(draggedItem);
    if (existingIndex !== -1) newZones[existingIndex] = null;
    // Place item in target zone
    newZones[zoneIndex] = draggedItem;
    setZones(newZones);
    setDraggedItem(null);
    onAnswer(newZones);
  }, [draggedItem, zones, isComplete, onAnswer]);

  const handleRemoveFromZone = (zoneIndex) => {
    if (isComplete) return;
    const newZones = [...zones];
    newZones[zoneIndex] = null;
    setZones(newZones);
    onAnswer(newZones);
  };

  const placedItems = zones.filter(Boolean);
  const availableOptions = options.filter(opt => !placedItems.includes(opt));

  return (
    <div className="drag-drop-container">
      {equation && (
        <div className="drag-equation">
          <strong>{equation}</strong>
        </div>
      )}

      {/* Drop zones */}
      <div className="drop-zones">
        {zones.map((item, i) => (
          <div
            key={i}
            className={`drag-zone ${draggedItem ? 'drag-active' : ''} ${status || ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(i)}
          >
            {item ? (
              <motion.div
                className="drag-chip placed"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => handleRemoveFromZone(i)}
                style={{ cursor: isComplete ? 'default' : 'pointer' }}
              >
                {item}
              </motion.div>
            ) : (
              <span className="drop-placeholder">Faktor {i + 1}</span>
            )}
            {i < zones.length - 1 && <span className="factor-multiply">&middot;</span>}
          </div>
        ))}
        <span className="factor-equals">= 0</span>
      </div>

      {/* Available chips */}
      <div className="drag-chips">
        {availableOptions.map((option) => (
          <motion.div
            key={option}
            className="drag-chip"
            draggable={!isComplete}
            onDragStart={() => handleDragStart(option)}
            onDragEnd={() => setDraggedItem(null)}
            whileHover={!isComplete ? { scale: 1.05 } : {}}
            whileTap={!isComplete ? { scale: 0.95 } : {}}
            onClick={() => {
              if (isComplete) return;
              const firstEmpty = zones.indexOf(null);
              if (firstEmpty !== -1) {
                setDraggedItem(option);
                setTimeout(() => handleDrop(firstEmpty), 0);
              }
            }}
          >
            {option}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
