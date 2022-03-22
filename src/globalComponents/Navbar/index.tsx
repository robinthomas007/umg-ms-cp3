import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeToggleButton from 'globalComponents/ThemeTogglerButton';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              CP3
            </Typography>
            <ThemeToggleButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
