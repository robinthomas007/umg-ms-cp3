import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import { amber, deepOrange, grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import React from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

import Counter from './Counter';
function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Counter />
    </Box>
  );
}

const LightThemePalette = {
  primary: amber,
  divider: amber[200],
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
};

const DarkThemePalette = {
  primary: deepOrange,
  divider: deepOrange[700],
  background: {
    default: deepOrange[900],
    paper: deepOrange[900],
  },
  text: {
    primary: '#fff',
    secondary: grey[500],
  },
};

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto Condensed';
          font-display: swap;
        }
      `,
    },
  },
  palette: {
    mode,
    ...(mode === 'light' ? LightThemePalette : DarkThemePalette),
  },
});

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
