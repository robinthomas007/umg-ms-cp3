import { PaletteMode } from '@mui/material';

export const getColorMode = (): PaletteMode => {
  const theme = localStorage.getItem('THEME');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  } else {
    return 'light';
  }
};

export const setColorMode = (mode: PaletteMode): void => {
  localStorage.setItem('THEME', mode);
};
