export const Sidebar = ({ isOpen, toggleSidebar, children }) => {
  return (
    <aside
      className={`bg-transparent h-full transition-all duration-300
      ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="mb-4">
          {isOpen ? '' : ''}
        </button>
        {isOpen && (
          <nav className="flex flex-col justify-center h-[700px] text-white">
            <ul>
              <li className="py-3">KAI</li>
              <li className="py-3">HumanOS</li>
              <li className="py-3">News</li>
              <li className="py-3">Company</li>
              <li className="py-3">Vision</li>
            </ul>
          </nav>
        )}
      </div>
      {children}
    </aside>
  )
}