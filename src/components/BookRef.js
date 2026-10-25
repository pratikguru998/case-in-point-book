import React from 'react';

// Pointer back to the original book: <BookRef pages="174–183" section="Leaders and Followers" />
// Page numbers are PDF page numbers of the local copy.
export default function BookRef({pages, section}) {
  return (
    <div className="pm-bookref">
      📖 <strong>In the book:</strong> {section ? <em>{section}</em> : null}{section ? ' · ' : ''}PDF p. {pages}
    </div>
  );
}
