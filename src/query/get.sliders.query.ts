import axiosInstance from "./axios";

export const getSliders = async () => {
  const response = await axiosInstance.get("/sliders");
  console.log(response.data);
  return response.data;
};
// export const getSliders = async () => {
//   try {
//     console.log("Fetching from:", axiosInstance.defaults.baseURL + "/sliders");
//     console.log("Headers:", axiosInstance.defaults.headers);
//     const response = await axiosInstance.get("/sliders");
//     console.log("Status:", response.status);
//     console.log("Data:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error status:", error.response?.status);
//     console.error("Error message:", error.response?.data);
//     console.error("Full error:", error);
//     throw error;
//   }
// };
