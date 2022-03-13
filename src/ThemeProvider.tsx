import { PaletteMode } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorModeAtom } from 'atoms';
import { useAtom } from 'jotai';
import { PropsWithChildren, useMemo } from 'react';

const LightThemePalette = {
  primary: {
    light: blue[600],
    main: blue[800],
    dark: blue[900],
  },
};

const DarkThemePalette = {
  primary: {
    light: orange[200],
    main: orange[400],
    dark: orange[600],
  },
};

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
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
  shape: {
    borderRadius: 2,
  },
});

export default function ToggleColorMode(props: PropsWithChildren<{}>) {
  const [mode] = useAtom(colorModeAtom);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
