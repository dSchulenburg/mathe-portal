import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormulaDisplay from '../math/FormulaDisplay';
import MathText from './MathText';
import CharacterCallout from './CharacterCallout';
import LessonSection from './LessonSection';

/**
 * Worked examples with step-by-step reveal.
 * The most important didactic component — students learn by seeing solved problems.
 */
export default function LessonExamples({ examples, topicId, character, t, accentColor }) {
  if (!examples?.length) return null;

  return (
    <LessonSection
      icon="✏️"
      title={t('lesson.examples')}
      subtitle={t('lesson.examplesSubtitle')}
      accentColor={accentColor}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {examples.map((example, ei) => (
          <WorkedExample
            key={ei}
            example={example}
            topicId={topicId}
            character={character}
            t={t}
            accentColor={accentColor}
          />
        ))}
      </div>
    </LessonSection>
  );
}

function WorkedExample({ example, topicId, character, t, accentColor }) {
  const [revealedSteps, setRevealedSteps] = useState(1);
  const totalSteps = example.steps.length;
  const allRevealed = revealedSteps >= totalSteps;

  return (
    <div style={{
      padding: '0.75rem',
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid var(--mp-border)',
    }}>
      {/* Example title */}
      <h4 style={{
        margin: '0 0 0.6rem',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: accentColor,
      }}>
        {t(`lessons.${topicId}.${example.titleKey}`)}
      </h4>

      {/* Context (optional) */}
      {example.contextKey && (
        <p style={{
          margin: '0 0 0.6rem',
          fontSize: '0.85rem',
          color: 'var(--mp-muted)',
          fontStyle: 'italic',
        }}>
          <MathText text={t(`lessons.${topicId}.${example.contextKey}`)} />
        </p>
      )}

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <AnimatePresence initial={false}>
          {example.steps.slice(0, revealedSteps).map((step, si) => (
            <motion.div
              key={si}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem',
                padding: '0.4rem 0',
              }}
            >
              {/* Step number */}
              <span style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: accentColor,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                flexShrink: 0,
                marginTop: 2,
              }}>
                {si + 1}
              </span>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Step commentary */}
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: 'var(--mp-text)',
                  lineHeight: 1.5,
                }}>
                  <MathText text={t(`lessons.${topicId}.${step.key}`)} />
                </p>

                {/* Step formula */}
                {step.formula && (
                  <div className="lesson-formula" style={{
                    marginTop: '0.3rem',
                    overflow: 'hidden',
                  }}>
                    <FormulaDisplay formula={step.formula} displayMode={true} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Reveal next step button */}
      {!allRevealed && (
        <button
          onClick={() => setRevealedSteps(prev => prev + 1)}
          style={{
            marginTop: '0.6rem',
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            border: `1px solid ${accentColor}`,
            background: 'transparent',
            color: accentColor,
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          Nächster Schritt ({revealedSteps}/{totalSteps})
        </button>
      )}

      {/* Character comment after all steps revealed */}
      {allRevealed && example.characterComment && (
        <div style={{ marginTop: '0.6rem' }}>
          <CharacterCallout character={character}>
            <MathText text={t(`lessons.${topicId}.${example.characterComment}`)} />
          </CharacterCallout>
        </div>
      )}
    </div>
  );
}
