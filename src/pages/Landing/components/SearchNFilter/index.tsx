import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import Filter from './components/Filter';
import Search from './components/Search';
export default function SearchNFilter() {
  return (
    <Toolbar>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Filter />
        <Search />
      </Stack>
    </Toolbar>
  );
}
