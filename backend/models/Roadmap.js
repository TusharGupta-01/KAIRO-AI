const mongoose = require("mongoose");

const daySchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
    },

    mission: {
      type: String,
      required: true,
    },

    why: {
      type: String,
      required: true,
    },

    tasks: [
      {
        type: String,
      },
    ],

    deliverable: {
      type: String,
      required: true,
    },

    careerImpact: {
      type: String,
      required: true,
    },

    estimatedTime: {
      type: String,
      required: true,
    },

    resources: [String],

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    roadmapTitle: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    days: [daySchema],

    version: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },

    generatedBy: {
      type: String,
      default: "gemini",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Roadmap", roadmapSchema);