import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import SlideDownTransition from 'globalComponents/SlideDownTransition';
import { useAtom } from 'jotai';

import { IsModalOpenAtom } from './state';

export default function CreateOrEditProject() {
  const [open, setOpen] = useAtom(IsModalOpenAtom);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      TransitionComponent={SlideDownTransition}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ m: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setOpen(false)}
          startIcon={<HighlightOffIcon />}
        >
          Cancel
        </Button>
        <Button startIcon={<CheckCircleIcon />} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
