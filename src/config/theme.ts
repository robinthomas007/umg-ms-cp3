import { PaletteColor, PaletteMode } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { atom } from 'jotai';

export const getThemeMode = (): PaletteMode => {
  const theme = localStorage.getItem('THEME');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  } else {
    return 'light';
  }
};

export const setThemeMode = (mode: PaletteMode): void => {
  localStorage.setItem('THEME', mode);
};

export const themeModeAtom = atom<PaletteMode>(getThemeMode());

interface IPalette {
  mode: PaletteMode;
  primary: PaletteColor;
}

const LightThemePalette: IPalette = {
  mode: 'light',
  primary: {
    light: blue[600],
    main: blue[800],
    dark: blue[900],
    contrastText: '#fff',
  },
};

const DarkThemePalette: IPalette = {
  mode: 'dark',
  primary: {
    light: orange[200],
    main: orange[400],
    dark: orange[600],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
};

interface ITheme extends ThemeOptions {}

export const getTheme = (mode: PaletteMode): ITheme => ({
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
  typography: {
    fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 2,
  },
  palette: mode === 'light' ? LightThemePalette : DarkThemePalette,
});
