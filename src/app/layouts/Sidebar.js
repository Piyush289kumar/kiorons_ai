'use client'
import Link from 'next/link'

const navItems = ['KAI', 'HumanOS', 'Vision', 'Company', 'News']

export function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-[72px] left-0 h-[calc(100%-72px)] z-40 transition-all duration-300 ease-in-out bg-black/80 text-white shadow-lg backdrop-blur-md ${
        isSidebarOpen ? 'w-64 px-6' : 'w-0 overflow-hidden'
      }`}
    >
      <div className="flex flex-col h-2/3 justify-center items-start">
        {/* Navigation Links */}
        <nav className="space-y-4 w-full">
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href="/"
              className="block px-4 py-2 rounded font-medium text-sm transition"
            >
              {navItem}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
