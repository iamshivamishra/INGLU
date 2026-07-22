"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import INGLUGlobalLogo from "@/assets/INGLU Global Logo.png";
import Image from "next/image";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const router = useRouter();

  const token = use(searchParams).token;

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!token) {
      setError("Invalid or missing token");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/reset-password/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      if (!res.ok) {
        throw new Error();
      }
      router.push("/login?reset=sucess");
    } catch {
      setError("failed to reset Password. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mx-4 mt-4 mb-6 flex w-auto max-w-md flex-col items-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:max-w-lg lg:max-w-6xl lg:flex-row lg:gap-6 lg:p-16">
      <Image
        src={INGLUGlobalLogo}
        alt="INGLU Global Logo"
        className="hidden max-w-1/2 flex-1 lg:block"
      />

      <div className="flex flex-1 flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">Reset Password Here</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="New password"
            className="w-full rounded-xl border border-[#6B99FF] bg-white px-10 py-3 text-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-linear-to-r from-[#155DFC] to-[#5087FF] p-2 text-white"
          >
            {loading ? "Resetting.." : "Reset password"}
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div className="pointer-events-none absolute -top-256 -right-48 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#ECA1FF61] blur-[80px] lg:block" />
      <div className="pointer-events-none absolute -bottom-2/12 -left-128 -z-10 hidden h-337.5 w-56 -rotate-12 rounded-[50%] bg-[#C0A1FFB0] blur-[80px] lg:block" />
    </div>
  );
}
