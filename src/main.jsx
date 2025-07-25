﻿// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <- Import the actual App component
import './index.css'; // Optional if you have global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
