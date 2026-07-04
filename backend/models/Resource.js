const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },

    type: {
  type: String,
  enum: [
    "pdf",
    "docx",
    "txt",
    "image",
    "note",
    "link",
  ],
  required: true,
},
    filePath: {
  type: String,
  default: null,
},content: {
        type: String,
        default: "",
      },
    fileSize: {
      type: Number,
      default: 0,
    },

    

    extractedText: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resource", resourceSchema);