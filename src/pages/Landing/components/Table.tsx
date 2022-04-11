import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRowSkeleton from 'globalComponents/TableRowSkeleton';
import { useState } from 'react';

import { useGetUsers, User } from '../query';

type Order = 'asc' | 'desc';

interface HeadCell {
  id: keyof User;
  label: string;
  align?: TableCellProps['align'];
  sortable?: boolean;
}

interface ExtraHeadCell {
  label: string;
  align?: TableCellProps['align'];
  padding?: TableCellProps['padding'];
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    id: 'username',
    label: 'Username',
    sortable: true,
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'phone',
    label: 'Phone',
  },
];

interface EnhancedTableProps {
  onSort: (key: keyof User) => void;
  order: Order;
  orderBy: string;

  extraHeadCells?: readonly ExtraHeadCell[];
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onSort, extraHeadCells } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align}>
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onSort(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
        {extraHeadCells?.map((extraHeadCell) => (
          <TableCell
            key={extraHeadCell.label}
            align={extraHeadCell.align}
            padding={extraHeadCell.padding}
          >
            {extraHeadCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function BasicTable() {
  const { data } = useGetUsers();
  const [order, setOrder] = useState<Order>('asc');
  const [sortedColumn, setsortedColumn] = useState<keyof User>('name');

  const handleSort = (key: keyof User) => {
    const isAsc = sortedColumn === key && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setsortedColumn(key);
  };

  const extraColumns: readonly ExtraHeadCell[] = [
    {
      label: 'Notes',
      padding: 'none',
      align: 'center',
    },
    {
      label: 'Actions',
      padding: 'none',
      align: 'center',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <EnhancedTableHead
          order={order}
          orderBy={sortedColumn}
          onSort={handleSort}
          extraHeadCells={extraColumns}
        />
        <TableBody>
          {data ? (
            data.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell padding="none" align="center">
                  <IconButton color="default">
                    <QuestionAnswerIcon />
                  </IconButton>
                </TableCell>
                <TableCell padding="none" align="center">
                  <Stack justifyContent={'center'} direction="row" spacing={1}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRowSkeleton columns={7} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
