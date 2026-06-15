import axiosInstance from "./axios";

export const getSliders = async () => {
  const response = await axiosInstance.get("/sliders");

  return response.data;
};
