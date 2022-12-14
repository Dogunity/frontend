import axiosInstance from "./index";

export const feedItemListRequest = async (id, page, token) => {
  const res = await axiosInstance.get(`/community/${id}/?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return data;
};

export const feedItemDetailRequest = async (communityId, postId, token) => {
  const res = await axiosInstance.get(`/community/${communityId}/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return data;
};

export const feedPostRequest = async (
  communityId,
  description,
  images,
  token
) => {
  const formData = new FormData();
  formData.append("description", description);
  Object.keys(images).forEach((key) => formData.append("images", images[key]));
  const res = await axiosInstance.post(`/community/${communityId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return data;
};
