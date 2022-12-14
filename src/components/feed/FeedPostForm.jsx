import { useCallback, useState } from "react";
import { Typography, Box, TextField, CardMedia, Button } from "@mui/material";

const FeedPostForm = ({
  setDescription,
  onMultiImageUploadChangeEvent,
  onFeedSubmitEvent,
}) => {
  const [feedPreviewImage, setFeedPreviewImage] = useState(null);

  const handleFeedPreviewImage = useCallback(
    (e) => {
      const file = e.target.files[0];
      onMultiImageUploadChangeEvent(e.target.files);
      const preview = new FileReader();
      preview.readAsDataURL(file);
      preview.onload = () => setFeedPreviewImage(preview.result);
    },
    [setFeedPreviewImage]
  );

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", mt: 15, textAlign: "center" }}
      onSubmit={onFeedSubmitEvent}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" color="text.primary">
          Create your feed
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Description"
          helperText="Please enter your feed description"
          name="description"
          placeholder="Please enter your feed description"
          sx={{ width: 800 }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <input
          type="file"
          name="images"
          multiple="multiple"
          sx={{ width: 800 }}
          onChange={handleFeedPreviewImage}
        />
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CardMedia
          sx={{ width: 500, height: 500, display: "inline-block", mt: 2 }}
          component="img"
          image={
            feedPreviewImage === null
              ? "https://source.unsplash.com/random"
              : feedPreviewImage
          }
          alt="community image"
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button type="submit" variant="outlined" sx={{ mr: 2 }}>
          Post
        </Button>
        <Button variant="contained">Cancel</Button>
      </Box>
    </Box>
  );
};

export default FeedPostForm;
