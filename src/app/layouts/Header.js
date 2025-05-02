'use client'
import { ShimmerButton } from '@components/magicui/shimmer-button'
import { Search } from 'lucide-react'
import Image from 'next/image'
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
export default function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between px-4 py-7 shadow absolute w-full z-40 ml-0 transition-all duration-300">
      {/* Left: Sidebar Toggle Button */}
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-white focus:outline-none mr-4">
          Menu <span className="mx-3"> ☰</span> {/* Or use a menu icon */}
        </button>
      </div>
      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
        <Image
          src="/assets/images/logo/Kiorons.png"
          alt="Company Logo"
          width={120}
          height={40}
          className="h-6 w-auto"
        />
      </div>
      {/* Right: Search and Button */}
      <Image
          src="/assets/images/logo/icons/Search.png"
          alt="Company Logo"
          width={120}
          height={40}
          className="h-6 w-auto"
        />
      <ShimmerButton>Join Ealry</ShimmerButton>
    </header>
  )
}
