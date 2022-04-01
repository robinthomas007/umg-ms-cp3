import { PaletteMode, PaletteOptions } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { atom } from 'jotai';

export const DARK = 'dark';
export const LIGHT = 'light';

export const getThemeMode = (): PaletteMode => {
  const theme = localStorage.getItem('THEME');
  if (theme === LIGHT || theme === DARK) {
    return theme;
  } else {
    return LIGHT;
  }
};

export const setThemeMode = (mode: PaletteMode): void => {
  localStorage.setItem('THEME', mode);
};

export const themeModeAtom = atom<PaletteMode>(getThemeMode());

interface IPalette extends PaletteOptions {
  navbarIcon: string;
}

const LightThemePalette: IPalette = {
  mode: LIGHT,
  primary: {
    light: blue[600],
    main: blue[800],
    dark: blue[900],
    contrastText: '#fff',
  },
  navbarIcon: '#fff',
};

const DarkThemePalette: IPalette = {
  mode: DARK,
  primary: {
    light: orange[200],
    main: orange[400],
    dark: orange[600],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  navbarIcon: '#fff',
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
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 2,
  },
  palette: mode === LIGHT ? LightThemePalette : DarkThemePalette,
});
