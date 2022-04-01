import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SearchNFilter from 'pages/Landing/components/SearchNFilter';
import Table from 'pages/Landing/components/Table';

export default function App() {
  return (
    <>
      <SearchNFilter />
      <Divider />
      <Box sx={{ p: 1 }}>
        <Table />
      </Box>
    </>
  );
}
