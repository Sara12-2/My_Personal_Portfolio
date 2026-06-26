'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const getBotResponse = (message: string): string => {
  const msg = message.toLowerCase()
  if (msg.includes('skill') || msg.includes('tech')) {
    return "I specialize in React, Next.js, Node.js, Python, and AI/ML."
  }
  if (msg.includes('experience') || msg.includes('work')) {
    return "I have 3+ years of experience as a Full Stack Developer & AI Engineer."
  }
  if (msg.includes('project')) {
    return "I've built AI chatbots, healthcare systems, e-commerce platforms, and more!"
  }
  return "Hello! Ask me about my skills, experience, or projects!"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Sara's AI assistant. Ask me anything!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#00A86B] hover:bg-[#007A4D] text-white rounded-full shadow-lg shadow-[#00A86B]/30 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-[#141414] rounded-2xl shadow-2xl border border-[#00A86B]/20 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-[#00A86B]">
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">🤖</span>
                <span className="font-semibold">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === 'user'
                        ? 'bg-[#00A86B] text-white'
                        : 'bg-[#0A0A0A] text-gray-200 border border-[#00A86B]/10'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#0A0A0A] p-3 rounded-xl border border-[#00A86B]/10">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#00A86B] rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-[#00A86B] rounded-full animate-bounce delay-75" />
                      <span className="w-2 h-2 bg-[#00A86B] rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-[#00A86B]/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-[#0A0A0A] border border-[#00A86B]/20 rounded-xl focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-[#00A86B] hover:bg-[#007A4D] rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}