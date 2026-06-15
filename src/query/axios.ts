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
// lib / axios.ts;
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://cmspapua.kerjatanpabatasid.my.id/api",
//   headers: {
//     "X-Internal-Key": "123123nadasdakqw21314004324",
//     "X-APP-Key": "123123nadasdakqw21314004325",
//   },
// });

// export default axiosInstance;
