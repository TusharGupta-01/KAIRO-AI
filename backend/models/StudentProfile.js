const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    source: {
      type: String,
      enum: ["manual", "resume", "knowledgeVault", "ai"],
      default: "manual",
    },

    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
);
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Planning", "In Progress", "Completed"],
      default: "Planning",
    },

    techStack: [String],

    links: {
      github: String,
      demo: String,
    },
  },
  { _id: false },
);

const studentProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    identity: {
      college: String,

      branch: String,

      semester: {
        type: Number,
        min: 1,
        max: 8,
      },
    },

    career: {
      primaryGoal: {
        type: String,
        required: true,
      },

      desiredOutcome: {
        type: String,

        enum: [
          "Internship",
          "Placement",
          "Higher Studies",
          "Startup",
          "Research",
        ],
      },

      timeline: {
        type: String,

        enum: ["3 Months", "6 Months", "1 Year", "2 Years"],
      },

      targetCompanies: [String],
    },

    skills: [skillSchema],

    projects: [projectSchema],

    preferences: {
      availableHoursPerDay: {
        type: Number,

        default: 2,

        min: 1,

        max: 12,
      },
    },

    metadata: {
      onboardingCompleted: {
        type: Boolean,
        default: false,
      },

      profileVersion: {
        type: Number,
        default: 1,
      },
    },

    ai: {
      lastRoadmapGenerated: {
        type: Date,
        default: null,
      },

      lastProfileAnalysis: {
        type: Date,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("StudentProfile", studentProfileSchema);
