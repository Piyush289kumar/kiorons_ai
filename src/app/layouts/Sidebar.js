'use client'
import Link from 'next/link'
const navItems = ['KAI', 'HumanOS', 'Vision', 'Company', 'News']
export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-transparent backdrop-blur-md text-white shadow-lg flex flex-col justify-center">
      <div className="p-6">
        {/* Navigation Links */}
        <nav className="space-y-4">
          {navItems.map((navItem, idx) => {
            return (
              <Link
                key={idx} // Adding a key for list items
                href="/"
                className="flex items-center gap-3 px-4 py-2 rounded font-medium text-sm"
              >
                {navItem} {/* Use navItem value dynamically */}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
