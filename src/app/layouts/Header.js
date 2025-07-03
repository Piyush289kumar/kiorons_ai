'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrolled(window.scrollY > 50)
      } else {
        setScrolled(false) // Reset on desktop
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close menu on large screen resize
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
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-gellix ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between md:justify-center items-center py-2 px-4 gap-11">
        {/* Left: Logo */}
        <div className="flex items-center backdrop-blur-md bg-white/10 p-3 rounded-full">
          <Link href="/">
            <Image
              src="/assets/images/logo/Kiorons_icon.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </Link>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex gap-8 px-8 py-3 rounded-full text-white text-sm font-gellix backdrop-blur-md bg-white/10">
          <Link href="/studio" className="hover:underline">
            Studio
          </Link>
          <Link href="/tech" className="hover:underline">
            Tech
          </Link>
          <Link href="#" className="hover:underline">
            kOne
          </Link>
          <Link href="#" className="hover:underline">
            Company
          </Link>
          <Link href="#" className="hover:underline">
            Think
          </Link>
        </nav>

        {/* Right: Search + Menu */}
        <div className="flex items-center gap-4 z-30">
          <div className="hidden md:flex items-center backdrop-blur-md bg-white/10 p-3 rounded-full z-30">
            <Image src="/assets/images/icons/search.svg" alt="Search" width={20} height={20} />
          </div>

          {/* Hamburger */}
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

      {/* Mobile Sidebar + Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-10 transition-all duration-300 ${
          menuOpen ? 'backdrop-blur-3xl' : 'pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <nav
          className={`absolute top-0 left-0 h-screen w-full bg-black text-white backdrop-blur-3xl px-6 py-3 transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Logo & Company Name */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/10 backdrop-blur p-2 rounded-full">
              <Link href="/">
                <Image
                  src="/assets/images/logo/Kiorons_icon.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-4 h-4"
                />
              </Link>
            </div>
            <Link href="/" className="text-xl font-semibold">
              Kiorons
            </Link>
          </div>

          <div className="pl-12">
            {/* Navigation Links */}
            <Link href="/studio" className="block mb-4 text-md font-normal hover:underline">
              Studio
            </Link>
            <Link href="/tech" className="block mb-4 text-md font-normal hover:underline">
              Tech
            </Link>
            <Link href="#" className="block mb-4 text-md font-normal hover:underline">
              kOne
            </Link>
            <Link href="#" className="block mb-4 text-md font-normal hover:underline">
              Company
            </Link>
            <Link href="#" className="block mb-4 text-md font-normal hover:underline">
              Think
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
