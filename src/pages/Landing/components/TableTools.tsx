import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import SearchBar from './SearchBar';
export default function TableTools() {
  return (
    <Toolbar
      sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 1 }}
    >
      <Tooltip title="Filter Projects">
        <Fab size="medium" color="primary">
          <FilterListIcon />
        </Fab>
      </Tooltip>

      <SearchBar />

      <Button variant="outlined" startIcon={<FilterListIcon />}>
        Delete
      </Button>
    </Toolbar>
  );
}
