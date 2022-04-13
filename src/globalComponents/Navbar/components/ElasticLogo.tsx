import Box from '@mui/material/Box';
import logo from 'static/logo.png';

const ElasticLogo = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '4rem' }}>
      <img src={logo} alt="logo" style={{ height: '4rem' }} />
    </Box>
  );
};
export default ElasticLogo;
