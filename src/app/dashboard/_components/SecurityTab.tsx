"use client";

import React from "react";
import Image from "next/image";
import {
  Shield,
  Lock,
  Mail,
  Smartphone,
  KeyRound,
  Bell,
  Settings,
} from "lucide-react";
import Group from "@/assets/Group.svg";

const Toggle = ({ checked = false }: { checked?: boolean }) => {
  return (
    <button
      type="button"
      aria-pressed={checked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:ring-2 focus:ring-blue-500/40 focus:outline-none ${
        checked ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
};

const StatPill = ({
  label,
  tone = "success",
}: {
  label: string;
  tone?: "success" | "info";
}) => {
  const cls =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-blue-50 text-blue-700 border-blue-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${cls}`}
    >
      {label}
    </span>
  );
};

const Card = ({
  title,
  icon,
  right,
  children,
  className = "",
}: {
  title: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon ? (
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-700">
              {icon}
            </span>
          ) : null}
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Main container */}
        <main className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Security
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage password, two-factor authentication, and email settings.
            </p>
          </div>

          {/* Top cards */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Change Password */}
            <Card
              className="h-full"
              title="Change Password"
              icon={<Lock className="h-4 w-4" />}
              right={
                <div className="text-right">
                  <p className="text-xs font-medium text-slate-700">
                    Password Security
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Last changed 3 months ago
                  </p>
                </div>
              }
            >
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <button className="mt-1 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  Update Password
                </button>
              </div>
            </Card>

            {/* Two-Factor Authentication */}
            <Card
              className="h-full"
              title="Two-Factor Authentication"
              icon={<Smartphone className="h-4 w-4" />}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-sm">
                      <Shield className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        2FA Status
                      </p>
                      <p className="text-xs text-slate-500">
                        Extra security layer
                      </p>
                    </div>
                  </div>
                  <StatPill label="Enabled" tone="success" />
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50">
                      <KeyRound className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Authenticator App
                      </p>
                      <p className="text-xs text-slate-500">
                        Google Authenticator
                      </p>
                    </div>
                  </div>
                  <StatPill label="Active" tone="info" />
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50">
                      <Mail className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        SMS Verification
                      </p>
                      <p className="text-xs text-slate-500">
                        +1 (555) ***-**89
                      </p>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Configure
                  </button>
                </div>

                <button className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">
                  Manage 2FA Settings
                </button>
              </div>
            </Card>

            {/* Change Email Address */}
            <Card
              className="h-full"
              title="Change Email Address"
              icon={<Mail className="h-4 w-4" />}
              right={<StatPill label="Verified" tone="success" />}
            >
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="mt-1 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <p className="text-sm text-slate-700">
                      john****08@example.com
                    </p>
                    <div className="flex items-center gap-1 text-emerald-700"></div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Current Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">
                    New Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="new.email@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
                  A verification link will be sent to your new email address.
                  You’ll need to verify it before the change takes effect.
                </div>

                <button className="mt-1 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                  Update Email Address
                </button>
              </div>
            </Card>
          </div>

          {/* Bottom row */}
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            {/* Security Notifications */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-700">
                    <Bell className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Security Notifications
                    </h3>
                    <p className="text-xs text-slate-500">
                      Control alerts and confirmations
                    </p>
                  </div>
                </div>

                <button className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50">
                  <Settings className="h-4 w-4 text-slate-700" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email notifications for login attempts
                    </p>
                    <p className="text-xs text-slate-500">
                      Get notified when someone logs in
                    </p>
                  </div>
                  <Toggle checked />
                </div>

                <div className="flex items-center justify-between bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Suspicious activity alerts
                    </p>
                    <p className="text-xs text-slate-500">
                      Alert about unusual account activity
                    </p>
                  </div>
                  <Toggle checked={false} />
                </div>

                <div className="flex items-center justify-between bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Password change confirmations
                    </p>
                    <p className="text-xs text-slate-500">
                      Confirm password changes via email
                    </p>
                  </div>
                  <Toggle checked />
                </div>
              </div>
            </div>

            <div>
              <Image src={Group} alt="group Image" className=""></Image>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
