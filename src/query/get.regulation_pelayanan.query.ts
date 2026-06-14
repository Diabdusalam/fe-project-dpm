import axiosInstance from "./axios";

export const getRegulationPelayanan = async () => {
  const response = await axiosInstance.get("/regulations");
  return response.data;
};
