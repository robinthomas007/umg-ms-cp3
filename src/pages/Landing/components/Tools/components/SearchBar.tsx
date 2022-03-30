import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function SearchBar() {
  return (
    <FormControl size="small" fullWidth sx={{ maxWidth: '40rem' }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        sx={{ pr: 0.5, pt: 0.2, pb: 0.3 }}
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained">Search</Button>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
