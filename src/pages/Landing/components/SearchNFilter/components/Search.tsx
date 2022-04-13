import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useAtom } from 'jotai';
import { searchAtom } from 'pages/Landing/state';
import { KeyboardEvent, useState } from 'react';

export default function Search() {
  const [search, setSearch] = useAtom(searchAtom);
  const [input, setInput] = useState(search);

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearch(input);
    }
  };

  return (
    <OutlinedInput
      onKeyDown={handleEnter}
      size="small"
      fullWidth
      onChange={(e) => setInput(e.target.value)}
      startAdornment={
        <InputAdornment position="start" sx={{ color: 'dark' }}>
          <SearchIcon />
        </InputAdornment>
      }
      sx={{
        maxWidth: '40rem',
        pr: 0.5,
        pt: 0.2,
        pb: 0.3,
        bgcolor: 'white',
        color: 'black',
      }}
      endAdornment={
        <InputAdornment position="end">
          <Button
            variant="contained"
            sx={{ color: 'white' }}
            onClick={() => setSearch(input)}
          >
            Search
          </Button>
        </InputAdornment>
      }
    />
  );
}
