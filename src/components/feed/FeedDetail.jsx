import { Box, Typography, Button, IconButton } from "@mui/material";
import useSessionStorage from "../../hooks/common/useSessionStorage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MyCustomImageSlider from "../common/MyCustomImageSlider";

const FeedDetail = ({
  feed,
  onFeedDeleteButtonClickEvent,
  onFeedLikeButtonClickEvent,
}) => {
  const { userId } = useSessionStorage();

  return (
    <Box
      sx={{
        width: 1000,
        height: 600,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <MyCustomImageSlider images={feed.images} />
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="text.primary">
          {feed.description}
        </Typography>
      </Box>
      <IconButton onClick={(e) => onFeedLikeButtonClickEvent(e, feed.id)}>
        <FavoriteIcon />
        <Typography variant="h6" color="text.secondary">
          {feed.likeCnt}
        </Typography>
      </IconButton>
      <Box>
        {parseInt(userId) === feed.userId && (
          <Button
            variant="contained"
            onClick={onFeedDeleteButtonClickEvent(feed)}
          >
            Delete
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FeedDetail;
