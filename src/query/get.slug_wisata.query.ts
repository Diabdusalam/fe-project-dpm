import axiosInstance from "./axios";

export const getSlugWisata = async (slug: string) => {
  const response = await axiosInstance.get(`/tourisms/${slug}`);

  return response.data;
};
