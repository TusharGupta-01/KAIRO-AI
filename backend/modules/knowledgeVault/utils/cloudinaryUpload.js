const cloudinary = require("../../../config/cloudinary");

const uploadToCloudinary = (file, folder = "knowledge-vault") => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,

          resource_type:
            file.mimetype === "application/pdf"
              ? "raw"
              : "auto",

          filename_override: file.originalname,
          use_filename: true,
          unique_filename: true,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      )
      .end(file.buffer);
  });
};

module.exports = {
  uploadToCloudinary,
};