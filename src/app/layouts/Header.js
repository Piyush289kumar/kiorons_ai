'use client'
import { useEffect, useState } from 'react'
import { ShimmerButton } from '@components/magicui/shimmer-button'
import Image from 'next/image'
export default function Header({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-40 transition-all duration-300 shadow">
      <div className="flex items-center justify-between px-4 py-1">
        {/* Left: Logo / Name */}
        <div className="relative flex items-center ml-6">
          <button
            onClick={toggleSidebar}
            className="text-white text-sm focus:outline-none flex items-center gap-2"
          >
            Menu
            {/* Menu Icon */}
            <Image
              src="/assets/images/icons/menu.png"
              alt="Menu Icon"
              width={16}
              height={16}
              className="ml-3 h-4 w-auto"
            />
          </button>
        </div>
        {/* Center: Logo or Company Name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
          {scrolled ? (
            <Image
              src="/assets/images/logo/Kiorons_icon.png"
              alt="Logo"
              width={18}
              height={18}
              className="animate-fade-up"
            />
          ) : (
            <span className="text-white text-lg sm:text-xl font-bold tracking-[-0.919px] animate-fade-up">
              Kiorons
            </span>
          )}
        </div>
        {/* Right: Search & CTA */}
        <div className="flex items-center gap-7 align-middle">
          <Image
            src="/assets/images/icons/Search.png"
            alt="Search Icon"
            width={16}
            height={16}
            className="h-5 w-auto"
          />
          <ShimmerButton className="px-5 py-1 mt-2">Join Early</ShimmerButton>
        </div>
      </div>
    </header>
  )
}
