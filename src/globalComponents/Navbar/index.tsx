import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ThemeToggleButton from 'globalComponents/ThemeTogglerButton';
import Logo from 'static/logo.png';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, mb: 0, height: '4rem' }}>
              <img src={Logo} alt="logo" style={{ height: '4rem' }} />
            </Box>
            <ThemeToggleButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
