import { Box, Avatar, Stack, Typography, Button } from "@mui/material";

const FeedHeader = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}>
      <Avatar
        alt="Community profile image"
        src={`${process.env.PUBLIC_URL}/logo192.png`}
        sx={{ width: 140, height: 140 }}
      />
      <Stack
        sx={{ pt: 2, pb: 2, pl: 4, pr: 4 }}
        direction="column"
        spacing={2}
        justifyContent="center"
      >
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          Community name
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Community description
        </Typography>
      </Stack>
      <Stack direction="column" spacing={2} justifyContent="center">
        <Button variant="contained">Post</Button>
        <Button variant="outlined">Join chat room</Button>
      </Stack>
    </Box>
  );
};

export default FeedHeader;
