'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on window resize above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-gellix`}>
      <div className="max-w-screen-xl mx-auto flex justify-between md:justify-center items-center py-3 px-4 gap-11">
        {/* Left: Logo */}
        <div className="flex items-center backdrop-blur-md bg-white/10 p-3 rounded-full">
          <a href="/">
            {' '}
            <Image
              src="/assets/images/logo/Kiorons_icon.png"
              alt="Logo"
              width={20}
              height={20}
              className="animate-fade-up"
            />
          </a>
        </div>

        {/* Center: Navigation Links (hidden on mobile) */}
        <nav
          className={`hidden md:flex gap-8 px-8 py-3 rounded-full text-white text-sm font-gellix backdrop-blur-md bg-white/10`}
        >
          <a href="#" className="hover:underline">
            Studio
          </a>
          <a href="#" className="hover:underline">
            Tech
          </a>
          <a href="#" className="hover:underline">
            kOne
          </a>
          <a href="#" className="hover:underline">
            Company
          </a>
          <a href="#" className="hover:underline">
            Think
          </a>
        </nav>

        {/* Right: Login Button and Hamburger for mobile */}
        <div className="flex items-center gap-4">

          <div className="flex items-center backdrop-blur-md bg-white/10 p-3 rounded-full">
          <Image
            src="/assets/images/icons/search.svg"
            alt="Logo"
            width={20}
            height={20}
            className="animate-fade-up"
          />
          </div>

          {/* Hamburger Button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col gap-4 px-6 py-6 font-gellix text-base"
          onClick={() => setMenuOpen(false)} // close on link click
        >
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
          <a href="/career" className="hover:underline">
            Careers
          </a>
          <InteractiveHoverButton className="px-5 py-2 text-sm mt-4 w-full text-center">
            Login
          </InteractiveHoverButton>
        </nav>
      )}
    </header>
  )
}
