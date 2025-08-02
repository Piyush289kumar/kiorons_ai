// /src/app/_components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const navLinks = [
  { label: "Wearable", href: "/wearable" },
  { label: "Neural", href: "/neural" },
  { label: "Programs", href: "/programs" },
  { label: "Science", href: "/science" },
  { label: "Search", href: "/search" },
];
export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [blur, setBlur] = useState<boolean | null>(false);

  // Handler for arrow hover
  const handleArrowHover = () => {
    setBlur(true);
    setTimeout(() => setBlur(false), 1000); // 1s = 1000ms
  };

  return (
    <nav className="w-full flex flex-col items-center gap-4 pt-8">
      <div className="flex items-center gap-4 w-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-full
                bg-[#f0f0f0]
                shadow
                backdrop-blur-lg
                transition-all
              "
            >
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
            bg-[#f0f0f0]
            backdrop-blur-md
            shadow
            px-6 py-3
            space-x-10
            font-normal
            text-md
          "
        >
          {navLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={link.label}
              className={`
                text-zinc-900 hover:text-zinc-900 transition-all duration-500 ease-in-out
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
        bg-[#f0f0f0]
        backdrop-blur-md
        shadow
        px-1 py-1
        font-light
        text-sm
        w-full
        max-w-[20rem]
        mx-auto
        mt-1
        min-h-[30px]
      "
      >
        {/* Left placeholder for symmetry */}
        <div className="w-9" aria-hidden="true" />
        {/* Centered Text with blur transition */}
        <span
          className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-center text-zinc-900 pointer-events-none select-none w-full
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
          // Blur the text on hover of the arrow
          onMouseEnter={handleArrowHover}
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
