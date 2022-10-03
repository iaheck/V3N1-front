import { useOperationMethod } from 'react-openapi-client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewResourceForm = (learning_unit_id) => {

  const [createResource, { loading, error, data }] = useOperationMethod('createResource');
  const [formData, setFormData] = React.useState(
    {name: "", url: ""}
  )

  console.log(formData)

  function handleChange(event) {
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
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
    <div>
      <TextField
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      /><br></br>
      <TextField
        type="text"
        id="url"
        name="url"
        onChange={handleChange}
        value={formData.url}
      /><br></br>
      <Button onClick={() => createResource(
        learning_unit_id,
        { 'name': formData.name, 'url': formData.url }
      )}>Submit</Button>
      <h1>name: </h1><h4>{formData.name}</h4>
      <h1>url: </h1><h4>{formData.url}</h4>
    </div>
  );
};

export default NewResourceForm;