// const {
//   createResourceService,
//   getResourcesService,
//   deleteResourceService,
//   toggleFavoriteService,
//   getDeletedResourcesService,
//   createNoteService,
//   createLinkService,
// } = require("../services/resource.service");

// // ==========================
// // Create Resource
// // ==========================

// const createResource = async (req, res) => {
//   try {
//     console.log("Controller reached");
//     console.log(req.file);

//     const userId = req.user.userId;

//     console.log("Calling createResourceService");

//     const resource = await createResourceService(userId, {
//       ...req.body,
//       file: req.file,
//       fileName: req.file?.filename,
//       originalName: req.file?.originalname,
//       mimeType: req.file?.mimetype,
//       fileSize: req.file?.size,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Resource uploaded successfully",
//       resource,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

//     return res.status(201).json({
//       success: true,
//       message: "Resource uploaded successfully",
//       resource,
//     });
//    catch(error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Get Resources
// // ==========================

// const getResources = async (req, res) => {
//   try {
//     const resources =
//       await getResourcesService(
//         req.user.userId,
//         req.query.folder
//       );

//     return res.status(200).json({
//       success: true,
//       resources,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Delete Resource
// // ==========================

// const deleteResource = async (req, res) => {
//   try {
//     await deleteResourceService(
//       req.user.userId,
//       req.params.id
//     );

//     return res.status(200).json({
//       success: true,
//       message: "Resource deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Toggle Favorite
// // ==========================

// const toggleFavorite = async (req, res) => {
//   try {
//     const resource =
//       await toggleFavoriteService(
//         req.user.userId,
//         req.params.id
//       );

//     return res.status(200).json({
//       success: true,
//       message: resource.isFavorite
//         ? "Added to favorites"
//         : "Removed from favorites",
//       resource,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // ==========================
// // Get Deleted Resources
// // ==========================

// const getDeletedResources = async (
//   req,
//   res
// ) => {
//   try {
//     const resources =
//       await getDeletedResourcesService(
//         req.user.userId
//       );

//     return res.status(200).json({
//       success: true,
//       resources,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const createNote = async (req, res) => {
//   try {
//     const resource = await createNoteService(
//       req.user.userId,
//       req.body
//     );

//     return res.status(201).json({
//       success: true,
//       resource,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const createLink = async (req, res) => {
//   try {
//     const resource = await createLinkService(
//       req.user.userId,
//       req.body
//     );

//     return res.status(201).json({
//       success: true,
//       resource,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createResource,
//   createNote,
//   createLink,
//   getResources,
//   deleteResource,
//   toggleFavorite,
//   getDeletedResources,
// };

const {
  createResourceService,
  getResourcesService,
  deleteResourceService,
  toggleFavoriteService,
  getDeletedResourcesService,
  createNoteService,
  createLinkService,
} = require("../services/resource.service");

// ==========================
// Create Resource
// ==========================

const createResource = async (req, res) => {
  try {
    console.log("========== CREATE RESOURCE ==========");
    console.log("Controller reached");
    console.log("File received:");
    console.log(req.file);

    const userId = req.user.userId;

    console.log("Calling createResourceService...");

    const resource = await createResourceService(userId, {
      ...req.body,
      file: req.file,
      fileName: req.file?.filename,
      originalName: req.file?.originalname,
      mimeType: req.file?.mimetype,
      fileSize: req.file?.size,
    });

    return res.status(201).json({
      success: true,
      message: "Resource uploaded successfully",
      resource,
    });
  } catch (error) {
    console.error("Create Resource Error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Resources
// ==========================

const getResources = async (req, res) => {
  try {
    const resources = await getResourcesService(
      req.user.userId,
      req.query.folder
    );

    return res.status(200).json({
      success: true,
      resources,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Resource
// ==========================

const deleteResource = async (req, res) => {
  try {
    await deleteResourceService(
      req.user.userId,
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Resource deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Toggle Favorite
// ==========================

const toggleFavorite = async (req, res) => {
  try {
    const resource = await toggleFavoriteService(
      req.user.userId,
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: resource.isFavorite
        ? "Added to favorites"
        : "Removed from favorites",
      resource,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Deleted Resources
// ==========================

const getDeletedResources = async (req, res) => {
  try {
    const resources = await getDeletedResourcesService(
      req.user.userId
    );

    return res.status(200).json({
      success: true,
      resources,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Create Note
// ==========================

const createNote = async (req, res) => {
  try {
    const resource = await createNoteService(
      req.user.userId,
      req.body
    );

    return res.status(201).json({
      success: true,
      resource,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Create Link
// ==========================

const createLink = async (req, res) => {
  try {
    const resource = await createLinkService(
      req.user.userId,
      req.body
    );

    return res.status(201).json({
      success: true,
      resource,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createResource,
  createNote,
  createLink,
  getResources,
  deleteResource,
  toggleFavorite,
  getDeletedResources,
};