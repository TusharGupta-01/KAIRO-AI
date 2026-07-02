import api from "../../../src/services/api";

export const getProfile = async () => {
  const response = await api.get("/mentor/profile");
  return response.data.data;
};