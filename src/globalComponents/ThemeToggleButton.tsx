import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteMode } from '@mui/material';
import Fab from '@mui/material/Fab';
import { setThemeMode, themeModeAtom } from 'config/theme';
import { useAtom } from 'jotai';

export default function ThemeToggler() {
  const [mode, useMode] = useAtom(themeModeAtom);

  const toggleColorMode = (mode: PaletteMode) => {
    if (mode === 'light') {
      useMode('dark');
      setThemeMode('dark');
    } else {
      useMode('light');
      setThemeMode('light');
    }
  };

  return (
    <Fab color="primary" onClick={() => toggleColorMode(mode)}>
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
}
