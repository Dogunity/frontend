import { useNavigate } from "react-router-dom";
import { Box, Grid, Button } from "@mui/material";
import useSessionStorage from "../../hooks/common/useSessionStorage";
import CommunityCardContainer from "../containers/CommunityCardContainer";

const CommunityCardList = ({ communities }) => {
  const { item } = useSessionStorage();

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          mt: 12,
        }}
      >
        {item && (
          <Button
            variant="outlined"
            onClick={() => navigate("/community/post")}
          >
            Create community
          </Button>
        )}
      </Box>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {communities.map((community) => (
          <Grid item key={community.id} sm={6} md={4}>
            <CommunityCardContainer community={community} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunityCardList;
