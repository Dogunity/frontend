import useCommunity from "../../hooks/community/useCommunity";
import CommonContainer from "../../components/containers/CommonContainer";
import CommunityForm from "../../components/community/CommunityForm";

const CommunityPostPage = () => {
  const {
    register,
    errors,
    imagePreview,
    handleSubmit,
    handleCommunityCreateSubmit,
    handleImageUploadClick,
  } = useCommunity();

  return (
    <CommonContainer>
      <CommunityForm
        register={register}
        errors={errors}
        imagePreview={imagePreview}
        onImageUploadClickEvent={handleImageUploadClick}
        onCommunityCreateSubmitEvent={handleSubmit(handleCommunityCreateSubmit)}
      />
    </CommonContainer>
  );
};

export default CommunityPostPage;
