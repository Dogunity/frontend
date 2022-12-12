import { CardMedia } from "@mui/material";

const CommunityCardImage = ({ imageUrl }) => {
  return <CardMedia component="img" image={imageUrl} alt="random" />;
};

export default CommunityCardImage;
