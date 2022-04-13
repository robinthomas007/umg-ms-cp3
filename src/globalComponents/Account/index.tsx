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
        color: 'white',
      }}
    >
      <IconButton disableRipple sx={{ color: 'white' }}>
        <AccountCircle />
      </IconButton>
      <span>Welcome, Ryan</span>
    </Box>
  );
};
export default Account;
