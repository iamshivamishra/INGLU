import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    jobId: String,
    jobTitle: String,
    name: String,
    email: String,
    phone: String,
    experience: String,
    currentCompany: String,
    currentRole: String,
    expectedSalary: String,
    noticePeriod: String,
    resume: String,
resumeName: String,
resumeDriveLink: String,
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);