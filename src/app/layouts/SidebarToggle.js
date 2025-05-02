import { Button } from '@components/ui/Button'
import { IconMenu } from '@components/ui/Icons'

export function SidebarToggle({ toggleSidebar }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="fixed top-4 left-4 z-30 text-gray-700 hover:text-gray-900"
    >
      <IconMenu size={24} />
    </Button>
  )
}