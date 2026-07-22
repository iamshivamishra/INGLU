"use client";

import {
  Crown,
  LayoutDashboard,
  Shield,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import { useState, useEffect } from "react";
import HomeTab from "./_components/HomeTab";
import SecurityTab from "./_components/SecurityTab";
import PaymentsTab from "./_components/PaymentsTab";
import OwnerTab from "./_components/OwnerTab";
import SuperAdminTab from "./_components/SuperAdminTab";
import AdminTab from "./_components/AdminTab";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading, isLoggedIn } = useAuth();

  const [activeTab, setActiveTab] = useState<
    "owner" | "home" | "security" | "payments" | "super-admin" | "admin"
  >("home");

  // 🔐 Protect route
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [loading, isLoggedIn, router]);

  if (loading) {
    return null; // or loader
  }

  return (
    <div className="mx-auto mb-20 flex w-329 overflow-clip rounded-3xl bg-white shadow-[5px_4px_41.9px_-10px_rgba(0,0,0,0.25)]">
      <nav className="flex w-80 flex-col gap-2 rounded-3xl bg-[#DAE6FF] px-8.25 py-16">
        <button
          type="button"
          onClick={() => setActiveTab("owner")}
          className={`${
            activeTab === "owner"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <Crown size={24} strokeWidth={1.5} />
          <span className="text-lg">Owner</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          className={`${
            activeTab === "home"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <LayoutDashboard size={24} strokeWidth={1.5} />
          <span className="text-lg">Dashboard</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`${
            activeTab === "security"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <Shield size={24} strokeWidth={1.5} />
          <span className="text-lg">Security</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("payments")}
          className={`${
            activeTab === "payments"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <Wallet size={24} strokeWidth={1.5} />
          <span className="text-lg">Payments</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("super-admin")}
          className={`${
            activeTab === "super-admin"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <UserCog size={24} strokeWidth={1.5} />
          <span className="text-lg">Super Admin</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("admin")}
          className={`${
            activeTab === "admin"
              ? "bg-[#EFF6FF] text-[#155DFC]"
              : "text-[#4A5565]"
          } flex cursor-pointer items-center gap-4 rounded-2xl px-4.5 py-4 transition-all hover:bg-[#EFF6FF] active:opacity-75`}
        >
          <Users size={24} strokeWidth={1.5} />
          <span className="text-lg">Admin</span>
        </button>
      </nav>

      {activeTab === "security" && <OwnerTab />}
      {activeTab === "home" && user && <HomeTab user={user} />}
      {activeTab === "security" && <SecurityTab />}
      {activeTab === "payments" && <PaymentsTab />}
      {activeTab === "super-admin" && <SuperAdminTab />}
      {activeTab === "admin" && <AdminTab />}
    </div>
  );
}
