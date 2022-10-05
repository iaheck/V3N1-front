import { useOperation, useOperationMethod } from "react-openapi-client";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

function UserRating({ resourceId }) {
  const {
    loading,
    data: resourceEvaluation,
    error,
  } = useOperation("getResourceEvaluation", resourceId);

  const [setResourceEvaluation] = useOperationMethod("setResourceEvaluation");

  const [rating, setRating] = useState(undefined);

  useEffect(() => {
    if (resourceEvaluation) {
      setRating(resourceEvaluation.evaluation);
    }
  }, [resourceEvaluation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (_event, newValue) => {
    setResourceEvaluation(resourceId, { evaluation: newValue });
    setRating(newValue);
    window.location.reload(false);
  };

  return (
    <Rating name="simple-controlled" value={rating} onChange={handleChange} />
  );
}
export default UserRating;
