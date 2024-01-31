// src/components/Quote.js
import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p>{text}</p>
      <p>- {author}</p>
    </div>
  );
};

export default Quote;
