import axiosInstance from "./axios";

export const getSlugBerita = async (slug: string) => {
  const response = await axiosInstance.get(`/news/${slug}`);
  console.log(response.data);
  return response.data;
};
