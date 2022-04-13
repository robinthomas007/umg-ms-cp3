import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';

export default function Filter() {
  return (
    <IconButton
      sx={{
        borderRadius: 1,
        height: '2.7rem',
        width: '2.7rem',
        bgcolor: 'white',
        color: 'dark',
        '&:hover': {
          color: 'dark',
          bgcolor: 'white',
        },
      }}
    >
      <SettingsIcon />
    </IconButton>
  );
}
