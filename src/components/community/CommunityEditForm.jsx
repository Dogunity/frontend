import { Box, TextField, Input, CardMedia, Button } from "@mui/material";

const CommunityEditForm = ({
  selectedItem,
  register,
  errors,
  imagePreview,
  onImageUploadClickEvent,
  onCommunityUpdateSubmitEvent,
}) => {
  const { name, introduction, communityImage } = selectedItem.row;

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", mt: 5, textAlign: "center" }}
      onSubmit={onCommunityUpdateSubmitEvent}
    >
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Community Title"
          helperText="Please enter your community title"
          placeholder={name}
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
          sx={{ width: 250, height: 250, display: "inline-block", mt: 2 }}
          component="img"
          image={imagePreview ? imagePreview : communityImage}
          alt="community image"
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Community Introduction"
          helperText="Please enter your community introduction"
          placeholder={introduction}
          multiline
          name="introduction"
          error={errors?.introduction?.message ? true : false}
          sx={{ width: 800 }}
          rows={4}
          {...register("introduction")}
        />
      </Box>
      <Box sx={{ width: "auto" }}>
        <Button type="submit" variant="contained">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default CommunityEditForm;
