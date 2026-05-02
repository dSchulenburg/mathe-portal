import { useState, useEffect, useRef } from 'react';
import { registerExercise, getExercisesByLevel, getExercisesByTopic } from '../../data/exerciseDB';
import { DIFF_LEVELS, DIFF_LEVEL_META, DOMAINS } from '../../data/types';
import { getTopic } from '../../data/topics';
import { useMathStore } from '../../store/mathStore';
import ExerciseCard from '../exercises/ExerciseCard';
import NumericInputExercise from '../exercises/NumericInputExercise';
import MultipleChoiceExercise from '../exercises/MultipleChoiceExercise';
import ErrorAnalysisExercise from '../exercises/ErrorAnalysisExercise';
import StepSolverExercise from '../exercises/StepSolverExercise';
import DragMatchExercise from '../exercises/DragMatchExercise';
import OERShareButton from '../exercises/OERShareButton';
import FunctionPlotter from '../stations/FunctionPlotter';
import PythagorasExplorer from '../stations/PythagorasExplorer';
import DiceSim from '../stations/DiceSim';
import DiscriminantViz from '../stations/DiscriminantViz';
import ProbabilityTree from '../stations/ProbabilityTree';
import BinomialHistogram from '../stations/BinomialHistogram';
import StrahlensatzExplorer from '../stations/StrahlensatzExplorer';
import Einheitskreis from '../stations/Einheitskreis';
import VectorExplorer from '../stations/VectorExplorer';
import BodyExplorer3D from '../stations/BodyExplorer3D';
import SekanteTangente from '../stations/SekanteTangente';
import RiemannSummen from '../stations/RiemannSummen';
import MarkovDiagramm from '../stations/MarkovDiagramm';
import FourFieldTable from '../stations/FourFieldTable';
import LessonLayer from '../lesson/LessonLayer';
import StoryOutro from '../lesson/StoryOutro';
import { getCharacterForTopic, TOPIC_STORIES } from '../../data/characters';
import { useTranslation } from '../../i18n/useTranslation';
import { useDisplayMode } from '../../context/DisplayModeContext';

function ensureRegistered(topicId) {
  const topic = getTopic(topicId);
  if (topic?.exercises?.length) {
    topic.exercises.forEach(ex => registerExercise(ex));
  }
}

const STATION_REGISTRY = {
  PythagorasExplorer: { Component: PythagorasExplorer, title: '🔭 Erkunde den Satz des Pythagoras' },
  DiceSim: { Component: DiceSim, title: '🎲 Zufallsexperiment-Simulator' },
  DiscriminantViz: { Component: DiscriminantViz, title: '🔭 Erkunde die Diskriminante' },
  ProbabilityTree: { Component: ProbabilityTree, title: '🌳 Wahrscheinlichkeitsbaum erkunden' },
  BinomialHistogram: { Component: BinomialHistogram, title: '📊 Binomialverteilung erkunden' },
  StrahlensatzExplorer: { Component: StrahlensatzExplorer, title: '📐 Strahlensatz live erkunden' },
  Einheitskreis: { Component: Einheitskreis, title: '⭕ Einheitskreis & Sinus-Welle' },
  VectorExplorer: { Component: VectorExplorer, title: '➡️ Vektoren & Skalarprodukt' },
  BodyExplorer3D: { Component: BodyExplorer3D, title: '🔺 Körper drehen & erkunden' },
  SekanteTangente: { Component: SekanteTangente, title: '📈 Sekante → Tangente' },
  RiemannSummen: { Component: RiemannSummen, title: '📐 Riemann-Summen → Integral' },
  MarkovDiagramm: { Component: MarkovDiagramm, title: '🔄 Markov-Kette: Konvergenz zum Fixvektor' },
  FourFieldTable: { Component: FourFieldTable, title: '🔢 Vierfeldertafel interaktiv' },
};

function getStationsForTopic(topic) {
  if (Array.isArray(topic.stations)) return topic.stations;
  if (topic.station) return [topic.station];
  return [];
}

