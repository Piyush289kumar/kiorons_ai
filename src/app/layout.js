'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

import HeaderSidenav from './layouts/HeaderSidenav'
import { Toaster } from 'react-hot-toast'
import ResponsiveToaster from '@/components/components/ui/ResponsiveToaster'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <html
      lang="en-US"
      dir="ltr"
      style={{
        '--document-width': '100vw',
        '--gutter-size': 'max(20px, calc((var(--document-width) - 68rem) / 2))',
        '--media-gutter-size': 'max(20px, calc((var(--document-width) - 1728px) / 2))',
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OpenAI</title>
      </Head>
      <body
        className={`${inter.className} text-primary-100 text-p1 bg-background font-sans overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* <HeaderSidenav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> */}
          
          <div>
            <div>
              <main>{children}</main>
             
            </div>
          </div>
          <ResponsiveToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
