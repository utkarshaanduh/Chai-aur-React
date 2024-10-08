import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React creates its own DOM in which there is a function called createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

