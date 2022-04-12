import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { TableCellProps } from '@mui/material/TableCell';

export type Order = 'asc' | 'desc';

export interface DataCell<T> {
  id: keyof T;
  label: string;
  align?: TableCellProps['align'];
  sortable?: boolean;
}

export interface HeadCell {
  label: string;
  align?: TableCellProps['align'];
  padding?: TableCellProps['padding'];
}

interface HeadProps<T> {
  onSort: (key: keyof T) => void;
  order: Order;
  orderBy: string;

  dataCells?: readonly DataCell<T>[];
  headCells?: readonly HeadCell[];
}

export default function DataHead<T extends object>(props: HeadProps<T>) {
  const { order, orderBy, onSort, dataCells, headCells } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        {dataCells?.map((dataCell, i) => (
          <TableCell key={i} align={dataCell.align}>
            {dataCell.sortable ? (
              <TableSortLabel
                active={orderBy === dataCell.id}
                direction={orderBy === dataCell.id ? order : 'asc'}
                onClick={() => onSort(dataCell.id)}
              >
                {dataCell.label}
              </TableSortLabel>
            ) : (
              dataCell.label
            )}
          </TableCell>
        ))}
        {headCells?.map((headCell) => (
          <TableCell
            key={headCell.label}
            align={headCell.align}
            padding={headCell.padding}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
