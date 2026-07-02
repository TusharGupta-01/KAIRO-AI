import api from "../../../src/services/api";

export const getRoadmap = async () => {
  const response = await api.get("/mentor/roadmap");

  return response.data.data;
};