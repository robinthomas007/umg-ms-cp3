import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ThemeToggleButton from 'globalComponents/ThemeTogglerButton';

import ElasticLogo from './components/ElasticLogo';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ElasticLogo />
            <ThemeToggleButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
