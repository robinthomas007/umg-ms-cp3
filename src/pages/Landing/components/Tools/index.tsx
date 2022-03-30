import Toolbar from '@mui/material/Toolbar';

import Actors from './components/Actors';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';

export default function TableTools() {
  return (
    <Toolbar
      sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 2 }}
    >
      <Filters />
      <SearchBar />
      <Actors />
    </Toolbar>
  );
}
