'use client'
import { useEffect, useState } from 'react'
import { ShimmerButton } from '@components/magicui/shimmer-button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx' // Optional, for cleaner class toggling
export default function Header({ toggleSidebar }) {
  const [showLogo, setShowLogo] = useState(false)
  useEffect(() => {
    let lastScroll = window.scrollY
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 50 && currentScroll > lastScroll) {
        setShowLogo(true) // Scrolling down
      } else if (currentScroll < lastScroll) {
        setShowLogo(false) // Scrolling up
      }
      lastScroll = currentScroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="sticky top-0 flex items-center justify-between px-4 py-4 shadow w-full z-50 bg-black transition-all duration-500">
      {/* Left: Menu Button */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white text-sm focus:outline-none flex items-center"
        >
          Menu
          <span className="ml-2">
            <Image
              src="/assets/images/icons/menu.png"
              alt="Menu Icon"
              width={16}
              height={16}
              className="h-4 w-auto"
            />
          </span>
        </button>
      </div>
      {/* Center: Logo or Company Name */}
      <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out">
  <div className="relative h-10 w-40 flex items-center justify-center">
    {/* Text - fade out when showLogo is true */}
    <span
      className={`absolute transition-all duration-700 ease-in-out text-white text-[30.647px] font-semibold tracking-[-0.919px]
        ${showLogo ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
    >
      Kiorons
    </span>
    {/* Logo - fade in when showLogo is true */}
    <div
      className={`absolute transition-all duration-700 ease-in-out
        ${showLogo ? 'opacity-100 scale-100 animate-spin-once' : 'opacity-0 scale-90'}`}
    >
      <Image
        src="/assets/images/logo/Kiorons_icon.png"
        alt="Kiorons Logo"
        width={40}
        height={40}
        className="h-5 w-full"
      />
    </div>
  </div>
</div>
      {/* Right: Search and Button */}
      <div className="flex items-center gap-7 align-middle">
        <Image
          src="/assets/images/icons/Search.png"
          alt="Search Icon"
          width={16}
          height={16}
          className="h-5 w-auto"
        />
        <ShimmerButton className="px-5 py-2">Join Early</ShimmerButton>
      </div>
    </header>
  )
}
