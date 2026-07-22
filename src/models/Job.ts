import { Schema, models, model } from "mongoose";

const JobSchema = new Schema(
  {
    title: { type: String, required: true },

    type: {
      type: String,
      enum: ["Job", "Internship"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
      required: true,
    },

    // Department stored directly as string
    department: {
      type: String,
      required: true,
      enum: ["Design", "Marketing", "Engineering", "Analytics"],
    },

    description: String,
    requirements: [String],

    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Application",
      },
    ],

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },

    postedDate: {
      type: Date,
      default: Date.now,
    },

    // Reference to existing User model
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Job = models.Job || model("Job", JobSchema);
