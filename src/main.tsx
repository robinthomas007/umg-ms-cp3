import './index.css';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          font-size: 1.5rem;
        }
      `,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
