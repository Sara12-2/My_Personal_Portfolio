'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, X, Send, Bot, Sparkles, 
  User, Mic, MicOff, Copy, 
  RefreshCw, Volume2, VolumeX, Minimize2, Maximize2,
  Trash2, Briefcase, Code2, GraduationCap,
  Award, FileText, Mail, Star, Volume1,
  Check
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import toast from 'react-hot-toast'

// ============================================
// TYPES
// ============================================

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface Suggestion {
  icon: any
  label: string
  prompt: string
  description: string
}

// ============================================
// CONSTANTS
// ============================================

const SUGGESTIONS: Suggestion[] = [
  { icon: Sparkles, label: 'About Sara', prompt: 'Tell me about Sara', description: "Background & focus" },
  { icon: Briefcase, label: 'Experience', prompt: "Show Sara's experience", description: 'Roles & internships' },
  { icon: Code2, label: 'Skills', prompt: 'What technologies does Sara know?', description: 'Tech stack' },
  { icon: Star, label: 'Projects', prompt: "Show Sara's projects", description: 'Portfolio work' },
  { icon: Award, label: 'Certifications', prompt: "Show Sara's certifications", description: 'Credentials' },
  { icon: GraduationCap, label: 'Education', prompt: "Tell me about Sara's education", description: 'Academics' },
  { icon: FileText, label: 'Resume', prompt: "Show Sara's resume summary", description: 'Quick summary' },
  { icon: Mail, label: 'Contact', prompt: 'How to contact Sara?', description: 'Get in touch' },
]

const THINKING_PHRASES = [
  'Thinking...',
  'Analyzing your question...',
  'Searching through projects...',
  'Preparing the best answer...',
]

// ============================================
// BOT KNOWLEDGE BASE
// ============================================

