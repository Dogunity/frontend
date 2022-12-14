import axiosInstance from "./index";

export const authLoginRequest = async (email, password) => {
  const res = await axiosInstance.post("/auth/login", {
    email: email,
    password: password,
  });
  return res;
};

export const authRegisterRequest = async (email, password, nickname) => {
  const res = await axiosInstance.post("/auth/register", {
    email: email,
    password: password,
    nickname: nickname,
  });
  return res;
};

export const authMyPageCommuityRequest = async (token) => {
  const res = await axiosInstance.get(`/user/community/own`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { result } = res.data;
  return result;
};

export const authMyPageCommunityUpdateRequest = async (
  id,
  name,
  communityImage,
  introduction,
  token
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("communityImage", communityImage);
  formData.append("introduction", introduction);
  const res = await axiosInstance.put(`/community/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const authMyPageCommunityDeleteRequest = async (id, token) => {
  const res = await axiosInstance.delete(`/community/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const authMyPageLikedCommunityRequest = async (token) => {
  const res = await axiosInstance.get(`/user/community/likes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { result } = res.data;
  return result;
};

export const authMyPageInformationRequest = async (token) => {
  const res = await axiosInstance.get(`/user/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { result } = res.data;
  return result;
};

export const authMyPageInformationUpdateRequest = async (
  nickname,
  profileImg,
  token
) => {
  const formData = new FormData();
  formData.append("nickname", nickname);
  formData.append("profileImg", profileImg);
  const res = await axiosInstance.put("/user/edit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
