import { useState } from "react";
import { Button, Modal, Box, Container } from "@mui/material";
import NewResourceCommentForm from "./NewResourceCommentForm";

function NewResourceComment({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          ml: -1,
          my: 2,
        }}
      >
        <Button onClick={handleOpen} variant="contained">
          Add comment
        </Button>
      </Container>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 300 }}>
          <NewResourceCommentForm
            handleClose={handleClose}
            onSubmit={onSubmit}
          />
        </Box>
      </Modal>
    </>
  );
}

export default NewResourceComment;
