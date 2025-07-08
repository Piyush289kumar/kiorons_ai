'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderSidenav({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrolled(window.scrollY > 50)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '/studio', label: 'Studio' },
    { href: '/tech', label: 'Tech' },
    { href: '#', label: 'kOne' },
    { href: '#', label: 'Company' },
    { href: '#', label: 'Think' },
    { href: '/career', label: 'Career' },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-gellix px-5 ${
          scrolled ? 'bg-black/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center p-2 md:p-4 z-50">
          {/* Left: Logo + Toggle */}
          <div className="flex items-end gap-8">
            <Link href="/" className="flex items-center gap-8">
              <Image
                src="/assets/images/logo/Kiorons_icon.png"
                alt="Logo"
                width={30}
                height={30}
                className="w-5 h-5 hidden"
              />
              <span className="text-white font-medium text-2xl md:text-3xl">Kiorons</span>
            </Link>
            {/* Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="hidden md:flex items-center text-white pr-2 -mt-1"
              aria-label="Toggle sidebar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM7 7C7.55229 7 8 7.44772 8 8V16C8 16.5523 7.55229 17 7 17C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Right: Search + Login */}
          <div className="flex items-center gap-4 z-30">
            <button className="hidden md:flex items-center backdrop-blur-md p-3 rounded-full">
              <Image src="/assets/images/icons/search.svg" alt="Search" width={15} height={15} />
            </button>
            <Link href="/login">
              <button className="hidden md:inline-block px-6 py-2 text-md rounded-full text-white bg-zinc-800">
                Login
              </button>
            </Link>
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center text-white p-2"
              aria-label="Toggle mobile sidebar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${menuOpen ? '' : 'rotate-180'}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM7 7C7.55229 7 8 7.44772 8 8V16C8 16.5523 7.55229 17 7 17C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen ${
          isSidebarOpen ? 'w-[220px]' : 'w-[60px]'
        } transition-all duration-300 bg-black text-white flex-col py-6 px-4 z-20`}
      >
        <nav className="flex flex-col gap-2 text-sm font-medium mt-56">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                pathname === link.href
                  ? 'bg-white text-black font-semibold'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className={`${isSidebarOpen ? 'inline' : 'hidden'} transition-all`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-20 transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Dark overlay over content */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)} // closes menu when clicking background
        />

        {/* Sidebar menu */}
        <nav
          className={`absolute top-0 left-0 h-screen w-[85vw] text-white backdrop-blur-3xl px-6 py-4 transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ background: '#000' }}
        >
          <div className="flex flex-col gap-4 mt-[25vh] ml-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
