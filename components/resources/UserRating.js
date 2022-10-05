import { useOperation, useOperationMethod } from "react-openapi-client";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Loader from "../common/Loader";

function UserRating({ resourceId, onChangeAverage }) {
  const { loading, data: resourceEvaluation } = useOperation(
    "getResourceEvaluation",
    resourceId
  );

  const [setResourceEvaluation] = useOperationMethod("setResourceEvaluation");
  const [rating, setRating] = useState(undefined);

  useEffect(() => {
    if (resourceEvaluation) {
      setRating(resourceEvaluation.evaluation);
    }
  }, [resourceEvaluation]);

  const [getResource, { data: resource }] = useOperationMethod("getResource");

  useEffect(() => {
    if (resource) {
      onChangeAverage(parseFloat(resource.average_evaluation.slice(0, 3)));
    }
  }, [resource, onChangeAverage]);

  if (loading) {
    return <Loader />;
  }

  const handleChange = async (_event, newValue) => {
    await setResourceEvaluation(resourceId, { evaluation: newValue });
    setRating(newValue);
    getResource(resourceId);
  };

  return (
    <Rating name="simple-controlled" value={rating} onChange={handleChange} />
  );
}
export default UserRating;
