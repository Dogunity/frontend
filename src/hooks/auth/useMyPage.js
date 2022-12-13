import { useState, useCallback, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useModal from "../common/useModal";
import useSessionStorage from "../common/useSessionStorage";
import AuthCommunityGrid from "../../components/auth/community/AuthCommunityGrid";
import { tabItems, columns } from "../../utils/staticData";
import {
  authMyPageCommuityRequest,
  authMyPageCommunityUpdateRequest,
} from "../../apis/authService";

const communityShema = yup.object().shape({
  title: yup.string().min(2, "Please check your community title"),
  introduction: yup.string().min(2, "Please check your community content"),
});

const useMyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [communities, setCommunities] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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

  useEffect(() => {
    (async () => {
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
      setCommunities(data);
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
      setSelectedItem(item);
      handleIsModalOpenStateChange();
    },
    [setSelectedItem, handleIsModalOpenStateChange]
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

  const getComponentByTabIndex = () => {
    switch (tabIndex) {
      case 0:
        return (
          <AuthCommunityGrid
            columns={columns}
            rows={communities}
            onGridRowClickEvent={handleGridRowClick}
          />
        );

      case 1:
        return <div>Tab 2</div>;

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
