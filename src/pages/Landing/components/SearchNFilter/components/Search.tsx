import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Search() {
  return (
    <OutlinedInput
      size="small"
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      sx={{ maxWidth: '40rem', pr: 0.5, pt: 0.2, pb: 0.3 }}
      endAdornment={
        <InputAdornment position="end">
          <Button variant="contained">Search</Button>
        </InputAdornment>
      }
    />
  );
}
