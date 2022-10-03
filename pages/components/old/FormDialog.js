import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PostComment from './PostComment';
import ReactDOM from 'react-dom';
import useFetch from './useFetch';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const postComment = () => {
    return <PostComment />
  }

  const myFunc = (value) => {
    setOpen(false);
    console.log(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write your comment and then submit it.
          </DialogContentText>
          <TextField
            id="new-comment-content"
            required
            autoFocus
            margin="dense"
            label="Comment"
            type="comment"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      <h1>{document.getElementById("new-comment-content").value}</h1>
    </div>
  );
}
