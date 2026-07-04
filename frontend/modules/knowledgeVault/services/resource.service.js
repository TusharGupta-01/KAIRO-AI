import api from "../../../src/services/api";

// ==========================
// Upload Resource
// ==========================

export const uploadResource = async (formData) => {
  const response = await api.post(
    "/knowledge-vault/resources",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
export const createNote = async (noteData) => {
  const response = await api.post(
    "/knowledge-vault/resources/note",
    noteData
  );

  return response.data.resource;
};

export const createLink = async (linkData) => {
  const response = await api.post(
    "/knowledge-vault/resources/link",
    linkData
  );

  return response.data.resource;
};

// ==========================
// Get Resources
// ==========================

export const getResources = async (folderId) => {
  const url = folderId
    ? `/knowledge-vault/resources?folder=${folderId}`
    : "/knowledge-vault/resources";

  const response = await api.get(url);

  return response.data.resources;
};

// ==========================
// Get Deleted Resources
// ==========================

export const getDeletedResources = async () => {
  const response = await api.get(
    "/knowledge-vault/resources/deleted"
  );

  return response.data.resources;
};

// ==========================
// Delete Resource
// ==========================

export const deleteResource = async (id) => {
  const response = await api.delete(
    `/knowledge-vault/resources/${id}`
  );

  return response.data;
};

// ==========================
// Toggle Favorite
// ==========================

export const toggleFavorite = async (id) => {
  const response = await api.patch(
    `/knowledge-vault/resources/${id}/favorite`
  );

  return response.data.resource;
};