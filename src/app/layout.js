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
import { Link } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const isLargeScreen = width >= 1024
      const isMobileScreen = width < 768

      setIsMobile(isMobileScreen)

      // Only auto toggle sidebar open state based on screen size
      if (isLargeScreen) {
        setIsSidebarOpen(true) // Sidebar open by default on large screens
      } else {
        setIsSidebarOpen(false) // Closed by default on tablets and mobiles
      }
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

  const navLinks = [
    { href: '/studio', label: 'Studio' },
    { href: '/tech', label: 'Tech' },
    { href: '/kone', label: 'kOne' },
    { href: '/company', label: 'Company' },
    { href: '/think', label: 'Think' },
    { href: '/career', label: 'Career' },
  ]

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
                : isMobile
                ? 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_0_1fr]'
                : 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[theme(spacing.nav-width-mobile)_1fr] md:grid-cols-[0_0_1fr]'
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

            {/* Side Nav Links */}

            <div className="relative overflow-x-hidden" id="sidebar-drawer">
              <nav
                className="px-xs w-nav-width absolute right-0 top-0 mt-[187px] hidden md:block"
                id="navigation-sidebar-desktop"
                aria-hidden="false"
              >
                <div
                  className={`fixed max-h-[calc(100svh-192px)] overflow-y-auto overflow-x-hidden pb-[46px]`}
                >
                  <div className="animate-sidebarSlideInLeft w-[calc(var(--spacing-nav-width)-2*var(--spacing-xs))]">
                    <ul className="text-nav-mobile space-y-0.5 font-bold md:text-nav-desktop">
                      {navLinks.map((link) => (
                        <li className="group relative" key={link.href}>
                          <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                            <a
                              className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                              data-analytics="header-nav-research"
                              href={link.href}
                            >
                              {link.label}
                            </a>
                            <span className="right-2xs md:right-3xs duration-fast pointer-events-none !absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0 !mt-2">
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
                      ))}
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
                className={`${
                  isSidebarOpen
                    ? 'md:hidden z-[3] fixed h-screen top-0 left-0 pl-xs transform-gpu transition-transform-width duration-sidebar ease-curve-sidebar w-nav-width-mobile md:w-nav-width'
                    : 'md:hidden z-[3] fixed h-screen top-0 left-0 pl-xs transform-gpu transition-transform-width duration-sidebar ease-curve-sidebar -translate-x-nav-width-mobile md:-translate-x-nav-width w-nav-width-mobile md:w-nav-width'
                }`}
                id="navigation-sidebar-mobile"
                aria-hidden="true"
              >
                <div
                  className={`${
                    isSidebarOpen
                      ? 'text-nav-mobile md:text-nav-desktop mt-xl duration-short w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] transition-all ease-linear md:mt-[16.5rem] md:w-[calc(var(--spacing-nav-width)-var(--spacing-sm))]'
                      : 'text-nav-mobile md:text-nav-desktop mt-xl duration-short w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] transition-all ease-linear md:mt-[16.5rem] md:w-[calc(var(--spacing-nav-width)-var(--spacing-sm))] opacity-0'
                  }`}
                >
                  <ul className="!mt-44 md:mt-0">
                    {navLinks.map((link) => (
                      <li className="group relative" key={link.href}>
                        <div className="focus-visible:before:bg-primary-4 focus-visible:before:outline-primary-44 before:duration-fast relative w-full items-center justify-between rounded-md before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:transition before:ease-linear focus-visible:outline-none focus-visible:before:outline focus-visible:before:outline-1 focus-visible:before:outline-offset-2 hover:before:bg-primary-4 hover:before:opacity-50 dark:hover:before:opacity-70">
                          <a
                            className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm"
                            data-analytics="header-nav-research"
                            href={link.href}
                          >
                            {link.label}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${
                    isSidebarOpen
                      ? 'duration-short fixed top-[90dvh] flex w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] items-center justify-between transition-opacity ease-linear'
                      : 'duration-short fixed top-[90dvh] flex w-[calc(var(--spacing-nav-width-mobile)-2.5rem)] items-center justify-between transition-opacity ease-linear opacity-0'
                  }`}
                >
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
            {/* Side Nav Links */}

            <div
              className={`${
                isSidebarOpen
                  ? 'pt-header-h relative overflow-x-hidden md:[overflow-x:initial]'
                  : 'pt-header-h relative'
              }`}
            >
              <div className={`${isSidebarOpen ? 'w-[100dvw] md:w-[initial]' : ''}`}>
                <dialog className="ease-out-cubic fixed left-0 top-0 z-[103] m-0 h-screen max-h-full w-screen max-w-full overflow-auto overscroll-none bg-transparent transition-[opacity,transform,filter] backdrop:transition-all backdrop:bg-transparent backdrop:saturate-[2] backdrop:backdrop-blur-[50px] pointer-events-none invisible opacity-0 backdrop:opacity-0">
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
                </dialog>

                <main id="main" tabIndex="-1" className="@container relative z-[1] outline-none">
                  {children}
                </main>

                <Footer />
              </div>

              <div
                className={`${
                  isSidebarOpen
                    ? 'duration-sidebar ease-curve-sidebar absolute left-0 top-0 h-full w-full transition-[background-color,backdrop-filter,left] bg-secondary-44 cursor-pointer backdrop-blur-[8px] md:backdrop-blur-lg z-[2] md:hidden'
                    : 'duration-sidebar ease-curve-sidebar absolute left-0 top-0 h-full w-full transition-[background-color,backdrop-filter,left] pointer-events-none z-[2] md:hidden'
                }`}
              ></div>
            </div>
          </div>

          <ResponsiveToaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
