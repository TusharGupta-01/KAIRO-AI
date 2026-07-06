
const {
  uploadToCloudinary,
} = require("../utils/cloudinaryUpload");

const Resource = require("../../../models/Resource");

// ==========================
// Create Resource
// ==========================

const createResourceService = async (userId, data) => {
 const uploaded = await uploadToCloudinary(
  data.file
);
console.log("Secure URL:", uploaded.secure_url);
console.log(uploaded);

  return await Resource.create({
    name: data.originalName,
    owner: userId,
    folder: data.folder || null,
    type: data.type,

    filePath: uploaded.secure_url,

    cloudinaryId: uploaded.public_id,
    mimeType: data.mimeType,

    fileSize: data.fileSize || 0,
  });
};

const createNoteService = async (userId, data) => {
  return await Resource.create({
    name: data.title,
    owner: userId,
    folder: data.folder,
    type: "note",
    filePath: null,
    content: data.content,
    fileSize: 0,
  });
};

const createLinkService = async (userId, data) => {
  return await Resource.create({
    name: data.title,
    owner: userId,
    folder: data.folder,
    type: "link",
    filePath: data.url,
    fileSize: 0,
  });
};

// ==========================
// Get Resources
// ==========================

const getResourcesService = async (userId, folderId) => {
  const query = {
    owner: userId,
    isDeleted: false,
  };

  // Only filter by folder if a folder id is supplied
  if (folderId) {
    query.folder = folderId;
  }

  return await Resource.find(query)
    .populate("folder", "name")
    .sort({ createdAt: -1 });
};

// ==========================
// Delete Resource (Soft Delete)
// ==========================

const deleteResourceService = async (
  userId,
  resourceId
) => {
  const resource = await Resource.findOneAndUpdate(
    {
      _id: resourceId,
      owner: userId,
    },
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  if (!resource) {
    throw new Error("Resource not found");
  }

  return resource;
};

// ==========================
// Toggle Favorite
// ==========================

const toggleFavoriteService = async (
  userId,
  resourceId
) => {
  const resource = await Resource.findOne({
    _id: resourceId,
    owner: userId,
  });

  if (!resource) {
    throw new Error("Resource not found");
  }

  resource.isFavorite = !resource.isFavorite;

  await resource.save();

  return resource;
};

// ==========================
// Get Favorite Resources
// ==========================

const getFavoriteResourcesService = async (
  userId
) => {
  return await Resource.find({
    owner: userId,
    isFavorite: true,
    isDeleted: false,
  })
    .populate("folder", "name")
    .sort({ createdAt: -1 });
};

// ==========================
// Get Deleted Resources (Trash)
// ==========================

const getDeletedResourcesService = async (
  userId
) => {
  return await Resource.find({
    owner: userId,
    isDeleted: true,
  })
    .populate("folder", "name")
    .sort({ updatedAt: -1 });
};

module.exports = {
  createResourceService,
  createNoteService,
  createLinkService,
  getResourcesService,
  deleteResourceService,
  toggleFavoriteService,
  getFavoriteResourcesService,
  getDeletedResourcesService,
};