import {
  Box,
  Typography,
  TextField,
  Input,
  Button,
  CardMedia,
} from "@mui/material";

const CommunityForm = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", mt: 15, textAlign: "center" }}
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
          sx={{ width: 800 }}
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <Input type="file" sx={{ width: 800 }} />
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CardMedia
          sx={{ width: 500, height: 500, display: "inline-block", mt: 2 }}
          component="img"
          image="https://source.unsplash.com/random"
          alt="community image"
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <TextField
          label="Community Introduction"
          helperText="Please enter your community introduction"
          placeholder="Community introduction"
          multiline
          sx={{ width: 800 }}
          rows={6}
        />
      </Box>
      <Box sx={{ width: "auto" }}>
        <Button variant="outlined" sx={{ mr: 1 }}>
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
