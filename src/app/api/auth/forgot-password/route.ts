import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import PasswordResetToken from "@/models/PasswordResetToken";
import { generateToken, hashToken, tokenExpiry } from "@/lib/token";
import { sendAuthEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email Required" }, { status: 400 });
    }
    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: true });
    }

    const token = generateToken();
    const tokenHash = await hashToken(token);

    await PasswordResetToken.create({
      email,
      tokenHash,
      expiresAt: tokenExpiry(15),
    });

    await sendAuthEmail({
      to: email,
      name: user.name,
      type: "RESET_PASSWORD",
      token,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
