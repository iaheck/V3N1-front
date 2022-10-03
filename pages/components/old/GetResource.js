import React from 'react';
import ReactDOM from 'react-dom'
import { useOperation } from 'react-openapi-client';


export const GetResource = (props) => {
    const { loading, error, data } = useOperation('getResource', props.resource_id);
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>Error</div>
    }
    const {name, url, average_evaluation} = data;
    console.log(name);
    return(
      <div>
        <h1>
          name: {name}
        </h1>
        <h2>
          url: {url}
        </h2>
        <h2>
          average_evaluation: {average_evaluation}
        </h2>
        </div>
    )
  }