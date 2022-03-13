import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteMode } from '@mui/material';
import Fab from '@mui/material/Fab';
import { DARK, LIGHT, setThemeMode, themeModeAtom } from 'config/theme';
import { useAtom } from 'jotai';

export default function ThemeToggler() {
  const [mode, useMode] = useAtom(themeModeAtom);

  const toggleColorMode = (mode: PaletteMode) => {
    if (mode === LIGHT) {
      useMode(DARK);
      setThemeMode(DARK);
    } else {
      useMode(LIGHT);
      setThemeMode(LIGHT);
    }
  };

  return (
    <Fab color="primary" onClick={() => toggleColorMode(mode)}>
      {mode === DARK ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
}
