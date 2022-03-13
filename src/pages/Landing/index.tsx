import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThemeToggleButton from 'globalComponents/ThemeTogglerButton';
import Counter from 'pages/Landing/components/Counter';
import Products from 'pages/Landing/components/Products';

export default function App() {
  return (
    <>
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
    </>
  );
}
