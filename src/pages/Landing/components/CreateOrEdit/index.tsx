import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Modal from 'globalComponents/Modal';
import { useAtom } from 'jotai';

import { IsModalOpenAtom } from './state';

export default function CreateOrEditProject() {
  const [open, setOpen] = useAtom(IsModalOpenAtom);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      form
      open={open}
      onClose={handleClose}
      title={'Create Project'}
      actions={
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={handleClose}
            startIcon={<HighlightOffIcon />}
          >
            Cancel
          </Button>
          <Button startIcon={<CheckCircleIcon />} variant="contained">
            Submit
          </Button>
        </Stack>
      }
    >
      <Stack spacing={4}>
        <Stack direction="row" spacing={4}>
          <TextField fullWidth label="Title" variant="outlined" />
          <TextField fullWidth label="Artist" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField fullWidth label="ISRC" variant="outlined" />
          <TextField fullWidth label="Label" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField fullWidth label="ISRC" variant="outlined" />
          <TextField fullWidth label="Label" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <TextField fullWidth label="Leak Date" variant="outlined" />
          <TextField fullWidth label="Release Date" variant="outlined" />
        </Stack>
        <TextField fullWidth label="Policy" variant="outlined" />
      </Stack>
    </Modal>
  );
}
