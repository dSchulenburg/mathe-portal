import { useState } from 'react';
import { exportJSON, exportLaTeX, exportGIFT, generateEmbedCode } from '../../lib/oer-export';

function download(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function OERShareButton({ exercise }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(generateEmbedCode(exercise.id));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="text-xs px-2 py-1 rounded"
        style={{ color: 'var(--mp-muted)', border: '1px solid var(--mp-border)' }}
      >
        📤 Teilen
      </button>
    );
  }

  return (
    <div className="rounded-lg p-3 mt-2 text-sm" style={{ background: 'var(--mp-surface)', border: '1px solid var(--mp-border)' }}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold" style={{ color: 'var(--mp-text)' }}>📤 Teilen & Herunterladen</span>
        <button onClick={() => setOpen(false)} className="text-xs" style={{ color: 'var(--mp-muted)' }}>✕</button>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        <button onClick={() => download(JSON.stringify(exportJSON(exercise), null, 2), `${exercise.id}.json`, 'application/json')}
          className="px-3 py-2 rounded text-xs font-medium"
          style={{ background: 'var(--mp-surface-hover)', color: 'var(--mp-text)', minHeight: '44px' }}>
          📊 JSON
        </button>
        <button onClick={() => download(exportLaTeX(exercise), `${exercise.id}.tex`, 'text/x-latex')}
          className="px-3 py-2 rounded text-xs font-medium"
          style={{ background: 'var(--mp-surface-hover)', color: 'var(--mp-text)', minHeight: '44px' }}>
          📝 LaTeX
        </button>
        <button onClick={() => download(exportGIFT(exercise), `${exercise.id}.gift`, 'text/plain')}
          className="px-3 py-2 rounded text-xs font-medium"
          style={{ background: 'var(--mp-surface-hover)', color: 'var(--mp-text)', minHeight: '44px' }}>
          🎓 GIFT (Moodle)
        </button>
        <button onClick={handleCopyEmbed}
          className="px-3 py-2 rounded text-xs font-medium"
          style={{ background: 'var(--mp-surface-hover)', color: 'var(--mp-text)', minHeight: '44px' }}>
          {copied ? '✓ Kopiert!' : '</> Embed-Code'}
        </button>
      </div>
      <p className="text-xs" style={{ color: 'var(--mp-muted)' }}>
        Lizenz: CC-BY-SA-4.0 — Teilen ✓ Anpassen ✓ Remixen ✓
      </p>
    </div>
  );
}
