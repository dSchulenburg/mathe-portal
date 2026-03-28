import { useState } from 'react';
import { TOPICS, getTopicsByGrade } from '../../data/topics';
import { DOMAINS } from '../../data/types';
import { useMathStore } from '../../store/mathStore';
import { navigate } from '../../lib/router';

const GRADE_TABS = [
  { grade: 10, label: 'Klasse 10', available: true },
  { grade: 11, label: 'Klasse 11', available: false },
  { grade: 12, label: 'Klasse 12', available: false },
];

const totalExerciseCount = TOPICS.reduce((sum, t) => sum + (t.exercises?.length || 0), 0);

function TopicCard({ topic }) {
  const getTopicProgress = useMathStore((s) => s.getTopicProgress);
  const exerciseCount = topic.exercises?.length || 0;
  const progress = getTopicProgress(topic.id, exerciseCount);
  const pct = exerciseCount > 0 ? Math.round((progress.completed / exerciseCount) * 100) : 0;
  const domain = DOMAINS[topic.domain] || {};
  const isEmpty = exerciseCount === 0;

  const handleClick = () => {
    if (!isEmpty) navigate('/topic/' + topic.id);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: 'var(--mp-surface)',
        border: '1px solid var(--mp-border)',
        borderLeft: `4px solid ${isEmpty ? 'var(--mp-border)' : topic.color}`,
        borderRadius: '10px',
        padding: '1.25rem',
        cursor: isEmpty ? 'default' : 'pointer',
        opacity: isEmpty ? 0.5 : 1,
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (!isEmpty) {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = `0 4px 20px ${topic.color}33`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>{topic.icon}</span>
        <div style={{ minWidth: 0 }}>
          <h3 style={{
            margin: 0,
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--mp-text)',
            lineHeight: 1.3,
          }}>
            {topic.titleKey}
          </h3>
          <span style={{
            fontSize: '0.7rem',
            color: 'var(--mp-muted)',
            marginTop: '0.2rem',
            display: 'block',
          }}>
            {topic.period}
          </span>
        </div>
      </div>

      {/* Domain badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '999px',
          fontSize: '0.7rem',
          fontWeight: 600,
          background: `${domain.color}22`,
          color: domain.color,
          border: `1px solid ${domain.color}44`,
        }}>
          {domain.icon} {domain.label}
        </span>
      </div>

      {/* Footer: count + progress */}
      <div style={{ marginTop: 'auto' }}>
        {isEmpty ? (
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--mp-muted)',
            fontStyle: 'italic',
          }}>
            Bald verfügbar
          </span>
        ) : (
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.4rem',
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--mp-muted)' }}>
                {exerciseCount} Aufgaben
              </span>
              <span style={{ fontSize: '0.75rem', color: pct > 0 ? 'var(--mp-success)' : 'var(--mp-muted)' }}>
                {pct}% gelöst
              </span>
            </div>
            {/* Progress bar */}
            <div style={{
              height: '4px',
              borderRadius: '2px',
              background: 'var(--mp-surface-hover)',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${pct}%`,
                background: pct >= 80 ? 'var(--mp-success)' : topic.color,
                borderRadius: '2px',
                transition: 'width 0.4s ease',
              }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function TopicGrid() {
  const [activeGrade, setActiveGrade] = useState(10);
  const topics = getTopicsByGrade(activeGrade);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--mp-bg)',
      color: 'var(--mp-text)',
      padding: '2rem 1rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--mp-primary), var(--mp-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2,
        }}>
          Aufgabendatenbank
        </h1>
        <p style={{
          margin: '0.5rem 0 1rem',
          color: 'var(--mp-muted)',
          fontSize: '0.95rem',
        }}>
          Gymnasium Klasse 10–12 · Hamburger Bildungsplan
        </p>
        <span style={{
          display: 'inline-block',
          padding: '0.3rem 0.9rem',
          borderRadius: '999px',
          background: 'var(--mp-surface)',
          border: '1px solid var(--mp-border)',
          fontSize: '0.8rem',
          color: 'var(--mp-primary)',
          fontWeight: 600,
        }}>
          {totalExerciseCount}+ Aufgaben
        </span>
      </div>

      {/* Grade Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.25rem',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--mp-border)',
        paddingBottom: '0',
      }}>
        {GRADE_TABS.map((tab) => {
          const isActive = tab.grade === activeGrade;
          return (
            <button
              key={tab.grade}
              onClick={() => tab.available && setActiveGrade(tab.grade)}
              disabled={!tab.available}
              style={{
                padding: '0.6rem 1.2rem',
                background: 'none',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--mp-primary)' : '2px solid transparent',
                marginBottom: '-1px',
                color: tab.available
                  ? (isActive ? 'var(--mp-primary)' : 'var(--mp-text)')
                  : 'var(--mp-muted)',
                cursor: tab.available ? 'pointer' : 'not-allowed',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 400,
                transition: 'color 0.15s ease, border-color 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              {tab.label}
              {!tab.available && (
                <span style={{
                  fontSize: '0.65rem',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '999px',
                  background: 'var(--mp-surface)',
                  color: 'var(--mp-muted)',
                  border: '1px solid var(--mp-border)',
                }}>
                  bald
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Topic Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem',
        marginBottom: '3rem',
      }}>
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
        {topics.length === 0 && (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--mp-muted)',
            fontSize: '0.9rem',
          }}>
            Keine Themen für diese Klassenstufe verfügbar.
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid var(--mp-border)',
        paddingTop: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.75rem',
        color: 'var(--mp-muted)',
        fontSize: '0.8rem',
      }}>
        <span>Open Educational Resources · CC BY-SA 4.0</span>
        <a
          href="#/"
          style={{
            color: 'var(--mp-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          ← Zum klassischen Portal
        </a>
      </div>
    </div>
  );
}
