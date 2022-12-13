import useMyPage from "../../hooks/auth/useMyPage";
import CommonContainer from "../../components/containers/CommonContainer";
import AuthMyPageTabs from "../../components/auth/common/AuthMyPageTabs";
import AuthCommunityGrid from "../../components/auth/community/AuthCommunityGrid";

const AuthMyPage = () => {
  const { tabIndex, tabItems, handleTabIndexChange, getComponentByTabIndex } =
    useMyPage();

  return (
    <CommonContainer>
      <AuthMyPageTabs
        tabIndex={tabIndex}
        tabItems={tabItems}
        onTabIndexChangeEvent={handleTabIndexChange}
      />
      {getComponentByTabIndex()}
    </CommonContainer>
  );
};

export default AuthMyPage;
