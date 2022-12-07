import { CardContent, Typography } from "@mui/material";

const CommunityCardContent = () => {
  return (
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        Heading
      </Typography>
      <Typography>
        This is a media card. You can use this section to describe the content.
      </Typography>
    </CardContent>
  );
};

export default CommunityCardContent;
