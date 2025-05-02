import { useState } from 'react'
import { ChatItem } from './ChatItem'

export function ChatList() {
  const [chats, setChats] = useState([
    { id: 1, title: 'How to build a Next.js app', date: new Date() },
    { id: 2, title: 'React hooks explained', date: new Date(Date.now() - 86400000) },
    { id: 3, title: 'Tailwind CSS tips', date: new Date(Date.now() - 172800000) },
  ])

  const [activeChat, setActiveChat] = useState(1)

  return (
    <div className="space-y-1 p-2">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isActive={chat.id === activeChat}
          onClick={() => setActiveChat(chat.id)}
        />
      ))}
    </div>
  )
}