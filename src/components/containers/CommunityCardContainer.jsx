import { Fragment, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "@mui/material";
import useModal from "../../hooks/common/useModal";
import CommunityCardImage from "../community/CommunityCardImage";
import CommunityCardContent from "../community/CommunityCardContent";
import CommunityCardFooter from "../community/CommunityCardFooter";
import MyCustomModal from "../modal/MyCustomModal";

const CommunityCardContainer = ({
  community,
  onCommunityLikeButtonClickEvent,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const { isModalOpen, handleIsModalOpenStateChange } = useModal();

  const handleCardViewButtonClick = useCallback(
    (_, selectedCommunity) => {
      setSelectedItem(selectedCommunity);
      handleIsModalOpenStateChange();
    },
    [setSelectedItem, handleIsModalOpenStateChange]
  );

  return (
    <Fragment>
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
        <CommunityCardFooter
          community={community}
          onCardViewButtonClickEvent={handleCardViewButtonClick}
          onCommunityLikeButtonClickEvent={onCommunityLikeButtonClickEvent}
        />
      </Card>
      <MyCustomModal
        isModalOpen={isModalOpen}
        title="Community Detail"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CommunityCardImage imageUrl={selectedItem?.communityImage} />
          <CommunityCardContent
            name={selectedItem?.name}
            introduction={selectedItem?.introduction}
          />
          <Button
            variant="outlined"
            sx={{ m: 1 }}
            onClick={() =>
              navigate(`/feed/${selectedItem.id}`, {
                state: selectedItem,
              })
            }
          >
            Feed
          </Button>
        </Card>
      </MyCustomModal>
    </Fragment>
  );
};

export default CommunityCardContainer;
