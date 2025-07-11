'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import './1bfffb9d5bad202f.css'
import '@/styles/assets/css/1bfffb9d5bad202f.css'
import '@/styles/assets/css/9db570bb1a7b37d9.css'
import '@/styles/assets/css/9cd2a96b2ee898ce.css'


// import '@/styles/assets/css/4105e979b7485bff.css'
// import '@/styles/assets/css/ba2e6b7c939be632.css'
// import '@/styles/assets/css/1be87e885847316b.css'
// import '@/styles/assets/css/833eabf499e625b2.css'


// import '@/styles/assets/css/97e3c45dcae8ebe6.css'
// import '@/styles/assets/css/d1cfe8dedc57da26.css'
// import '@/styles/assets/css/d230b7644f178243.css'
// import '@/styles/assets/css/e2c5b4cbada55ed0.css'
// import '@/styles/assets/css/3e6a8afa8b7ca6ac.css'
// import '@/styles/assets/css/877938fdea4e370b.css'
// import '@/styles/assets/css/8154015444e20430.css'

import HeaderSidenav from './layouts/HeaderSidenav'
import { Toaster } from 'react-hot-toast'
import ResponsiveToaster from '@/components/components/ui/ResponsiveToaster'
import Head from 'next/head'
import Footer from './layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024
      setIsSidebarOpen(isLargeScreen)
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navWidthMobile = '4rem'
  const navWidth = '16rem'

  const getGridTemplateColumns = () => {
    if (isMobile) {
      return isSidebarOpen
        ? `${navWidthMobile} 1fr` // Mobile + open sidebar
        : `0 1fr` // Mobile + closed sidebar
    } else {
      return isSidebarOpen
        ? `0 ${navWidth} 1fr` // Desktop + open sidebar
        : `0 0 1fr` // Desktop + closed sidebar
    }
  }

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
        <link rel="stylesheet" href="/assets/css/9cd2a96b2ee898ce.css" />
      </Head>
      <body
        className={`${inter.className} text-primary-100 text-p1 bg-background !font-gellix overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <HeaderSidenav
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            showLogo={showLogo}
          />
          <div
            className={`${
              isSidebarOpen
                ? 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_theme(spacing.nav-width)_1fr]'
                : 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_0_1fr]'
            }`}
          >
            <div className="relative hidden overflow-x-hidden md:block">
              <div
                className="text-nav px-xs w-nav-width mt-[187px] absolute right-0 top-0"
                id="site-switcher-desktop"
                aria-hidden="true"
              >
                <div className="fixed w-[calc(var(--spacing-nav-width)-2*var(--spacing-xs))] select-none">
                  <div className="text-primary-44 px-4xs py-2xs md:p-3xs">Switch to</div>
                  <ul>
                    <li className="group relative">
                      <a
                        href="https://chatgpt.com/"
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:p-3xs group-hover:bg-primary-4 duration-fast block w-full rounded-md transition-colors focus-visible:rounded-md"
                        target="_blank"
                        referrerPolicy="no-referrer-when-downgrade"
                        data-analytics="switcher-chatgpt"
                      >
                        Kiorons<span className="sr-only">(opens in a new window)</span>
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="https://sora.com/"
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:p-3xs group-hover:bg-primary-4 duration-fast block w-full rounded-md transition-colors focus-visible:rounded-md"
                        target="_blank"
                        rel="noreferrer"
                        data-analytics="switcher-sora"
                      >
                        Sora<span className="sr-only">(opens in a new window)</span>
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="https://platform.openai.com/"
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:p-3xs group-hover:bg-primary-4 duration-fast block w-full rounded-md transition-colors focus-visible:rounded-md"
                        target="_blank"
                        referrerPolicy="no-referrer-when-downgrade"
                        data-analytics="switcher-platform"
                      >
                        API Platform<span className="sr-only">(opens in a new window)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative overflow-x-hidden" id="sidebar-drawer">
              <nav
                className="px-xs w-nav-width absolute right-0 top-0 mt-[187px] hidden md:block"
                id="navigation-sidebar-desktop"
                aria-hidden="false"
              >
                <div className="fixed max-h-[calc(100svh-192px)] overflow-y-auto overflow-x-hidden pb-[46px]">
                  <div className="animate-sidebarSlideInLeft w-[calc(var(--spacing-nav-width)-2*var(--spacing-xs))]">
                    <ul className="text-nav-mobile space-y-0.5 font-bold md:text-nav-desktop">
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-research"
                            href="/research/index/"
                          >
                            Research
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-safety"
                            href="/safety/"
                          >
                            Safety
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-for-business"
                            href="/business/"
                          >
                            For Business
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-chatgpt"
                            href="/chatgpt/overview/"
                          >
                            Kiorons
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-sora"
                            href="/sora/"
                          >
                            Sora
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-api-platform"
                            href="/api/"
                          >
                            API Platform
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-stories"
                            href="/stories/"
                          >
                            Stories
                          </a>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-company"
                            href="/about/"
                          >
                            Company
                          </a>
                          <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary-44"
                              width="10"
                              viewBox="0 0 10 16"
                              fill="none"
                              style={{ transform: 'rotate(270deg)' }}
                            >
                              <path
                                d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </li>
                      <li className="group relative">
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-news"
                            href="/news/"
                          >
                            News
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bottom-sm fixed z-[50]">
                  <div className="h-md flex md:hidden">
                    <button
                      type="button"
                      className="p-4xs cursor-pointer rounded-md transition-colors text-primary-44 md:hidden"
                      aria-label="Navigate to another product."
                      id="radix-:Rpl9svffa:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <svg
                        width="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 12.3393C1.58579 12.3393 1.25 12.0035 1.25 11.5893L1.25 6.48933C1.25 4.55633 2.817 2.98933 4.75 2.98933L6.75 2.98933V1.97671C6.75 1.53439 7.2821 1.30991 7.59892 1.61858L9.38241 3.3562C9.58386 3.55246 9.58386 3.8762 9.38242 4.07246L7.59892 5.81008C7.2821 6.11875 6.75 5.89427 6.75 5.45196V4.48933L4.75 4.48933C3.64543 4.48933 2.75 5.38476 2.75 6.48933L2.75 11.5893C2.75 12.0035 2.41421 12.3393 2 12.3393ZM14 3.66067C14.4142 3.66067 14.75 3.99646 14.75 4.41067V9.51066C14.75 11.4437 13.183 13.0107 11.25 13.0107H9.25001V14.0233C9.25001 14.4656 8.7179 14.6901 8.40109 14.3814L6.61759 12.6438C6.41615 12.4475 6.41615 12.1238 6.61759 11.9275L8.40109 10.1899C8.7179 9.88124 9.25001 10.1057 9.25001 10.548V11.5107H11.25C12.3546 11.5107 13.25 10.6152 13.25 9.51066V4.41067C13.25 3.99646 13.5858 3.66067 14 3.66067Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="p-4xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a -my-0.5 mx-1 cursor-pointer transition-colors bg-secondary-100 hidden rounded-full md:block"
                    aria-label="Navigate to another product."
                  >
                    <svg
                      width="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 12.3393C1.58579 12.3393 1.25 12.0035 1.25 11.5893L1.25 6.48933C1.25 4.55633 2.817 2.98933 4.75 2.98933L6.75 2.98933V1.97671C6.75 1.53439 7.2821 1.30991 7.59892 1.61858L9.38241 3.3562C9.58386 3.55246 9.58386 3.8762 9.38242 4.07246L7.59892 5.81008C7.2821 6.11875 6.75 5.89427 6.75 5.45196V4.48933L4.75 4.48933C3.64543 4.48933 2.75 5.38476 2.75 6.48933L2.75 11.5893C2.75 12.0035 2.41421 12.3393 2 12.3393ZM14 3.66067C14.4142 3.66067 14.75 3.99646 14.75 4.41067V9.51066C14.75 11.4437 13.183 13.0107 11.25 13.0107H9.25001V14.0233C9.25001 14.4656 8.7179 14.6901 8.40109 14.3814L6.61759 12.6438C6.41615 12.4475 6.41615 12.1238 6.61759 11.9275L8.40109 10.1899C8.7179 9.88124 9.25001 10.1057 9.25001 10.548V11.5107H11.25C12.3546 11.5107 13.25 10.6152 13.25 9.51066V4.41067C13.25 3.99646 13.5858 3.66067 14 3.66067Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </nav>
              <nav
                className="md:hidden z-[3] fixed h-screen top-0 left-0 pl-xs transform-gpu transition-transform-width duration-sidebar ease-curve-sidebar -translate-x-nav-width-mobile md:-translate-x-nav-width w-nav-width-mobile md:w-nav-width"
                id="navigation-sidebar-mobile"
                aria-hidden="true"
              >
                <div className="text-nav-mobile md:text-nav-desktop mt-xl duration-short w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] transition-all ease-linear md:mt-[16.5rem] md:w-[calc(var(--spacing-nav-width)-var(--spacing-sm))] opacity-0">
                  <ul>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        Research
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-index"
                                href="/research/index/"
                              >
                                Research Index
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-overview"
                                href="/research/"
                              >
                                Research Overview
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-residency"
                                href="/residency/"
                              >
                                Research Residency
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear menu-label px-3xs pb-2xs md:pb-3xs first:pt-2xs md:first:pt-3xs text-primary-44 pt-7">
                              <span>Latest Advancements</span>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-latest-advancements-o3-o4-mini"
                                href="/index/introducing-o3-and-o4-mini/"
                              >
                                OpenAI o3 and o4-mini
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-latest-advancements-4-5"
                                href="/index/introducing-gpt-4-5/"
                              >
                                GPT-4.5
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-latest-advancements-o1"
                                href="/o1/"
                              >
                                OpenAI o1
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-latest-advancements-4o"
                                href="/index/gpt-4o-system-card/"
                              >
                                GPT-4o
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-news-research-latest-advancements-sora"
                                href="/index/sora-system-card/"
                              >
                                Sora
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        Safety
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-safety-approach"
                                href="/safety/"
                              >
                                Safety Approach
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-safety-security"
                                href="/security-and-privacy/"
                              >
                                Security &amp; Privacy
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <a
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:px-3xs md:py-3xs hover:!text-primary-100 block h-full w-full focus-visible:rounded-sm"
                        data-analytics="header-nav-for-business"
                        href="/business/"
                      >
                        For Business
                      </a>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-for-business-overview"
                                href="/business/"
                              >
                                Business Overview
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                href="/solutions/"
                              >
                                Solutions
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-for-business-contact-sales"
                                href="/contact-sales/"
                              >
                                Contact Sales
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        Kiorons
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-explore"
                                href="/chatgpt/overview/"
                              >
                                Explore Kiorons
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-explore-team"
                                href="/chatgpt/team/"
                              >
                                Team
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-explore-enterprise"
                                href="/chatgpt/enterprise/"
                              >
                                Enterprise
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-explore-education"
                                href="/chatgpt/education/"
                              >
                                Education
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-explore-pricing"
                                href="/chatgpt/pricing/"
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-chatgpt-download"
                                href="/chatgpt/download/"
                              >
                                Download
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        Sora
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-sora-overview"
                                href="/sora/"
                              >
                                Sora Overview
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                href="/sora/#features"
                              >
                                Features
                              </a>
                            </li>
                            <li className="relative transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                href="/sora/#pricing"
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                href="https://help.openai.com/en/articles/9957612-generating-videos-on-sora"
                                className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                target="_blank"
                                referrerPolicy="no-referrer-when-downgrade"
                                data-analytics="header-nav-sora-help"
                              >
                                Help Center
                                <svg
                                  width="9"
                                  style={{ transform: 'translate(1px, -2px)' }}
                                  viewBox="0 0 11 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="sr-only">(opens in a new window)</span>
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                href="https://sora.com/"
                                className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                target="_blank"
                                rel="noreferrer"
                                data-analytics="header-nav-sora-login"
                              >
                                Sora Log in
                                <svg
                                  width="9"
                                  style={{ transform: 'translate(1px, -2px)' }}
                                  viewBox="0 0 11 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="sr-only">(opens in a new window)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        API Platform
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-api-platform-platform"
                                href="/api/"
                              >
                                Platform Overview
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-api-platform-pricing"
                                href="/api/pricing/"
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                href="https://platform.openai.com/login"
                                className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                target="_blank"
                                referrerPolicy="no-referrer-when-downgrade"
                                data-analytics="header-nav-api-platform-api-login"
                              >
                                API Log in
                                <svg
                                  width="9"
                                  style={{ transform: 'translate(1px, -2px)' }}
                                  viewBox="0 0 11 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="sr-only">(opens in a new window)</span>
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                href="https://platform.openai.com/docs/overview"
                                className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                target="_blank"
                                referrerPolicy="no-referrer-when-downgrade"
                                data-analytics="header-nav-api-platform-documentation"
                              >
                                Documentation
                                <svg
                                  width="9"
                                  style={{ transform: 'translate(1px, -2px)' }}
                                  viewBox="0 0 11 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="sr-only">(opens in a new window)</span>
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                href="https://community.openai.com/"
                                className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                target="_blank"
                                referrerPolicy="no-referrer-when-downgrade"
                                data-analytics="header-nav-api-platform-developer-forum"
                              >
                                Developer Forum
                                <svg
                                  width="9"
                                  style={{ transform: 'translate(1px, -2px)' }}
                                  viewBox="0 0 11 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                    stroke="currentColor"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <span className="sr-only">(opens in a new window)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                      <a
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:px-3xs md:py-3xs hover:!text-primary-100 block h-full w-full focus-visible:rounded-sm"
                        data-analytics="header-nav-stories"
                        href="/stories/"
                      >
                        Stories
                      </a>
                    </li>
                    <li
                      className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2"
                      tabIndex="0"
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <button
                        tabIndex="-1"
                        className="px-4xs py-2xs md:px-3xs md:py-3xs w-full cursor-default text-left"
                        type="button"
                      >
                        Company
                      </button>
                      <div className="fixed z-[1] h-screen w-nav-width-mobile left-0 bg-secondary-100 md:z-auto md:bg-transparent md:w-nav-l2-width md:left-nav-width md:top-0 transition duration-sidebar ease-curve-sidebar top-[3.875rem] opacity-0 invisible pointer-events-none">
                        <div className="px-sm pt-2xs mb-md md:hidden">
                          <button
                            type="button"
                            className="px-5xs md:px-3xs md:py-3xs text-nav group inline-block w-full mb-[0.375rem]"
                          >
                            <div className="md:gap-3xs text-primary-44 flex items-center gap-[0.625rem] md:ml-[1px]">
                              <span className="duration-short transition-transform md:group-hover:-translate-x-1">
                                <svg
                                  className="w-[15px] md:w-[11px]"
                                  width="10"
                                  viewBox="0 0 12 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ transform: 'rotate(0deg)' }}
                                >
                                  <path
                                    d="M0.245636 8.59302C-0.0818787 8.2655 -0.0818787 7.7345 0.245636 7.40698L4.43892 3.2137C4.76643 2.88619 5.29744 2.88619 5.62495 3.2137C5.95247 3.54122 5.95247 4.07223 5.62495 4.39974L2.86335 7.16134H10.9025C11.3657 7.16134 11.7412 7.53682 11.7412 8C11.7412 8.46318 11.3657 8.83866 10.9025 8.83866H2.86335L5.62495 11.6003C5.95247 11.9278 5.95247 12.4588 5.62495 12.7863C5.29744 13.1138 4.76643 13.1138 4.43892 12.7863L0.245636 8.59302Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                              <span>Back to main menu</span>
                            </div>
                          </button>
                        </div>
                        <div className="px-2xs md:px-3xs h-full md:pt-[16.5rem]">
                          <ul className="group transition duration-fast ease-linear opacity-0 delay-0">
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-company-about-us"
                                href="/about/"
                              >
                                About Us
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-company-our-charter"
                                href="/charter/"
                              >
                                Our Charter
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-company-careers"
                                href="/careers/"
                              >
                                Careers
                              </a>
                            </li>
                            <li className="transition duration-fast ease-linear hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                              <a
                                className="transition ease-curve-a duration-250 px-3xs py-2xs md:py-3xs block h-full w-full focus-visible:rounded-sm"
                                data-analytics="header-nav-company-brand"
                                href="/brand/"
                              >
                                Brand Guidelines
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="hover:before:bg-primary-4 focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-[calc(100%-var(--spacing-4xs))] before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2">
                      <a
                        className="transition ease-curve-a duration-250 px-4xs py-2xs md:px-3xs md:py-3xs hover:!text-primary-100 block h-full w-full focus-visible:rounded-sm"
                        data-analytics="header-nav-news"
                        href="/news/"
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="duration-short fixed top-[90dvh] flex w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] items-center justify-between transition-opacity ease-linear opacity-0">
                  <div className="h-md flex md:hidden">
                    <button
                      type="button"
                      className="p-4xs cursor-pointer rounded-md transition-colors text-primary-44 md:hidden"
                      aria-label="Navigate to another product."
                      id="radix-:R2ql9svffa:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <svg
                        width="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 12.3393C1.58579 12.3393 1.25 12.0035 1.25 11.5893L1.25 6.48933C1.25 4.55633 2.817 2.98933 4.75 2.98933L6.75 2.98933V1.97671C6.75 1.53439 7.2821 1.30991 7.59892 1.61858L9.38241 3.3562C9.58386 3.55246 9.58386 3.8762 9.38242 4.07246L7.59892 5.81008C7.2821 6.11875 6.75 5.89427 6.75 5.45196V4.48933L4.75 4.48933C3.64543 4.48933 2.75 5.38476 2.75 6.48933L2.75 11.5893C2.75 12.0035 2.41421 12.3393 2 12.3393ZM14 3.66067C14.4142 3.66067 14.75 3.99646 14.75 4.41067V9.51066C14.75 11.4437 13.183 13.0107 11.25 13.0107H9.25001V14.0233C9.25001 14.4656 8.7179 14.6901 8.40109 14.3814L6.61759 12.6438C6.41615 12.4475 6.41615 12.1238 6.61759 11.9275L8.40109 10.1899C8.7179 9.88124 9.25001 10.1057 9.25001 10.548V11.5107H11.25C12.3546 11.5107 13.25 10.6152 13.25 9.51066V4.41067C13.25 3.99646 13.5858 3.66067 14 3.66067Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="p-4xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a -my-0.5 mx-1 cursor-pointer transition-colors bg-secondary-100 hidden rounded-full md:block"
                    aria-label="Navigate to another product."
                  >
                    <svg
                      width="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 12.3393C1.58579 12.3393 1.25 12.0035 1.25 11.5893L1.25 6.48933C1.25 4.55633 2.817 2.98933 4.75 2.98933L6.75 2.98933V1.97671C6.75 1.53439 7.2821 1.30991 7.59892 1.61858L9.38241 3.3562C9.58386 3.55246 9.58386 3.8762 9.38242 4.07246L7.59892 5.81008C7.2821 6.11875 6.75 5.89427 6.75 5.45196V4.48933L4.75 4.48933C3.64543 4.48933 2.75 5.38476 2.75 6.48933L2.75 11.5893C2.75 12.0035 2.41421 12.3393 2 12.3393ZM14 3.66067C14.4142 3.66067 14.75 3.99646 14.75 4.41067V9.51066C14.75 11.4437 13.183 13.0107 11.25 13.0107H9.25001V14.0233C9.25001 14.4656 8.7179 14.6901 8.40109 14.3814L6.61759 12.6438C6.41615 12.4475 6.41615 12.1238 6.61759 11.9275L8.40109 10.1899C8.7179 9.88124 9.25001 10.1057 9.25001 10.548V11.5107H11.25C12.3546 11.5107 13.25 10.6152 13.25 9.51066V4.41067C13.25 3.99646 13.5858 3.66067 14 3.66067Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] !outline-none bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
                    id="radix-:R1al9svffa:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    Log in
                  </button>
                </div>
              </nav>
            </div>
            <div className="pt-header-h relative">
              <div className="">
              {/*   <dialog className="ease-out-cubic fixed left-0 top-0 z-[103] m-0 h-screen max-h-full w-screen max-w-full overflow-auto overscroll-none bg-transparent transition-[opacity,transform,filter] backdrop:transition-all backdrop:bg-transparent backdrop:saturate-[2] backdrop:backdrop-blur-[50px] pointer-events-none invisible opacity-0 backdrop:opacity-0">
                  <div className="ease-out-cubic flex h-full min-h-fit w-full flex-col opacity-0 backdrop-blur-[50px] transition-[opacity,transform,filter,visibility] pointer-events-none opacity-0 bg-secondary-60 duration-800">
                    <div className="p-sm flex w-full justify-end">
                      <button
                        type="button"
                        className="text-primary-100 bg-primary-4 focus:outline-primary-12 backdrop-blur-[4.375rem] transition duration-200 ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-12"
                        aria-label="Close modal"
                      >
                        <svg
                          width="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.23431 4.23431C4.54673 3.9219 5.05327 3.9219 5.36569 4.23431L8 6.86863L10.6343 4.23431C10.9467 3.9219 11.4533 3.9219 11.7657 4.23431C12.0781 4.54673 12.0781 5.05327 11.7657 5.36569L9.13137 8L11.7657 10.6343C12.0781 10.9467 12.0781 11.4533 11.7657 11.7657C11.4533 12.0781 10.9467 12.0781 10.6343 11.7657L8 9.13137L5.36569 11.7657C5.05327 12.0781 4.54673 12.0781 4.23431 11.7657C3.9219 11.4533 3.9219 10.9467 4.23431 10.6343L6.86863 8L4.23431 5.36569C3.9219 5.05327 3.9219 4.54673 4.23431 4.23431Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="@container flex flex-1 items-center" id="modal-portal"></div>
                  </div>
                </dialog> */}

                <main id="main" tabIndex="-1" className="@container relative z-[1] outline-none">
                  {children}
                </main>

                <Footer />
              </div>
              <div className="duration-sidebar ease-curve-sidebar absolute left-0 top-0 h-full w-full transition-[background-color,backdrop-filter,left] pointer-events-none z-[2] md:hidden"></div>
            </div>
          </div>

          <ResponsiveToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
