import { NextResponse } from "next/server";
import { syncQueriesToGoogleSheets } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming query body:", body);

    await syncQueriesToGoogleSheets(body);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API /queries ERROR 👇");
    console.error(error);
    console.error("Message:", error?.message);
    console.error("Stack:", error?.stack);

    return NextResponse.json(
      { success: false, message: error?.message || "Failed to submit query" },
      { status: 500 },
    );
  }
}
