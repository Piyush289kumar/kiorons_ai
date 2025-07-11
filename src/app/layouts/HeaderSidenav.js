'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

export default function HeaderSidenav({ isSidebarOpen, setIsSidebarOpen, showLogo }) {
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
              <div
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
                  <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <AnimatePresence mode="wait" initial={false}>
                      {showLogo ? (
                        <motion.div
                          key="logo"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Image
                            src="/assets/images/logo/Kiorons_icon.png"
                            alt="Kiorons Logo"
                            width={20}
                            height={20}
                            className="!mt-0 md:!mt-1"
                          />
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '28px',
                            marginTop: '-37px',
                            display: 'inline-block',
                          }}
                        >
                          Kiorons
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </div>
              </div>
            </div>
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
                className="md:mt-[4px]"
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
    </>
  )
}
