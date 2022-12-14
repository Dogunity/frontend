import useFeed from "../../hooks/feed/useFeed";
import CommonContainer from "../../components/containers/CommonContainer";
import FeedContainer from "../../components/containers/FeedContainer";
import FeedDetail from "../../components/feed/FeedDetail";
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
        title="Feed Detail"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <FeedDetail feed={selectedFeedItem} />
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
