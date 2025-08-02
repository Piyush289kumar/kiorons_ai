// /src/app/_components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
const navLinks = [
  { label: "kOne", href: "/kone" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Search", href: "/search" },
];
export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [blur, setBlur] = useState<boolean>(false);
  // Scroll-based show/hide logic
  const [showNav, setShowNav] = useState(true);
  const lastScrollPos = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      // Only show nav if scrolling up OR at the very top
      if (currScrollPos < 10 || currScrollPos < lastScrollPos.current) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      lastScrollPos.current = currScrollPos;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Handler for arrow hover
  const handleArrowHover = () => {
    setBlur(true);
    setTimeout(() => setBlur(false), 1000);
  };
  return (
    <nav
      className={`
    w-full flex flex-col items-center gap-2 pt-8
    fixed top-0 left-0 z-50 bg-transparent
    transition-all duration-500 ease-in-out
    ${
      showNav
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none -translate-y-6"
    }
  `}
    >
      <div className="flex items-center gap-2 w-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0f0f0] shadow backdrop-blur-lg transition-all">
              <Image
                src="/logo/kiorons_logo.svg"
                alt="Kiorons Logo"
                className="invert"
                width={20}
                height={20}
                priority
              />
            </div>
          </Link>
        </div>
        {/* Nav Links */}
        <div
          className="
            flex-1 flex items-center
            rounded-xl
            bg-[#f0f0f0]/80
            px-8 py-3
            space-x-14
            font-light
            text-md
          "
        >
          {navLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={link.label}
              className={`
                text-zinc-700 hover:text-zinc-900 transition-all duration-500 ease-in-out
                ${
                  hoveredIdx !== null && hoveredIdx !== idx
                    ? "blur-xs opacity-60"
                    : ""
                }
                ${hoveredIdx === idx ? "z-10" : ""}
              `}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* update bar */}
      <div
        className="
        relative flex items-center
        rounded-xl
        bg-[#f0f0f0]/80
        px-1 py-1
        font-light
        text-sm
        w-full
        max-w-[20rem]
        mx-auto
        mt-2
        min-h-[30px]
      "
      >
        {/* Left placeholder for symmetry */}
        <div className="w-9" aria-hidden="true" />
        {/* Centered Text with blur transition */}
        <span
          className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-center text-sm text-zinc-900/30 pointer-events-none select-none w-full
          transition-all duration-1000 ease-in-out
          ${blur ? "blur-sm opacity-60" : ""}
        `}
        >
          kOne new version out now
        </span>
        {/* Right Arrow Link */}
        <a
          href="https://lucide.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-900 hover:text-zinc-900 transition-all duration-500 ease-in-out absolute right-2 top-1/2 -translate-y-1/2"
          aria-label="lucide.dev"
          onMouseEnter={handleArrowHover}
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
