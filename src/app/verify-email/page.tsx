"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";

export default function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const token = use(searchParams).token;

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    async function verifyEmail() {
      try {
        const res = await fetch("/api/auth/verify-email/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (!res.ok) {
          throw new Error();
        }
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }
    verifyEmail();
  }, [token]);

  if (status === "loading") {
    return <p>Verifying Your Email....</p>;
  }

  if (status === "success") {
    return (
      <div>
        <h1>Email Verified</h1>
        <p>You can now Sign In to your Account</p>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Verification Failed</h1>
      <p>This Link is Not Valid or has Expired.</p>
    </div>
  );
}
