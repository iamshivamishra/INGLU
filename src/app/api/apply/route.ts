import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { connectDB } from "@/lib/db";
import Application from "@/models/Application";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    let base64Resume = null;
    let resumeName = null;

    const resumeFile = formData.get("resume") as File | null;
    const resumeDriveLink = formData.get("resumeDriveLink");

    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      base64Resume = buffer.toString("base64");
      resumeName = resumeFile.name;
    }

    const data = {
      jobId: formData.get("jobId"),
      jobTitle: formData.get("jobTitle"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      experience: formData.get("experience"),
      currentCompany: formData.get("currentCompany"),
      currentRole: formData.get("currentRole"),
      expectedSalary: formData.get("expectedSalary"),
      noticePeriod: formData.get("noticePeriod"),
      resume: base64Resume,
      resumeName,
      resumeDriveLink,
    };

    await connectDB();
    await Application.create(data);

    // -------- Save to Google Sheets --------
    // const auth = new google.auth.JWT(
    //   process.env.GOOGLE_CLIENT_EMAIL,
    //   undefined,
    //   process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    //   ["https://www.googleapis.com/auth/spreadsheets"]
    // );

    // const sheets = google.sheets({ version: "v4", auth });

    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.JOB_APPLICATION_SHEET_ID,
    //   range: "Sheet1!A:K",
    //   valueInputOption: "USER_ENTERED",
    //   requestBody: {
    //     values: [
    //       [
    //         data.jobTitle,
    //         data.name,
    //         data.email,
    //         data.phone,
    //         data.experience,
    //         data.currentCompany,
    //         data.currentRole,
    //         data.expectedSalary,
    //         data.noticePeriod,
    //         data.resumeDriveLink || "Uploaded File",
    //         new Date().toISOString(),
    //       ],
    //     ],
    //   },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}