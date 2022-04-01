import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';

export default function Filter() {
  return (
    <IconButton
      sx={{
        borderRadius: 1,
        height: '2.7rem',
        width: '2.7rem',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        '&:hover': {
          color: 'primary.contrastText',
          bgcolor: 'primary.dark',
        },
      }}
      color="primary"
    >
      <SettingsIcon />
    </IconButton>
  );
}
