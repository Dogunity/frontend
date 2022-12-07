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
