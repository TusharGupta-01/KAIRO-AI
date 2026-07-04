const {
  createFolderService,
  getFoldersService,
  updateFolderService,
  deleteFolderService,
} = require("../services/folder.service");

const create = async (req, res) => {
  try {
    const userId = req.user.userId;

const folder = await createFolderService(userId, req.body);
    return res.status(201).json({
      success: true,
      message: "Folder created successfully",
      data: folder,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const userId = req.user.userId;

const folders = await getFoldersService(userId);
    return res.status(200).json({
      success: true,
      data: folders,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const userId = req.user.userId;

    const folder = await updateFolderService(
      userId,
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Folder updated successfully",
      data: folder,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    const userId = req.user.userId;

    await deleteFolderService(userId, req.params.id);

    return res.status(200).json({
      success: true,
      message: "Folder deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};