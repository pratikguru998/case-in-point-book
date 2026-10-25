import React from 'react';

// A grid of visual cards: items = [{icon, title, text, color?}]
export default function IconCards({items, cols}) {
  return (
    <div className="pm-grid pm-grid-tight" style={cols ? {gridTemplateColumns: `repeat(auto-fit, minmax(${Math.floor(720 / cols)}px, 1fr))`} : undefined}>
      {items.map((it, i) => (
        <div key={i} className="pm-card pm-card-static" style={it.color ? {'--accent': it.color} : undefined}>
          <div className="pm-card-emoji">{it.icon}</div>
          <div className="pm-card-title">{it.title}</div>
          <div className="pm-card-text">{it.text}</div>
        </div>
      ))}
    </div>
  );
}
