import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

 function Comment({userName, postTime, content}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {userName} says:
          </Typography>
          <Typography variant="body2" gutterBottom>
            {content}
          </Typography>
          <Typography
            sx={{ fontSize: 13, textAlign: "right", mt: 1.5 }}
            color="text.secondary"
          >
            written on {postTime}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Comment
