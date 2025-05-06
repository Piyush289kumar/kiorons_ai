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
      <div className="flex items-center justify-between px-4 py-5">
        {/* Left: Logo / Name */}
        <div className="relative flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-white text-sm focus:outline-none flex items-center gap-2"
          >
            {/* Logo Image (visible on scroll) */}
            <Image
              src="/assets/images/logo/Kiorons_icon.png"
              alt="Logo"
              width={28}
              height={28}
              className={`transition-all duration-300 h-5 w-auto ${
                scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            />

            {/* Company Name (visible at top) */}
            <span
              className={`text-white text-2xl font-bold tracking-[-0.919px] transition-all duration-300 ${
                scrolled ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              Kiorons
            </span>

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

        {/* Right: Search & CTA */}
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
      </div>
    </header>
  )
}
