import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Counter from 'Counter';
import ThemeToggleButton from 'globalComponents/ThemeToggleButton';
import Products from 'Products';
import ThemeProvider from 'ThemeProvider';

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
        <ThemeToggleButton />
        <Typography variant="h3">Content Protection V3</Typography>
        <Counter />
      </Box>
      <Products />
    </ThemeProvider>
  );
}
