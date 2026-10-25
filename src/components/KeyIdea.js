import React from 'react';

// Highlighted takeaway box: <KeyIdea>text</KeyIdea>
export default function KeyIdea({children, title = 'Key idea'}) {
  return (
    <div className="pm-keyidea">
      <div className="pm-keyidea-title">💡 {title}</div>
      <div>{children}</div>
    </div>
  );
}
