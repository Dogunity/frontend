import { Box, Typography, Link } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ mt: 30 }}>
        <Typography variant="h3">OOPS</Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>
          404 NOT FOUND
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">Cannot find this page</Typography>
          <Box sx={{ mt: 5 }}>
            <Link href="/">GO BACK</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
