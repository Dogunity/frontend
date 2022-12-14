import { useNavigate } from "react-router-dom";
import { Box, Avatar, Stack, Typography, Button } from "@mui/material";

const FeedHeader = ({ id, name, introduction, communityImage }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
      <Avatar
        alt="Community profile image"
        src={communityImage}
        sx={{ width: 140, height: 140 }}
      />
      <Stack
        sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}
        direction="column"
        spacing={2}
        justifyContent="center"
      >
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          {name}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          {introduction}
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          onClick={() =>
            navigate("/feed/post", {
              state: id,
            })
          }
        >
          Post
        </Button>
        <Button variant="outlined" onClick={() => navigate("/community")}>
          Go back
        </Button>
      </Stack>
    </Box>
  );
};

export default FeedHeader;
