import { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useSessionStorage from "../common/useSessionStorage";
import { feedPostRequest } from "../../apis/feedService";

const useFeedPost = () => {
  const [description, setDescription] = useState();
  const [images, setImages] = useState([]);

  const location = useLocation();
  const { state } = location;

  const { item } = useSessionStorage();

  const handleMultiImageUploadChange = useCallback(
    (files) => {
      setImages(files);
    },
    [setImages]
  );

  const handleFeedSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const res = await feedPostRequest(state, description, images, item);
      if (res.success) window.location.replace("/community");
    },
    [state, description, images, item]
  );

  return {
    setDescription,
    handleMultiImageUploadChange,
    handleFeedSubmit,
  };
};

export default useFeedPost;
