import api from "../../../src/services/api";

export const folderAPI = {
  getAll: () => api.get("/knowledge-vault/folders"),

  create: (data) =>
    api.post("/knowledge-vault/folders", data),

  update: (id, data) =>
    api.put(`/knowledge-vault/folders/${id}`, data),

  remove: (id) =>
    api.delete(`/knowledge-vault/folders/${id}`),
};  