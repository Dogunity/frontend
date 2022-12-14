import { useState, useCallback, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useModal from "../common/useModal";
import useCustomForm from "../common/useCustomForm";
import useSessionStorage from "../common/useSessionStorage";
import AuthCommunityGrid from "../../components/auth/community/AuthCommunityGrid";
import AuthMyInfoForm from "../../components/auth/information/AuthMyInfoForm";
import { tabItems, columns } from "../../utils/staticData";
import {
  authMyPageCommuityRequest,
  authMyPageCommunityUpdateRequest,
  authMyPageLikedCommunityRequest,
  authMyPageInformationRequest,
  authMyPageInformationUpdateRequest,
} from "../../apis/authService";

const communityShema = yup.object().shape({
  title: yup.string().min(2, "Please check your community title"),
  introduction: yup.string().min(2, "Please check your community content"),
});

const useMyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [rows, setRows] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(communityShema),
    mode: "onChange",
    defaultValues: {
      title: "",
      introduction: "",
    },
  });

  const { item } = useSessionStorage();
  const { isModalOpen, handleIsModalOpenStateChange } = useModal();
  const { formValue, handleFormValueChange, setFormDefaultValue } =
    useCustomForm();

  useEffect(() => {
    (async () => {
      if (tabIndex === 0) {
        const myCommunities = await authMyPageCommuityRequest(item);
        if (!myCommunities.length) return;
        const data = myCommunities.map((com) => {
          return {
            id: com.id,
            name: com.name,
            introduction: com.introduction,
            createdAt: com.createdAt.split("T")[0],
            likeCnt: com.likeCnt,
            communityImage: com.communityImage,
          };
        });
        setRows(data);
      } else if (tabIndex === 1) {
        const likedCommunities = await authMyPageLikedCommunityRequest(item);
        if (!likedCommunities.length) return;
        const data = likedCommunities.map((com) => {
          return {
            id: com.id,
            name: com.name,
            introduction: com.introduction,
            createdAt: com.createdAt.split("T")[0],
            likeCnt: com.likeCnt,
            communityImage: com.communityImage,
          };
        });
        setRows(data);
      } else {
        const foundUser = await authMyPageInformationRequest(item);
        const { email, profileImg, nickname } = foundUser;
        setFormDefaultValue({
          email: email,
          profileImg: profileImg,
          nickname: nickname,
        });
      }
    })();
  }, [isModalOpen, tabIndex, item]);

  const handleTabIndexChange = useCallback(
    (_, newValue) => {
      setTabIndex(newValue);
    },
    [setTabIndex]
  );

  const handleGridRowClick = useCallback(
    (item) => {
      if (tabIndex !== 0) return;
      setSelectedItem(item);
      handleIsModalOpenStateChange();
    },
    [tabIndex, setSelectedItem, handleIsModalOpenStateChange]
  );

  const handleImageUploadClick = useCallback(
    async (e) => {
      const file = e.target.files[0];
      setImage(file);
      const preview = new FileReader();
      preview.readAsDataURL(file);
      preview.onload = () => setImagePreview(preview.result);
    },
    [setImage, setImagePreview]
  );

  const handleCommunityUpdateSubmit = async (formData) => {
    const { id } = selectedItem.row;
    const { title, introduction } = formData;
    const res = await authMyPageCommunityUpdateRequest(
      id,
      title,
      image,
      introduction,
      item
    );
    if (res.status >= 200 && res.status < 300) {
      handleIsModalOpenStateChange();
    }
  };

  const handleProfileImageUploadChange = useCallback(
    (uploadFile) => {
      setProfileImage(uploadFile);
    },
    [setProfileImage]
  );

  const handleProfileFormValueSubmit = async (e) => {
    e.preventDefault();
    const res = await authMyPageInformationUpdateRequest(
      formValue.nickname,
      profileImage,
      item
    );
    const { data } = res;
    if (data.success) window.location.replace("/");
  };

  const getComponentByTabIndex = () => {
    switch (tabIndex) {
      case 0:
        return (
          <AuthCommunityGrid
            columns={columns}
            rows={rows}
            onGridRowClickEvent={handleGridRowClick}
          />
        );

      case 1:
        return (
          <AuthCommunityGrid
            columns={columns}
            rows={rows}
            onGridRowClickEvent={handleGridRowClick}
          />
        );

      case 2:
        return (
          <AuthMyInfoForm
            formValue={formValue}
            onFormValueChangeEvent={handleFormValueChange}
            onProfileImageUploadChangeEvent={handleProfileImageUploadChange}
            onProfileFormValueSubmitEvent={handleProfileFormValueSubmit}
          />
        );

      default:
        break;
    }
  };

  return {
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
  };
};

export default useMyPage;
