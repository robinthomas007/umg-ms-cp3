import Box from '@mui/material/Box';
import Counter from 'Counter';
import Products from 'Products';
import ThemeProvider from 'ThemeProvider';
import ThemeToggler from 'ThemeToggler';

export default function App() {
  return (
    <ThemeProvider>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 5,
        }}
      >
        <ThemeToggler />
        <Counter />
      </Box>
      <Products />
    </ThemeProvider>
  );
}
