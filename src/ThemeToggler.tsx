import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
    <IconButton color="inherit" onClick={() => toggleColorMode(mode)}>
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
