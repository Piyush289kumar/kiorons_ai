import { formatDate } from 'utils/formatDate'

export function ChatItem({ chat, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-md flex items-center gap-3
        ${isActive ? '' : ''}`}
    >
      <div className="flex-1 truncate">{chat.title}</div>      
    </button>
  )
}
