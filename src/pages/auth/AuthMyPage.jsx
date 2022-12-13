import useMyPage from "../../hooks/auth/useMyPage";
import CommonContainer from "../../components/containers/CommonContainer";
import AuthMyPageTabs from "../../components/auth/common/AuthMyPageTabs";

const AuthMyPage = () => {
  const { tabIndex, tabItems, handleTabIndexChange } = useMyPage();

  return (
    <CommonContainer>
      <AuthMyPageTabs
        tabIndex={tabIndex}
        tabItems={tabItems}
        onTabIndexChangeEvent={handleTabIndexChange}
      />
    </CommonContainer>
  );
};

export default AuthMyPage;
