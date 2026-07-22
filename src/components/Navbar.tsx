"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
type NavLink = {
  path: string;
  label: string;
};

export default function Navbar() {
  const pathname = usePathname() || "";
  const isHolibash = pathname === "/holi-bash";
  const defaultLinks: NavLink[] = [
    { label: "PARO", path: "/muse-records/paro" },
    { path: "/inner-circle", label: "Inner Circle" },

    // { path: "/cuet-pyqs", label: "CUET PYQs" },
    { path: "/about-us", label: "About Us" },
    { path: "/courses", label: "Courses" },
    { path: "/careers", label: "Careers" },
  ];

  const holibashLinks: NavLink[] = [
    { path: "about-us", label: "About Us" },
    { label: "PARO", path: "/muse-records/paro" },
    { path: "partner-with-us", label: "Partner With Us" },
    { path: "tickets", label: "Ticketing & Tables" },
  ];

  function scrollToSection(id: string) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }

  return (
    <nav
      className={`nav__bar gap-12 rounded-full px-6 py-2.25 font-medium ${
        isHolibash
          ? "justify-end justify-self-end border border-[#D19C1E] bg-white/75 font-sans text-lg text-black backdrop-blur-sm"
          : "justify-center border border-[#7692FF] bg-[#9FB2FC3B]"
      }`}
    >
      <Link
        href={"/"}
        className="underline decoration-transparent underline-offset-2 transition-all hover:text-[#2563EB] hover:decoration-[#2563EB]"
      >
        Home
      </Link>
      {(isHolibash ? holibashLinks : defaultLinks).map((link, index) =>
        isHolibash ? (
          <button
            key={index}
            type="button"
            onClick={() => scrollToSection(link.path)}
            className="cursor-pointer underline decoration-transparent underline-offset-2 transition-all hover:text-black hover:decoration-black"
          >
            {link.label}
          </button>
        ) : (
          <Link
            key={link.path}
            href={link.path}
            className="underline decoration-transparent underline-offset-2 transition-all hover:text-[#2563EB] hover:decoration-[#2563EB]"
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}
