import axiosInstance from "./axios";

export const getWisataKeindahan = async (params?: {
  q?: string;
  page?: number;
}) => {
  const response = await axiosInstance.get("/tourisms", { params });

  return response.data;
};
