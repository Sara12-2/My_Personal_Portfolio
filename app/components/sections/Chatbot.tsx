// app/components/sections/Chatbot.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, X, Send, Bot, Sparkles, 
  Loader2, User
} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const thinkingMessages = [
  'Thinking...',
  'Analyzing your question...',
  'Searching through projects...',
  'Preparing the best answer...',
]

const botKnowledge = {
  skills: "I specialize in React.js, Next.js, TypeScript, Python, Flask, and AI/ML technologies including TensorFlow, Scikit-learn, XGBoost, NLP, and Computer Vision. I also work with RAG systems, LLMs, and Generative AI.",
  
  experience: "I have 3+ years of experience as a Full Stack Developer & AI Engineer. Currently serving as COO at DevHatch Labs. Completed internships at Afynix Digital (Web Dev), SAM AI Technologies (ML), and Elevvo Pathways (ML).",
  
  projects: "I've built 30+ projects including AI chatbots, healthcare systems, e-commerce platforms, and more! Check out my projects section to see them all.",
  
  contact: "You can contact me through the contact form or email me at saramanzoorofficial@gmail.com",
  
  resume: "I have 3+ years of experience, 30+ projects delivered, 30+ certifications, and 3 internships. Available for remote work and collaborations.",
  
  services: "I offer Web Development, AI/ML Engineering, Full Stack Development, Data Science, Hackathon Collaboration, and Technical Consultation.",
  
  default: "Hello! I'm your AI Assistant. I can help you with:\n• Skills & Technologies\n• Projects & Portfolio\n• Experience & Internships\n• Resume & Certifications\n• Services & Contact\n\nHow can I help you today?"
}

const getBotResponse = (message: string): string => {
  const msg = message.toLowerCase()
  if (msg.includes('skill') || msg.includes('tech') || msg.includes('react') || msg.includes('python')) {
    return botKnowledge.skills
  }
  if (msg.includes('experience') || msg.includes('work') || msg.includes('internship')) {
    return botKnowledge.experience
  }
  if (msg.includes('project')) {
    return botKnowledge.projects
  }
  if (msg.includes('contact') || msg.includes('email') || msg.includes('connect')) {
    return botKnowledge.contact
  }
  if (msg.includes('resume') || msg.includes('cv')) {
    return botKnowledge.resume
  }
  if (msg.includes('service')) {
    return botKnowledge.services
  }
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return "Hello! I'm your AI Assistant. How can I help you today?"
  }
  return botKnowledge.default
}

// Components
const AIAvatar = () => (
  <div className="relative flex-shrink-0">
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center shadow-lg shadow-[#8B9A6B]/25">
      <Bot className="w-4 h-4 text-white" />
    </div>
    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white animate-pulse" />
  </div>
)

const UserAvatar = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B9A6B]/10 flex items-center justify-center">
    <User className="w-4 h-4 text-[#8B9A6B]" />
  </div>
)

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Assistant.\nAsk me about skills, projects, experience, or contact details.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [thinkingIndex, setThinkingIndex] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setThinkingIndex((prev) => (prev + 1) % thinkingMessages.length)
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [isTyping])

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
    setThinkingIndex(0)

    const delay = 500 + Math.random() * 800
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, delay)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9999] p-4 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-full shadow-xl shadow-[#8B9A6B]/30 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[9999] w-[400px] h-[580px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-[#8B9A6B]/15 border border-[#8B9A6B]/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative z-10 p-4 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AIAvatar />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Sara AI</h4>
                    <p className="text-white/60 text-[10px]">Full Stack Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1.5 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 relative z-10 bg-[#FAF8F5]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && <AIAvatar />}
                  
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-[#8B9A6B] text-white rounded-br-none shadow-md'
                        : 'bg-white text-[#1E1E1E] border border-[#8B9A6B]/10 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <div className={`flex items-center gap-1 mt-1 text-[10px] ${
                      msg.sender === 'user' ? 'text-white/60' : 'text-[#4A4A4A]/40'
                    }`}>
                      <span>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>

                  {msg.sender === 'user' && <UserAvatar />}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <AIAvatar />
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-none bg-white border border-[#8B9A6B]/10 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#4A4A4A]">{thinkingMessages[thinkingIndex]}</span>
                      <Loader2 className="w-3.5 h-3.5 text-[#8B9A6B] animate-spin" />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="relative z-10 p-4 bg-white/80 backdrop-blur-sm border-t border-[#8B9A6B]/10">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2.5 bg-[#F5F5F0] border border-[#8B9A6B]/20 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-sm text-[#1E1E1E] transition-all duration-300"
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-xl transition-colors shadow-lg shadow-[#8B9A6B]/20"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
              <p className="text-[10px] text-[#4A4A4A]/30 mt-2 text-center flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Press Enter to send</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}