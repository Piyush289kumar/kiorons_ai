'use client'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Sidebar } from './layouts/Sidebar'
import Header from './layouts/Header'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <html lang="en">
      <body className={`${inter.className} custom-bg px-6 font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Sidebar (slidable) */}
          
          {/* Header */}
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
