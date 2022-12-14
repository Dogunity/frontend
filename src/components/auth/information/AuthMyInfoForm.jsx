import { useState, useCallback } from "react";
import {
  Box,
  Typography,
  TextField,
  Input,
  CardMedia,
  Button,
} from "@mui/material";

const AuthMyInfoForm = ({
  formValue,
  onFormValueChangeEvent,
  onProfileImageUploadChangeEvent,
  onProfileFormValueSubmitEvent,
}) => {
  const [profilePreviewImage, setProfilePreviewImage] = useState(null);

  const { profileImg, email, nickname } = formValue;

  const handleProfileImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      const preview = new FileReader();
      preview.readAsDataURL(file);
      preview.onload = () => setProfilePreviewImage(preview.result);
      onProfileImageUploadChangeEvent(file);
    },
    [setProfilePreviewImage, onProfileImageUploadChangeEvent]
  );

  return (
    <Box
      component="form"
      sx={{ width: "100%", margin: "0 auto", mt: 5, textAlign: "center" }}
      onSubmit={onProfileFormValueSubmitEvent}
    >
      <Typography variant="h4" color="text.primary" sx={{ mb: 2 }}>
        Your information
      </Typography>
      <CardMedia
        component="img"
        image={!profilePreviewImage ? profileImg : profilePreviewImage}
        alt="random"
        sx={{ width: 300, display: "inline-block" }}
      />
      <Box sx={{ mt: 1 }}>
        <Input
          type="file"
          name="profileImg"
          onChange={handleProfileImageChange}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          helperText="Your email"
          name="email"
          sx={{ width: 500 }}
          value={email}
          disabled={true}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          helperText="Your nickname"
          name="nickname"
          sx={{ width: 500 }}
          value={nickname}
          onChange={onFormValueChangeEvent}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button type="submit" variant="outlined" sx={{ mr: 2 }}>
          Update
        </Button>
        <Button
          variant="contained"
          onClick={() => window.location.replace("/")}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AuthMyInfoForm;
