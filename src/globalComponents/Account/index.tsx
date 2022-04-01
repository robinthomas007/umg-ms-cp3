import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const Account = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton disableRipple sx={{ color: 'navbarIcon' }}>
        <AccountCircle />
      </IconButton>
      <span>Welcome</span>
    </Box>
  );
};
export default Account;
