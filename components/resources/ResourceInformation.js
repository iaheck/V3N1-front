import { useOperation } from "react-openapi-client";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import UserRating from "./UserRating";
import Loader from "../common/Loader";

function ResourceInformation({ resourceId }) {
  const {
    loading,
    data: resource,
    error,
  } = useOperation("getResource", resourceId);

  const [average, setAverage] = useState(undefined);

  function FloatAverage(textAverage) {
    if (textAverage === null) {
      return textAverage;
    }
    return parseFloat(textAverage.slice(0, 3));
  }

  useEffect(() => {
    if (resource) {
      setAverage(FloatAverage(resource.average_evaluation));
    }
  }, [resource]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div> Error </div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {resource.name}
        </Typography>

        <Rating
          id="resource-average"
          name="read-only"
          value={average}
          precision={0.1}
          readOnly
        />

        <Chip label={average} variant="outlined" />

        <CardActions>
          <Button href={resource.url} target="_blank" variant="outlined">
            Ver recurso
          </Button>
        </CardActions>

        <Typography component="div">Your evaluation</Typography>

        <UserRating resourceId={resourceId} onChangeAverage={setAverage} />
      </CardContent>
    </Card>
  );
}
export default ResourceInformation;
