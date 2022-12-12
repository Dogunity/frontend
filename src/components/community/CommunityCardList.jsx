import { Grid } from "@mui/material";
import CommunityCardContainer from "../containers/CommunityCardContainer";

const CommunityCardList = ({ communities }) => {
  return (
    <Grid container spacing={4} sx={{ mt: 10 }}>
      {communities.map((community) => (
        <Grid item key={community.id} sm={6} md={4}>
          <CommunityCardContainer community={community} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CommunityCardList;
