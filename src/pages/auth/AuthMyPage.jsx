import useMyPage from "../../hooks/auth/useMyPage";
import CommonContainer from "../../components/containers/CommonContainer";
import AuthMyPageTabs from "../../components/auth/common/AuthMyPageTabs";
import CustomModal from "../../components/modal/MyCustomModal";
import CommunityEditForm from "../../components/community/CommunityEditForm";

const AuthMyPage = () => {
  const {
    tabIndex,
    tabItems,
    selectedItem,
    isModalOpen,
    errors,
    imagePreview,
    register,
    handleSubmit,
    handleCommunityUpdateSubmit,
    handleTabIndexChange,
    handleIsModalOpenStateChange,
    handleImageUploadClick,
    getComponentByTabIndex,
  } = useMyPage();

  return (
    <CommonContainer>
      <AuthMyPageTabs
        tabIndex={tabIndex}
        tabItems={tabItems}
        onTabIndexChangeEvent={handleTabIndexChange}
      />
      {getComponentByTabIndex()}
      <CustomModal
        isModalOpen={isModalOpen}
        title="Your Community Detail"
        onIsModalOpenStateChangeEvent={handleIsModalOpenStateChange}
      >
        <CommunityEditForm
          selectedItem={selectedItem}
          register={register}
          errors={errors}
          imagePreview={imagePreview}
          onCommunityUpdateSubmitEvent={handleSubmit(
            handleCommunityUpdateSubmit
          )}
          onImageUploadClickEvent={handleImageUploadClick}
        />
      </CustomModal>
    </CommonContainer>
  );
};

export default AuthMyPage;
