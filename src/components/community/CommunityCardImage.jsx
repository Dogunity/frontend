import { CardMedia } from "@mui/material";

const CommunityCardImage = ({ imageUrl }) => {
  return (
    <CardMedia
      sx={{ height: 500 }}
      component="img"
      image={imageUrl}
      alt="random"
    />
  );
};

export default CommunityCardImage;
