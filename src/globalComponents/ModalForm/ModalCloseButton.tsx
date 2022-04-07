import CancelIcon from '@mui/icons-material/Cancel';
import { ButtonProps, IconButton } from '@mui/material';

export default function ModalCloseButton(props: ButtonProps) {
  return (
    <IconButton
      {...props}
      sx={{
        position: 'absolute',
        right: 12,
        top: 12,
      }}
    >
      <CancelIcon />
    </IconButton>
  );
}
