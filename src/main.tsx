import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'Router';
import ThemeProvider from 'ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
