import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, MenuItem, Select, Stack, Toolbar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export default function TableTools() {
  return (
    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        Viewing&nbsp;&nbsp;
        <Select autoWidth size="small" defaultValue={10}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={21}>25</MenuItem>
          <MenuItem value={22}>50</MenuItem>
        </Select>
        &nbsp;&nbsp;of 250 Results
      </Typography>
      <Pagination count={10} shape="rounded" color="primary" />
      <Stack spacing={1} direction="row">
        <Button variant="outlined" startIcon={<AddCircleIcon />}>
          Create
        </Button>
        <Button variant="outlined" startIcon={<FileDownloadIcon />}>
          Export
        </Button>
      </Stack>
    </Toolbar>
  );
}
