import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.scss';
import 'styles/variables.css'
import App from './App';
import ThemeProvider from 'utils/Theme/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);