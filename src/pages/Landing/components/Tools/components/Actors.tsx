import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Actors() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" startIcon={<AddCircleIcon />}>
        Create
      </Button>
      <Button variant="outlined" startIcon={<FileDownloadIcon />}>
        Export
      </Button>
    </Stack>
  );
}
