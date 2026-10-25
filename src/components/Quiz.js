import React, {useState} from 'react';

// Single-choice quiz: <Quiz question="" options={[...]} answer={1} explain="" />
export default function Quiz({question, options, answer, explain}) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="pm-quiz">
      <div className="pm-quiz-q">🧠 {question}</div>
      <div className="pm-quiz-opts">
        {options.map((o, i) => {
          const state = picked === null ? '' : i === answer ? 'right' : i === picked ? 'wrong' : 'dim';
          return (
            <button key={i} className={`pm-quiz-opt ${state}`} onClick={() => setPicked(i)} disabled={picked !== null}>
              {String.fromCharCode(65 + i)}. {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={`pm-quiz-explain ${picked === answer ? 'right' : 'wrong'}`}>
          {picked === answer ? '✅ Correct! ' : '❌ Not quite. '}
          {explain}
          <button className="pm-link-btn" onClick={() => setPicked(null)}>Try again</button>
        </div>
      )}
    </div>
  );
}
