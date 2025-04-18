import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://vitamin10-deployment.onrender.com/');
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      console.error('Error fetching quote:', err);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Quote of the Day</h1>
      <p className="lead">{quote}</p>
      <button className="btn btn-primary" onClick={fetchQuote}>
        Get Quote
      </button>
    </div>
  );
}

export default App;
