'use client'

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

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import LandingCard from '@/components/landing/LandingCard'
import BlogCard from '@/components/landing/BlogCard'
import ScrollSection from '@/components/landing/ScrollSection'
import Footer from './Footer'
import HeroProdulctSection from './HeroProdulctSection'
export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSidebarOpen(window.innerWidth >= 1024) // Default sidebar open only on large screens
    }

    window.addEventListener('resize', checkMobile)
    checkMobile()

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Constants simulating Tailwind theme values
  const navWidthMobile = '4rem' // same as theme(spacing.nav-width-mobile)
  const navWidth = '16rem' // same as theme(spacing.nav-width)

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
    <>
      <header>
        <div className="h-header-h duration-medium px-sm md:px-md bg-secondary-100 fixed left-0 right-0 top-0 flex justify-end transition z-[51]">
          <Link
            className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] left-xs top-xl absolute z-[102] [&amp;:not(:focus-visible)]:pointer-events-none [&amp;:not(:focus-visible)]:opacity-0 bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
            href="#main"
          >
            Skip to main content
          </Link>
          <div className="md:-mr-5xs flex items-center flex-row-reverse md:flex-row">
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              aria-controls="sidebar-drawer"
              aria-expanded={isSidebarOpen}
              className="p-xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a cursor-pointer transition-colors pr-0 md:hidden pl-0"
              aria-label="Toggle navigation sidebar"
            >
              <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM6.85424 5.05118C6.24907 5.10062 5.90138 5.19279 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4.19279 6.90138 4.10062 7.24907 4.05118 7.85424C4.00078 8.47108 4 9.26339 4 10.4V13.6C4 14.7366 4.00078 15.5289 4.05118 16.1458C4.10062 16.7509 4.19279 17.0986 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C5.90138 18.8072 6.24907 18.8994 6.85424 18.9488C7.17922 18.9754 7.55292 18.9882 8 18.9943V5.0057C7.55292 5.01184 7.17922 5.02462 6.85424 5.05118ZM10 5V19H14.6C15.7366 19 16.5289 18.9992 17.1458 18.9488C17.7509 18.8994 18.0986 18.8072 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C19.8072 17.0986 19.8994 16.7509 19.9488 16.1458C19.9992 15.5289 20 14.7366 20 13.6V10.4C20 9.26339 19.9992 8.47108 19.9488 7.85424C19.8994 7.24907 19.8072 6.90138 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C18.0986 5.19279 17.7509 5.10062 17.1458 5.05118C16.5289 5.00078 15.7366 5 14.6 5H10Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <div className="gap-4xs items-center transition-opacity duration-300 flex">
              <div className="relative z-[51]">
                <div className="duration-short ease-primary rounded-full backdrop-blur-3xl transition delay-200">
                  <button
                    type="button"
                    className="transition duration-200 ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[40px] h-[40px] focus:outline-primary-44 text-primary-44 hover:text-primary-100"
                    aria-label="Open Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.8333 13.8333L10.7022 10.7022M10.7022 10.7022C11.607 9.79738 12.1667 8.54738 12.1667 7.16667C12.1667 4.40525 9.9281 2.16667 7.16667 2.16667C4.40525 2.16667 2.16667 4.40525 2.16667 7.16667C2.16667 9.9281 4.40525 12.1667 7.16667 12.1667C8.54738 12.1667 9.79738 11.607 10.7022 10.7022Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="duration-short ease-primary absolute bottom-0 left-0 right-0 top-0 w-0 origin-right rounded-md transition-all opacity-0">
                  <button
                    type="button"
                    className="transition duration-200 ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[40px] h-[40px] focus:outline-primary-44 text-primary-44 hover:text-primary-100"
                    aria-label="Close Search"
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
              </div>
              <div className="hidden rounded-[2.5rem] backdrop-blur-3xl md:block bg-secondary-44 z-[51]">
                <button
                  type="button"
                  className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] !outline-none bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
                  id="radix-:R1ab9svffa:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-5xs left-sm md:left-md duration-medium fixed top-0 transition-transform z-[53]">
          <div className="gap-3xs h-header-h flex">
            <div className="BrandIsland_island__F6p_0">
              <Link
                aria-label="OpenAI Home"
                className="transition ease-curve-a duration-250 relative flex h-full w-[94px] items-center"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-sm absolute left-0 origin-center md:w-[28px] BrandIsland_blossom__ZmsAO rotate-[-20deg] opacity-0"
                  width="28"
                  viewBox="0 0 156 154"
                  fill="none"
                >
                  <path
                    d="M59.7325 56.1915V41.6219C59.7325 40.3948 60.1929 39.4741 61.266 38.8613L90.5592 21.9915C94.5469 19.6912 99.3013 18.6181 104.208 18.6181C122.612 18.6181 134.268 32.8813 134.268 48.0637C134.268 49.1369 134.268 50.364 134.114 51.5911L103.748 33.8005C101.908 32.7274 100.067 32.7274 98.2267 33.8005L59.7325 56.1915ZM128.133 112.937V78.1222C128.133 75.9745 127.212 74.441 125.372 73.3678L86.878 50.9768L99.4538 43.7682C100.527 43.1554 101.448 43.1554 102.521 43.7682L131.814 60.6381C140.25 65.5464 145.923 75.9745 145.923 86.0961C145.923 97.7512 139.023 108.487 128.133 112.935V112.937ZM50.6841 82.2638L38.1083 74.9028C37.0351 74.29 36.5748 73.3693 36.5748 72.1422V38.4025C36.5748 21.9929 49.1506 9.5696 66.1744 9.5696C72.6162 9.5696 78.5962 11.7174 83.6585 15.5511L53.4461 33.0352C51.6062 34.1084 50.6855 35.6419 50.6855 37.7897V82.2653L50.6841 82.2638ZM77.7533 97.9066L59.7325 87.785V66.3146L77.7533 56.193L95.7725 66.3146V87.785L77.7533 97.9066ZM89.3321 144.53C82.8903 144.53 76.9103 142.382 71.848 138.549L102.06 121.064C103.9 119.991 104.821 118.458 104.821 116.31V71.8343L117.551 79.1954C118.624 79.8082 119.084 80.7289 119.084 81.956V115.696C119.084 132.105 106.354 144.529 89.3321 144.529V144.53ZM52.9843 110.33L23.6911 93.4601C15.2554 88.5517 9.58181 78.1237 9.58181 68.0021C9.58181 56.193 16.6365 45.611 27.5248 41.163V76.1299C27.5248 78.2776 28.4455 79.8111 30.2854 80.8843L68.6271 103.121L56.0513 110.33C54.9781 110.943 54.0574 110.943 52.9843 110.33ZM51.2983 135.482C33.9681 135.482 21.2384 122.445 21.2384 106.342C21.2384 105.115 21.3923 103.888 21.5448 102.661L51.7572 120.145C53.5971 121.218 55.4385 121.218 57.2784 120.145L95.7725 97.9081V112.478C95.7725 113.705 95.3122 114.625 94.239 115.238L64.9458 132.108C60.9582 134.408 56.2037 135.482 51.2969 135.482H51.2983ZM89.3321 153.731C107.889 153.731 123.378 140.542 126.907 123.058C144.083 118.61 155.126 102.507 155.126 86.0976C155.126 75.3617 150.525 64.9336 142.243 57.4186C143.01 54.1977 143.471 50.9768 143.471 47.7573C143.471 25.8267 125.68 9.41567 105.129 9.41567C100.989 9.41567 97.0011 10.0285 93.0134 11.4095C86.1112 4.66126 76.6024 0.367188 66.1744 0.367188C47.6171 0.367188 32.1282 13.5558 28.5994 31.0399C11.4232 35.4879 0.380859 51.5911 0.380859 68.0006C0.380859 78.7365 4.98133 89.1645 13.2631 96.6795C12.4963 99.9004 12.036 103.121 12.036 106.341C12.036 128.271 29.8265 144.682 50.3777 144.682C54.5178 144.682 58.5055 144.07 62.4931 142.689C69.3938 149.437 78.9026 153.731 89.3321 153.731Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="absolute mt-[7px] h-[24px] w-[91px] md:left-[1.5px] md:mt-[3px] BrandIsland_wordmark__SByOy opacity-100 BrandIsland_visible__DYeyd">
                  {/* <!-- Header Logo --> */}
                  {/* <svg
                    className="w-[4.9375rem] will-change-transform md:w-[5.625rem]"
                    width="90"
                    viewBox="0 0 288 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 0.398438C13.77 0.398438 0 14.1684 0 30.9984C0 47.8284 13.77 61.5984 30.6 61.5984C47.43 61.5984 61.2 47.9134 61.2 30.9984C61.2 14.0834 47.515 0.398438 30.6 0.398438ZM30.6 50.6334C20.145 50.6334 11.73 42.0484 11.73 30.9984C11.73 19.9484 20.145 11.3634 30.6 11.3634C41.055 11.3634 49.47 19.9484 49.47 30.9984C49.47 42.0484 41.055 50.6334 30.6 50.6334Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M92.1393 17.3984C86.6143 17.3984 81.2593 19.6084 78.4543 23.3484V18.2484H67.4043V77.7484H78.4543V56.2434C81.2593 59.7284 86.4443 61.5984 92.1393 61.5984C104.039 61.5984 113.389 52.2484 113.389 39.4984C113.389 26.7484 104.039 17.3984 92.1393 17.3984ZM90.2693 51.9934C83.9793 51.9934 78.3693 47.0634 78.3693 39.4984C78.3693 31.9334 83.9793 27.0034 90.2693 27.0034C96.5593 27.0034 102.169 31.9334 102.169 39.4984C102.169 47.0634 96.5593 51.9934 90.2693 51.9934Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M139.401 17.3984C127.331 17.3984 117.811 26.8334 117.811 39.4984C117.811 52.1634 126.141 61.5984 139.741 61.5984C150.876 61.5984 158.016 54.8834 160.226 47.3184H149.431C148.071 50.4634 144.246 52.6734 139.656 52.6734C133.961 52.6734 129.626 48.6784 128.606 42.9834H160.736V38.6484C160.736 27.0884 152.661 17.3984 139.401 17.3984ZM128.691 35.1634C129.881 29.8084 134.301 26.3234 139.656 26.3234C145.351 26.3234 149.686 30.0634 150.196 35.1634H128.691Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M190.145 17.3984C185.215 17.3984 180.03 19.6084 177.65 23.2634V18.2484H166.6V60.7484H177.65V37.8834C177.65 31.2534 181.22 26.9184 187 26.9184C192.355 26.9184 195.245 30.9984 195.245 36.6934V60.7484H206.295V34.9084C206.295 24.3684 199.835 17.3984 190.145 17.3984Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M234.596 1.25L210.541 60.75H222.356L227.456 47.745H254.826L259.926 60.75H271.911L248.026 1.25H234.596ZM231.281 37.885L241.141 12.98L250.916 37.885H231.281Z"
                      fill="currentColor"
                    ></path>
                    <path d="M287.636 1.25H276.416V60.75H287.636V1.25Z" fill="currentColor"></path>
                  </svg> */}{' '}
                  <span
                    style={{
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '28px',
                      marginTop: '-35px',
                    }}
                  >
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Kiorons
                    </Link>
                  </span>
                </div>
              </Link>
            </div>
            {/* <button
            type="button"
            aria-controls="sidebar-drawer"
            aria-expanded="false"
            className="p-xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a cursor-pointer transition-colors hidden md:block"
            aria-label="Toggle navigation sidebar"
          >
            <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM6.85424 5.05118C6.24907 5.10062 5.90138 5.19279 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4.19279 6.90138 4.10062 7.24907 4.05118 7.85424C4.00078 8.47108 4 9.26339 4 10.4V13.6C4 14.7366 4.00078 15.5289 4.05118 16.1458C4.10062 16.7509 4.19279 17.0986 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C5.90138 18.8072 6.24907 18.8994 6.85424 18.9488C7.17922 18.9754 7.55292 18.9882 8 18.9943V5.0057C7.55292 5.01184 7.17922 5.02462 6.85424 5.05118ZM10 5V19H14.6C15.7366 19 16.5289 18.9992 17.1458 18.9488C17.7509 18.8994 18.0986 18.8072 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C19.8072 17.0986 19.8994 16.7509 19.9488 16.1458C19.9992 15.5289 20 14.7366 20 13.6V10.4C20 9.26339 19.9992 8.47108 19.9488 7.85424C19.8994 7.24907 19.8072 6.90138 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C18.0986 5.19279 17.7509 5.10062 17.1458 5.05118C16.5289 5.00078 15.7366 5 14.6 5H10Z"
                fill="currentColor"
              ></path>
            </svg>
          </button> */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)} // <-- toggles the sidebar
              aria-controls="sidebar-drawer"
              aria-expanded={isSidebarOpen}
              className="p-xs text-primary-44 hover:text-primary-100 duration-short ease-curve-a cursor-pointer transition-colors hidden md:block"
              aria-label="Toggle navigation sidebar"
            >
              <svg
                width="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:mt-[10px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.35719 3H14.6428C15.7266 2.99999 16.6007 2.99998 17.3086 3.05782C18.0375 3.11737 18.6777 3.24318 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C21.7568 6.32234 21.8826 6.96253 21.9422 7.69138C22 8.39925 22 9.27339 22 10.3572V13.6428C22 14.7266 22 15.6008 21.9422 16.3086C21.8826 17.0375 21.7568 17.6777 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.6777 20.7568 18.0375 20.8826 17.3086 20.9422C16.6008 21 15.7266 21 14.6428 21H9.35717C8.27339 21 7.39925 21 6.69138 20.9422C5.96253 20.8826 5.32234 20.7568 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2.24318 17.6777 2.11737 17.0375 2.05782 16.3086C1.99998 15.6007 1.99999 14.7266 2 13.6428V10.3572C1.99999 9.27341 1.99998 8.39926 2.05782 7.69138C2.11737 6.96253 2.24318 6.32234 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.32234 3.24318 5.96253 3.11737 6.69138 3.05782C7.39926 2.99998 8.27341 2.99999 9.35719 3ZM6.85424 5.05118C6.24907 5.10062 5.90138 5.19279 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4.19279 6.90138 4.10062 7.24907 4.05118 7.85424C4.00078 8.47108 4 9.26339 4 10.4V13.6C4 14.7366 4.00078 15.5289 4.05118 16.1458C4.10062 16.7509 4.19279 17.0986 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C5.90138 18.8072 6.24907 18.8994 6.85424 18.9488C7.17922 18.9754 7.55292 18.9882 8 18.9943V5.0057C7.55292 5.01184 7.17922 5.02462 6.85424 5.05118ZM10 5V19H14.6C15.7366 19 16.5289 18.9992 17.1458 18.9488C17.7509 18.8994 18.0986 18.8072 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C19.8072 17.0986 19.8994 16.7509 19.9488 16.1458C19.9992 15.5289 20 14.7366 20 13.6V10.4C20 9.26339 19.9992 8.47108 19.9488 7.85424C19.8994 7.24907 19.8072 6.90138 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C18.0986 5.19279 17.7509 5.10062 17.1458 5.05118C16.5289 5.00078 15.7366 5 14.6 5H10Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="duration-sidebar ease-curve-sidebar absolute left-0 top-0 h-full w-full transition-[background-color,backdrop-filter,left] pointer-events-none z-[52] hidden md:block"></div>
      </header>
      {/* <div className="duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_theme(spacing.nav-width)_1fr]"> */}
      {/* <div className='duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_0_1fr]'> */}
      <div
        className={`${
          isSidebarOpen
            ? 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_theme(spacing.nav-width)_1fr]'
            : 'duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_0_1fr]'
        }`}
      >
        {/* duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[theme(spacing.nav-width-mobile)_1fr] md:grid-cols-[0_theme(spacing.nav-width)_1fr] */}

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
                <svg width="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg width="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <HeroProdulctSection />
              <span className="sr-only" aria-live="polite" aria-atomic="true">
                Kiorons
              </span>
              <article className="flex flex-col gap-2xl @md:gap-3xl">
                
                <div className="@container w-full">
                  <div className="@lg:max-w-container @lg:grid-cols-4 gap-sm grid w-full grid-cols-1">
                    <div className="@lg:col-span-3 @lg:sticky @lg:mb-0 mb-sm duration-medium grid-cols-1 self-start transition-[top] @lg:top-header-h">
                      <div className="px-sm block md:hidden">
                        <div className="group relative">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '4/5' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.0125] group-hover:[&amp;_video]:scale-[1.0125]">
                            <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-4/5 bg-surface-loading">
                                  <Image
                                    alt="Sam Altman and Jony Ive"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=3840&q=90&fm=webp"
                                    loading="lazy"
                                    decoding="async"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover object-center text-transparent"
                                    sizes="(min-width: 1728px) 1728px, 100vw"
                                  />
                                  <div
                                    style={{ position: 'relative', width: '100%', height: '100%' }}
                                  >
                                    <Image
                                      alt="Sam Altman and Jony Ive"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=3840&q=90&fm=webp"
                                      fill
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      loading="lazy"
                                      decoding="async"
                                      className="object-cover object-center"
                                      style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        color: 'transparent',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            aria-label="A letter from Sam &amp; Jony - Company - Jul 9, 2025"
                            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                            data-analytics="2-0-home-card-grid-featured-sam-and-jony"
                            id="48bHYUWfdD9gvoHFsnbXln"
                            href="/sam-and-jony/"
                          >
                            <div className="text-primary-100 relative w-full">
                              <div className="mb-2xs text-h2 @md:pr-2xl">
                                <p>A letter from Sam &amp; Jony</p>
                              </div>
                              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-md">
                                <span className="text-nowrap">Company</span>
                                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                  <span className="text-primary-44 text-nowrap">3 min read</span>
                                </span>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="px-sm @md:px-md @lg:px-0 @lg:pb-[var(--pb)] relative hidden md:block">
                        <div className="group relative">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '16/9' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.0125] group-hover:[&amp;_video]:scale-[1.0125]">
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-[16/9] bg-surface-loading">
                                  <Image
                                    alt="Sam Altman and Jony Ive"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=3840&q=90&fm=webp"
                                    fill
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1728px) 1728px, 100vw"
                                    className="object-cover object-center"
                                    style={{
                                      position: 'absolute',
                                      height: '100%',
                                      width: '100%',
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: 'transparent',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link
                            aria-label="A letter from Sam &amp; Jony - Company - Jul 9, 2025"
                            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                            data-analytics="2-0-home-card-grid-featured-sam-and-jony"
                            id="48bHYUWfdD9gvoHFsnbXln"
                            href="/sam-and-jony/"
                          >
                            <div className="text-primary-100 relative w-full">
                              <div className="mb-2xs text-h2 @md:pr-2xl">
                                <p>A letter from Sam &amp; Jony</p>
                              </div>
                              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-md">
                                <span className="text-nowrap">Company</span>
                                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                  <span className="text-primary-44 text-nowrap">3 min read</span>
                                </span>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="px-sm @md:px-md @lg:px-0 @lg:grid-cols-1 gap-y-xl gap-x-2xs col-span-1 grid grid-cols-1 @md:grid-cols-3">
                      <div className="@lg:pb-[var(--pb)] relative">
                        <div className="group relative">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="aspect-1/1  :min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                                <button
                                  type="button"
                                  className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                                  aria-label="Pause video"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 11 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <a
                            aria-label="Introducing Codex - Release - May 16, 2025"
                            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                            data-analytics="2-0-home-card-grid-featured-small-codex"
                            id="5Jp3tazBlA8Cj0dABwshH7"
                            href="/index/introducing-codex/"
                          >
                            <div className="text-primary-100 relative w-full">
                              <div className="mb-2xs text-h5 @md:pr-md">Introducing Codex</div>
                              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                <span className="text-nowrap">Release</span>
                                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                  <span className="text-primary-44 text-nowrap">12 min read</span>
                                </span>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="@lg:pb-[var(--pb)] relative">
                        <div className="group relative">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  <Image
                                    alt="[2.0] home > card grid > featured > large > o3 and o4-mini > media background > poster image"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=3840&q=90&fm=webp"
                                    fill
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1728px) 1728px, 100vw"
                                    className="absolute inset-0 w-full h-full object-cover object-center text-transparent"
                                  />
                                </div>
                              </div>
                              <div className="aspect-1/1  :min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                                <button
                                  type="button"
                                  className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                                  aria-label="Pause video"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    viewBox="0 0 11 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <a
                            aria-label="OpenAI o3 and o4-mini - Release - Apr 16, 2025"
                            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                            data-analytics="2-0-home-card-grid-featured-small-audio-models"
                            id="282yXxMfiMVjYVDHXM289b"
                            href="/index/introducing-o3-and-o4-mini/"
                          >
                            <div className="text-primary-100 relative w-full">
                              <div className="mb-2xs text-h5 @md:pr-md">
                                <p>OpenAI o3 and o4-mini</p>
                              </div>
                              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                <span className="text-nowrap">Release</span>
                                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                  <span className="text-primary-44 text-nowrap">11 min read</span>
                                </span>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="@lg:pb-[var(--pb)] relative">
                        <div className="group relative">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  <Image
                                    alt="[2.0] home > card grid > featured > large > o3 and o4-mini > media background > poster image"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=3840&q=90&fm=webp"
                                    fill
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1728px) 1728px, 100vw"
                                    className="absolute inset-0 w-full h-full object-cover object-center text-transparent"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            aria-label="Building a custom math tutor powered by Kiorons - Kiorons - Feb 4, 2025"
                            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                            data-analytics="my-dog-the-math-tutor"
                            id="oAiPe1oLiuAS7Z4af7Bpj"
                            href="/index/my-dog-the-math-tutor/"
                          >
                            <div className="text-primary-100 relative w-full">
                              <div className="mb-2xs text-h5 @md:pr-md">
                                Building a custom math tutor powered by Kiorons
                              </div>
                              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                <span className="text-nowrap">Kiorons</span>
                                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                  <span className="text-primary-44 text-nowrap">4 min read</span>
                                </span>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="@container w-full">
                  <div className="max-w-container mb-md flex items-baseline justify-between">
                    <div>
                      <h2 className="text-h4 text-primary-100">Latest news</h2>
                    </div>
                    <a
                      className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
                      data-analytics="homepage-latest-news"
                      href="/news/"
                    >
                      View all
                    </a>
                  </div>
                  <div className="max-w-container grid w-full grid-cols-1 gap-sm @lg:grid-cols-2">
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  <Image
                                    alt="Bio risks > Hero image"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/3SjnMKaSmFNlXjhIN5P2rC/db90af4fd96bb83f0be48c942e0efa54/oai_GA_Stories_1.1.png?w=3840&q=90&fm=webp"
                                    fill
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover object-center text-transparent"
                                    sizes="(min-width: 768px) 11.563rem, 7.5rem"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="Preparing for future AI risks in biology - Safety - Jun 18, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-preparing-for-future-ai-capabilities-in-biology"
                          id="7jqGtVlmEffaXqxdjhsBHJ"
                          href="/index/preparing-for-future-ai-capabilities-in-biology/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">
                              Preparing for future AI risks in biology
                            </div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Safety</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-06-18T10:00"
                                >
                                  Jun 18, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  {/* <Image
                                    alt="mattels iconic brands &gt; cover image"
                                    data-nosnippet="true"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover object-center"
                                    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="basis-[7.5rem] md:basis-[11.563rem]"
                                    srcSet="https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=16&amp;q=90&amp;fm=webp 16w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=32&amp;q=90&amp;fm=webp 32w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=48&amp;q=90&amp;fm=webp 48w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=64&amp;q=90&amp;fm=webp 64w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=96&amp;q=90&amp;fm=webp 96w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=128&amp;q=90&amp;fm=webp 128w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=256&amp;q=90&amp;fm=webp 256w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=384&amp;q=90&amp;fm=webp 384w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/7mxA6Nz8sMAyWaHE7PZcpA/e9e1cd86700761d1d899f49b9aa3547d/mattell-1.1.png?w=3840&amp;q=90&amp;fm=webp"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="Bringing the Magic of AI to Mattel’s Iconic Brands - Company - Jun 12, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-bringing-the-magic-of-ai-to-mattels-iconic-brands"
                          id="2uUyZCS9P2vG0B4CH8mRlX"
                          href="/index/mattels-iconic-brands/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">
                              Bringing the Magic of AI to Mattel’s Iconic Brands
                            </div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Company</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-06-12T00:00"
                                >
                                  Jun 12, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  {/* <Image
                                    alt=" Scaling security &gt; Cover image"
                                    data-nosnippet="true"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover object-center"
                                    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="basis-[7.5rem] md:basis-[11.563rem]"
                                    srcSet="https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=16&amp;q=90&amp;fm=webp 16w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=32&amp;q=90&amp;fm=webp 32w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=48&amp;q=90&amp;fm=webp 48w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=64&amp;q=90&amp;fm=webp 64w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=96&amp;q=90&amp;fm=webp 96w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=128&amp;q=90&amp;fm=webp 128w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=256&amp;q=90&amp;fm=webp 256w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=384&amp;q=90&amp;fm=webp 384w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/3repmGl4ll7LtJEotoSW5k/477e3b378c7e454cd616a8ac4ef7cb41/oai_GA_Stories_1.1__1_.png?w=3840&amp;q=90&amp;fm=webp"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="Scaling security with responsible disclosure - Security - Jun 9, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-scaling-coordinated-vulnerability-disclosure"
                          id="a3zzzoHuFqIBeAgnEsbjn"
                          href="/index/scaling-coordinated-vulnerability-disclosure/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">
                              Scaling security with responsible disclosure
                            </div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Security</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-06-09T10:00"
                                >
                                  Jun 9, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  {/* <Image
                                    alt="response-to-nyt-data-demands &gt; cover image"
                                    data-nosnippet="true"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover object-center"
                                    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="basis-[7.5rem] md:basis-[11.563rem]"
                                    srcSet="https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=16&amp;q=90&amp;fm=webp 16w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=32&amp;q=90&amp;fm=webp 32w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=48&amp;q=90&amp;fm=webp 48w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=64&amp;q=90&amp;fm=webp 64w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=96&amp;q=90&amp;fm=webp 96w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=128&amp;q=90&amp;fm=webp 128w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=256&amp;q=90&amp;fm=webp 256w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=384&amp;q=90&amp;fm=webp 384w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/5NVvCGHPLTkDWcolTBiuQL/57f0378995e6c61efa7a6562c5f0b0db/oai_GA_Stories_1.1_v2.png?w=3840&amp;q=90&amp;fm=webp"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="How we’re responding to The New York Times’ data demands in order to protect user privacy - Security - Jun 5, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-how-were-responding-to-the-new-york-times-data-demands-in-order-to-protect-user-privacy"
                          id="2nz7Uwlqk5ix4jgbYuFZI6"
                          href="/index/response-to-nyt-data-demands/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">
                              How we’re responding to The New York Times’ data demands in order to
                              protect user privacy
                            </div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Security</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-06-05T16:30"
                                >
                                  Jun 5, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  {/* <Image
                                    alt="OpenAI in Deutschland &gt; Cover image"
                                    data-nosnippet="true"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover object-center"
                                    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="basis-[7.5rem] md:basis-[11.563rem]"
                                    srcSet="https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=16&amp;q=90&amp;fm=webp 16w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=32&amp;q=90&amp;fm=webp 32w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=48&amp;q=90&amp;fm=webp 48w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=64&amp;q=90&amp;fm=webp 64w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=96&amp;q=90&amp;fm=webp 96w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=128&amp;q=90&amp;fm=webp 128w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=256&amp;q=90&amp;fm=webp 256w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=384&amp;q=90&amp;fm=webp 384w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/26hk65fa4fOWYv4GMRWgGL/98c0a24b18058093cf415abe2937b317/oai_GA_Stories_1.1__2_.png?w=3840&amp;q=90&amp;fm=webp"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="OpenAI Deutschland - Company - May 22, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-openai-deutschland"
                          id="72wMQjQFhwFJF5wvYvkGXc"
                          href="/index/openai-deutschland/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">OpenAI Deutschland</div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Company</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-05-22T23:00"
                                >
                                  May 22, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="group flex w-full items-center overflow-hidden">
                        <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                          <div
                            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                            style={{ aspectRatio: '1/1' }}
                          ></div>
                          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
                            <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                              <div className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                  {/* <Image
                                    alt="CoT &gt; Cover Image"
                                    data-nosnippet="true"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover object-center"
                                    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="basis-[7.5rem] md:basis-[11.563rem]"
                                    srcSet="https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=16&amp;q=90&amp;fm=webp 16w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=32&amp;q=90&amp;fm=webp 32w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=48&amp;q=90&amp;fm=webp 48w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=64&amp;q=90&amp;fm=webp 64w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=96&amp;q=90&amp;fm=webp 96w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=128&amp;q=90&amp;fm=webp 128w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=256&amp;q=90&amp;fm=webp 256w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=384&amp;q=90&amp;fm=webp 384w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                    src="https://images.ctfassets.net/kftzwdyauwt9/6XnkAAIBeCxAiQL3kEqkgT/20b29517ad5ff3a65b1d241f5ef44dc4/CoT_Art_1x1.png?w=3840&amp;q=90&amp;fm=webp"
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          aria-label="New tools and features in the Responses API - Product - May 21, 2025"
                          className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                          data-analytics="2-0-home-card-grid-latest-news-new-tools-and-features-in-the-responses-api"
                          id="4HKIC43ul6GQBea2yPAffI"
                          href="/index/new-tools-and-features-in-the-responses-api/"
                        >
                          <div>
                            <div className="mb-2xs text-h5">
                              New tools and features in the Responses API
                            </div>
                            <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-nowrap">Product</span>
                              <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                <time
                                  className="text-primary-44 text-nowrap"
                                  dateTime="2025-05-21T08:00"
                                >
                                  May 21, 2025
                                </time>
                              </span>
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="@container w-full">
                  <div className="max-w-container mb-md flex items-baseline justify-between">
                    <div>
                      <h2 className="text-h4 text-primary-100">Stories</h2>
                    </div>
                    <a
                      className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
                      data-analytics="homepage-stories"
                      href="/stories/"
                    >
                      View all
                    </a>
                  </div>
                  <div className="@lg:max-w-container flex w-auto">
                    <div className="w-full no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
                      <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 pr-sm @md:min-w-[unset] flex min-w-[56rem] grid flex-none grid-cols-3">
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '4/5' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                                <div className="aspect-4/5  :min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                                  <button
                                    type="button"
                                    className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                                    aria-label="Pause video"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="10"
                                      viewBox="0 0 11 16"
                                      fill="none"
                                    >
                                      <path
                                        d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Lyndon Barrois &amp; Sora - Sora - Dec 4, 2024"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="7vLw4u5QRCzDymwvnqUAFW"
                              id="4uDykhOfPD92NypHuyDziZ"
                              href="/index/sora-lyndon-barrois/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  <p>Lyndon Barrois &amp; Sora</p>
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">Sora</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                    <time
                                      className="text-primary-44 text-nowrap"
                                      dateTime="2024-12-04"
                                    >
                                      Dec 4, 2024
                                    </time>
                                    <span className="text-primary-44 text-nowrap">3 min read</span>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '16/9' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-16/9 bg-surface-loading">
                                    {/* <Image
                                      alt="Ten tiny canvases &gt; Media &gt; Cover"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/16VYfNV8RPoKM0nqEG4OrP/5ba2052acfb2a64a141ad161f5b92a38/Ten_tiny_canvases_.jpg?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Creating nail art with Kiorons - Kiorons - Feb 4, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="creating-nail-art-with-chatgpt"
                              id="5sdDlga6EviS3XUkGofI6e"
                              href="/index/ten-tiny-canvases/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  <p>Creating nail art with Kiorons</p>
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">Kiorons</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                    <time
                                      className="text-primary-44 text-nowrap"
                                      dateTime="2025-02-04T00:00"
                                    >
                                      Feb 4, 2025
                                    </time>
                                    <span className="text-primary-44 text-nowrap">4 min read</span>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '1/1' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                    {/* <Image
                                      alt="Tyler Cowen: OpenAI o1 &amp; Economics"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/RjA6hgCo6gPVKY91jdzg6/55bca90ce0324efd1e11ff24a0d455a6/Economics_and_reasoning_with_o1.jpg?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Economics and reasoning with OpenAI o1 - Kiorons - Sep 13, 2024"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="zPuYdYr4Jp0X2pDNrbO3M"
                              id="1kVGDVFacFQaPhwdcT05Qm"
                              href="/index/o1-economics/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  <p>Economics and reasoning with OpenAI o1</p>
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">Kiorons</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                    <time
                                      className="text-primary-44 text-nowrap"
                                      dateTime="2024-09-13"
                                    >
                                      Sep 13, 2024
                                    </time>
                                    <span className="text-primary-44 text-nowrap">2 min read</span>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="@container w-full">
                  <div className="max-w-container mb-md flex items-baseline justify-between">
                    <div>
                      <h2 className="text-h4 text-primary-100">Latest research</h2>
                    </div>
                    <a
                      className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
                      data-analytics="homepage-research-view-all"
                      href="/research/index/"
                    >
                      View all
                    </a>
                  </div>
                  <div className="@lg:max-w-container flex w-auto">
                    <div className="w-full">
                      <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 @md:grid @md:grid-cols-2 flex-none">
                        <div className="mb-md @md:mb-0 relative min-w-1/2">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '4/3' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-4/3 bg-surface-loading">
                                    {/* <Image
                                      alt="Emergent misalignment &gt; Cover Image"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/5UA7skl48NpGWEJ6YX2KAF/83f72b08ff36722bb4788383289a79c0/oai_emergent_misalignment_blog_1x1.png?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Toward understanding and preventing misalignment generalization - Publication - Jun 18, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="emergent-misalignment"
                              id="5PjPj89RGyoHWvnc5t5Bwn"
                              href="/index/emergent-misalignment/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h4 @md:pr-md">
                                  Toward understanding and preventing misalignment generalization
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">Publication</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                    <time
                                      className="text-primary-44 text-nowrap"
                                      dateTime="2025-06-18T10:00"
                                    >
                                      Jun 18, 2025
                                    </time>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mb-md @md:mb-0 relative min-w-1/2">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '4/3' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-4/3 bg-surface-loading">
                                    {/* <Image
                                      alt="HealthBench &gt; Cover Image"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/6AU7liPu8o1QBc4DkDSedu/0afcf2cf491e0bb84f7311a0dd496c6b/oai_ambrosia_health_eval_1.1.png?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Introducing HealthBench - Publication - May 12, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="healthbench"
                              id="1bwyS9rmeHguANpEEcTHD3"
                              href="/index/healthbench/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h4 @md:pr-md">
                                  Introducing HealthBench
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">Publication</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                                    <time
                                      className="text-primary-44 text-nowrap"
                                      dateTime="2025-05-12T10:30"
                                    >
                                      May 12, 2025
                                    </time>
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="@container w-full">
                  <div className="max-w-container mb-md flex items-baseline justify-between">
                    <div>
                      <h2 className="text-h4 text-primary-100">OpenAI for business</h2>
                    </div>
                    <a
                      className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
                      data-analytics="homepage-business-stories"
                      href="/stories/"
                    >
                      View all
                    </a>
                  </div>
                  <div className="@lg:max-w-container flex w-auto">
                    <div className="w-full no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
                      <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 pr-sm @md:min-w-[unset] flex min-w-[56rem] grid flex-none grid-cols-3">
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '1/1' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                    {/* <Image
                                      alt="Genspark cover image"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/34tn7du9Vq4ZJdFkFXMCam/fdcf963dec13094b0db74e7166ca116c/oai_Genspark_hero_1x1.png?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="No-code personal agents, powered by GPT-4.1 and Realtime API - API - Jul 1, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="genspark"
                              id="4ix2Qv1bpktuwp9OHqk9Ty"
                              href="/index/genspark/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  No-code personal agents, powered by GPT-4.1 and Realtime API
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">API</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap"></span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '1/1' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                    {/* <Image
                                      alt="Retell AI &gt; Cover Image"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/3FFvZQe1XAebMCD2dir1T4/637ac9168f5cb5aa61b49cbaf6951fb1/oai_RetellAI_1x1__1_.png?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Customizable, no-code voice agent automation with GPT-4o - API - Jun 26, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="retell-ai"
                              id="4XIzuJs6IHue5BlUnCL8ea"
                              href="/index/retell-ai/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  Customizable, no-code voice agent automation with GPT-4o
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">API</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap"></span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="mb-md @md:mb-0 relative pl-sm @md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                          <div className="group relative">
                            <div
                              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                              style={{ aspectRatio: '1/1' }}
                            ></div>
                            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                                <div className="h-full w-full">
                                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                                    {/* <Image
                                      alt="Unify cover image"
                                      data-nosnippet="true"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="object-cover object-center"
                                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                      sizes="(min-width: 1728px) 1728px, 100vw"
                                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                      src="https://images.ctfassets.net/kftzwdyauwt9/4Zk21VkqRdhQg95kIcrmKc/9a51d3c304e36df765c60d834f6c8552/oai_unify_hero_1x1.png?w=3840&amp;q=90&amp;fm=webp"
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              aria-label="Driving scalable growth with OpenAI o3, GPT-4.1, and CUA - API - Jun 24, 2025"
                              className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                              data-analytics="unify"
                              id="3ylIWK5Sfp1p8Pxjsbbjzq"
                              href="/index/unify/"
                            >
                              <div className="text-primary-100 relative w-full">
                                <div className="mb-2xs text-h5 @md:pr-md">
                                  Driving scalable growth with OpenAI o3, GPT-4.1, and CUA
                                </div>
                                <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                                  <span className="text-nowrap">API</span>
                                  <span className="gap-x-3xs gap-y-4xs flex flex-wrap"></span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-container @container multi-columns:px-0 w-full">
                  <div className="bg-primary-4 py-3xl grid grid-cols-12 rounded-md">
                    <div className="px-2xs @md:px-0 @md:col-span-8 @md:col-start-3 col-span-12 flex flex-col">
                      <h2 className="text-h2 text-center">Get started with Kiorons</h2>
                      <div className="flex items-center justify-center flex-col">
                        <div className="gap-3xs pt-md flex flex-row flex-wrap items-center justify-center">
                          <a
                            className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
                            data-analytics="homepage-prefooter-download"
                            href="/chatgpt/download/"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <div></div>
              <div className="@container ease-curve-sidebar sticky bottom-4 left-0 right-0 z-50 mx-auto h-[48px] w-[200px] transition [transition:transform_500ms,opacity_200ms,left_200ms,width_400ms] focus-within:w-[355px] hover:scale-105 focus-within:hover:scale-100 translate-y-20 opacity-0">
                <form className="relative">
                  <label className="shadow-black-4 bg-tertiary-60 relative flex w-full rounded-[24px] p-2 shadow-sm backdrop-blur-xl">
                    <input
                      className="placeholder:text-primary-60 text-nav-mobile md:text-p2 h-md pr-md mx-3 w-full bg-transparent focus:outline-none"
                      placeholder="Ask Kiorons"
                      aria-label="Message Kiorons"
                    />
                  </label>
                  <button
                    className="bg-primary-100 text-secondary-100 disabled:bg-primary-44 disabled:text-secondary-60 absolute right-2 top-2 h-8 w-8 flex-none rounded-full p-0 hover:opacity-70 disabled:hover:opacity-100"
                    type="submit"
                    disabled=""
                    aria-label="Send prompt to Kiorons"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 22L16 10M16 10L11 15M16 10L21 15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </main>
            <Footer />
          </div>
          <div className="duration-sidebar ease-curve-sidebar absolute left-0 top-0 h-full w-full transition-[background-color,backdrop-filter,left] pointer-events-none z-[2] md:hidden"></div>
        </div>
      </div>
    </>
  )
}
