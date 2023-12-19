import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './App';  // Import Home directly, not as default
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

reportWebVitals();
