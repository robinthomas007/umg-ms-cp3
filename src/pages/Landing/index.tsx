import { Box, Divider } from '@mui/material';
import { useAtom } from 'jotai';
import CreateOrEdit from 'pages/Landing/components/CreateOrEdit';
import SearchNFilter from 'pages/Landing/components/SearchNFilter';
import Table from 'pages/Landing/components/Table';
import TableTools from 'pages/Landing/components/TableTools';
import { useSearchTracks } from 'pages/Landing/query';
import { itemsPerPageAtom, pageNumberAtom, searchAtom } from 'pages/Landing/state';
import { useEffect } from 'react';

function Tracks() {
  const { data, mutate } = useSearchTracks();
  const [search] = useAtom(searchAtom);
  const [itemsPerPage] = useAtom(itemsPerPageAtom);
  const [pageNumber] = useAtom(pageNumberAtom);

  useEffect(() => {
    mutate({ searchTerm: search, itemsPerPage, pageNumber });
  }, [search, itemsPerPage, pageNumber]);

  return (
    <>
      <Box pt={2.5}>
        <SearchNFilter />
      </Box>
      <Box sx={{ px: 5, pt: 5 }}>
        <TableTools totalItems={data?.totalItems} totalPages={data?.totalPages} />
        <Divider />
        <Table tracks={data?.tracks} />
      </Box>
    </>
  );
}

export default function Landing() {
  return (
    <>
      <CreateOrEdit />
      <Tracks />
    </>
  );
}
