import { PaletteMode } from '@mui/material';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorModeAtom } from 'atoms';
import { useAtom } from 'jotai';
import { PropsWithChildren, useMemo } from 'react';

const LightThemePalette = {
  // primary: orange,
  // divider: amber[200],
  // text: {
  //   primary: grey[900],
  //   secondary: grey[800],
  // },
};

const DarkThemePalette = {
  primary: orange,
  // divider: deepOrange[700],
  // background: {
  //   default: deepOrange[900],
  //   paper: deepOrange[900],
  // },
  // text: {
  //   primary: '#fff',
  //   secondary: grey[500],
  // },
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
