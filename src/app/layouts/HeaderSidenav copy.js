'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useAnimation } from 'framer-motion'

export default function HeaderSidenav({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (scrolled) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } })
    } else {
      controls.start({ opacity: 0, y: 20, transition: { duration: 0.3, ease: 'easeIn' } })
    }
  }, [scrolled, controls])

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMenuOpen(false)
    }
  }, [pathname])

  const navLinks = [
    { href: '/studio', label: 'Studio' },
    { href: '/tech', label: 'Tech' },
    { href: '/kone', label: 'kOne' },
    { href: '/company', label: 'Company' },
    { href: '/think', label: 'Think' },
    { href: '/career', label: 'Career' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' ? '-100%' : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-40 transition-all font-gellix px-5 ${
          scrolled ? 'bg-black backdrop-blur-md' : 'bg-black'
        }`}
      >
        <div className="w-full mx-auto flex justify-between items-center p-2 md:p-4 z-50">
          {/* Left: Logo + Toggle */}
          <div className="flex items-end gap-8">
            <div className="relative h-auto flex items-center">
              {/* Company Name when NOT scrolled */}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -10 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 text-white font-medium text-2xl md:text-3xl"
              >
                <Link href={'/'}>Kiorons</Link>
              </motion.span>

              {/* Logo when SCROLLED */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/assets/images/logo/Kiorons_icon.png"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="mt-3 w-5 h-5"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="hidden absolute cursor-pointer top-7 left-24 md:flex items-center text-white ml-14 pr-2 mt-1"
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
      </motion.header>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen ${
          isSidebarOpen ? 'w-[180px]' : 'w-[0px]'
        } transition-all duration-300 bg-black text-white flex-col py-6 px-4 z-20`}
      >
        <nav className="flex flex-col gap-2 text-sm font-normal mt-48">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                pathname === link.href
                  ? 'bg-white/10 font-semibold'
                  : 'text-white hover:bg-white/10'
              }`}
              style={pathname === link.href ? { color: '#000' } : {}}
            >
              <span className={`${isSidebarOpen ? 'inline' : 'hidden'} transition-all`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-20 transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

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
