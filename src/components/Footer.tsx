"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import IngluGlobalLogo from "@/assets/INGLU Global Logo.png";
import WhiteLogo from "@/assets/white-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  { Icon: Facebook, link: "https://www.facebook.com/ingluglobal/" },
  { Icon: Linkedin, link: "https://www.linkedin.com/company/inglu/" },
  { Icon: Youtube, link: "https://www.youtube.com/c/INGLUGLOBAL" },
  { Icon: Instagram, link: "https://www.instagram.com/inglu_global/" },
];

const quickLinks: [string, string][] = [
  ["Home", "/"],
  ["Paro", "/muse-records/paro"],
  ["Bombay Bandook", "/muse-records/bombay-bandook"],
  ["Cosmeeka", "/muse-records/cosmeeka"],
  ["About Us", "/about-us"],
  ["Courses", "/courses"],
  ["Careers", "/careers"],
];

export default function Footer() {
  const pathname = usePathname() || "";
  const isDark =
    pathname.startsWith("/muse-records/paro") ||
    pathname.startsWith("/muse-records/bombay-bandook") ||
    pathname.startsWith("/muse-records/cosmeeka") ||
    pathname.startsWith("/muse-records/mahika-blues") ||
    pathname.startsWith("/muse-records/dj-rooh");

  return (
    <footer
      className={`relative w-full overflow-visible px-4 pt-12 pb-10 sm:px-8 lg:px-20 ${
        isDark ? "bg-[#0E0E0C] text-[#888880]" : "bg-[#DDE7FF] text-[#4A5565]"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="w-fit transition-all hover:opacity-75 active:opacity-50"
          >
            <Image
              src={isDark ? WhiteLogo : IngluGlobalLogo}
              alt="IngluGlobalIcon"
              width={60}
              height={75}
            />
          </Link>

          <p className="text-sm sm:text-base">
            INGLU is one of the fastest growing global youth communities.
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full p-2 transition hover:opacity-75 ${
                  isDark ? "bg-[#1A1A18] text-[#F2EEE6]" : "bg-[#F3F4F6]"
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <span
            className={`font-semibold ${isDark ? "text-[#F2EEE6]" : "text-black"}`}
          >
            Quick Links
          </span>
          {quickLinks.map(([label, path]) => (
            <Link
              key={path}
              href={path}
              className={`transition-colors ${
                isDark ? "hover:text-[#FF3D00]" : "hover:text-[#155DFC]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Company Policies */}
        <div className="flex flex-col gap-2">
          <span
            className={`font-semibold ${isDark ? "text-[#F2EEE6]" : "text-black"}`}
          >
            Company Policies
          </span>
          <Link
            href="/privacy-policy"
            className={`transition-colors ${
              isDark ? "hover:text-[#FF3D00]" : "hover:text-[#155DFC]"
            }`}
          >
            Privacy Policy
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span
            className={`font-semibold ${isDark ? "text-[#F2EEE6]" : "text-black"}`}
          >
            Contact
          </span>

          <div className="flex items-start gap-2">
            <MapPin
              size={20}
              className={`mt-1 min-w-5 ${isDark ? "text-[#FF3D00]" : "text-[#155DFC]"}`}
            />
            <span className="text-sm leading-relaxed">
              82, Satya Niketan, First Floor, New Delhi - 110021
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail
              size={20}
              className={isDark ? "text-[#FF3D00]" : "text-[#155DFC]"}
            />
            <a
              href="mailto:info@ingluglobal.in"
              className="text-sm hover:underline"
            >
              info@ingluglobal.in
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Phone
              size={20}
              className={isDark ? "text-[#FF3D00]" : "text-[#155DFC]"}
            />
            <a href="tel:+919990461446" className="hover:underline">
              +91 9990461446
            </a>
            <span>,</span>
            <a href="tel:+919990461299" className="hover:underline">
              +91 9990461299
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`my-6 h-px w-full ${isDark ? "bg-[#252523]" : "bg-gray-300"}`}
      />

      {/* Copyright */}
      <div className="px-2 text-center text-sm leading-relaxed">
        © 2017 - 2026 INGLU. All rights reserved.
      </div>
    </footer>
  );
}
