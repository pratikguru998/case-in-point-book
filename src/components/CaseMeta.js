import React from 'react';

const LEVELS = {1: ['Level 1', 'easy'], 2: ['Level 2', 'medium'], 3: ['Level 3', 'hard']};

// Case header: <CaseMeta level={2} types={['Pricing', 'Market sizing']} format="Dialogue" pages="211–215" />
export default function CaseMeta({level, types = [], format, pages}) {
  const [label, diff] = LEVELS[level] || [];
  return (
    <div className="pm-meta">
      <div className="pm-meta-row">
        {label && <span className={`pm-pill pm-diff-${diff}`}>{label}</span>}
        {format && <span className="pm-pill pm-pill-soft">{format}</span>}
        {types.map((t) => <span key={t} className="pm-pill pm-pill-cat">{t}</span>)}
      </div>
      {pages && <div className="pm-small pm-muted">📖 In the book: PDF p. {pages}</div>}
    </div>
  );
}
