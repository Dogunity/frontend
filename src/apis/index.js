import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
