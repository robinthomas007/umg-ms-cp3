import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import Filters from './Filters';
import SearchBar from './SearchBar';
export default function TableTools() {
  return (
    <Toolbar
      sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 2 }}
    >
      <Filters />
      <SearchBar />
      <Button variant="outlined" startIcon={<FilterListIcon />}>
        Delete
      </Button>
    </Toolbar>
  );
}
