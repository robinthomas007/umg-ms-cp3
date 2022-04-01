import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Filter from './components/Filter';
import Search from './components/Search';
export default function SearchNFilter() {
  return (
    <>
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
      <Stack justifyContent={'center'} alignItems="center" direction="row" spacing={1}>
        <Typography variant="body2" component="span">
          Selected Filters:
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          label="Label: Universal Music"
          onDelete={console.log}
        />
        <Chip
          label="Release Date: 01/01/2021 - 01/01/2022"
          color="primary"
          variant="outlined"
          onDelete={console.log}
        />
      </Stack>
    </>
  );
}
