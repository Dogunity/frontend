import useFeed from "../../hooks/feed/useFeed";
import CommonContainer from "../../components/containers/CommonContainer";
import FeedContainer from "../../components/containers/FeedContainer";

const FeedPage = () => {
  const { name, introduction, communityImage, handleFeedImageButtonClick } =
    useFeed();

  return (
    <CommonContainer>
      <FeedContainer
        name={name}
        introduction={introduction}
        communityImage={communityImage}
        onFeedImageButtonClickEvent={handleFeedImageButtonClick}
      />
    </CommonContainer>
  );
};

export default FeedPage;