const botKnowledge = {
  about: `I'm Sara Manzoor — Full Stack Developer & AI/ML Engineer. I'm currently the COO at DevHatch Labs (since Jun 2026), where I oversee operations, strategy, and team leadership.

I specialize in:
• Web Development (React, Next.js, TypeScript)
• AI/ML Engineering (Python, TensorFlow, Scikit-learn, XGBoost, LightGBM)
• NLP & Computer Vision
• Full Stack Development (Flask, MySQL, SQLite)
• Generative AI, RAG systems & LLM integration (LangChain, Groq)

I'm a Top 10 finisher at the South Punjab Generative AI Hackathon 2026, and an active open-source contributor with GSSoC 2026. Always open to exciting collaborations, hackathons, and innovative projects.`,

  experience: `Here's my professional journey:

**Current Role:**
**COO at DevHatch Labs** (Jun 2026 – Present)
- Leading development teams and overseeing full project lifecycle
- Managing operations, resource allocation, and cross-functional collaboration

**Open Source:**
**GirlScript Summer of Code (GSSoC) 2026** — Open Source Contributor (May – Aug 2026)
- Contributed to open-source projects, resolved issues, and submitted pull requests

**ML Competition:**
**Project Lead, Softtec 2026** @ FAST NUCES Lahore
- Led a team building an ensemble model (XGBoost + LightGBM) for healthcare cost prediction, achieving 0.825 recall

**Internships:**
1. **Web Developer Intern** at Afynix Digital (May – Jun 2026)
   - Built responsive React apps: TechNest e-commerce, ARCWATCH landing page

2. **Machine Learning Intern** at SAM AI Technologies (May 2026)
   - Built fraud detection, sentiment analysis & spam detection models

3. **Machine Learning Intern** at Elevvo Pathways (Aug – Sep 2025)
   - Completed 7 ML projects: regression, clustering, classification, forecasting`,

  skills: `**Frontend Development:**
- React.js, Next.js, TypeScript
- Tailwind CSS, Framer Motion
- HTML5, CSS3, JavaScript, Bootstrap

**AI/ML & Data Science:**
- Python, Scikit-learn, XGBoost, LightGBM
- NLP (NLTK), Computer Vision (OpenCV, YOLOv8)
- TensorFlow/Keras, PyTorch
- RAG systems, LangChain, Groq AI, ChromaDB

**Backend & Database:**
- Flask, MySQL, SQLite, REST APIs

**Tools & Others:**
- Git, GitHub, Vercel, Netlify
- Streamlit, Jupyter Notebook, Google Colab`,

  projects: `I've built **15+ projects** across web development and AI/ML:

**Featured AI/ML Projects:**
1. **UoL AI Assistant** — 🏆 Top 10 hackathon project. Bilingual (EN/UR) RAG chatbot built with Groq Llama 3 70B, Flask & MySQL
2. **Softtec 2026 — High-Cost Patient Prediction** — Ensemble model (LightGBM + XGBoost), 0.825 recall
3. **StudySmart AI** — AI-powered study tracker with productivity predictions and personalized recommendations
4. **Smart Retail Shelf Monitoring** — Real-time YOLOv8 object detection with low-stock alerts
5. **ASL Sign Language Recognition** — CNN model for American Sign Language, 88% accuracy
6. **AI-Powered Resume Screening** — NLP resume classifier with TF-IDF and Streamlit dashboard
7. **Mountain Car RL Agent** — Q-Learning reinforcement learning with Gymnasium

**Web & Full Stack Projects:**
- **TechNest** — React e-commerce platform
- **AURUM Finance Dashboard**, **Apex Appointment Dashboard**, **LuxEstate**, **SwiftEats**, **ARCWATCH**
- **Grocery Store** — Full-stack e-commerce with 42+ products, admin dashboard
- **Smart Cafeteria System** — Full-stack ordering & management platform

Check out my projects section for live demos and source code!`,

  education: `**BS Computer Science**
University of Layyah | 2024 – 2028

**Key Highlights:**
- CGPA: 4.0/4.0
- Full-stack development & AI/ML project work
- Networking & Cisco Packet Tracer coursework

**Relevant Coursework:**
- Data Structures & Algorithms
- Database Management Systems
- Machine Learning
- Computer Networks
- Software Engineering`,

  certifications: `I hold **26+ certifications** across web development, AI/ML, and cloud computing:

**Key Areas:**
- Google: Machine Learning, Data Science, AI Tools, Git & GitHub (8 courses)
- Kaggle: Deep Learning, Machine Learning, Pandas, Data Cleaning, Python
- DataCamp: APIs in Python, Supervised Learning, Prompt Engineering
- AWS: Introduction to Cloud Computing & AWS
- HackerRank: Python (Basic)
- Internship completion certificates from Afynix Digital & SAM AI Technologies

Plus separate Honors & Awards for academic achievements — 2nd Position in ICS, Chief Minister Merit Award, and E-Scotte Merit Scholarship.`,

  resume: `**Sara Manzoor — Resume Summary**

**Full Stack Developer & AI/ML Engineer**

**Objective:**
Building intelligent, scalable solutions with a passion for innovation, collaboration, and real-world impact.

**Experience:**
- COO at DevHatch Labs (Jun 2026 – Present)
- Open Source Contributor, GSSoC 2026
- Project Lead, Softtec 2026 ML Competition
- Web Developer Intern at Afynix Digital
- ML Intern at SAM AI Technologies
- ML Intern at Elevvo Pathways

**Skills:**
React, Next.js, Python, TypeScript, ML, NLP, Computer Vision, Flask, RAG/LangChain

**Achievements:**
- 15+ projects delivered
- 26+ certifications
- 3 internships + 1 open source program
- Top 10 hackathon finish, Kaggle-ranked model

**Contact:**
saramanzoor76@gmail.com
📍 Layyah, Pakistan`,

  services: `I offer a range of professional services:

**Web Development:**
- Custom websites & web apps with React/Next.js
- Full-stack development & e-commerce platforms

**AI/ML Engineering:**
- Custom AI solutions & predictive models
- NLP & Computer Vision
- RAG systems & AI chatbots

**Consulting:**
- Tech stack recommendations
- Project architecture design

**Collaboration:**
- Hackathons & competitions
- Open source contributions`,

  contact: `**Contact Sara**

**Email:** saramanzoor76@gmail.com

**LinkedIn:** linkedin.com/in/sara-manzoor-3a8a56365

**GitHub:** github.com/Sara12-2

**Kaggle:** kaggle.com/sara765

**LeetCode:** leetcode.com/u/Sara_34/

**Availability:**
- Open to remote work
- Available for collaborations
- Hackathon ready

Feel free to reach out anytime!`,

  default: `Hello! I'm **Sara AI** — your personal assistant for all things Sara Manzoor.

I can help you with:

**About** — Learn about Sara's background
**Experience** — View work history
**Skills** — Tech stack & expertise
**Projects** — Explore portfolio projects
**Education** — Academic background
**Certifications** — View achievements
**Resume** — Resume summary
**Services** — What Sara offers
**Contact** — How to connect

What would you like to know?`
}

