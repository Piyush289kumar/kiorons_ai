// /src/app/_components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, Menu, Search } from "lucide-react";
import GlassMobileNav from "./GlassMobileNav";

const navLinks = [
  { label: "kOne", href: "/kone" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Search", href: "/search" },
];

export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [blur, setBlur] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 10 || y < lastScroll.current) setShowNav(true);
      else setShowNav(false);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowHover = () => {
    setBlur(true);
    setTimeout(() => setBlur(false), 500);
  };

  // Hamburger open/close - you can expand this for a real menu if you wish
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`
        w-full flex flex-col items-center gap-2
        fixed top-0 left-0 z-50
        transition-all duration-500       
      `}
      aria-label="Main navigation"
    >
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2 w-auto mt-3">
        {/* Logo */}
        <Link href="/" tabIndex={0} aria-label="Back to homepage">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#404040]/25 backdrop-blur-md border border-white/10 transition-all">
            <Image
              src="/logo/kiorons_logo.svg"
              alt="Kiorons Logo"
              width={16}
              height={16}
              priority
            />
          </div>
        </Link>
        {/* Nav Links */}
        <nav className="flex-1 flex items-center rounded-full bg-[#404040]/25 backdrop-blur-md border border-white/10 px-10 py-3 space-x-8 font-light text-sm">
          {navLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={link.label}
              className={`
                text-zinc-50 transition-all duration-500 font-medium
                ${hoveredIdx !== null && hoveredIdx !== idx ? "blur-[1px]" : ""}
                ${hoveredIdx === idx ? "z-10" : ""}
              `}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              tabIndex={0}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className="absolute md:hidden left-4 top-4 z-40">
        {/* Left: Company logo */}
        <Link href="/" aria-label="Back to homepage">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#404040]/25 backdrop-blur-md border border-white/10 transition-all">
            <Image
              src="/logo/kiorons_logo.svg"
              alt="Kiorons Logo"
              width={18}
              height={18}
              className="w-5 h-5"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Update bar (always visible, you can hide on mobile if you wish) */}
      <div
        className={`
          hidden
          relative md:flex items-center
          rounded-xl
          bg-[#404040]/25
          backdrop-blur-md
          border border-white/10
          px-1 py-1
          font-light
          text-sm
          w-full
          max-w-[18rem]
          mx-auto
          min-h-[30px]
          hover:scale-103
          transition-all duration-500
          cursor-pointer
          ${
            showNav
              ? "opacity-100"
              : "opacity-0 pointer-events-none -translate-y-8"
          }
        `}
        onMouseEnter={handleArrowHover}
      >
        <div className="w-9" aria-hidden="true" />
        <span
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            text-center text-sm text-zinc-50 pointer-events-none select-none w-full
            transition-all duration-500
            ${blur ? "blur-[1px] opacity-90" : ""}
          `}
        >
          kOne new version out now
        </span>
        <a
          href="https://lucide.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-1 text-zinc-50
            hover:text-blue-200 transition-all duration-200
            absolute right-2 top-1/2 -translate-y-1/2
          "
          aria-label="lucide.dev"
        >
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile Navigation (replace your mobile nav/menu code with this) */}
      <GlassMobileNav />
    </nav>
  );
}
