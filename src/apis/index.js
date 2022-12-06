import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);

export default axiosInstance;
