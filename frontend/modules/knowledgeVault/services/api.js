import axios from "axios";
const api = axios.create({
  baseURL: `http://${API}/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const folderAPI = {
  getAll: () => api.get("/knowledge-vault/folders"),

  create: (data) => api.post("/knowledge-vault/folders", data),

  update: (id, data) =>
    api.put(`/knowledge-vault/folders/${id}`, data),

  remove: (id) =>
    api.delete(`/knowledge-vault/folders/${id}`),
};

export default api;

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const folderAPI = {
  getAll: () => api.get("/knowledge-vault/folders"),

  create: (data) => api.post("/knowledge-vault/folders", data),

  update: (id, data) =>
    api.put(`/knowledge-vault/folders/${id}`, data),

  remove: (id) =>
    api.delete(`/knowledge-vault/folders/${id}`),
};

export default api;