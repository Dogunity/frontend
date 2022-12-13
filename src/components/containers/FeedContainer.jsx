import { Box } from "@mui/material";
import FeedHeader from "../feed/FeedHeader";
import FeedImageList from "../feed/FeedImageList";

const FeedContainer = ({
  name,
  introduction,
  communityImage,
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
        name={name}
        introduction={introduction}
        communityImage={communityImage}
      />
      <FeedImageList
        onFeedImageButtonClickEvent={onFeedImageButtonClickEvent}
      />
    </Box>
  );
};

export default FeedContainer;
