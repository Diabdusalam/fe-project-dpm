import axiosInstance from "./axios";

export const getBerandaBerita = async (params?: {
  q?: string;
  page?: number;
}) => {
  const response = await axiosInstance.get("/news", { params });

  return response.data;
};
