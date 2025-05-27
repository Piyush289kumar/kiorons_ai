'use client'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Sidebar } from './layouts/Sidebar'
import Header from './layouts/Header'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // initial check
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <html lang="en">
      <body className={`${inter.className} custom-bg px-6 font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Sidebar (slidable) */}
          
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
          {/* Main Content */}
          <main
            className={`transition-all duration-300 ease-in-out min-h-screen ${
              isSidebarOpen ? 'ml-0' : 'ml-0'
            }`}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
