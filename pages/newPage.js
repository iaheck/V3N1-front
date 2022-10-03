import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import NewResourceComment from './components/NewResourceComment';
// import * as serviceWorker from './serviceWorker';

export default function newPage() {
  return(
    <React.StrictMode>
      <NewResourceComment resourceId={1} />
    </React.StrictMode>
  );
};
