import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Ticket from "@/models/Ticket";
import QRCode from "qrcode";
import { getUserFromRequest } from "@/lib/getUserFromRequest";
import { sendTicketEmail } from "@/lib/sendTicketEmail";

export async function POST(req: Request) {
  try {
    await connectDB();

    const loggedInUser = await getUserFromRequest();

    if (!loggedInUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (
      loggedInUser.role !== "ADMIN" &&
      loggedInUser.role !== "SUPER_ADMIN"
    ) {
      return NextResponse.json(
        { success: false, message: "Admins only" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { fullName, email, items } = body;

    if (!email || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ✅ Create SINGLE ticket with multiple items */
    const ticket = await new Ticket({
      userId: loggedInUser._id,
      items: items.map((item: any) => ({
        title: item.title,
        quantity: Number(item.quantity),
      })),
      eventName: "Holi Bash",
      ticketNumber:
        "TICKET-" +
        Math.random().toString(36).substring(2, 10).toUpperCase(),
      status: "VALID",
      priority: 0,
      createdBy: loggedInUser._id,
      createdByEmail: loggedInUser.email,
      issuedAt: new Date(),
    }).save();

    /* ✅ Generate QR */
    const qrCodeDataURL = await QRCode.toDataURL(
      `${process.env.APP_URL}/api/ticket/verify/${ticket._id}`
    );

    ticket.qrCode = qrCodeDataURL;
    await ticket.save();

    /* ✅ Send Email */
    await sendTicketEmail({
      email,
      firstName: fullName || "Guest",
      ticketId: ticket._id.toString(),
    });

    return NextResponse.json({
      success: true,
      message: "Manual ticket created successfully",
      ticketId: ticket._id,
    });
    
  } catch (error) {
      console.error("MANUAL CREATE ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}