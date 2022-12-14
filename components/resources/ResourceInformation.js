import { Alert } from "@mui/material";
import { useOperationMethod } from "react-openapi-client";
import useFetch from "../../hooks/use-fetch";
import Loader from "../common/Loader";
import ResourceDisplay from "./ResourceDisplay";
import UserRating from "./UserRating";

function ResourceInformation({ resourceId }) {
  const {
    data,
    error,
    mutate: mutateResource,
  } = useFetch(`/api/resources/${resourceId}`);

  const { data: evaluationData, mutate } = useFetch(
    `/api/resources/${resourceId}/resource_evaluation`
  );

  const [setResourceEvaluation] = useOperationMethod("setResourceEvaluation");

  async function handleRatingChange(body) {
    await setResourceEvaluation(resourceId, body);
    await mutate();
    await mutateResource();
  }

  if (error) return <Alert severity="error">Error</Alert>;
  if (!data) return <Loader />;

  data.average_evaluation = parseFloat(
    String(data.average_evaluation).slice(0, 3)
  );
  const userEvaluation = evaluationData ? evaluationData.evaluation : null;

  return (
    <>
      <ResourceDisplay resource={data} />
      <UserRating
        evaluation={userEvaluation}
        setEvaluation={async (body) => {
          handleRatingChange(body);
        }}
      />
    </>
  );
}

export default ResourceInformation;
