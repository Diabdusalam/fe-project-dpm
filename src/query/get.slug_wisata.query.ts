import axiosInstance from "./axios";

export const getSlugWisata = async (slug: string) => {
  console.log("Fetching berita with slug:", slug);
  const response = await axiosInstance.get(`/tourisms/${slug}`);
  console.log(response.data);
  return response.data;
};
