'use client'

import { useState, useRef, useEffect } from 'react'
import { AuroraText } from '../magicui/aurora-text'
import { TypingMessage } from '../TypingMessage'

export function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/kai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()
      const aiMessage = data.choices[0].message
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, there was an error processing your request.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div
      className={`flex flex-col font-gellix transition-all duration-500 ${
        messages.length === 0
          ? 'justify-center items-center min-h-screen'
          : 'justify-start items-center pt-10'
      } px-4`}
    >
      <h1
        className={`text-2xl md:text-4xl font-semibold text-white text-center font-gellix transition-all duration-500 ${
          messages.length === 0 ? '' : 'fixed top-12'
        }`}
      >
        Just Say What you want to <AuroraText>Build</AuroraText>
      </h1>

      <div
        className={`w-full max-w-2xl shadow-md rounded-xl flex flex-col  ${
          messages.length === 0 ? '' : 'fixed bottom-1'
        }`}
      >
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3/4 rounded-lg px-4 py-2 ${
                  message.role === 'user' ? 'text-white' : 'text-white'
                }`}
              >
                {message.role === 'assistant' ? (
                  <TypingMessage text={message.content} />
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white rounded-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-800 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="relative w-full">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full resize-none border border-[#414141] rounded-3xl px-5 py-3 pr-12 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-white transition-all duration-300 text-sm text-white bg-transparent"
            placeholder="Help me to build a clothing brand from zero"
            rows={2}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute bottom-2 right-2 bg-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] text-white p-2 rounded-full shadow-md hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Send icon (up arrow) SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
