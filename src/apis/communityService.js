import axiosInstance from "./index";

export const communityListRequest = async (page) => {
  const res = await axiosInstance.get(
    `/community?page=${page}&order=createdAt`
  );
  return res.data;
};

export const communityCreateRequest = async (
  name,
  communityImage,
  introduction
) => {
  const res = await axiosInstance.post("/community", {
    name: name,
    communityImage: communityImage,
    introduction: introduction,
  });
  return res;
};
