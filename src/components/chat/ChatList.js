import { useState } from 'react'
import { ChatItem } from './ChatItem'

export function ChatList() {
  const [chats, setChats] = useState([
    { id: 1, title: 'How to build a Next.js app' },
    { id: 2, title: 'React hooks explained' },
    { id: 3, title: 'Tailwind CSS tips' },
  ])

  const [activeChat, setActiveChat] = useState(1)

  return (
    <div className="space-y-1 p-2 h-11/12 my-auto flex flex-col justify-center">
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
