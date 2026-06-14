import axiosInstance from "./axios";

export const getPengaduanSkm = async () => {
  const response = await axiosInstance.get("/application-services");
  console.log(response.data);
  return response.data;
};
