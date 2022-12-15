import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Container, Stack, Button, Grid } from "@mui/material";
import CommonContainer from "../../components/containers/CommonContainer";
import CommunityCardContainer from "../../components/containers/CommunityCardContainer";
import { communityListRequest } from "../../apis/communityService";
import { aboutOurServiceString } from "../../utils/staticData";

const MainPage = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await communityListRequest(1);
      setItems(res.result.selectedCommunities.slice(0, 3));
    })();
  }, []);

  return (
    <CommonContainer>
      <Box sx={{ bgcolor: "background.paper", pt: 12, pb: 6 }}>
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
            {aboutOurServiceString}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => navigate("/community")}>
              Explore our community
            </Button>
            <Button variant="outlined" onClick={() => navigate("/register")}>
              Join our service
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <CommunityCardContainer community={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </CommonContainer>
  );
};

export default MainPage;
