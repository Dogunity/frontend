import { Typography, Box, Container, Stack, Button, Grid } from "@mui/material";
import CommonContainer from "../../components/containers/CommonContainer";
import CommunityCardContainer from "../../components/containers/CommunityCardContainer";

// temp map
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MainPage = () => {
  return (
    <CommonContainer>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            DOGUNITY
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Explore our community</Button>
            <Button variant="outlined">Join our community</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <CommunityCardContainer />
            </Grid>
          ))}
        </Grid>
      </Container>
    </CommonContainer>
  );
};

export default MainPage;
