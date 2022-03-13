import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getTheme, themeModeAtom } from 'config/theme';
import { useAtom } from 'jotai';
import { PropsWithChildren, useMemo } from 'react';

export default function ToggleThemeMode(props: PropsWithChildren<{}>) {
  const [mode] = useAtom(themeModeAtom);

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
