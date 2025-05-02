import { formatDate } from 'utils/formatDate'

export function ChatItem({ chat, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-md flex items-center gap-3
        ${isActive ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
    >
      <div className="flex-1 truncate">{chat.title}</div>
      <div className="text-xs text-gray-400 whitespace-nowrap">
        {formatDate(chat.date, { month: 'short', day: 'numeric' })}
      </div>
    </button>
  )
}
