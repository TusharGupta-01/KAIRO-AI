const Folder = require("../../../models/Folder");

const createFolderService = async (userId, data) => {
  return await Folder.create({
    owner: userId,
    name: data.name,
    color: data.color || "#7C3AED",
    parentFolder: data.parentFolder || null,
  });
};

const getFoldersService = async (userId) => {
  return await Folder.find({
    owner: userId,
    isDeleted: false,
  }).sort({ createdAt: -1 });
};

const updateFolderService = async (userId, folderId, data) => {
  return await Folder.findOneAndUpdate(
    {
      _id: folderId,
      owner: userId,
    },
    data,
    {
      new: true,
    }
  );
};

const deleteFolderService = async (userId, folderId) => {
  return await Folder.findOneAndUpdate(
    {
      _id: folderId,
      owner: userId,
    },
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );
};

module.exports = {
  createFolderService,
  getFoldersService,
  updateFolderService,
  deleteFolderService,
};