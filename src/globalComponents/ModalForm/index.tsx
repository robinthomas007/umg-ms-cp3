import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ModalCloseButton from 'globalComponents/ModalForm/ModalCloseButton';
import Actions from 'globalComponents/ModalForm/ModalFormActions';
import SlideDownTransition from 'globalComponents/SlideDownTransition';
import * as React from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onClose: Function;
  defaultActions?: boolean;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  actions?: React.ReactNode;
}

const ModalForm: React.FC<ModalProps> = ({
  title,
  children,
  open,
  onClose,
  actions,
  onCancel,
  onSubmit,
  defaultActions,
}) => {
  return (
    <Dialog
      keepMounted
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      open={open}
      TransitionComponent={SlideDownTransition}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick' && onClose) {
          onClose(event);
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
      <Box onSubmit={onSubmit} component="form">
        <DialogContent style={{ paddingTop: '1rem' }}>{children}</DialogContent>
        <DialogActions sx={{ margin: '1rem' }}>
          {defaultActions ? <Actions onCancel={onCancel} /> : actions}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ModalForm;