function renderExercise(exercise, onComplete) {
  switch (exercise.type) {
    case 'numeric-input':
      return <NumericInputExercise exercise={exercise} onComplete={onComplete} />;
    case 'multiple-choice':
      return <MultipleChoiceExercise exercise={exercise} onComplete={onComplete} />;
    case 'error-analysis':
      return <ErrorAnalysisExercise exercise={exercise} onComplete={onComplete} />;
    case 'step-solver':
      return <StepSolverExercise exercise={exercise} onComplete={onComplete} />;
    case 'drag-match':
      return <DragMatchExercise exercise={exercise} onComplete={onComplete} />;
    default:
      return <p style={{ color: 'var(--mp-muted)' }}>Unbekannter Aufgabentyp: {exercise.type}</p>;
  }
}

// Which diff levels have exercises for this topic
function getAvailableLevels(topicId) {
  return DIFF_LEVELS.filter(level => getExercisesByLevel(topicId, level).length > 0);
}

export default function TopicView({ topicId, onBack }) {
  const topic = getTopic(topicId);
  const { t } = useTranslation();
  const { embed } = useDisplayMode();

  // Re-register synchronously (handles test clearDB + HMR)
  ensureRegistered(topicId);

  // Also re-register on mount / topicId change as a safety net
  useEffect(() => {
    ensureRegistered(topicId);
  }, [topicId]);

  if (!topic) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--mp-bg)',
        color: 'var(--mp-text)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
      }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--mp-muted)' }}>
          Topic nicht gefunden: <code>{topicId}</code>
        </p>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: '1px solid var(--mp-border)',
            borderRadius: '6px',
            color: 'var(--mp-muted)',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          ← Zurück
        </button>
      </div>
    );
  }

  const domainMeta = DOMAINS[topic.domain] ?? { label: topic.domain, icon: '📚', color: '#a78bfa' };

  const availableLevels = getAvailableLevels(topicId);
  const [selectedTab, setSelectedTab] = useState(availableLevels[0] ?? 'basis');
  const [expandedId, setExpandedId] = useState(null);
  const exerciseRefs = useRef({});

  const completedExercises = useMathStore(s => s.completedExercises);
  const getTopicProgress = useMathStore(s => s.getTopicProgress);

  const allExercises = getExercisesByTopic(topicId);
  const progress = getTopicProgress(topicId, allExercises.length);
  const completionPercent = allExercises.length > 0
    ? Math.round((progress.completed / allExercises.length) * 100)
    : 0;

  const levelExercises = getExercisesByLevel(topicId, selectedTab);

  const handleToggle = (exerciseId) => {
    if (expandedId === exerciseId) {
      setExpandedId(null);
    } else {
      setExpandedId(exerciseId);
      // Smooth scroll after state update
      setTimeout(() => {
        const el = exerciseRefs.current[exerciseId];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const handleExerciseComplete = (exerciseId) => {
    // Auto-advance to next exercise
    const idx = levelExercises.findIndex(e => e.id === exerciseId);
    const next = levelExercises[idx + 1];
    if (next) {
      setTimeout(() => {
        setExpandedId(next.id);
        setTimeout(() => {
          const el = exerciseRefs.current[next.id];
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }, 1400);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--mp-bg)',
      color: 'var(--mp-text)',
      padding: '0',
    }}>

      {/* ── Header (hidden in embed mode) ── */}
      {!embed && (
        <div style={{
          background: 'var(--mp-surface)',
          borderBottom: '1px solid var(--mp-border)',
          padding: '1rem 1.25rem',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Top row: back + domain badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={onBack}
                aria-label="Zurück zur Themenübersicht"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--mp-border)',
                  borderRadius: '6px',
                  color: 'var(--mp-muted)',
                  padding: '0.3rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  minHeight: '36px',
                }}
              >
                ← Zurück
              </button>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: `${domainMeta.color}22`,
                border: `1px solid ${domainMeta.color}55`,
                borderRadius: '999px',
                padding: '0.2rem 0.7rem',
                fontSize: '0.8rem',
                color: domainMeta.color,
                fontWeight: 600,
              }}>
                {domainMeta.icon} {domainMeta.label}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--mp-text)',
              margin: '0 0 0.6rem',
            }}>
              {topic.icon} {topic.titleKey}
            </h1>

            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                flex: 1,
                height: '6px',
                background: 'var(--mp-surface-hover)',
                borderRadius: '999px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${completionPercent}%`,
                  background: 'var(--mp-primary)',
                  borderRadius: '999px',
                  transition: 'width 0.4s ease',
                }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--mp-muted)', whiteSpace: 'nowrap' }}>
                {progress.completed}/{allExercises.length} ({completionPercent}%)
              </span>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: embed ? '0.75rem 1.25rem' : '1.25rem' }}>

        {/* ── Lesson Layer (only when topic has lesson data) ── */}
        {topic.lesson && (
          <LessonLayer
            lesson={topic.lesson}
            topicId={topicId}
            topicColor={topic.color}
            completionPct={completionPercent}
            onNavigateTopic={(id) => window.location.hash = `#/topic/${id}`}
          />
        )}

        {/* ── Interactive FunctionPlotter (only when topic has plotter config) ── */}
        {topic.plotter && (
          <div style={{
            marginBottom: '1.5rem',
            background: 'var(--mp-surface)',
            border: '1px solid var(--mp-border)',
            borderRadius: '10px',
            padding: '1rem',
          }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--mp-primary)',
              marginBottom: '0.75rem',
            }}>
              🔭 {topic.plotter.title}
            </h2>
            <FunctionPlotter
              functions={topic.plotter.functions}
              sliders={topic.plotter.sliders}
              xRange={topic.plotter.xRange}
              yRange={topic.plotter.yRange}
            />
          </div>
        )}

        {/* ── Interactive Stations ── */}
        {getStationsForTopic(topic).map((stationId) => {
          const meta = STATION_REGISTRY[stationId];
          if (!meta) return null;
          const { Component, title } = meta;
          return (
            <div key={stationId} style={{ marginBottom: '1.5rem', background: 'var(--mp-surface)', border: '1px solid var(--mp-border)', borderRadius: '10px', padding: '1rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--mp-primary)', marginBottom: '0.75rem' }}>{title}</h2>
              <Component />
            </div>
          );
        })}

        {/* ── Difficulty Tabs ── */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderBottom: '2px solid var(--mp-border)',
          marginBottom: '1.25rem',
          overflowX: 'auto',
        }}>
          {availableLevels.map(level => {
            const lmeta = DIFF_LEVEL_META[level];
            const count = getExercisesByLevel(topicId, level).length;
            const isActive = selectedTab === level;
            return (
              <button
                key={level}
                onClick={() => {
                  setSelectedTab(level);
                  setExpandedId(null);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive ? `3px solid ${lmeta.color}` : '3px solid transparent',
                  color: isActive ? lmeta.color : 'var(--mp-muted)',
                  padding: '0.6rem 1rem',
                  cursor: 'pointer',
                  fontWeight: isActive ? 700 : 400,
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, border-color 0.2s',
                  marginBottom: '-2px',
                }}
              >
                {lmeta.icon} {level.charAt(0).toUpperCase() + level.slice(1)}
                <span style={{ fontSize: '0.7rem', color: isActive ? lmeta.color : 'var(--mp-muted)', display: 'block', lineHeight: 1 }}>
                  {lmeta.label}
                </span>
                <span style={{
                  marginLeft: '0.4rem',
                  fontSize: '0.75rem',
                  background: isActive ? `${lmeta.color}22` : 'var(--mp-surface-hover)',
                  color: isActive ? lmeta.color : 'var(--mp-muted)',
                  borderRadius: '999px',
                  padding: '0.1rem 0.45rem',
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Exercise List ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {levelExercises.length === 0 && (
            <p style={{ color: 'var(--mp-muted)', textAlign: 'center', padding: '2rem' }}>
              Keine Aufgaben für dieses Level.
            </p>
          )}

          {levelExercises.map((exercise, idx) => {
            const isCompleted = !!completedExercises[exercise.id]?.correct;
            const isExpanded = expandedId === exercise.id;

            return (
              <div
                key={exercise.id}
                ref={el => { exerciseRefs.current[exercise.id] = el; }}
                data-testid="exercise-card"
                style={{ position: 'relative' }}
              >
                {/* Accordion header (collapsed view) */}
                {!isExpanded && (
                  <button
                    onClick={() => handleToggle(exercise.id)}
                    style={{
                      width: '100%',
                      background: 'var(--mp-surface)',
                      border: `1px solid ${isCompleted ? 'var(--mp-success)' : 'var(--mp-border)'}`,
                      borderRadius: '10px',
                      padding: '0.8rem 1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ color: 'var(--mp-text)', fontSize: '0.95rem', flex: 1 }}>
                      <span style={{
                        color: 'var(--mp-muted)',
                        fontSize: '0.8rem',
                        marginRight: '0.5rem',
                      }}>
                        {idx + 1}/{levelExercises.length}
                      </span>
                      {exercise.data?.questionText?.slice(0, 80)}
                      {exercise.data?.questionText?.length > 80 ? '…' : ''}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {isCompleted && (
                        <span style={{
                          color: 'var(--mp-success)',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                        }}>
                          ✓
                        </span>
                      )}
                      <span style={{ color: 'var(--mp-muted)', fontSize: '0.9rem' }}>▼</span>
                    </span>
                  </button>
                )}

                {/* Expanded exercise */}
                {isExpanded && (
                  <div>
                    {/* Collapse header bar */}
                    <button
                      onClick={() => handleToggle(exercise.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'var(--mp-surface-hover)',
                        border: '1px solid var(--mp-border)',
                        borderRadius: '8px 8px 0 0',
                        color: 'var(--mp-muted)',
                        cursor: 'pointer',
                        padding: '0.4rem 0.75rem',
                        fontSize: '0.8rem',
                      }}
                    >
                      <span>{idx + 1}/{levelExercises.length} — {exercise.data?.questionText?.slice(0, 50)}{exercise.data?.questionText?.length > 50 ? '…' : ''}</span>
                      <span>▲</span>
                    </button>

                    {/* Completed overlay indicator */}
                    {isCompleted && (
                      <div style={{
                        position: 'absolute',
                        top: '0.5rem',
                        left: '0.5rem',
                        zIndex: 2,
                        background: 'rgba(52,211,153,0.15)',
                        border: '1px solid var(--mp-success)',
                        borderRadius: '6px',
                        color: 'var(--mp-success)',
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}>
                        ✓ Gelöst
                      </div>
                    )}

                    <ExerciseCard exercise={exercise} index={idx} total={levelExercises.length}>
                      {renderExercise(exercise, (id) => handleExerciseComplete(id))}
                    </ExerciseCard>

                    {/* OER Share button below the card */}
                    <div style={{ marginTop: '0.5rem' }}>
                      <OERShareButton exercise={exercise} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Story Outro (after exercises) ── */}
        {topic.lesson && (() => {
          const character = getCharacterForTopic(topicId);
          const gradeTopics = Object.keys(TOPIC_STORIES).filter(
            id => TOPIC_STORIES[id].characterId === TOPIC_STORIES[topicId]?.characterId
          );
          const topicIndex = gradeTopics.indexOf(topicId);
          return character ? (
            <StoryOutro
              character={character}
              topicId={topicId}
              topicIndex={topicIndex}
              totalTopics={gradeTopics.length}
              t={t}
            />
          ) : null;
        })()}
      </div>
    </div>
  );
}
