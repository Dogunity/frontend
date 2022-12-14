import useFeedPost from "../../hooks/feed/useFeedPost";
import CommonContainer from "../../components/containers/CommonContainer";
import FeedPostForm from "../../components/feed/FeedPostForm";

const FeedPostPage = () => {
  const { setDescription, handleMultiImageUploadChange, handleFeedSubmit } =
    useFeedPost();

  return (
    <CommonContainer>
      <FeedPostForm
        setDescription={setDescription}
        onMultiImageUploadChangeEvent={handleMultiImageUploadChange}
        onFeedSubmitEvent={handleFeedSubmit}
      />
    </CommonContainer>
  );
};

export default FeedPostPage;
