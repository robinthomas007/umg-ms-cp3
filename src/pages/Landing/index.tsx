import { Box, Divider } from '@mui/material';
import SearchNFilter from 'pages/Landing/components/SearchNFilter';
import Table from 'pages/Landing/components/Table';
import TableTools from 'pages/Landing/components/TableTools';

export default function App() {
  return (
    <>
      <Box pt={2.5}>
        <SearchNFilter />
      </Box>
      <Box sx={{ px: 5, pt: 5 }}>
        <TableTools />
        <Divider />
        <Table />
      </Box>
    </>
  );
}
