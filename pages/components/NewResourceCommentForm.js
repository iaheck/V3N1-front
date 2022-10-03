import { useOperationMethod } from 'react-openapi-client';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const NewResourceCommentForm = ({resourceId, handleClose}) => {

  const [createResourceComment, { loading, error, data }] =
    useOperationMethod('createResourceComment');
  const [formInput, setContent] = React.useState({content: ''})

  console.log(formInput.content)
  console.log(resourceId)


  function handleChange(event) {
      setContent(prevFormInput => {
          return {
              ...prevFormInput,
              [event.target.name]: event.target.value
          }
      })
  }

  const handleSubmit = async () => {
    await createResourceComment(
      resourceId,
      { 'content': formInput.content }
    );
    handleClose();
  }

  if(error) {
    return <h1>Error</h1>
  }
  if(loading) {
    return <h1>Loading...</h1>
  }
  if(data) {
    console.log(data)
    return <h1>tengo data</h1>
  }
  return (
    <React.Fragment>
      <TextField
        required
        type="text"
        id="content"
        name="content"
        label ="Write your comment"
        multiline
        maxRows={4}
        onChange={handleChange}
        value={formInput.content}
      /><br></br>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClose}>Cancel(dentro)</Button>
    </React.Fragment>
  );
};

export default NewResourceCommentForm;
