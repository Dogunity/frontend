import { Box, Typography, Button, IconButton } from "@mui/material";
import useSessionStorage from "../../hooks/common/useSessionStorage";
import useCustomForm from "../../hooks/common/useCustomForm";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MyCustomImageSlider from "../common/MyCustomImageSlider";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";
import { commentPostRequest } from "../../apis/commentService";

const FeedDetail = ({
  feed,
  onFeedDeleteButtonClickEvent,
  onFeedLikeButtonClickEvent,
}) => {
  const { item, userId } = useSessionStorage();
  const { formValue, handleFormValueChange } = useCustomForm();

  const handleFormValueSubmit = async (e) => {
    e.preventDefault();
    const { comment } = formValue;
    const res = await commentPostRequest(feed.id, comment, item);
    if (res.status >= 200 && res.status < 300) window.location.reload();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
      <Box
        sx={{
          width: 800,
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
      <Box sx={{ width: 300 }}>
        <CommentList feedId={feed.id} />
        <CommentForm
          formValue={formValue}
          onFormValueChangeEvent={handleFormValueChange}
          onFormValueSubmitEvent={handleFormValueSubmit}
        />
      </Box>
    </Box>
  );
};

export default FeedDetail;
