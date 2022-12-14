import { Box, ImageList, ImageListItem } from "@mui/material";

const FeedImageList = ({ feeds, onFeedImageButtonClickEvent }) => {
  return (
    <Box style={{ margin: "0 auto" }}>
      <ImageList
        sx={{ width: 800, height: 720 }}
        cols={3}
        rowHeight={300}
        gap={5}
      >
        {feeds.map((item) => (
          <ImageListItem key={item.id} style={{ cursor: "pointer" }}>
            <img
              src={item.images[0]}
              alt={item.description}
              loading="lazy"
              onClick={onFeedImageButtonClickEvent(item)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default FeedImageList;
