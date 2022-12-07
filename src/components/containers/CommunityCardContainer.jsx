import { Card } from "@mui/material";
import CommunityCardImage from "../community/CommunityCardImage";
import CommunityCardContent from "../community/CommunityCardContent";
import CommunityCardFooter from "../community/CommunityCardFooter";

const CommunityCardContainer = () => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CommunityCardImage />
      <CommunityCardContent />
      <CommunityCardFooter />
    </Card>
  );
};

export default CommunityCardContainer;
