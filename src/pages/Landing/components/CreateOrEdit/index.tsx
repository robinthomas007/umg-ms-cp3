import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import ModalForm from 'globalComponents/ModalForm';
import { useAtom } from 'jotai';

import { IsModalOpenAtom } from './state';

export default function CreateOrEditProject() {
  const [open, setOpen] = useAtom(IsModalOpenAtom);
  const handleClose = () => setOpen(false);

  return (
    <ModalForm
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
      onSubmit={handleClose}
      title={'Create Project'}
      defaultActions
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
    </ModalForm>
  );
}
