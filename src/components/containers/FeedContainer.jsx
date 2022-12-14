import { Box } from "@mui/material";
import FeedHeader from "../feed/FeedHeader";
import FeedImageList from "../feed/FeedImageList";

const FeedContainer = ({
  id,
  name,
  introduction,
  communityImage,
  feeds,
  onFeedImageButtonClickEvent,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <FeedHeader
        id={id}
        name={name}
        introduction={introduction}
        communityImage={communityImage}
      />
      <FeedImageList
        feeds={feeds}
        onFeedImageButtonClickEvent={onFeedImageButtonClickEvent}
      />
    </Box>
  );
};

export default FeedContainer;
