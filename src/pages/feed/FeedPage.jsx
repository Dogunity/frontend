import useFeed from "../../hooks/feed/useFeed";
import CommonContainer from "../../components/containers/CommonContainer";
import FeedContainer from "../../components/containers/FeedContainer";
import PaginatorButton from "../../components/paginator/PaginatorButton";
import MyCustommodal from "../../components/modal/MyCustomModal";

const FeedPage = () => {
  const {
    id,
    name,
    introduction,
    communityImage,
    curPage,
    totalPage,
    feeds,
    selectedFeedItem,
    isModalOpen,
    setCurPage,
    handleFeedImageButtonClick,
    handleIsModalOpenStateChange,
  } = useFeed();

  console.log(selectedFeedItem);

  return (
    <CommonContainer>
      <FeedContainer
        id={id}
        name={name}
        introduction={introduction}
        communityImage={communityImage}
        feeds={feeds}
        onFeedImageButtonClickEvent={handleFeedImageButtonClick}
      />
      <MyCustommodal
        isModalOpen={isModalOpen}
        title="Create your feed"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <div>아직 없음</div>
      </MyCustommodal>
      <PaginatorButton
        curPage={curPage}
        setCurPage={setCurPage}
        totalPage={totalPage}
        divider={9}
      />
    </CommonContainer>
  );
};

export default FeedPage;
