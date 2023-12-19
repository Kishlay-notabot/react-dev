import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Import Home directly, not as default
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
