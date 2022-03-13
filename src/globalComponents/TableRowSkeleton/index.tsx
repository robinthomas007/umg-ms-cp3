import { Skeleton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface TableRowSkeletonProps {
  rows?: number;
  columns: number;
}

export default function TableRowSkeleton({ rows = 5, columns }: TableRowSkeletonProps) {
  return (
    <>
      {[...Array(rows)].map((_, i) => (
        <TableRow key={i}>
          {[...Array(columns)].map((_, j) => (
            <TableCell key={j}>
              <Skeleton animation="wave" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
