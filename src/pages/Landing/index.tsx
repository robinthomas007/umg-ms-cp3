import { Box, Divider } from '@mui/material';
import { useAtom } from 'jotai';
import CreateOrEdit from 'pages/Landing/components/CreateOrEdit';
import SearchNFilter from 'pages/Landing/components/SearchNFilter';
import Table from 'pages/Landing/components/Table';
import TableTools from 'pages/Landing/components/TableTools';
import { useSearchTracks } from 'pages/Landing/query';
import { itemsPerPageAtom, pageNumberAtom, searchAtom } from 'pages/Landing/state';
import { memo, useEffect } from 'react';
import usePrevious from 'utils/usePrevious';

function Tracks() {
  const { data, mutate } = useSearchTracks();
  const [searchTerm] = useAtom(searchAtom);
  const [itemsPerPage] = useAtom(itemsPerPageAtom);
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);

  const prevtotalItems = usePrevious(data?.totalItems);
  const prevtotalPages = usePrevious(data?.totalPages);

  const refetchData = () => {
    mutate({ searchTerm, itemsPerPage, pageNumber });
  };

  useEffect(() => {
    if (data?.totalPages) {
      if (Number(data.totalPages) < Number(pageNumber)) {
        setPageNumber(data.totalPages);
      }
    }
  }, [data?.totalPages]);

  useEffect(() => {
    refetchData();
  }, [searchTerm, itemsPerPage, pageNumber]);

  return (
    <>
      <Box pb={8} bgcolor="dark">
        <SearchNFilter />
      </Box>
      <Box sx={{ p: 5 }}>
        <TableTools
          totalItems={data?.totalItems || prevtotalItems}
          totalPages={data?.totalPages || prevtotalPages}
        />
        <Divider />
        <Table tracks={data?.tracks} />
      </Box>
    </>
  );
}

const MemoTracks = memo(Tracks);

export default function Landing() {
  return (
    <>
      <CreateOrEdit />
      <MemoTracks />
    </>
  );
}
