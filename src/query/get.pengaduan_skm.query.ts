import axiosInstance from "./axios";

export const getPengaduanSkm = async () => {
  const response = await axiosInstance.get("/application-services");

  return response.data;
};
