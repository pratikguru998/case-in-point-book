import React, {useState} from 'react';

// Random mental-math drills in the style asked in case interviews.
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const round1 = (x) => Math.round(x * 10) / 10;

const KINDS = {
  pctOf: () => {
    const p = rnd(2, 19) * 5, n = rnd(2, 40) * 10;
    return {q: `What is ${p}% of ${n}?`, a: (p * n) / 100, unit: ''};
  },
  isWhatPct: () => {
    const b = rnd(12, 90), a = rnd(2, b - 1);
    return {q: `${a} is what percent of ${b}?`, a: round1((a / b) * 100), unit: '%'};
  },
  growth: () => {
    const a = rnd(10, 90) * 10, b = a + rnd(-30, 60) * 5;
    return {q: `Revenue went from $${a}M to $${b}M. Percent change?`, a: round1(((b - a) / a) * 100), unit: '%'};
  },
  zeros: () => {
    const a = rnd(2, 9) * 10 ** rnd(5, 7), b = rnd(2, 9) * 10 ** rnd(1, 3);
    return {q: `${a.toLocaleString()} × ${b.toLocaleString()} = ? (answer in millions)`, a: (a * b) / 1e6, unit: 'M'};
  },
  breakeven: () => {
    const fixed = rnd(2, 20) * 100000, margin = rnd(2, 20) / 2;
    return {q: `Fixed costs $${fixed.toLocaleString()}, margin $${margin.toFixed(2)} per unit. Breakeven units?`, a: Math.round(fixed / margin), unit: ''};
  },
};

export default function MathDrill() {
  const [kind, setKind] = useState('pctOf');
  const [prob, setProb] = useState(() => KINDS.pctOf());
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({right: 0, total: 0});

  const next = (k = kind) => { setKind(k); setProb(KINDS[k]()); setGuess(''); setResult(null); };
  const check = () => {
    const g = parseFloat(guess.replace(/[^0-9.\-]/g, ''));
    if (Number.isNaN(g)) return;
    const ok = Math.abs(g - prob.a) <= Math.max(Math.abs(prob.a) * 0.05, 0.5); // within 5%: interview-grade rounding
    setResult(ok);
    setScore((s) => ({right: s.right + (ok ? 1 : 0), total: s.total + 1}));
  };

  return (
    <div className="pm-calc">
      <div className="pm-sortbar">
        {[['pctOf', 'x% of y'], ['isWhatPct', 'a is ?% of b'], ['growth', '% change'], ['zeros', 'Zeros'], ['breakeven', 'Breakeven']].map(([k, l]) => (
          <button key={k} className={`pm-toggle ${kind === k ? 'on' : ''}`} onClick={() => next(k)}>{l}</button>
        ))}
        <span className="pm-small pm-muted" style={{marginLeft: 'auto'}}>Score {score.right}/{score.total}</span>
      </div>
      <div className="pm-quiz-q">🧮 {prob.q}</div>
      <div className="pm-calc-field">
        <input value={guess} inputMode="decimal" placeholder="Your answer (no calculator!)" onChange={(e) => setGuess(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (result === null ? check() : next())} />
        {result === null
          ? <button className="pm-toggle on" onClick={check}>Check</button>
          : <button className="pm-toggle on" onClick={() => next()}>Next →</button>}
      </div>
      {result !== null && (
        <div className={`pm-quiz-explain ${result ? 'right' : 'wrong'}`}>
          {result ? '✅ Close enough for a case. ' : '❌ Not quite. '}Exact answer: <strong>{prob.a.toLocaleString()}{prob.unit}</strong>
        </div>
      )}
    </div>
  );
}
