import { Box } from '@mui/material';
import Navbar from 'globalComponents/Navbar';
import { Outlet } from 'react-router-dom';

export default function AuthorizedLayout() {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ mt: 8 }}>
        <Outlet />
      </Box>
    </>
  );
}
