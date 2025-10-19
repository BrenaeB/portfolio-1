import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // Make sure this is here
import './css/home.css'; // And this (adjust path if needed)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);