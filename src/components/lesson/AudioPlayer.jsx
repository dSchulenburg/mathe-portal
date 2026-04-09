import { useState, useRef, useEffect } from 'react';
import { useDisplayMode } from '../../context/DisplayModeContext';

/**
 * Compact audio player for character narration.
 * Uses native HTML5 <audio> — no external dependencies.
 */
export default function AudioPlayer({ src, accentColor = 'var(--mp-primary)', label }) {
  const { mode } = useDisplayMode();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setProgress(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => { setPlaying(false); setProgress(0); };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  if (mode === 'adult') return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const fmt = (s) => {
    if (!s || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.4rem 0.6rem',
      borderRadius: '8px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid var(--mp-border)',
    }}>
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Play/Pause button */}
      <button
        onClick={toggle}
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: 'none',
          background: accentColor,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          fontSize: '0.7rem',
        }}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? '⏸' : '▶'}
      </button>

      {/* Progress bar */}
      <div style={{
        flex: 1,
        height: 4,
        borderRadius: 2,
        background: 'var(--mp-border)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
        onClick={(e) => {
          if (!audioRef.current || !duration) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          audioRef.current.currentTime = pct * duration;
        }}
      >
        <div style={{
          width: `${pct}%`,
          height: '100%',
          background: accentColor,
          borderRadius: 2,
          transition: 'width 0.1s linear',
        }} />
      </div>

      {/* Duration */}
      <span style={{
        fontSize: '0.7rem',
        color: 'var(--mp-muted)',
        minWidth: '3rem',
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {fmt(progress)} / {fmt(duration)}
      </span>

      {label && (
        <span style={{ fontSize: '0.7rem', color: 'var(--mp-muted)' }}>{label}</span>
      )}
    </div>
  );
}
