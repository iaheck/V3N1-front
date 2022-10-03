import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import useFetch from './useFetch';

const url = 'http://localhost:3001/api/curriculums';

const PostComment = () => {
	const { isLoading, isError, data } = useFetch(url);

	if(isLoading) {
	  return <CircularProgress />
	}

	if (isError) {
	  return(
		<Stack sx={{ width: '100%' }} spacing={2}>
		  <Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			This is an error alert — <strong>check it out!</strong>
		  </Alert>
		</Stack>
	  )
	}

	return(<h1>yei</h1>)
	console.log('yei');

}

export default PostComment;
