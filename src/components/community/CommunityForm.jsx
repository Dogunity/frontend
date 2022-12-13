import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Input,
  Button,
  CardMedia,
} from "@mui/material";

const CommunityForm = ({
  register,
  errors,
  imagePreview,
  onImageUploadClickEvent,
  onCommunityCreateSubmitEvent,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", mt: 15, textAlign: "center" }}
      onSubmit={onCommunityCreateSubmitEvent}
    >
      <Box sx={{ mt: 2, mb: 5 }}>
        <Typography variant="h3" color="text.secondary">
          Create your own community
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Community Title"
          helperText="Please enter your community title"
          placeholder="Community title"
          name="title"
          error={errors?.title?.message ? true : false}
          sx={{ width: 800 }}
          {...register("title")}
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <Input
          name="communityImage"
          type="file"
          sx={{ width: 800 }}
          onChange={onImageUploadClickEvent}
        />
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CardMedia
          sx={{ width: 500, height: 500, display: "inline-block", mt: 2 }}
          component="img"
          image={
            imagePreview === null
              ? "https://source.unsplash.com/random"
              : imagePreview
          }
          alt="community image"
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Community Introduction"
          helperText="Please enter your community introduction"
          placeholder="Community introduction"
          multiline
          name="introduction"
          error={errors?.introduction?.message ? true : false}
          sx={{ width: 800 }}
          rows={6}
          {...register("introduction")}
        />
      </Box>
      <Box sx={{ width: "auto" }}>
        <Button
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() => navigate("/community")}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default CommunityForm;
