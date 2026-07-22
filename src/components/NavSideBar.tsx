"use client";

import Link from "next/link";
import { Menu, X, LogOut, User, ShoppingCart, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { logoutAction } from "@/actions/auth";
import { useCartContext } from "@/context/CartContext";
import Popover from "./Popover";
import { useNotifications } from "@/hooks/useNotifications";
import { NOTIFICATION_ICONS } from "@/lib/notificationIcons";

export default function NavSideBar() {
  const { isLoggedIn, loading, refreshUser, user } = useAuth();

  const [open, setOpen] = useState(false);
  const { totalQuantity } = useCartContext();
  const userId = user?._id?.toString();

  const { notifications, handleNotificationClick } = useNotifications(userId, {
    mode: "unread",
  });

  const latestThree = notifications.slice(0, 3);
  const unreadCount = notifications.length;

  const pathname = usePathname();
  const router = useRouter();

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  async function handleLogout() {
    await logoutAction();
    await refreshUser();

    setOpen(false);
    router.push("/login");
  }

  return (
    <nav className="relative z-50 w-full xl:hidden">
      <div className="flex items-center justify-end gap-4">
        {/* Cart */}
        <Link
          href="/cart"
          onClick={() => setOpen(false)}
          className="relative transition-all hover:opacity-75 active:opacity-50"
        >
          <ShoppingCart size={22} />

          {totalQuantity > 0 && (
            <div className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
              {totalQuantity}
            </div>
          )}
        </Link>

        {/* Notifications */}
        <Popover
          trigger={
            <button className="relative cursor-pointer p-1 transition-all hover:opacity-75 active:opacity-50">
              <Bell size={22} />

              {unreadCount > 0 && (
                <div className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </div>
              )}
            </button>
          }
        >
          <div className="flex flex-col text-sm">
            {latestThree.length === 0 ? (
              <p className="px-3 py-2 text-gray-500">No notifications</p>
            ) : (
              latestThree.map((n) => {
                const Icon = NOTIFICATION_ICONS[n.type];

                return (
                  <button
                    key={n._id}
                    onClick={() => handleNotificationClick(n._id, n.actionUrl)}
                    className="flex gap-2 px-2 py-2 hover:bg-gray-100"
                  >
                    <Icon size={18} className="text-blue-600" />

                    <div>
                      <p className="font-medium">{n.title}</p>
                      <p className="text-xs text-gray-500">{n.message}</p>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </Popover>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer transition-all hover:opacity-75 active:opacity-50"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white text-black transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-lg font-semibold">Menu</span>

          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 p-4">
          {/* ✅ UPDATED MENU */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            href="/muse-records/paro"
            onClick={() => setOpen(false)}
            className="px-3 py-2 font-semibold text-[#FF3D00] hover:bg-gray-100"
          >
            PARO
          </Link>

          <Link
            href="/inner-circle"
            onClick={() => setOpen(false)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            Inner Circle
          </Link>

          <Link
            href="/about-us"
            onClick={() => setOpen(false)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            About Us
          </Link>

          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            Courses
          </Link>

          <Link
            href="/careers"
            onClick={() => setOpen(false)}
            className="px-3 py-2 hover:bg-gray-100"
          >
            Careers
          </Link>

          {/* Auth */}
          <div className="mt-6 border-t pt-4">
            {!loading &&
              (isLoggedIn ? (
                <>
                  <Link
                    href="/account"
                    onClick={() => setOpen(false)}
                    className="flex gap-2 px-3 py-2 hover:bg-gray-100"
                  >
                    <User size={18} />
                    My Account
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full gap-2 px-3 py-2 text-red-600 hover:bg-gray-100"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-full bg-blue-600 px-4 py-2 text-center text-white"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="mt-3 block rounded-full border px-4 py-2 text-center text-blue-600"
                  >
                    Signup
                  </Link>
                </>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
