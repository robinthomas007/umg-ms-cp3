import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ModalCloseButton from 'globalComponents/Modal/ModalCloseButton';
import SlideDownTransition from 'globalComponents/SlideDownTransition';
import * as React from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  onClose?: Function;
  actions?: React.ReactNode;
  form?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  open,
  onClose,
  actions,
  form,
}) => {
  return (
    <Dialog
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      open={open}
      TransitionComponent={SlideDownTransition}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && onClose) {
          onClose(event, reason);
        }
      }}
    >
      <DialogTitle>
        {title}
        <ModalCloseButton
          onClick={(e) => {
            if (onClose) {
              onClose(e);
            }
          }}
        />
      </DialogTitle>
      <Box component={form ? 'form' : 'div'}>
        <DialogContent style={{ paddingTop: '1rem' }}>{children}</DialogContent>
        <DialogActions sx={{ margin: '1rem' }}>{actions}</DialogActions>
      </Box>
    </Dialog>
  );
};

export default Modal;
