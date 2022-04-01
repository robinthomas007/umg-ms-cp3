import { Box, Divider } from '@mui/material';
import SearchNFilter from 'pages/Landing/components/SearchNFilter';
import Table from 'pages/Landing/components/Table';
import TableTools from 'pages/Landing/components/TableTools';

export default function App() {
  return (
    <>
      <SearchNFilter />
      <Box sx={{ p: 4 }}>
        <TableTools />
        <Divider />
        <Table />
      </Box>
    </>
  );
}
