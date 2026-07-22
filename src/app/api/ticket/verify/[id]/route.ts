import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Ticket from "@/models/Ticket";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import mongoose from "mongoose";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const loggedInUser = await getUserFromRequest();

    if (!loggedInUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    if (
      loggedInUser.role !== "ADMIN" &&
      loggedInUser.role !== "SUPER_ADMIN"
    ) {
      return NextResponse.json(
        { success: false, message: "Admins only" },
        { status: 403 },
      );
    }

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ticket ID" },
        { status: 400 },
      );
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json(
        { success: false, message: "Ticket not found" },
        { status: 404 },
      );
    }

    let usedAt = ticket.updatedAt;

    if (ticket.status === "VALID") {
      ticket.status = "USED";
      await ticket.save();
      usedAt = ticket.updatedAt;
    }

    return NextResponse.json({
      success: true,
      ticket: {
        id: ticket._id,
        ticketNumber: ticket.ticketNumber,
        eventName: ticket.eventName,
        items: ticket.items,
        status: ticket.status,
        usedAt,
        qrCode: ticket.qrCode,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}