import Box from '@mui/material/Box';
import ThemeToggler from 'ThemeToggler';

import Counter from './Counter';
import ThemeProvider from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <ThemeToggler />
        <Counter />
      </Box>
    </ThemeProvider>
  );
}
