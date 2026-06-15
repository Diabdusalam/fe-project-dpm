import axiosInstance from "./axios";
export type KirimPesanPayload = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
};
export const postKirimPesan = async (payload: KirimPesanPayload) => {
  const response = await axiosInstance.post("/contact", payload);

  return response.data;
};
