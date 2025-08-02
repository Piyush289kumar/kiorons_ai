// /src/app/_components/Navbar.tsx
'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Wearable", href: "/wearable" },
  { label: "Neural", href: "/neural" },
  { label: "Programs", href: "/programs" },
  { label: "Science", href: "/science" },
  { label: "Search", href: "/search" },
];

export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
                ${hoveredIdx !== null && hoveredIdx !== idx ? "blur-xs opacity-60" : ""}
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
    </nav>
  );
}
