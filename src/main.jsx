import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
}

root.render(<Main />);