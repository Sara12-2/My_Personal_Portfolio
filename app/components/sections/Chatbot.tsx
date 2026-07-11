'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, X, Send, Bot, Sparkles, 
  Loader2, User, Mic, MicOff, Copy, 
  RefreshCw, ThumbsUp, ThumbsDown, 
  Volume2, VolumeX, Minimize2, Maximize2,
  Trash2, Settings, ChevronDown, Zap,
  Clock, Briefcase, Code2, GraduationCap,
  Award, FileText, Mail, Star, Volume1,
  Volume, Check, AlertCircle, Play,
  Pause, ChevronUp, ArrowUp, Smile,
  Paperclip, Image, Link2, CornerDownLeft
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// ============================================
// TYPES
// ============================================

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  isStreaming?: boolean
}

interface Suggestion {
  icon: any
  label: string
  prompt: string
  description: string
  color: string
}

// ============================================
// CONSTANTS
// ============================================

const SUGGESTIONS: Suggestion[] = [
  { 
    icon: Sparkles, 
    label: 'About Sara', 
    prompt: 'Tell me about Sara',
    description: 'Learn about Sara\'s background',
    color: '#8B9A6B' 
  },
  { 
    icon: Briefcase, 
    label: 'Experience', 
    prompt: 'Show Sara\'s experience',
    description: 'Work history & internships',
    color: '#8B5CF6' 
  },
  { 
    icon: Code2, 
    label: 'Skills', 
    prompt: 'What technologies does Sara know?',
    description: 'Tech stack & expertise',
    color: '#1E90FF' 
  },
  { 
    icon: Star, 
    label: 'Projects', 
    prompt: 'Show Sara\'s projects',
    description: 'Portfolio & case studies',
    color: '#F1C40F' 
  },
  { 
    icon: Award, 
    label: 'Certifications', 
    prompt: 'Show Sara\'s certifications',
    description: 'Achievements & credentials',
    color: '#2ECC71' 
  },
  { 
    icon: GraduationCap, 
    label: 'Education', 
    prompt: 'Tell me about Sara\'s education',
    description: 'Academic background',
    color: '#8B9A6B' 
  },
  { 
    icon: FileText, 
    label: 'Resume', 
    prompt: 'Show Sara\'s resume summary',
    description: 'Professional summary',
    color: '#8B5CF6' 
  },
  { 
    icon: Mail, 
    label: 'Contact', 
    prompt: 'How to contact Sara?',
    description: 'Get in touch',
    color: '#2ECC71' 
  },
]

const THINKING_PHRASES = [
  'Thinking...',
  'Analyzing your question...',
  'Searching through projects...',
  'Preparing the best answer...',
  'Accessing knowledge base...',
  'Crafting response...',
]

// ============================================
// BOT KNOWLEDGE BASE
// ============================================

