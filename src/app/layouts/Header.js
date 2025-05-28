'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 font-gellix">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center py-3 px-4 gap-11">
        {/* Left: Logo */}
        <div className="flex items-center backdrop-blur-md bg-white/10 p-3 rounded-full">
          <Image
            src="/assets/images/logo/Kiorons_icon.png"
            alt="Logo"
            width={12}
            height={12}
            className="animate-fade-up"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-8 px-6 py-3 rounded-full text-white text-sm font-gellix backdrop-blur-md bg-white/10">
          <a href="#" className="hover:underline">
            kOne
          </a>
          <a href="#" className="hover:underline">
            Solutions
          </a>
          <a href="#" className="hover:underline">
            Company
          </a>
          <a href="#" className="hover:underline">
            Think
          </a>
          <a href="#" className="hover:underline">
            News
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
        </div>

        {/* Right: Login Button */}
        <div>
          <InteractiveHoverButton className="px-5 py-2 text-xs md:text-sm">
            Login
          </InteractiveHoverButton>
        </div>
      </div>
    </header>
  )
}
