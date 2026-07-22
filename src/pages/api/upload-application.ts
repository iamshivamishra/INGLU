import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import { connectDB } from "@/lib/db";
import Application from "@/models/Application";
import { google } from "googleapis";
import { syncJobApplicationToGoogleSheets } from "@/lib/googleSheets";
interface NextApiRequestWithFile extends NextApiRequest {
  file?: Express.Multer.File;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF/DOC/DOCX files allowed"));
    }
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequestWithFile,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await runMiddleware(req, res, upload.single("resume"));

    await connectDB();

    const {
      jobId,
      jobTitle,
      name,
      email,
      phone,
      experience,
      currentCompany,
      currentRole,
      expectedSalary,
      noticePeriod,
      resumeDriveLink,
    } = req.body;

const baseUrl =
  process.env.APP_URL || "http://localhost:3000";

const resumePath = req.file
  ? `${baseUrl}/uploads/${req.file.filename}`
  : null;
    const newApplication = await Application.create({
      jobId,
      jobTitle,
      name,
      email,
      phone,
      experience,
      currentCompany,
      currentRole,
      expectedSalary,
      noticePeriod,
      resume: resumePath,
      resumeDriveLink,
    });
    await syncJobApplicationToGoogleSheets({
      jobTitle,
      name,
      email,
      phone,
      experience,
      currentCompany,
      currentRole,
      expectedSalary,
      noticePeriod,
      resume: resumePath || resumeDriveLink || "N/A",
    });
    return res.status(200).json({
      message: "Application submitted successfully",
      application: newApplication,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: error.message || "Upload failed",
    });
  }
}
