import { CardActions, Typography, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CommunityCardFooter = ({
  community,
  onCardViewButtonClickEvent,
  onCommunityLikeButtonClickEvent,
}) => {
  return (
    <CardActions>
      <IconButton
        onClick={(e) => onCommunityLikeButtonClickEvent(e, community.id)}
      >
        <FavoriteIcon />
        <Typography variant="h6" color="text.secondary">
          {community.likeCnt}
        </Typography>
      </IconButton>
      <Button
        size="small"
        onClick={(e) => onCardViewButtonClickEvent(e, community)}
      >
        View
      </Button>
    </CardActions>
  );
};

export default CommunityCardFooter;
