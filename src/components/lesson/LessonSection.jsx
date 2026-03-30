import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Generic collapsible section. Single header row toggles content.
 * No outer border — the header IS the visual anchor.
 */
export default function LessonSection({
  icon,
  title,
  subtitle,
  accentColor = 'var(--mp-primary)',
  defaultOpen = true,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      {/* Header row — single clickable bar */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.75rem',
          borderRadius: open ? '8px 8px 0 0' : '8px',
          background: `${accentColor}12`,
          border: 'none',
          cursor: 'pointer',
          color: 'var(--mp-text)',
          textAlign: 'left',
        }}
      >
        {icon && (
          <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{icon}</span>
        )}
        <span style={{ flex: 1, fontWeight: 600, fontSize: '0.82rem', color: accentColor }}>
          {title}
          {subtitle && !open && (
            <span style={{ fontWeight: 400, fontSize: '0.72rem', color: 'var(--mp-muted)', marginLeft: '0.4rem' }}>
              — {subtitle}
            </span>
          )}
        </span>
        <span style={{
          fontSize: '0.9rem',
          color: accentColor,
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
          flexShrink: 0,
        }}>
          ›
        </span>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0.6rem 0.75rem 0.75rem',
              background: 'var(--mp-surface)',
              borderRadius: '0 0 8px 8px',
              borderTop: `1px solid ${accentColor}20`,
            }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
