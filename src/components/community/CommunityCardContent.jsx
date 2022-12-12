import { CardContent, Typography } from "@mui/material";

const CommunityCardContent = ({ name, introduction }) => {
  return (
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Typography>{introduction}</Typography>
    </CardContent>
  );
};

export default CommunityCardContent;
