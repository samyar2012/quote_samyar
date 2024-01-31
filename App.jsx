// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import QuoteList from './components/QuoteList';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState(null);

  const fetchNewQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching a new quote:', error);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []); // Fetch a new quote when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quotes Website</h1>
        {quote && <QuoteList quotes={[quote]} />}
        <button onClick={fetchNewQuote}>Get New Quote</button>
      </header>
    </div>
  );
}

export default App;
