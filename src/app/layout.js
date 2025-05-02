'use client'
import { useState } from 'react'
import { Inter } from 'next/font/google'
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
      <body className={`${inter.className} custom-bg`}>
        {/* Sidebar (fixed position) */}
        <div className="fixed top-0 left-0 h-full z-10">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Fixed Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main
          className={`transition-all duration-300 ease-in-out min-h-screen
          ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
