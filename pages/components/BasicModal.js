import React from 'react';
import { Button, Modal, Box } from '@mui/material';
import NewResourceCommentForm from './NewResourceCommentForm';

export default function BasicModal({resourceId}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>New comment</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 300 }}>
          <NewResourceCommentForm
            resourceId={resourceId}
            handleClose={handleClose}
          />
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
