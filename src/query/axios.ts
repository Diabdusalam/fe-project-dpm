// // lib/axios.ts
// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_HOST_API,
  headers: {
    "X-Internal-Key": import.meta.env.VITE_INTERNAL_KEY,
    "X-APP-Key": import.meta.env.VITE_APP_KEY,
  },
});

export default axiosInstance;
