import { Box, Typography, Link } from "@mui/material";

function MyErrorComponent({ error }) {
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
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">Something wrong {error}</Typography>
          <Box sx={{ mt: 5 }}>
            <Link href="/">GO BACK</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyErrorComponent;
