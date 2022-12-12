import { Card } from "@mui/material";
import CommunityCardImage from "../community/CommunityCardImage";
import CommunityCardContent from "../community/CommunityCardContent";
import CommunityCardFooter from "../community/CommunityCardFooter";

const CommunityCardContainer = ({ community }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CommunityCardImage imageUrl={community.communityImage} />
      <CommunityCardContent
        name={community.name}
        introduction={community.introduction}
      />
      <CommunityCardFooter />
    </Card>
  );
};

export default CommunityCardContainer;
