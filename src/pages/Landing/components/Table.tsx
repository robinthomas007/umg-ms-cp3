import { Edit, QuestionAnswer } from '@mui/icons-material';
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import DataHead, { DataCell, HeadCell } from 'globalComponents/DataTable/DataHead';
import TableRowSkeleton from 'globalComponents/TableRowSkeleton';
import { useAtom } from 'jotai';
import { Track } from 'pages/Landing/query';
import { sortByAtom, sortOrderAtom } from 'pages/Landing/state';
import { memo } from 'react';

interface Props {
  tracks?: Track[];
}

function TrackTable({ tracks }: Props) {
  const [order, setOrder] = useAtom(sortOrderAtom);
  const [sortedColumn, setsortedColumn] = useAtom(sortByAtom);

  const handleSort = (key: keyof Track) => {
    const isAsc = sortedColumn === key && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setsortedColumn(key);
  };

  const dataCells: readonly DataCell<Track>[] = [
    {
      id: 'title',
      label: 'Title',
      sortable: true,
    },
    {
      id: 'artist',
      label: 'Artist',
      sortable: true,
    },
    {
      id: 'isrc',
      label: 'Isrc',
    },
    {
      id: 'label',
      label: 'Label',
      sortable: true,
    },
    {
      id: 'releaseDate',
      label: 'Release Date',
      sortable: true,
    },
    {
      id: 'leakDate',
      label: 'Leak Date',
    },
  ];

  const headCells: readonly HeadCell[] = [
    {
      label: 'Notes',
      padding: 'none',
      align: 'center',
    },
    {
      label: 'Edit',
      padding: 'none',
      align: 'center',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <DataHead
          order={order}
          orderBy={sortedColumn}
          onSort={handleSort}
          dataCells={dataCells}
          headCells={headCells}
        />
        <TableBody>
          {tracks ? (
            tracks.map((row) => (
              <TableRow hover key={row.trackId}>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.artist}</TableCell>
                <TableCell>{row.isrc}</TableCell>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.releaseDate}</TableCell>
                <TableCell>{row.leakDate}</TableCell>
                <TableCell padding="none" align="center">
                  <IconButton color="primary">
                    <QuestionAnswer />
                  </IconButton>
                </TableCell>
                <TableCell padding="none" align="center">
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRowSkeleton columns={9} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(TrackTable);
