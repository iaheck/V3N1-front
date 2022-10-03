import { OpenAPIProvider } from 'react-openapi-client';
import BasicModal from './BasicModal';

const NewResourceComment = ({resourceId}) => (
  <OpenAPIProvider definition="http://localhost:3001/api-docs/v1/swagger.json">
    <BasicModal resourceId={resourceId} />
  </OpenAPIProvider>
);

export default NewResourceComment;
