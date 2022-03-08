import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
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
    <IconButton onClick={() => toggleColorMode(mode)} color="inherit">
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
