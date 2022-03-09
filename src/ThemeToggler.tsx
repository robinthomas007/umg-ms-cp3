import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteMode } from '@mui/material';
import Fab from '@mui/material/Fab';
import { colorModeAtom } from 'atoms';
import { useAtom } from 'jotai';
import { setColorMode } from 'utils/theme';
export default function ThemeToggler() {
  const [mode, useMode] = useAtom(colorModeAtom);

  const toggleColorMode = (mode: PaletteMode) => {
    if (mode === 'light') {
      useMode('dark');
      setColorMode('dark');
    } else {
      useMode('light');
      setColorMode('light');
    }
  };

  return (
    <Fab color="primary" onClick={() => toggleColorMode(mode)}>
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
}
