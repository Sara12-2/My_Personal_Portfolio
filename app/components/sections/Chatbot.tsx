'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const getBotResponse = (message: string): string => {
  const msg = message.toLowerCase()
  if (msg.includes('skill') || msg.includes('tech')) {
    return "I specialize in React, Next.js, Node.js, Python, and AI/ML. I've worked with OpenAI, LangChain, and various cloud platforms."
  }
  if (msg.includes('experience') || msg.includes('work')) {
    return "I have 3+ years of experience as a Full Stack Developer & AI Engineer. I've worked at TechCorp, WebSolutions, and StartupHub."
  }
  if (msg.includes('project')) {
    return "I've built AI chatbots, healthcare systems, e-commerce platforms, and more! Check out my projects section."
  }
  if (msg.includes('contact') || msg.includes('email')) {
    return "You can contact me through the contact form or email me at sara@example.com"
  }
  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! Welcome to my portfolio. I'm here to help! Ask me about my skills, experience, or projects."
  }
  return "I'm here to help! Ask me about my skills, experience, projects, or how we can work together."
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello! I'm Sara's AI assistant. Ask me anything about her work, skills, or how to connect!",
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
      {/* Chat Button - Olive Green */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-full shadow-xl shadow-[#8B9A6B]/30 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[520px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#8B9A6B]/20 overflow-hidden flex flex-col"
          >
            {/* Header - Olive Green */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B]">
              <div className="flex items-center gap-2 text-white">
                <div className="p-1.5 bg-white/20 rounded-full">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="font-semibold">AI Assistant</span>
                <span className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F5F5F0]/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-[#8B9A6B] text-white rounded-br-none'
                        : 'bg-white text-[#2C2C2C] border border-[#8B9A6B]/10 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <span className={`text-xs mt-1 block ${
                      msg.sender === 'user' ? 'text-white/60' : 'text-[#8B9A6B]/50'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-[#8B9A6B]/10 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 bg-[#8B9A6B] rounded-full animate-bounce" />
                      <span className="w-2.5 h-2.5 bg-[#8B9A6B] rounded-full animate-bounce delay-75" />
                      <span className="w-2.5 h-2.5 bg-[#8B9A6B] rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input - Light Theme */}
            <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-[#8B9A6B]/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-[#F5F5F0] border border-[#8B9A6B]/20 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-xl transition-colors shadow-lg shadow-[#8B9A6B]/20"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <p className="text-xs text-[#4A4A4A]/50 mt-2 text-center">
                Press Enter to send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}