import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import * as React from 'react';

interface ActionProps {
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormActions: React.FC<ActionProps> = ({ onCancel }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={onCancel} startIcon={<HighlightOffIcon />}>
        Cancel
      </Button>
      <Button type="submit" startIcon={<CheckCircleIcon />} variant="contained">
        Submit
      </Button>
    </Stack>
  );
};

export default FormActions;
