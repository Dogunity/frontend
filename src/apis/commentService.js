import axiosInstance from "./index";

export const commentListRequest = async (feedId, token) => {
  const res = await axiosInstance.get(`/post/${feedId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return data;
};

export const commentPostRequest = async (feedId, description, token) => {
  const res = await axiosInstance.post(
    `/post/${feedId}`,
    {
      description: description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const { data } = res;
  return data;
};
