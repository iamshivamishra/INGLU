import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Ticket from "@/models/Ticket";
// import QRCode from "qrcode";
import mongoose from "mongoose";
// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/token";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    // 🔐 1. Read auth cookie
    // const cookieStore = cookies();
    // const token = (await cookieStore).get("auth_token")?.value;

    // if (!token) {
    //   return NextResponse.json(
    //     { success: false, message: "Unauthorized" },
    //     { status: 401 },
    //   );
    // }

    // // 🔐 2. Decode token → logged-in user id
    // const decoded = verifyToken(token) as { userId: string };

    const { id } = await params;

    // 3️⃣ Validate Mongo ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid ticket id" },
        { status: 400 },
      );
    }

    // 4️⃣ Find ticket
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json(
        { success: false, message: "Ticket not found" },
        { status: 404 },
      );
    }

    // // 🔐 5️⃣ AUTHORIZATION CHECK (MOST IMPORTANT)
    // if (ticket.userId.toString() !== decoded.userId) {
    //   return NextResponse.json(
    //     { success: false, message: "Forbidden: Not your ticket" },
    //     { status: 403 },
    //   );
    // }

    // 6️⃣ Generate QR if missing
    // if (!ticket.qrCode) {
    //   const qr = await QRCode.toDataURL(`${ticket._id}`);
    //   ticket.qrCode = qr;
    //   await ticket.save();
    // }

    // 7️⃣ Return ticket
    return NextResponse.json({
      success: true,
      ticket: {
        _id: ticket._id,
        ticketNumber: ticket.ticketNumber,
        status: ticket.status,
        eventName: ticket.eventName,
        qrCode: ticket.qrCode,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error", error: String(error) },
      { status: 500 },
    );
  }
}
