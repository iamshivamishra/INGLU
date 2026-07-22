import { NextResponse } from "next/server";
import Ticket from "@/models/Ticket";
import { getUserFromRequest } from "@/lib/getUserFromRequest";

export async function GET() {
  try {
    const user = await getUserFromRequest();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const tickets = await Ticket.find({ userId: user._id }).select(
      "_id eventName",
    );

    return NextResponse.json({
      success: true,
      tickets,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
