import { ShimmerButton } from '@components/magicui/shimmer-button'
import { Search } from 'lucide-react'
import Image from 'next/image'
export default function Header({ toggleSidebar }) {
  return (
    <header className="relative flex items-center justify-between px-4 py-7 shadow w-full z-40">
      {/* Left: Menu Button */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white text-sm focus:outline-none flex items-center"
        >
          Menu
          <span className="ml-2">
            <Image
              src="/assets/images/icons/menu.png"
              alt="Menu Icon"
              width={16}
              height={16}
              className="h-4 w-auto"
            />
          </span>
        </button>
      </div>
      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-white text-[30.647px] font-semibold tracking-[-0.919px]">
          Kiorons
        </span>
      </div>
      {/* Right: Search and Button */}
      <div className="flex items-center gap-7 align-middle">
        <Image
          src="/assets/images/icons/Search.png"
          alt="Search Icon"
          width={16}
          height={16}
          className="h-5 w-auto"
        />
        <ShimmerButton className="px-5 py-2">Join Early</ShimmerButton>
      </div>
    </header>
  )
}
