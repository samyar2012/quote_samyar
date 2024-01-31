// src/components/QuoteList.js
import React from 'react';
import Quote from './Quote';

const QuoteList = ({ quotes }) => {
  return (
    <div className="quote-list">
      {quotes.map((quote, index) => (
        <Quote key={index} text={quote.content} author={quote.author} />
      ))}
    </div>
  );
};

export default QuoteList;
