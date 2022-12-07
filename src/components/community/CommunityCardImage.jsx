import { CardMedia } from "@mui/material";

const CommunityCardImage = () => {
  return (
    <CardMedia
      component="img"
      sx={{
        pt: "56.25%",
      }}
      image="https://source.unsplash.com/random"
      alt="random"
    />
  );
};

export default CommunityCardImage;
