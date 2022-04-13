import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
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
    <Tooltip title="Toggle Light/Dark Theme">
      <IconButton onClick={() => toggleColorMode(mode)} sx={{ color: 'white' }}>
        {mode === DARK ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
