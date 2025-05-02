import { useState } from 'react'
import { Button } from '@components/ui/Button'
import { IconPlus, IconMenu, IconClose } from '@components/ui/Icons'

export function Sidebar({ isOpen, toggleSidebar, children }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'w-64 translate-x-0' : '-translate-x-full w-0'}`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white"
          >
            <IconClose size={20} />
          </Button>
          <Button variant="primary" size="sm" className="gap-2">
            <IconPlus size={16} />
            New Chat
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="text-sm text-gray-400">User Section</div>
        </div>
      </div>
    </aside>
  )
}