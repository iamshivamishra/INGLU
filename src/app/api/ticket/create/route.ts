import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Ticket from "@/models/Ticket";
import QRCode from "qrcode";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import { sendTicketEmail } from "@/lib/sendTicketEmail";
export async function POST(req: Request) {
  const loggedInUser = await getUserFromRequest();

  if (!loggedInUser) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    await connectDB();

    const body = await req.json();
    const { purchaseId, items, priority = 0, eventName } = body;

    if (!purchaseId || !eventName || !items) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const ticket = await Ticket.create({
      userId: loggedInUser._id,
      purchaseId,
      items,
      eventName,
      ticketNumber:
        "TICKET-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      status: "VALID",
      priority,
      createdBy: loggedInUser._id,
      createdByEmail: loggedInUser.email,
      issuedAt: new Date(),
    });

    const qrCodeDataURL = await QRCode.toDataURL(
  `${process.env.APP_URL}/ticket?id=${ticket._id}`
);

    ticket.qrCode = qrCodeDataURL;
    await ticket.save();

    await sendTicketEmail({
      email: loggedInUser.email,
      firstName: loggedInUser.name || "User",
      ticketId: ticket._id.toString(),
    });

    return NextResponse.json({
      success: true,
      message: "Ticket created successfully",
      ticket: {
        _id: ticket._id,
        ticketNumber: ticket.ticketNumber,
        status: ticket.status,
        items: ticket.items,
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
