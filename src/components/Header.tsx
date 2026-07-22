"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, CircleCheck, ShoppingCart, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "../assets/INGLU Global Logo.png";

import { useCartContext } from "@/context/CartContext";
import { logoutAction } from "@/actions/auth";
import Popover from "./Popover";
import { useAuth } from "@/context/AuthContext";
import { toast } from "./Toast";
import { useNotifications } from "@/hooks/useNotifications";
import { NOTIFICATION_ICONS } from "@/lib/notificationIcons";

import Navbar from "./Navbar";
import NavSideBar from "./NavSideBar";

export default function Header() {
  const pathname = usePathname() || "";
  const router = useRouter();

  // 🔥 Hide header on PARO / Bombay Bandook / Cosmeeka / Mahika Blues / DJ Rooh EPK pages
  const isParoPage = pathname.startsWith("/muse-records/paro");
  const isBombayBandookPage = pathname.startsWith(
    "/muse-records/bombay-bandook",
  );
  const isCosmeekaPage = pathname.startsWith("/muse-records/cosmeeka");
  const isMahikaBluesPage = pathname.startsWith("/muse-records/mahika-blues");
  const isDjRoohPage = pathname.startsWith("/muse-records/dj-rooh");
  if (
    isParoPage ||
    isBombayBandookPage ||
    isCosmeekaPage ||
    isMahikaBluesPage ||
    isDjRoohPage
  )
    return null;

  const { totalQuantity } = useCartContext();
  const { isLoggedIn, loading, refreshUser, user } = useAuth();

  const userId = user?._id?.toString();

  const { notifications, handleNotificationClick } = useNotifications(userId, {
    mode: "unread",
  });

  const latestThree = notifications.slice(0, 3);
  const unreadCount = notifications.length;

  /* ----------------------------------
      Scroll State
  -----------------------------------*/
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------
      Logout
  -----------------------------------*/
  async function handleLogout() {
    try {
      await logoutAction();
      await refreshUser();

      toast(
        <span className="flex items-center gap-2">
          <CircleCheck size={18} />
          Successfully Logged Out
        </span>,
        "success",
        2000,
      );

      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }

  return (
    <header className="relative z-50 w-full px-6 py-4 xl:px-8">
      <div className="flex items-center gap-4 xl:grid xl:grid-cols-[1fr_auto_1fr]">
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-80"
        >
          <div className="relative size-20">
            <Image src={Logo} alt="Logo" fill />
          </div>
        </Link>

        {/* ================= NAV ================= */}
        <Navbar />

        {/* ================= RIGHT ================= */}
        <div className="hidden items-center gap-4 justify-self-end xl:flex">
          {!loading &&
            (isLoggedIn ? (
              <>
                {/* Cart */}
                <Link
                  href="/cart"
                  className="relative rounded-full border bg-white p-2.5"
                >
                  <ShoppingCart size={20} />

                  {totalQuantity > 0 && (
                    <div className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                      {totalQuantity}
                    </div>
                  )}
                </Link>

                {/* Notifications */}
                <Popover
                  trigger={
                    <button className="relative rounded-full border bg-white p-2.5">
                      <Bell size={20} />

                      {unreadCount > 0 && (
                        <div className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                          {unreadCount > 9 ? "9+" : unreadCount}
                        </div>
                      )}
                    </button>
                  }
                >
                  <div className="flex flex-col text-sm">
                    {latestThree.length === 0 ? (
                      <p className="px-4 py-3 text-gray-500">
                        No notifications
                      </p>
                    ) : (
                      latestThree.map((n) => {
                        const Icon = NOTIFICATION_ICONS[n.type];

                        return (
                          <button
                            key={n._id}
                            onClick={() =>
                              handleNotificationClick(n._id, n.actionUrl)
                            }
                            className="flex gap-3 px-3 py-2 hover:bg-gray-100"
                          >
                            <Icon size={18} className="text-blue-600" />

                            <div>
                              <p className="font-medium">{n.title}</p>
                              <p className="text-xs text-gray-500">
                                {n.message}
                              </p>
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>
                </Popover>

                {/* Profile */}
                <Popover
                  width={220}
                  trigger={
                    <button className="flex size-10 items-center justify-center rounded-full border bg-white">
                      <User size={20} className="text-blue-600" />
                    </button>
                  }
                >
                  <div className="flex flex-col text-sm">
                    <Link
                      href="/account"
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      My Account
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </Popover>
              </>
            ) : (
              <div className="flex">
                <Link
                  href="/login"
                  className="rounded-l-full bg-blue-600 px-5 py-2 text-white duration-300 hover:scale-105"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-r-full border px-5 py-2 text-blue-600 duration-300 hover:scale-105"
                >
                  Signup
                </Link>
              </div>
            ))}
        </div>

        {/* ================= MOBILE ================= */}
        <NavSideBar />
      </div>
    </header>
  );
}
