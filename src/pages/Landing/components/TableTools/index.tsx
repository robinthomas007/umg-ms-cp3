import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, MenuItem, Select, Stack, Toolbar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useAtom } from 'jotai';
import { IsModalOpenAtom } from 'pages/Landing/components/CreateOrEdit/state';

export default function TableTools() {
  const [, openCreateProject] = useAtom(IsModalOpenAtom);
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
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          onClick={() => openCreateProject(true)}
        >
          Create
        </Button>
        <Button variant="outlined" startIcon={<FileDownloadIcon />}>
          Export
        </Button>
      </Stack>
    </Toolbar>
  );
}
