'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import '@/styles/assets/css/4105e979b7485bff.css'
import '@/styles/assets/css/ba2e6b7c939be632.css'
import '@/styles/assets/css/1be87e885847316b.css'
import '@/styles/assets/css/833eabf499e625b2.css'
import '@/styles/assets/css/9cd2a96b2ee898ce.css'

import '@/styles/assets/css/1bfffb9d5bad202f.css'

import '@/styles/assets/css/97e3c45dcae8ebe6.css'
import '@/styles/assets/css/d1cfe8dedc57da26.css'
import '@/styles/assets/css/d230b7644f178243.css'
import '@/styles/assets/css/9db570bb1a7b37d9.css'
import '@/styles/assets/css/e2c5b4cbada55ed0.css'
import '@/styles/assets/css/3e6a8afa8b7ca6ac.css'
import '@/styles/assets/css/877938fdea4e370b.css'
import '@/styles/assets/css/8154015444e20430.css'
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
