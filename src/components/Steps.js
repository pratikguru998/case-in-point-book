import React, {useState} from 'react';

// Clickable step ribbon: <Steps items={[{letter: '1', title: 'Summarize', body: '...'}]} />
export default function Steps({items, color = '#0d9488'}) {
  const [i, setI] = useState(0);
  const it = items[i];
  return (
    <div className="pm-steps" style={{'--accent': color}}>
      <div className="pm-steps-ribbon">
        {items.map((s, k) => (
          <button key={k} className={`pm-step ${k === i ? 'on' : ''}`} style={{'--accent': color}} onClick={() => setI(k)}>
            <span className="pm-step-letter">{s.letter}</span>
            <span className="pm-step-title">{s.title}</span>
          </button>
        ))}
      </div>
      <div className="pm-steps-panel" style={{'--accent': color}}>
        <div className="pm-steps-head">Step {i + 1} of {items.length}</div>
        <div><strong>{it.title}.</strong> {it.body}</div>
        <div className="pm-steps-nav">
          <button className="pm-toggle" disabled={i === 0} onClick={() => setI(i - 1)}>← Prev</button>
          <button className="pm-toggle" disabled={i === items.length - 1} onClick={() => setI(i + 1)}>Next →</button>
        </div>
      </div>
    </div>
  );
}
