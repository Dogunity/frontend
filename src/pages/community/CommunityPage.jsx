import useCommunity from "../../hooks/community/useCommunity";
import CommonContainer from "../../components/containers/CommonContainer";
import CommunityCardList from "../../components/community/CommunityCardList";
import PaginatorButton from "../../components/paginator/PaginatorButton";

const CommunityPage = () => {
  const { communities, totalPage, divider, curPage, setCurPage } =
    useCommunity();

  return (
    <CommonContainer>
      <CommunityCardList communities={communities} />
      <PaginatorButton
        curPage={curPage}
        setCurPage={setCurPage}
        totalPage={totalPage}
        divider={divider}
      />
    </CommonContainer>
  );
};

export default CommunityPage;
