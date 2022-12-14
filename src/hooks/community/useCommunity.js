import { useState, useEffect, useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useSessionStorage from "../common/useSessionStorage";
import {
  communityListRequest,
  communityCreateRequest,
  communityLikeRequest,
  communityUnLikeRequest,
} from "../../apis/communityService";

const communityShema = yup.object().shape({
  title: yup.string().min(2, "Please check your community title"),
  introduction: yup.string().min(2, "Please check your community content"),
});

const useCommunity = () => {
  const [communities, setCommunities] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const divider = 9;

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

  useEffect(() => {
    (async () => {
      const res = await communityListRequest(curPage);
      setCommunities(res.result.selectedCommunities);
      setTotalPage(res.result.totalCommunityPage);
    })();
  }, [curPage]);

  const handleImageUploadClick = useCallback(
    (e) => {
      const file = e.target.files[0];
      setImage(file);
      const preview = new FileReader();
      preview.readAsDataURL(file);
      preview.onload = () => setImagePreview(preview.result);
    },
    [setImage, setImagePreview]
  );

  const handleCommunityCreateSubmit = async (formData) => {
    const { title, introduction } = formData;
    const res = await communityCreateRequest(title, image, introduction, item);
    if (res.status >= 200 && res.status < 300)
      window.location.replace("/community");
  };

  const handleCommunityLikeButtonClick = async (_, communityId) => {
    const data = await communityLikeRequest(communityId, item);
    if (data.status >= 400) await communityUnLikeRequest(communityId, item);
    const res = await communityListRequest(curPage);
    setCommunities(res.result.selectedCommunities);
  };

  return {
    communities,
    totalPage,
    divider,
    curPage,
    register,
    errors,
    setCurPage,
    imagePreview,
    handleSubmit,
    handleCommunityCreateSubmit,
    handleImageUploadClick,
    handleCommunityLikeButtonClick,
  };
};

export default useCommunity;
