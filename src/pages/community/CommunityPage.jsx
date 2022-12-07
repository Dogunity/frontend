import CommonContainer from "../../components/containers/CommonContainer";
import CommunityCardContainer from "../../components/containers/CommunityCardContainer";

const CommunityPage = () => {
  return (
    <CommonContainer>
      {/* api 연동 후 List로 교체 해야함 */}
      <CommunityCardContainer />
    </CommonContainer>
  );
};

export default CommunityPage;