const botKnowledge = {
  about: `I'm Sara Manzoor — Full Stack Developer & AI Engineer with 1+ year of experience. I'm currently the COO at DevHatch Labs, where I oversee operations, strategy, and team leadership.

I specialize in:
• Web Development (React, Next.js, TypeScript)
• AI/ML Engineering (Python, TensorFlow, Scikit-learn, XGBoost)
• NLP & Computer Vision
• Full Stack Development (Flask, FastAPI, MySQL, PostgreSQL)
• Generative AI & RAG Systems

I'm passionate about building intelligent solutions that make a real impact. Always open to exciting collaborations, hackathons, and innovative projects.`,

  experience: `I have 1+ year of professional experience across multiple roles:

**Current Role:**
**COO at DevHatch Labs** (Jan 2025 – Present)
- Overseeing daily operations and strategic planning
- Managing project delivery and team coordination
- Implementing operational workflows

**Internships:**
1. **Web Developer Intern** at Afynix Digital (Feb 2025 – Present)
   - Built responsive web apps with React.js
   - Developed Weather Dashboard, QuizAura Pro, ARCWATCH

2. **Machine Learning Intern** at SAM AI Technologies (Mar 2025 – Apr 2025)
   - Built fraud detection & sentiment analysis models

3. **Machine Learning Intern** at Elevvo Pathways (Aug 2025 – Sep 2025)
   - Completed 7 ML projects: clustering, forecasting, classification

**Academic:** Full-Stack Developer at University of Layyah (Sep 2024 – Present)`,

  skills: `**Frontend Development:**
- React.js, Next.js, TypeScript
- Tailwind CSS, Framer Motion
- HTML5, CSS3, JavaScript

**AI/ML & Data Science:**
- Python, Scikit-learn, XGBoost
- NLP, Computer Vision
- TensorFlow, PyTorch
- RAG Systems, Generative AI

**Backend & Database:**
- Flask, FastAPI
- MySQL, PostgreSQL
- REST APIs, Authentication

**Tools & Others:**
- Git, GitHub, Docker
- Vercel, Render, Netlify
- Cisco Packet Tracer`,

  projects: `I've built **17+ projects** across web development and AI/ML:

**Web Development Projects:**
1. **Grocery Store** — Full-stack e-commerce with 42+ products, admin dashboard, delivery slots
2. **TechNest E-Commerce** — React.js e-commerce platform
3. **Nimbus Weather** — Weather dashboard with API integration
4. **QuizAura Pro** — Interactive quiz app with timer & confetti
5. **ARCWATCH** — Premium smartwatch landing page with glassmorphism
6. **Digital Debate Judge** — Web app for debate competitions

**AI/ML Projects:**
1. **Credit Card Fraud Detection** — SMOTE + Random Forest/XGBoost
2. **Twitter Sentiment Analysis** — Multi-class classification with TF-IDF
3. **Spam SMS Detection** — Naive Bayes & Logistic Regression
4. **Student Score Prediction** — Linear/Polynomial Regression
5. **Mall Customer Segmentation** — K-Means & DBSCAN clustering
6. **Loan Approval Prediction** — Logistic Regression with SMOTE
7. **Walmart Sales Forecasting** — Time-series forecasting
8. **Forest Cover Classification** — Random Forest & XGBoost

Check out my projects section for detailed case studies!`,

  education: `**BS Computer Science**
University of Layyah | 2024 – 2028

**Key Highlights:**
- CGPA: A Grade
- Full-stack development projects
- Networking & Cisco certifications
- AI/ML research and implementations

**Relevant Coursework:**
- Data Structures & Algorithms
- Database Management Systems
- Machine Learning
- Computer Networks
- Software Engineering`,

  certifications: `I hold **30+ certifications** across web development, AI/ML, and leadership:

**Key Certifications:**
1. **SAM AI Technologies** — ML Internship Certificate
2. **Elevvo Pathways** — ML Internship Certificate & LOR
3. **Softtec 2026** — ML Competition Certificate
4. **Afynix Digital** — Web Development Internship Certificate

**Areas of Certification:**
- Python Programming
- Machine Learning & Deep Learning
- Natural Language Processing
- Computer Vision
- React.js & Next.js
- Full Stack Development
- Leadership & Operations`,

  resume: `**Sara Manzoor — Resume Summary**

**Full Stack Developer & AI Engineer**

**Objective:**
Building intelligent, scalable solutions with a passion for innovation, collaboration, and real-world impact.

**Experience:**
- COO at DevHatch Labs (Jan 2025 – Present)
- Web Developer Intern at Afynix Digital
- ML Intern at SAM AI Technologies
- ML Intern at Elevvo Pathways

**Skills:**
React, Next.js, Python, TypeScript, ML, NLP, Computer Vision, Flask, FastAPI

**Achievements:**
- 17+ projects delivered
- 30+ certifications
- 3 internships
- Hackathon winner

**Languages:**
English (Professional), Urdu (Native)

**Contact:**
saramanzoor76@gmail.com
📍 Layyah, Pakistan`,

  services: `I offer a range of professional services:

**Web Development:**
- Custom websites & web apps
- Full-stack development with React/Next.js
- Landing pages & marketing sites
- E-commerce platforms

**AI/ML Engineering:**
- Custom AI solutions & models
- NLP & Computer Vision
- RAG systems & chatbots
- Data analysis & prediction

**Consulting:**
- Tech stack recommendations
- Project architecture design
- Code reviews & optimization
- Startup technical guidance

**Collaboration:**
- Hackathons & competitions
- Open source contributions
- Research projects
- Technical content creation`,

  contact: `**Contact Sara**

**Email:** saramanzoor76@gmail.com

**LinkedIn:** linkedin.com/in/sara-manzoor-3a8a56365

**GitHub:** github.com/Sara12-2

**Kaggle:** kaggle.com/sara765

**LeetCode:** leetcode.com/u/Sara_34/

**WhatsApp:** wa.me/923164764391

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

const AIAvatar = ({ isSpeaking = false, isThinking = false }: { isSpeaking?: boolean, isThinking?: boolean }) => (
  <div className="relative flex-shrink-0 group">
    <div className="relative w-10 h-10">
      {/* Outer glow ring */}
      <div className={`absolute inset-0 rounded-full bg-[#8B9A6B]/20 blur-xl transition-all duration-500 ${isSpeaking ? 'animate-pulse scale-110' : 'animate-pulse'}`} />
      
      {/* Main avatar */}
      <div className={`relative w-10 h-10 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center shadow-lg shadow-[#8B9A6B]/25 transition-all duration-300 ${isSpeaking ? 'scale-110' : ''}`}>
        <Bot className={`w-5 h-5 text-white transition-all duration-300 ${isSpeaking ? 'scale-110' : ''}`} />
        
        {/* Sparkle overlay */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
        />
        
        {/* Speaking ring */}
        {isSpeaking && (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute -inset-1 rounded-full border-2 border-[#8B9A6B]/50"
          />
        )}
      </div>
      
      {/* Online indicator */}
      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#2ECC71] rounded-full border-2 border-white animate-pulse">
        <div className="absolute inset-0 rounded-full bg-[#2ECC71] animate-ping opacity-75" />
      </div>
      
      {/* Floating particles */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute -top-2 -right-2 w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/40"
      />
      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0, 0.8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
        className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-[#8B9A6B]/30"
      />
    </div>
  </div>
)

const UserAvatar = () => (
  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center border-2 border-white shadow-md">
    <User className="w-4 h-4 text-white" />
  </div>
)

// ============================================
// COMPONENT: Voice Toggle Button (FIXED - Colored Icons)
// ============================================

const VoiceToggle = ({ isEnabled, onToggle }: { isEnabled: boolean, onToggle: () => void }) => (
  <motion.button
    onClick={onToggle}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative p-1.5 rounded-lg transition-all duration-300 ${
      isEnabled 
        ? 'bg-[#2ECC71]/20 text-[#2ECC71] hover:bg-[#2ECC71]/30' 
        : 'bg-white/20 text-white hover:bg-white/30'
    }`}
    title={isEnabled ? 'Voice ON' : 'Voice OFF'}
  >
    {isEnabled ? (
      <Volume2 className="w-4 h-4" />
    ) : (
      <VolumeX className="w-4 h-4" />
    )}
    {isEnabled && (
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
    )}
  </motion.button>
)

// ============================================
// COMPONENT: Message Actions
// ============================================

const MessageActions = ({ text, onCopy, onRegenerate, onLike, onDislike, onSpeak, isSpeaking }: any) => {
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    onCopy?.()
  }

  return (
    <div className="flex items-center gap-0.5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCopy}
        className="p-1.5 hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-200 group/btn"
        title="Copy"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#2ECC71]" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-[#4A4A4A]/40 group-hover/btn:text-[#8B9A6B] transition-colors" />
        )}
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onRegenerate}
        className="p-1.5 hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-200 group/btn"
        title="Regenerate"
      >
        <RefreshCw className="w-3.5 h-3.5 text-[#4A4A4A]/40 group-hover/btn:text-[#8B9A6B] transition-colors" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setLiked(!liked); setDisliked(false); onLike?.() }}
        className={`p-1.5 hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-200 group/btn ${liked ? 'text-[#2ECC71]' : ''}`}
        title="Like"
      >
        <ThumbsUp className={`w-3.5 h-3.5 transition-colors ${liked ? 'fill-[#2ECC71] text-[#2ECC71]' : 'text-[#4A4A4A]/40 group-hover/btn:text-[#8B9A6B]'}`} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setDisliked(!disliked); setLiked(false); onDislike?.() }}
        className={`p-1.5 hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-200 group/btn ${disliked ? 'text-red-500' : ''}`}
        title="Dislike"
      >
        <ThumbsDown className={`w-3.5 h-3.5 transition-colors ${disliked ? 'fill-red-500 text-red-500' : 'text-[#4A4A4A]/40 group-hover/btn:text-[#8B9A6B]'}`} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSpeak}
        className={`p-1.5 hover:bg-[#8B9A6B]/10 rounded-lg transition-all duration-200 group/btn ${isSpeaking ? 'text-[#8B9A6B]' : ''}`}
        title={isSpeaking ? 'Speaking...' : 'Speak'}
      >
        {isSpeaking ? (
          <Volume1 className="w-3.5 h-3.5 text-[#8B9A6B] animate-pulse" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-[#4A4A4A]/40 group-hover/btn:text-[#8B9A6B] transition-colors" />
        )}
      </motion.button>
    </div>
  )
}

// ============================================
// COMPONENT: Typing Indicator (Bot Thinking)
// ============================================

const TypingIndicator = ({ phrase }: { phrase: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="flex justify-start"
  >
    <AIAvatar isThinking={true} />
    <div className="max-w-[85%] px-5 py-4 rounded-2xl rounded-bl-none bg-white/90 backdrop-blur-sm border border-[#8B9A6B]/10 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-2.5 h-2.5 rounded-full bg-[#8B9A6B]"
          />
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-2.5 h-2.5 rounded-full bg-[#8B9A6B]/70"
          />
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="w-2.5 h-2.5 rounded-full bg-[#8B9A6B]/40"
          />
        </div>
        <span className="text-sm text-[#4A4A4A]/60 font-medium">{phrase}</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 rounded-full border-2 border-[#8B9A6B]/20 border-t-[#8B9A6B]"
        />
      </div>
    </div>
  </motion.div>
)

// ============================================
// COMPONENT: User Typing Indicator
// ============================================

const UserTypingIndicator = ({ isTyping }: { isTyping: boolean }) => {
  if (!isTyping) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="flex justify-end mb-1"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#8B9A6B]/10 rounded-full">
        <div className="flex gap-1">
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
            className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]"
          />
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
            className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/60"
          />
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/30"
          />
        </div>
        <span className="text-[10px] text-[#4A4A4A]/50 font-medium">typing...</span>
      </div>
    </motion.div>
  )
}

// ============================================
// COMPONENT: Suggestion Cards
// ============================================

const SuggestionCards = ({ onSelect }: { onSelect: (prompt: string) => void }) => (
  <div className="grid grid-cols-2 gap-2.5 mt-4">
    {SUGGESTIONS.map((suggestion, index) => {
      const Icon = suggestion.icon
      return (
        <motion.button
          key={suggestion.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, type: 'spring', stiffness: 150 }}
          whileHover={{ 
            scale: 1.03, 
            y: -3,
            boxShadow: '0 12px 30px rgba(139, 154, 107, 0.15)'
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(suggestion.prompt)}
          className="group relative flex flex-col items-start gap-1.5 p-3.5 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 transition-all duration-300 shadow-sm hover:shadow-lg text-left overflow-hidden"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8B9A6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-2.5 w-full relative z-10">
            <div className="p-1.5 rounded-lg bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B] transition-all duration-300">
              <Icon className="w-3.5 h-3.5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
            </div>
            <span className="text-xs font-semibold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
              {suggestion.label}
            </span>
          </div>
          
          <p className="text-[10px] text-[#4A4A4A]/50 group-hover:text-[#4A4A4A]/70 transition-colors duration-300 ml-1 relative z-10">
            {suggestion.description}
          </p>
          
          <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
        </motion.button>
      )
    })}
  </div>
)

// ============================================
// COMPONENT: Welcome Screen
// ============================================

const WelcomeScreen = ({ onSelect }: { onSelect: (prompt: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col items-center justify-center h-full px-6 py-8 text-center overflow-y-auto"
  >
    {/* Large Avatar with Orbital Rings */}
    <div className="relative mb-6">
      <div className="absolute -inset-10 bg-[#8B9A6B]/5 rounded-full blur-2xl animate-pulse" />
      
      {/* Orbital ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-4 rounded-full border-2 border-dashed border-[#8B9A6B]/15"
      />
      
      {/* Orbital ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-7 rounded-full border border-[#8B9A6B]/10"
      />
      
      {/* Orbital ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-10 rounded-full border-2 border-dotted border-[#8B9A6B]/5"
      />
      
      {/* Main Avatar */}
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] flex items-center justify-center shadow-2xl shadow-[#8B9A6B]/30">
        <Bot className="w-12 h-12 text-white" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
        />
      </div>
    </div>

    <h2 className="text-2xl font-bold text-[#2C2C2C]">
      Hello <span className="text-[#8B9A6B]">·</span>
    </h2>
    <p className="text-sm text-[#4A4A4A] font-medium mt-0.5">
      I'm <span className="text-[#8B9A6B]">Sara's AI Assistant</span>
    </p>
    <p className="text-xs text-[#4A4A4A]/60 mt-2 max-w-xs leading-relaxed">
      Ask anything about Sara's experience, projects, skills, and career.
    </p>

    <SuggestionCards onSelect={onSelect} />

    <div className="mt-5 flex items-center gap-2 text-[9px] text-[#4A4A4A]/25">
      <Sparkles className="w-3 h-3 text-[#8B9A6B]" />
      <span>Powered by Sara's knowledge base</span>
    </div>
  </motion.div>
)

// ============================================
// COMPONENT: Listening Animation
// ============================================

const ListeningAnimation = () => (
  <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-xl border border-red-200">
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.6, repeat: Infinity }}
      className="w-2 h-2 rounded-full bg-red-500"
    />
    <motion.div
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      className="w-2 h-2 rounded-full bg-red-400"
    />
    <motion.div
      animate={{ scale: [1, 1.6, 1] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      className="w-2 h-2 rounded-full bg-red-300"
    />
    <span className="text-sm font-medium text-red-600 ml-1">Listening</span>
  </div>
)

// ============================================
// MAIN CHATBOT COMPONENT
// ============================================

export default function Chatbot() {
  // ===== STATE =====
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isUserTyping, setIsUserTyping] = useState(false)
  const [thinkingIndex, setThinkingIndex] = useState(0)
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentSpeakingText, setCurrentSpeakingText] = useState('')
  
  // ===== REFS =====
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)
  const speechQueueRef = useRef<string[]>([])
  const isSpeakingRef = useRef(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // ============================================
  // INITIALIZATION
  // ============================================

  useEffect(() => {
    if (messages.length === 0 && !showWelcome) {
      setMessages([
        {
          id: '1',
          text: botKnowledge.default,
          sender: 'bot',
          timestamp: new Date(),
        },
      ])
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

  // ============================================
  // USER TYPING DETECTION
  // ============================================

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    
    // Show typing indicator
    setIsUserTyping(true)
    
    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    
    // Hide typing indicator after 1.5 seconds of no typing
    typingTimeoutRef.current = setTimeout(() => {
      setIsUserTyping(false)
    }, 1500)
  }

  // ============================================
  // SPEECH RECOGNITION
  // ============================================

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
          setIsUserTyping(true)
          
          // Clear previous timeout
          if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
          }
          typingTimeoutRef.current = setTimeout(() => {
            setIsUserTyping(false)
          }, 1500)
        }

        recognitionRef.current.onerror = () => {
          setIsListening(false)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
          if (input.trim()) {
            setTimeout(() => handleSend(input), 300)
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
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  // ============================================
  // VOICE INPUT HANDLER
  // ============================================

  const toggleVoice = () => {
    if (!isSpeechSupported) {
      alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.')
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
        console.error('Voice recognition error:', error)
        setIsListening(false)
      }
    }
  }

  // ============================================
  // TEXT-TO-SPEECH
  // ============================================

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
        utterance.onstart = () => {
          setIsSpeaking(true)
          isSpeakingRef.current = true
        }
        utterance.onend = () => {
          setIsSpeaking(false)
          isSpeakingRef.current = false
        }
        utterance.onerror = () => {
          setIsSpeaking(false)
          isSpeakingRef.current = false
        }
        window.speechSynthesis.speak(utterance)
      } catch (e) {
        setIsSpeaking(false)
        isSpeakingRef.current = false
      }
    }
  }, [isVoiceEnabled])

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      isSpeakingRef.current = false
    }
  }, [])

  const toggleVoiceOutput = useCallback(() => {
    setIsVoiceEnabled(!isVoiceEnabled)
    if (isVoiceEnabled) {
      stopSpeaking()
    }
  }, [isVoiceEnabled, stopSpeaking])

  // ============================================
  // GET BOT RESPONSE
  // ============================================

  const getBotResponse = (message: string): string => {
    const msg = message.toLowerCase()
    
    if (msg.includes('about') || msg.includes('who is') || msg.includes('introduce')) {
      return botKnowledge.about
    }
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('react') || msg.includes('python') || msg.includes('know')) {
      return botKnowledge.skills
    }
    if (msg.includes('experience') || msg.includes('work') || msg.includes('internship') || msg.includes('career')) {
      return botKnowledge.experience
    }
    if (msg.includes('project') || msg.includes('build') || msg.includes('portfolio')) {
      return botKnowledge.projects
    }
    if (msg.includes('education') || msg.includes('study') || msg.includes('university') || msg.includes('college')) {
      return botKnowledge.education
    }
    if (msg.includes('certif') || msg.includes('cert') || msg.includes('achievement')) {
      return botKnowledge.certifications
    }
    if (msg.includes('resume') || msg.includes('cv')) {
      return botKnowledge.resume
    }
    if (msg.includes('service') || msg.includes('offer') || msg.includes('help with')) {
      return botKnowledge.services
    }
    if (msg.includes('contact') || msg.includes('email') || msg.includes('connect') || msg.includes('reach')) {
      return botKnowledge.contact
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! I'm your AI Assistant. How can I help you today? Feel free to ask about Sara's experience, projects, skills, or anything else!"
    }
    if (msg.includes('thanks') || msg.includes('thank')) {
      return "You're welcome! Let me know if there's anything else I can help with."
    }
    
    return botKnowledge.default
  }

  // ============================================
  // SEND MESSAGE
  // ============================================

  const handleSend = useCallback(async (voiceMessage?: string) => {
    const messageToSend = voiceMessage || input
    if (!messageToSend.trim()) return

    // Hide welcome screen
    setShowWelcome(false)

    // Stop any ongoing speech
    stopSpeaking()

    // Hide user typing indicator
    setIsUserTyping(false)

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    if (!voiceMessage) setInput('')
    setIsTyping(true)
    setThinkingIndex(0)

    // Simulate AI thinking
    const delay = 500 + Math.random() * 1000
    
    setTimeout(() => {
      const response = getBotResponse(messageToSend)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      // Speak if voice is enabled
      if (isVoiceEnabled) {
        speakText(response)
      }
    }, delay)
  }, [input, isVoiceEnabled, speakText, stopSpeaking])

  // ============================================
  // CLEAR CHAT
  // ============================================

  const clearChat = () => {
    setMessages([])
    setShowWelcome(true)
    setIsUserTyping(false)
    stopSpeaking()
  }

  // ============================================
  // CLOSE CHAT
  // ============================================

  const closeChat = () => {
    setIsOpen(false)
    setIsUserTyping(false)
    stopSpeaking()
  }

  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeChat()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      {/* ===== FLOATING CHAT BUTTON ===== */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-[9999] group"
      >
        <div className="absolute -inset-4 bg-[#8B9A6B]/15 rounded-full blur-2xl animate-pulse" />
        <div className="relative p-4 bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] rounded-full shadow-2xl shadow-[#8B9A6B]/40 transition-all duration-300 hover:shadow-[#8B9A6B]/60">
          <MessageCircle className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#2ECC71] rounded-full border-2 border-white animate-pulse">
            <div className="absolute inset-0 rounded-full bg-[#2ECC71] animate-ping opacity-75" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#8B9A6B]/20 to-transparent blur-md"
          />
        </div>
      </motion.button>

      {/* ===== CHAT WINDOW ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { type: 'spring', damping: 25, stiffness: 300 }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.85, 
              y: 30,
              transition: { duration: 0.2 }
            }}
            className={`fixed bottom-24 right-6 z-[9999] w-[420px] max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-[#8B9A6B]/20 border border-[#8B9A6B]/10 overflow-hidden flex flex-col transition-all duration-300 ${
              isMinimized ? 'h-[72px]' : 'h-[600px] max-h-[80vh]'
            }`}
          >
            {/* ===== HEADER - FIXED ICONS ===== */}
            <div className="relative z-10 flex-shrink-0 p-4 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AIAvatar isSpeaking={isSpeaking} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold text-sm">Sara AI</h4>
                      <span className="px-1.5 py-0.5 bg-white/20 rounded-full text-[8px] text-white font-medium">
                        v2.0
                      </span>
                      {isSpeaking && (
                        <span className="text-[8px] text-white/80 animate-pulse flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-ping" />
                          Speaking...
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-white/70 text-[10px]">AI Portfolio Assistant</p>
                      <span className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full animate-pulse" />
                      <span className="text-white/50 text-[8px]">Available</span>
                    </div>
                  </div>
                </div>
                
                {/* ===== HEADER BUTTONS - COLORED ICONS ===== */}
                <div className="flex items-center gap-1">
                  {/* Voice Toggle - Colored */}
                  <VoiceToggle 
                    isEnabled={isVoiceEnabled} 
                    onToggle={toggleVoiceOutput} 
                  />
                  
                  {/* Stop Speaking - Colored */}
                  {isSpeaking && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      onClick={stopSpeaking}
                      className="p-1.5 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
                      title="Stop speaking"
                    >
                      <VolumeX className="w-4 h-4" />
                    </motion.button>
                  )}
                  
                  {/* Clear Chat - Colored */}
                  <button
                    onClick={clearChat}
                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="Clear chat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  {/* Minimize - Colored */}
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                    title={isMinimized ? 'Maximize' : 'Minimize'}
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>
                  
                  {/* Close - Colored */}
                  <button
                    onClick={closeChat}
                    className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ===== MESSAGES ===== */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 relative z-10 bg-[#FAF8F5]">
                  {showWelcome && messages.length === 0 ? (
                    <WelcomeScreen onSelect={(prompt) => {
                      setInput(prompt)
                      setTimeout(() => handleSend(prompt), 100)
                    }} />
                  ) : (
                    <>
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} group`}
                        >
                          {msg.sender === 'bot' && <AIAvatar isSpeaking={isSpeaking} />}
                          
                          <div
                            className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                              msg.sender === 'user'
                                ? 'bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] text-white rounded-br-none shadow-md'
                                : 'bg-white/90 backdrop-blur-sm text-[#1E1E1E] border border-[#8B9A6B]/10 rounded-bl-none shadow-sm'
                            }`}
                          >
                            <div className="text-sm leading-relaxed whitespace-pre-wrap">
                              <ReactMarkdown
                                components={{
                                  strong: ({ children }) => (
                                    <strong className={`font-semibold ${msg.sender === 'user' ? 'text-white' : 'text-[#8B9A6B]'}`}>
                                      {children}
                                    </strong>
                                  ),
                                  ul: ({ children }) => (
                                    <ul className="list-disc pl-4 space-y-1 my-1">{children}</ul>
                                  ),
                                  ol: ({ children }) => (
                                    <ol className="list-decimal pl-4 space-y-1 my-1">{children}</ol>
                                  ),
                                  li: ({ children }) => (
                                    <li className="text-sm">{children}</li>
                                  ),
                                  p: ({ children }) => (
                                    <p className="mb-2 last:mb-0">{children}</p>
                                  ),
                                }}
                              >
                                {msg.text}
                              </ReactMarkdown>
                            </div>
                            <div className={`flex items-center gap-1 mt-1 text-[10px] ${
                              msg.sender === 'user' ? 'text-white/60' : 'text-[#4A4A4A]/40'
                            }`}>
                              <span>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                            
                            {/* Message Actions */}
                            {msg.sender === 'bot' && (
                              <MessageActions
                                text={msg.text}
                                onCopy={() => {}}
                                onRegenerate={() => {
                                  const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user')
                                  if (lastUserMsg) {
                                    stopSpeaking()
                                    handleSend(lastUserMsg.text)
                                  }
                                }}
                                onLike={() => {}}
                                onDislike={() => {}}
                                onSpeak={() => {
                                  if (isSpeaking) {
                                    stopSpeaking()
                                  } else {
                                    speakText(msg.text)
                                  }
                                }}
                                isSpeaking={isSpeaking}
                              />
                            )}
                          </div>

                          {msg.sender === 'user' && <UserAvatar />}
                        </motion.div>
                      ))}
                    </>
                  )}
                  
                  {/* User Typing Indicator */}
                  <UserTypingIndicator isTyping={isUserTyping} />
                  
                  {/* Bot Typing Indicator */}
                  {isTyping && (
                    <TypingIndicator phrase={THINKING_PHRASES[thinkingIndex]} />
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* ===== INPUT AREA ===== */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white/80 backdrop-blur-sm border-t border-[#8B9A6B]/10">
                  <div className="flex items-center gap-2">
                    {/* Voice Button */}
                    {isSpeechSupported && (
                      <motion.button
                        onClick={toggleVoice}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
                          isListening 
                            ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30'
                            : 'bg-[#8B9A6B]/10 hover:bg-[#8B9A6B]/20 text-[#8B9A6B]'
                        }`}
                        title={isListening ? 'Stop listening' : 'Start voice input'}
                      >
                        {isListening ? (
                          <div className="flex items-center gap-1">
                            <MicOff className="w-4 h-4" />
                            <div className="flex gap-0.5">
                              <motion.span
                                animate={{ height: [8, 16, 8] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                                className="w-0.5 bg-white rounded-full"
                              />
                              <motion.span
                                animate={{ height: [12, 20, 12] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                className="w-0.5 bg-white rounded-full"
                              />
                              <motion.span
                                animate={{ height: [6, 14, 6] }}
                                transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                                className="w-0.5 bg-white rounded-full"
                              />
                            </div>
                          </div>
                        ) : (
                          <Mic className="w-4 h-4" />
                        )}
                      </motion.button>
                    )}

                    {/* Input */}
                    <div className="relative flex-1">
                      {isListening && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <motion.span
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-red-500"
                          />
                          <span className="text-xs text-red-500 font-medium">Listening...</span>
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
                        placeholder={isListening ? 'Listening...' : 'Ask anything about Sara...'}
                        className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 text-sm transition-all duration-300 ${
                          isListening
                            ? 'bg-red-50 border-red-300 focus:border-red-500 focus:ring-red-200 text-red-700 pl-32'
                            : 'bg-[#F5F5F0] border-[#8B9A6B]/20 focus:border-[#8B9A6B] focus:ring-[#8B9A6B]/20 text-[#1E1E1E]'
                        }`}
                        disabled={isListening}
                      />
                    </div>
                    
                    {/* Send Button */}
                    <motion.button
                      onClick={() => handleSend()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
                        input.trim() || isListening
                          ? 'bg-[#8B9A6B] hover:bg-[#6B7A5B] shadow-lg shadow-[#8B9A6B]/20'
                          : 'bg-[#8B9A6B]/20 cursor-not-allowed'
                      }`}
                      disabled={!input.trim() && !isListening}
                    >
                      <Send className={`w-4 h-4 ${input.trim() || isListening ? 'text-white' : 'text-[#8B9A6B]/40'}`} />
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mt-2 text-[9px] text-[#4A4A4A]/25">
                    <Sparkles className="w-3 h-3 text-[#8B9A6B]" />
                    <span>Press Enter to send</span>
                    {isSpeechSupported && <span>• Click mic to speak</span>}
                    <span>• Esc to close</span>
                    <span>• Voice {isVoiceEnabled ? 'ON' : 'OFF'}</span>
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