import axiosInstance from "./axios";

export const getBerandaBerita = async (params?: {
  q?: string;
  page?: number;
}) => {
  const response = await axiosInstance.get("/news", { params });
  console.log(response.data);
  return response.data;
};
