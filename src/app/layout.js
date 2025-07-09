'use client'

import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import HeaderSidenav from './layouts/HeaderSidenav'
import { Toaster } from 'react-hot-toast'
import ResponsiveToaster from '@/components/components/ui/ResponsiveToaster'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} custom-bg font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Header + Sidebar */}
          <HeaderSidenav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

          {/* Main Content */}
          <main
            className={`transition-all duration-300 pt-20 px-5 ${
              isSidebarOpen ? 'md:ml-[220px]' : 'md:ml-[0px]'
            }`}
          >
            {children}
              <ResponsiveToaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
