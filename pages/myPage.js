import React from 'react';
import ReactDOM from 'react-dom';
import { OpenAPIProvider } from 'react-openapi-client';
import FormDialog from './components/old/FormDialog';
import { PostComment } from './components/old/PostComment';
import BasicModal from './components/BasicModal';

// export default function myPage(){
//   return(
//       <OpenAPIProvider definition="http://localhost:3001/api-docs/v1/swagger.json">
//         <PostComment resource_id="8" />
//       </OpenAPIProvider>
//   );
// };

// export default function myPage(){
//     return(
//       <FormDialog>
//         <OpenAPIProvider definition="http://localhost:3001/api-docs/v1/swagger.json">
//           <PostComment resource_id="5" />
//         </OpenAPIProvider>
//       </FormDialog>
//     );
//   };

export default function myPage(){
  return(
      <FormDialog />
  )
};