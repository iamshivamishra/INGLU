"use server";

import { syncCollaborationToGoogleSheets } from "@/lib/googleSheets";

export async function collaboration(formData: {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  links?: string;
  category: string;
  physicalStore: string;
  exhibitedBefore: string;
}) {
  if (!formData.fullName || !formData.brandName || !formData.email) {
    throw new Error("Invalid collaboration data");
  }

  try {
    await syncCollaborationToGoogleSheets(formData);
  } catch (error) {
    console.error("Collaboration sync failed:", error);
    throw error;
  }

  return { success: true };
}