// ============================================
// COMPONENT: AI Avatar
// ============================================

const AIAvatar = ({ isSpeaking = false }: { isSpeaking?: boolean }) => (
  <div className="relative flex-shrink-0">
    <div className="relative w-8 h-8">
      <div className={`absolute inset-0 rounded-full bg-[#8B9A6B]/20 blur-md transition-all duration-500 ${isSpeaking ? 'animate-pulse scale-110' : ''}`} />
      <div className={`relative w-8 h-8 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center shadow-md shadow-[#8B9A6B]/30 ring-2 ring-white transition-transform duration-300 ${isSpeaking ? 'scale-105' : ''}`}>
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#2ECC71] rounded-full border-2 border-white" />
    </div>
  </div>
)

const UserAvatar = () => (
  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center ring-2 ring-white shadow-sm">
    <User className="w-3.5 h-3.5 text-white" />
  </div>
)

// ============================================
// COMPONENT: Header Icon Button (consistent touch-friendly hit area)
// ============================================

const HeaderIconButton = ({
  onClick,
  title,
  active = false,
  children,
}: {
  onClick: () => void
  title: string
  active?: boolean
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    title={title}
    aria-label={title}
    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 ${
      active ? 'bg-white/25 text-white' : 'text-white/85 hover:text-white hover:bg-white/15'
    }`}
  >
    {children}
  </button>
)

// ============================================
// COMPONENT: Message Actions
// FIX: previously these icons used `opacity-0 group-hover:opacity-100`,
// which meant they never appeared on touch devices (no hover state on
// mobile) — the reported "icons not showing" bug. Now they're always
// visible at reduced opacity and only strengthen on hover, so mobile
// users can always see and tap them.
// ============================================

const MessageActions = ({ text, onRegenerate, onSpeak, isSpeaking }: any) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success('Copied to clipboard')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-1 mt-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
      <button
        onClick={handleCopy}
        aria-label="Copy message"
        className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-[#8B9A6B]/10 transition-colors"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-[#2ECC71]" /> : <Copy className="w-3.5 h-3.5 text-[#4A4A4A]/60" />}
      </button>

      <button
        onClick={onRegenerate}
        aria-label="Regenerate response"
        className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-[#8B9A6B]/10 transition-colors"
      >
        <RefreshCw className="w-3.5 h-3.5 text-[#4A4A4A]/60" />
      </button>

      <button
        onClick={onSpeak}
        aria-label={isSpeaking ? 'Stop speaking' : 'Speak message'}
        className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-[#8B9A6B]/10 transition-colors"
      >
        {isSpeaking ? (
          <Volume1 className="w-3.5 h-3.5 text-[#8B9A6B] animate-pulse" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-[#4A4A4A]/60" />
        )}
      </button>
    </div>
  )
}

// ============================================
// COMPONENT: Typing Indicator
// ============================================

const TypingIndicator = ({ phrase }: { phrase: string }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-end gap-2 justify-start">
    <AIAvatar />
    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-[#8B9A6B]/10 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1">
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]" />
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/70" />
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/40" />
        </div>
        <span className="text-xs text-[#4A4A4A]/60">{phrase}</span>
      </div>
    </div>
  </motion.div>
)

// ============================================
// COMPONENT: Suggestion Cards
// ============================================

const SuggestionCards = ({ onSelect }: { onSelect: (prompt: string) => void }) => (
  <div className="grid grid-cols-2 gap-2 mt-4 w-full">
    {SUGGESTIONS.map((suggestion, index) => {
      const Icon = suggestion.icon
      return (
        <motion.button
          key={suggestion.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
          onClick={() => onSelect(suggestion.prompt)}
          className="group flex items-center gap-2 p-2.5 bg-white hover:bg-[#8B9A6B]/5 active:bg-[#8B9A6B]/10 rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 transition-colors duration-200 text-left"
        >
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-colors duration-200 flex-shrink-0">
            <Icon className="w-3.5 h-3.5 text-[#8B9A6B] group-hover:text-white transition-colors duration-200" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#2C2C2C] truncate">{suggestion.label}</p>
            <p className="text-[10px] text-[#4A4A4A]/50 truncate">{suggestion.description}</p>
          </div>
        </motion.button>
      )
    })}
  </div>
)

// ============================================
// COMPONENT: Welcome Screen
// ============================================

const WelcomeScreen = ({ onSelect }: { onSelect: (prompt: string) => void }) => (
  <div className="flex flex-col items-center justify-center h-full px-4 py-4 text-center">
    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center shadow-lg shadow-[#8B9A6B]/25 mb-3">
      <Bot className="w-7 h-7 text-white" />
    </div>

    <h3 className="text-base font-bold text-[#2C2C2C]">Hi, I'm Sara AI</h3>
    <p className="text-xs text-[#4A4A4A]/60 mt-1 max-w-[240px] leading-relaxed">
      Ask me about Sara's experience, projects, skills, or career — or pick a topic below.
    </p>

    <SuggestionCards onSelect={onSelect} />

    <div className="mt-4 flex items-center gap-1.5 text-[10px] text-[#4A4A4A]/30">
      <Sparkles className="w-3 h-3 text-[#8B9A6B]" />
      <span>Powered by Sara's knowledge base</span>
    </div>
  </div>
)

// ============================================
// MAIN CHATBOT COMPONENT
// ============================================

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [thinkingIndex, setThinkingIndex] = useState(0)
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const latestInputRef = useRef('')

  useEffect(() => {
    latestInputRef.current = input
  }, [input])

  useEffect(() => {
    if (messages.length === 0 && !showWelcome) {
      setMessages([{ id: '1', text: botKnowledge.default, sender: 'bot', timestamp: new Date() }])
    }
  }, [messages.length, showWelcome])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [isOpen])

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setThinkingIndex((prev) => (prev + 1) % THINKING_PHRASES.length)
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [isTyping])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const getBotResponse = (message: string): string => {
    const msg = message.toLowerCase()
    if (msg.includes('about') || msg.includes('who is') || msg.includes('introduce')) return botKnowledge.about
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('react') || msg.includes('python') || msg.includes('know')) return botKnowledge.skills
    if (msg.includes('experience') || msg.includes('work') || msg.includes('internship') || msg.includes('career')) return botKnowledge.experience
    if (msg.includes('project') || msg.includes('build') || msg.includes('portfolio')) return botKnowledge.projects
    if (msg.includes('education') || msg.includes('study') || msg.includes('university') || msg.includes('college')) return botKnowledge.education
    if (msg.includes('certif') || msg.includes('cert') || msg.includes('achievement')) return botKnowledge.certifications
    if (msg.includes('resume') || msg.includes('cv')) return botKnowledge.resume
    if (msg.includes('service') || msg.includes('offer') || msg.includes('help with')) return botKnowledge.services
    if (msg.includes('contact') || msg.includes('email') || msg.includes('connect') || msg.includes('reach')) return botKnowledge.contact
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) return "Hello! I'm your AI Assistant. How can I help you today? Feel free to ask about Sara's experience, projects, skills, or anything else!"
    if (msg.includes('thanks') || msg.includes('thank')) return "You're welcome! Let me know if there's anything else I can help with."
    return botKnowledge.default
  }

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [])

  const speakText = useCallback((text: string) => {
    if (!isVoiceEnabled) return
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.85
        utterance.pitch = 1
        utterance.volume = 1
        utterance.lang = 'en-US'
        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)
        utterance.onerror = () => setIsSpeaking(false)
        window.speechSynthesis.speak(utterance)
      } catch (e) {
        setIsSpeaking(false)
      }
    }
  }, [isVoiceEnabled])

  const handleSend = useCallback(async (voiceMessage?: string) => {
    const messageToSend = voiceMessage || input
    if (!messageToSend.trim()) return

    setShowWelcome(false)
    stopSpeaking()

    const userMessage: Message = { id: Date.now().toString(), text: messageToSend, sender: 'user', timestamp: new Date() }
    const historyForApi = messages // snapshot before appending the new user message
    setMessages((prev) => [...prev, userMessage])
    if (!voiceMessage) setInput('')
    setIsTyping(true)
    setThinkingIndex(0)

    let response: string

    try {
      // Real LLM call — the bot now actually reasons over Sara's full
      // knowledge base instead of matching a fixed list of keywords.
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageToSend,
          history: historyForApi.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      })

      if (!res.ok) throw new Error('API request failed')
      const data = await res.json()
      response = data.reply as string
    } catch (err) {
      // Offline/error fallback — keeps the bot functional (with the old
      // keyword-matched answers) even if the API key is missing, the
      // route isn't deployed yet, or the network call fails.
      response = getBotResponse(messageToSend)
    }

    const botMessage: Message = { id: (Date.now() + 1).toString(), text: response, sender: 'bot', timestamp: new Date() }
    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
    if (isVoiceEnabled) speakText(response)
  }, [input, isVoiceEnabled, speakText, stopSpeaking, messages])

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        setIsSpeechSupported(true)
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = true
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onresult = (event: any) => {
          let transcript = ''
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript
          }
          setInput(transcript)
        }

        recognitionRef.current.onerror = () => setIsListening(false)

        recognitionRef.current.onend = () => {
          setIsListening(false)
          if (latestInputRef.current.trim()) {
            setTimeout(() => handleSend(latestInputRef.current), 300)
          }
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort() } catch (e) {}
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleVoice = () => {
    if (!isSpeechSupported) {
      toast.error('Voice recognition is not supported in your browser. Please use Chrome or Edge.')
      return
    }

    if (isListening) {
      try { recognitionRef.current?.abort() } catch (e) {}
      setIsListening(false)
      return
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start()
        setIsListening(true)
        setInput('')
      } catch (error) {
        setIsListening(false)
      }
    }
  }

  const toggleVoiceOutput = useCallback(() => {
    setIsVoiceEnabled((prev) => {
      if (prev) stopSpeaking()
      return !prev
    })
  }, [stopSpeaking])

  const clearChat = () => {
    setMessages([])
    setShowWelcome(true)
    stopSpeaking()
  }

  const closeChat = () => {
    setIsOpen(false)
    stopSpeaking()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeChat()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open chat with Sara AI"
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999] ${isOpen ? 'hidden' : 'block'}`}
      >
        <div className="relative p-3.5 bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] rounded-full shadow-lg shadow-[#8B9A6B]/40">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 26, stiffness: 320 } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.15 } }}
            className={`fixed z-[9999] bg-white rounded-2xl shadow-2xl shadow-[#8B9A6B]/20 border border-[#8B9A6B]/10 overflow-hidden flex flex-col
              bottom-0 right-0 left-0 top-0 sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto
              w-full sm:w-[380px] max-w-full
              h-full sm:h-[560px] sm:max-h-[75vh]
              transition-[height] duration-300
              ${isMinimized ? 'sm:!h-[64px]' : ''}
            `}
          >
            {/* Header */}
            <div className="relative flex-shrink-0 px-4 py-3 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <AIAvatar isSpeaking={isSpeaking} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold text-sm truncate">Sara AI</h4>
                      <span className="hidden xs:inline px-1.5 py-0.5 bg-white/20 rounded-full text-[9px] text-white font-medium flex-shrink-0">
                        v2.0
                      </span>
                    </div>
                    <p className="text-white/70 text-[11px]">AI Portfolio Assistant</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 flex-shrink-0">
                  <HeaderIconButton onClick={toggleVoiceOutput} title={isVoiceEnabled ? 'Voice replies: on' : 'Voice replies: off'} active={isVoiceEnabled}>
                    {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </HeaderIconButton>

                  {isSpeaking && (
                    <HeaderIconButton onClick={stopSpeaking} title="Stop speaking">
                      <VolumeX className="w-4 h-4 text-red-100" />
                    </HeaderIconButton>
                  )}

                  <HeaderIconButton onClick={clearChat} title="Clear chat">
                    <Trash2 className="w-4 h-4" />
                  </HeaderIconButton>

                  <HeaderIconButton onClick={() => setIsMinimized(!isMinimized)} title={isMinimized ? 'Maximize' : 'Minimize'}>
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </HeaderIconButton>

                  <HeaderIconButton onClick={closeChat} title="Close chat">
                    <X className="w-4 h-4" />
                  </HeaderIconButton>
                </div>
              </div>
            </div>

            {/* Messages + Input */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-[#FAF8F5]">
                  {showWelcome && messages.length === 0 ? (
                    <WelcomeScreen onSelect={(prompt) => {
                      setInput(prompt)
                      setTimeout(() => handleSend(prompt), 100)
                    }} />
                  ) : (
                    messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex items-end gap-2 group ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.sender === 'bot' && <AIAvatar isSpeaking={isSpeaking} />}

                        <div
                          className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl ${
                            msg.sender === 'user'
                              ? 'bg-[#8B9A6B] text-white rounded-br-md'
                              : 'bg-white text-[#1E1E1E] border border-[#8B9A6B]/10 rounded-bl-md shadow-sm'
                          }`}
                        >
                          <div className="text-[13px] leading-relaxed">
                            <ReactMarkdown
                              components={{
                                strong: ({ children }) => (
                                  <strong className={`font-semibold ${msg.sender === 'user' ? 'text-white' : 'text-[#8B9A6B]'}`}>{children}</strong>
                                ),
                                ul: ({ children }) => <ul className="list-disc pl-4 space-y-0.5 my-1">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-4 space-y-0.5 my-1">{children}</ol>,
                                li: ({ children }) => <li>{children}</li>,
                                p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                              }}
                            >
                              {msg.text}
                            </ReactMarkdown>
                          </div>

                          <span className={`block mt-1 text-[10px] ${msg.sender === 'user' ? 'text-white/60' : 'text-[#4A4A4A]/35'}`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>

                          {msg.sender === 'bot' && (
                            <MessageActions
                              text={msg.text}
                              onRegenerate={() => {
                                const lastUserMsg = [...messages].reverse().find((m) => m.sender === 'user')
                                if (lastUserMsg) {
                                  stopSpeaking()
                                  handleSend(lastUserMsg.text)
                                }
                              }}
                              onSpeak={() => (isSpeaking ? stopSpeaking() : speakText(msg.text))}
                              isSpeaking={isSpeaking}
                            />
                          )}
                        </div>

                        {msg.sender === 'user' && <UserAvatar />}
                      </motion.div>
                    ))
                  )}

                  {isTyping && <TypingIndicator phrase={THINKING_PHRASES[thinkingIndex]} />}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex-shrink-0 px-3 py-3 bg-white border-t border-[#8B9A6B]/10">
                  <div className="flex items-center gap-2">
                    {isSpeechSupported && (
                      <button
                        onClick={toggleVoice}
                        aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-colors duration-200 ${
                          isListening ? 'bg-red-500 text-white' : 'bg-[#8B9A6B]/10 text-[#8B9A6B] hover:bg-[#8B9A6B]/20'
                        }`}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                    )}

                    <div className="relative flex-1 min-w-0">
                      {isListening && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[11px] text-red-500 font-medium">Listening…</span>
                        </div>
                      )}
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            handleSend()
                          }
                        }}
                        placeholder={isListening ? '' : 'Ask about Sara...'}
                        className={`w-full h-10 px-3.5 border rounded-xl focus:outline-none focus:ring-2 text-sm transition-colors duration-200 ${
                          isListening
                            ? 'bg-red-50 border-red-200 pl-24 text-red-700'
                            : 'bg-[#F5F5F0] border-[#8B9A6B]/20 focus:border-[#8B9A6B] focus:ring-[#8B9A6B]/15 text-[#1E1E1E]'
                        }`}
                        disabled={isListening}
                      />
                    </div>

                    <button
                      onClick={() => handleSend()}
                      aria-label="Send message"
                      disabled={!input.trim() && !isListening}
                      className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 transition-colors duration-200 ${
                        input.trim() || isListening ? 'bg-[#8B9A6B] hover:bg-[#6B7A5B]' : 'bg-[#8B9A6B]/20 cursor-not-allowed'
                      }`}
                    >
                      <Send className={`w-4 h-4 ${input.trim() || isListening ? 'text-white' : 'text-[#8B9A6B]/40'}`} />
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center justify-center gap-2 mt-2 text-[10px] text-[#4A4A4A]/30">
                    <span>Enter to send</span>
                    {isSpeechSupported && <span>· Tap mic to speak</span>}
                    <span>· Esc to close</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}