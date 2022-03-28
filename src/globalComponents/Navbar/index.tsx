import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Account from 'globalComponents/Account';
import ThemeToggleButton from 'globalComponents/ThemeTogglerButton';

import ElasticLogo from './components/ElasticLogo';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ElasticLogo />
            <Stack direction="row" spacing={2}>
              <ThemeToggleButton />
              <Account />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;
