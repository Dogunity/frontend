import { Box, Typography, Link } from "@mui/material";

const MyFooter = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        DOGUNITY
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Community for My Doggy!
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/Team08-DogNA">
          Github
        </Link>{" "}
        {"22.11.14"}
        {"."}
      </Typography>
    </Box>
  );
};

export default MyFooter;
