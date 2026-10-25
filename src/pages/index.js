import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Mermaid from '@theme/Mermaid';
import styles from './index.module.css';

const map = `flowchart LR
  P1["🎯 Part I · The interview<br/>what firms test and how a case works"] --> P2["🧭 Part II · The toolkit<br/>Ivy Case System + classic frameworks"]
  P2 --> P3["🏋️ Part III · Interviewer-led cases<br/>2 annotated + 10 starts + 20 dialogues"]
  P3 --> P4["🤝 Part IV · Partner cases<br/>15 cases you can give a friend"]
  style P1 fill:#ccfbf1,stroke:#0d9488,color:#042f2e
  style P2 fill:#dbeafe,stroke:#3b82f6,color:#172554
  style P3 fill:#fef3c7,stroke:#f59e0b,color:#451a03
  style P4 fill:#fce7f3,stroke:#ec4899,color:#500724`;

const parts = [
  {icon: '🎯', title: 'Part I · The interview', color: '#0d9488', to: '/docs/chapters/part-1/introduction', items: ['1 · Introduction', '2 · The interview', '3 · Case questions']},
  {icon: '🧭', title: 'Part II · The toolkit', color: '#3b82f6', to: '/docs/chapters/part-2/ivy-case-system', items: ['4 · The Ivy Case System', '5 · Additional tools & frameworks']},
  {icon: '🏋️', title: 'Part III · Interviewer-led cases', color: '#f59e0b', to: '/docs/chapters/part-3/anatomy', items: ['6.1 · Anatomy: Harley & Coors', '6.2 · Ten case starts', '6.3–6.6 · Twenty dialogue cases']},
  {icon: '🤝', title: 'Part IV · Partner cases', color: '#ec4899', to: '/docs/chapters/part-4/partner-cases-level-1', items: ['6.7–6.9 · Fifteen partner cases', '7 · Final analysis']},
];

const stats = [
  ['47', 'practice cases'],
  ['4', 'core case scenarios'],
  ['60+', 'diagrams'],
  ['🧮', 'mental-math drills'],
];

export default function Home() {
  return (
    <Layout title="Home" description="Visual study notes for consulting case interviews">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>💼 Case Interview Book</h1>
          <p className={styles.sub}>Visual, chapter-by-chapter study notes for consulting case interviews, following the structure of <em>Case in Point</em> (8th edition).</p>
          <div className={styles.ctas}>
            <Link className="button button--primary button--lg" to="/docs/start-here">🗺️ Start here</Link>
            <Link className="button button--secondary button--lg" to="/docs/case-library">🗂️ Case library</Link>
            <Link className="button button--secondary button--lg" to="/docs/cheat-sheet">⚡ Cheat sheet</Link>
          </div>
          <div className={styles.stats}>
            {stats.map(([n, l]) => (
              <div key={l} className={styles.stat}><span className={styles.statN}>{n}</span><span className="pm-muted pm-small">{l}</span></div>
            ))}
          </div>
        </div>
      </header>
      <main className="container" style={{padding: '2rem 16px 4rem'}}>
        <h2>The journey</h2>
        <Mermaid value={map} />
        <h2>Chapters</h2>
        <div className="pm-grid">
          {parts.map((p) => (
            <Link key={p.title} to={p.to} className="pm-card" style={{'--accent': p.color}}>
              <div className="pm-card-emoji">{p.icon}</div>
              <div className="pm-card-title">{p.title}</div>
              <div className="pm-card-text">{p.items.map((i) => <div key={i}>{i}</div>)}</div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
