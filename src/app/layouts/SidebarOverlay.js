export function SidebarOverlay({ isOpen, toggleSidebar }) {
    return (
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />
    )
  }