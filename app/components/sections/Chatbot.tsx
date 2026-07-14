'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, X, Send, Sparkles, 
  User, Mic, MicOff, Copy, 
  Minimize2, Maximize2, ThumbsUp, ThumbsDown,
  Trash2, Briefcase, Code2, GraduationCap,
  Award, FileText, Mail, Star, ChevronDown,
  Check, WifiOff, Download, ExternalLink, Calendar, Layers
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import toast from 'react-hot-toast'

// ============================================
// TYPES
// ============================================

interface ProjectCardInfo {
  title: string
  image: string
  github: string
  live?: string
  tech: string[]
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  projectCards?: ProjectCardInfo[]
}

interface Suggestion {
  icon: any
  label: string
  prompt: string
  description: string
}

// ============================================
// PROJECT DATA — mirrors Projects.tsx (same images/links already in
// public/images/projects/). Used to detect which project(s) a reply is
// about and attach a rich card (image + GitHub + Live) instead of leaving
// it as plain text.
// ============================================

const PROJECTS_DATA: (ProjectCardInfo & { matchKeys: string[] })[] = [
  {
    title: 'AURUM Finance Dashboard',
    image: '/images/projects/aurum-dashboard.png',
    github: 'https://github.com/Sara12-2/Expense_Tracer_Dashboard',
    live: 'https://expense-tracer-dashboard.vercel.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
    matchKeys: ['aurum'],
  },
  {
    title: 'UoL AI Assistant',
    image: '/images/projects/uol-ai-assistant.png',
    github: 'https://github.com/Sara12-2/UoL-AI-Assistant-Hackathon-2026',
    live: 'https://uo-l-ai-assistant-hackathon-2026.vercel.app/',
    tech: ['Python', 'Flask', 'Groq Llama 3 70B', 'MySQL'],
    matchKeys: ['uol ai assistant', 'uol assistant'],
  },
  {
    title: 'Grocery Store Website',
    image: '/images/projects/grocery.png',
    github: 'https://github.com/Sara12-2/Grocery_Store_Website-',
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    matchKeys: ['grocery store', 'grocery'],
  },
  {
    title: 'Apex Appointment Dashboard',
    image: '/images/projects/apex-dashboard.png',
    github: 'https://github.com/Sara12-2/Appointment_booking_Dashboard',
    live: 'https://appointment-booking-dashboard-ten.vercel.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'FullCalendar'],
    matchKeys: ['apex appointment', 'apex dashboard'],
  },
  {
    title: 'Softtec 2026 — High-Cost Patient Prediction',
    image: '/images/projects/softtec.png',
    github: 'https://github.com/Sara12-2/High_Cost_Patient_prediction_Softtec_Competition_Project',
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn'],
    matchKeys: ['softtec', 'high-cost patient', 'patient prediction'],
  },
  {
    title: 'LuxEstate — Real Estate Landing Page',
    image: '/images/projects/luxestate.png',
    github: 'https://github.com/Sara12-2/luxury-real-estate-landing-page',
    live: 'https://luxury-real-estate-landing-page-drk.vercel.app/',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    matchKeys: ['luxestate'],
  },
  {
    title: 'Smart Cafeteria System',
    image: '/images/projects/cafeteria.png',
    github: 'https://github.com/Sara12-2/Smart_Cafeteria_Full_Stack_Website',
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
    matchKeys: ['smart cafeteria', 'cafeteria'],
  },
  {
    title: 'ASL Sign Language Recognition',
    image: '/images/projects/asl.png',
    github: 'https://github.com/Sara12-2/ASL_Sign_Language_Recognition',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    matchKeys: ['asl', 'sign language'],
  },
  {
    title: 'SwiftEats — Food Delivery Landing Page',
    image: '/images/projects/swifteats.png',
    github: 'https://github.com/Sara12-2/Swifteats_Premium_food_delievery_landing_page',
    live: 'https://restaurant-food-delivery-website-la.vercel.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    matchKeys: ['swifteats'],
  },
  {
    title: 'AI-Powered Resume Screening System',
    image: '/images/projects/resume-screening.png',
    github: 'https://github.com/Sara12-2/AI_Powered_Resume_Screening_system',
    tech: ['Python', 'TensorFlow', 'Streamlit'],
    matchKeys: ['resume screening'],
  },
  {
    title: 'ARCWATCH — Premium Smartwatch Landing Page',
    image: '/images/projects/arcwatch.png',
    github: 'https://github.com/Sara12-2/Smart_Watch_Landing_Page',
    live: 'https://smart-watch-landing-page-gules.vercel.app/',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    matchKeys: ['arcwatch'],
  },
  {
    title: 'Smart Retail Shelf Monitoring',
    image: '/images/projects/retail-shelf.png',
    github: 'https://github.com/Sara12-2/Smart_Retail_Shelf_Monitoring_with_YOLOv8',
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    matchKeys: ['smart retail', 'shelf monitoring'],
  },
  {
    title: 'Mountain Car RL Agent',
    image: '/images/projects/mountain-car.png',
    github: 'https://github.com/Sara12-2/Mountain_Car_Reinforcement_learning_Agent',
    tech: ['Python', 'Gymnasium', 'Q-Learning'],
    matchKeys: ['mountain car'],
  },
  {
    title: 'TechNest — Premium React E-Commerce',
    image: '/images/projects/technest.png',
    github: 'https://github.com/Sara12-2/TechNest_Ecommerce_Website',
    live: 'https://tech-nest-ecommerce.vercel.app/',
    tech: ['React', 'Vite', 'JavaScript'],
    matchKeys: ['technest'],
  },
  {
    title: 'StudySmart AI',
    image: '/images/projects/studysmart-ai.png',
    github: 'https://github.com/Sara12-2/Study_Smart_AI',
    tech: ['Python', 'Flask', 'SQLite', 'Scikit-learn'],
    matchKeys: ['studysmart'],
  },
]

function detectMentionedProjects(text: string): ProjectCardInfo[] {
  const lower = text.toLowerCase()
  const matched: ProjectCardInfo[] = []
  for (const project of PROJECTS_DATA) {
    if (project.matchKeys.some((key) => lower.includes(key))) {
      const { matchKeys, ...card } = project
      matched.push(card)
    }
  }
  // cap at 3 cards so one reply never floods the chat with images
  return matched.slice(0, 3)
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

const VISIBLE_SUGGESTIONS_COUNT = 4

const QUICK_ACTIONS = [
  { icon: Download, label: 'Resume', action: 'resume' as const },
  { icon: ExternalLink, label: 'GitHub', action: 'github' as const },
  { icon: Mail, label: 'Email', action: 'email' as const },
  { icon: Calendar, label: 'Contact', action: 'contact' as const },
  { icon: Layers, label: 'Projects', action: 'projects' as const },
]

const API_TIMEOUT_MS = 15000

// ============================================
// BOT KNOWLEDGE BASE (offline fallback only — primary answers come from /api/chat)
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

  default: `Hi! I'm Sara's personal assistant.

I can help you:

**Explore** — her background, skills, and experience
**Browse** — her projects and certifications
**Connect** — download her resume or reach out directly

What would you like to do?`
}

// ============================================
// COMPONENT: Avatar
// ============================================

const BotAvatar = ({ size = 8 }: { size?: number }) => {
  const px = size * 4
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative flex-shrink-0" style={{ width: px, height: px }}>
      <div className="absolute inset-0 rounded-full bg-[#8B9A6B]/20 blur-md" />
      <div
        className="relative rounded-full overflow-hidden ring-2 ring-white shadow-md shadow-[#8B9A6B]/30"
        style={{ width: px, height: px }}
      >
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-[#8B9A6B] to-[#5F7048] flex items-center justify-center">
            <span className="text-white font-bold" style={{ fontSize: px * 0.32 }}>SM</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/profile.jpg"
            alt="Sara Manzoor"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#2ECC71] rounded-full border-2 border-white" />
    </div>
  )
}

const UserAvatar = () => (
  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#6B7A5B] to-[#4A5A3D] flex items-center justify-center ring-2 ring-white shadow-sm">
    <User className="w-3.5 h-3.5 text-white" />
  </div>
)

// ============================================
// COMPONENT: Project Card
// NEW — when a reply mentions a specific project, this renders below the
// text: image thumbnail, tech tags, and GitHub/Live buttons, instead of
// leaving it as a plain-text link.
// ============================================

const ProjectCard = ({ project }: { project: ProjectCardInfo }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="w-full bg-[#FAF8F5] rounded-xl border border-[#8B9A6B]/15 overflow-hidden">
      <div className="relative w-full h-28 bg-white">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#8B9A6B]/5">
            <Layers className="w-6 h-6 text-[#8B9A6B]/30" />
          </div>
        )}
      </div>
      <div className="p-2.5">
        <p className="text-[12px] font-bold text-[#2C2C2C] leading-tight">{project.title}</p>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#8B9A6B]/10 text-[#8B9A6B] font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors"
          >
            <FaGithub className="w-3 h-3" />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-medium text-[#8B9A6B] hover:text-[#5F7048] transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// COMPONENT: Header Icon Button
// ============================================

const HeaderIconButton = ({
  onClick,
  title,
  children,
}: {
  onClick: () => void
  title: string
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    title={title}
    aria-label={title}
    className="flex items-center justify-center w-8 h-8 rounded-lg text-white/85 hover:text-white hover:bg-white/15 transition-colors duration-200"
  >
    {children}
  </button>
)

// ============================================
// COMPONENT: Message Actions
// ============================================

const MessageActions = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null)

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
        onClick={() => setReaction(reaction === 'like' ? null : 'like')}
        aria-label="Like this answer"
        className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${reaction === 'like' ? 'bg-[#2ECC71]/15' : 'hover:bg-[#8B9A6B]/10'}`}
      >
        <ThumbsUp className={`w-3.5 h-3.5 ${reaction === 'like' ? 'fill-[#2ECC71] text-[#2ECC71]' : 'text-[#4A4A4A]/60'}`} />
      </button>

      <button
        onClick={() => setReaction(reaction === 'dislike' ? null : 'dislike')}
        aria-label="Dislike this answer"
        className={`flex items-center justify-center w-6 h-6 rounded-md transition-colors ${reaction === 'dislike' ? 'bg-red-100' : 'hover:bg-[#8B9A6B]/10'}`}
      >
        <ThumbsDown className={`w-3.5 h-3.5 ${reaction === 'dislike' ? 'fill-red-500 text-red-500' : 'text-[#4A4A4A]/60'}`} />
      </button>
    </div>
  )
}

// ============================================
// COMPONENT: Typing Indicator
// ============================================

const TypingIndicator = () => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-end gap-2 justify-start">
    <BotAvatar />
    <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-[#8B9A6B]/10 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1">
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]" />
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/70" />
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-[#8B9A6B]/40" />
        </div>
        <span className="text-xs text-[#4A4A4A]/60">Checking…</span>
      </div>
    </div>
  </motion.div>
)

// ============================================
// COMPONENT: Suggestion Cards
// ============================================

const SuggestionCards = ({ onSelect }: { onSelect: (prompt: string) => void }) => {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? SUGGESTIONS : SUGGESTIONS.slice(0, VISIBLE_SUGGESTIONS_COUNT)

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-2 mt-4 w-full">
        {visible.map((suggestion, index) => {
          const Icon = suggestion.icon
          return (
            <motion.button
              key={suggestion.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => onSelect(suggestion.prompt)}
              aria-label={`Ask about ${suggestion.label}: ${suggestion.description}`}
              className="group flex items-center gap-2 p-2.5 bg-white hover:bg-[#8B9A6B]/5 active:bg-[#8B9A6B]/10 rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8B9A6B] transition-all duration-200 text-left"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#8B9A6B]/15 to-[#8B9A6B]/5 group-hover:from-[#8B9A6B] group-hover:to-[#6B7A5B] transition-all duration-200 flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#8B9A6B] group-hover:text-white transition-colors duration-200" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-[#2C2C2C] truncate">{suggestion.label}</p>
                <p className="text-[9px] text-[#4A4A4A]/50 truncate">{suggestion.description}</p>
              </div>
            </motion.button>
          )
        })}
      </div>

      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="flex items-center gap-1 mx-auto mt-3 text-[11px] font-medium text-[#8B9A6B] hover:text-[#5F7048] transition-colors"
      >
        {showAll ? 'Show less' : 'Show more'}
        <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </button>
    </div>
  )
}

// ============================================
// COMPONENT: Welcome Screen
// ============================================

const WelcomeScreen = ({ onSelect }: { onSelect: (prompt: string) => void }) => (
  <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
    <BotAvatar size={12} />

    <h3 className="text-base font-bold text-[#2C2C2C] mt-3">Hi, I'm Sara's assistant</h3>
    <p className="text-[11px] text-[#4A4A4A]/60 mt-1 max-w-[260px] leading-relaxed">
      I can walk you through her work, hand you a copy of her resume, or connect you with her directly.
    </p>

    <SuggestionCards onSelect={onSelect} />
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
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [isOnline, setIsOnline] = useState(true)
  const [usedFallbackOnce, setUsedFallbackOnce] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
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
    if (typeof window === 'undefined') return
    setIsOnline(navigator.onLine)
    const goOnline = () => setIsOnline(true)
    const goOffline = () => setIsOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

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
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) return "Hello! How can I help you today? Feel free to ask about Sara's experience, projects, skills, or anything else!"
    if (msg.includes('thanks') || msg.includes('thank')) return "You're welcome! Let me know if there's anything else I can help with."
    return botKnowledge.default
  }

  const callChatApi = useCallback(async (message: string, history: Message[]): Promise<string> => {
    const attempt = async (): Promise<string> => {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message,
            history: history.map((m) => ({ sender: m.sender, text: m.text })),
          }),
          signal: controller.signal,
        })
        clearTimeout(timeoutId)

        if (!res.ok) throw new Error(`API request failed (${res.status})`)
        const data = await res.json()
        if (!data.reply) throw new Error('Empty reply from API')
        return data.reply as string
      } catch (err) {
        clearTimeout(timeoutId)
        throw err
      }
    }

    try {
      return await attempt()
    } catch (firstErr) {
      try {
        return await attempt()
      } catch (secondErr) {
        throw secondErr
      }
    }
  }, [])

  const handleSend = useCallback(async (voiceMessage?: string) => {
    const messageToSend = voiceMessage || input
    if (!messageToSend.trim()) return
    if (isTyping) return

    setShowWelcome(false)

    const userMessage: Message = { id: Date.now().toString(), text: messageToSend, sender: 'user', timestamp: new Date() }
    const historyForApi = messages
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    let response: string

    try {
      response = await callChatApi(messageToSend, historyForApi)
    } catch (err) {
      response = getBotResponse(messageToSend)
      if (!usedFallbackOnce) {
        toast.error("Couldn't reach the AI right now — answering from offline knowledge instead.")
        setUsedFallbackOnce(true)
      }
    }

    // NEW: detect which project(s) this reply is about and attach rich
    // cards (image + GitHub + Live) instead of leaving it as plain text.
    const projectCards = detectMentionedProjects(response)

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      projectCards: projectCards.length > 0 ? projectCards : undefined,
    }
    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
  }, [input, isTyping, messages, callChatApi, usedFallbackOnce])

  // Speech Recognition Setup — voice INPUT stays
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
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleVoiceInput = () => {
    if (!isSpeechSupported) {
      toast.error('Voice input is not supported in your browser. Please use Chrome or Edge.')
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

  const clearChat = () => {
    setMessages([])
    setShowWelcome(true)
  }

  const closeChat = () => {
    setIsOpen(false)
    setTimeout(() => toggleButtonRef.current?.focus(), 50)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeChat()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleQuickAction = (action: 'resume' | 'github' | 'email' | 'contact' | 'projects') => {
    switch (action) {
      case 'resume':
        window.open('/resume.png', '_blank')
        break
      case 'github':
        window.open('https://github.com/Sara12-2', '_blank')
        break
      case 'email':
        window.location.href = 'mailto:saramanzoor76@gmail.com'
        break
      case 'contact':
        setIsOpen(false)
        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
        break
      case 'projects':
        setIsOpen(false)
        setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 200)
        break
    }
  }

  const canSend = (input.trim() || isListening) && !isTyping

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        ref={toggleButtonRef}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open Sara's assistant"
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[9999] ${isOpen ? 'hidden' : 'block'}`}
      >
        <div className="relative p-3.5 bg-gradient-to-br from-[#8B9A6B] to-[#5F7048] rounded-full shadow-lg shadow-[#8B9A6B]/40">
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Sara's assistant"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 26, stiffness: 320 } }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.15 } }}
            className={`fixed z-[9999] bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#8B9A6B]/25 border border-[#8B9A6B]/10 overflow-hidden flex flex-col
              bottom-0 right-0 left-0 top-0 sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto
              w-full sm:w-[400px] max-w-full
              h-full sm:h-[620px] sm:max-h-[80vh]
              transition-[height] duration-300
              ${isMinimized ? 'sm:!h-[68px]' : ''}
            `}
          >
            {/* Header */}
            <div className="relative flex-shrink-0 px-4 py-3 bg-gradient-to-r from-[#8B9A6B] to-[#5F7048] shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <BotAvatar />
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">Sara's Assistant</h4>
                    <p className="text-white/70 text-[11px]">Here to help you connect</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 flex-shrink-0">
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

            {/* Offline banner */}
            {!isOnline && (
              <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-700 text-xs">
                <WifiOff className="w-3.5 h-3.5 flex-shrink-0" />
                <span>You're offline — I'll answer from saved knowledge until you're back online.</span>
              </div>
            )}

            {/* Quick Actions Bar */}
            <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-[#FAF8F5] border-b border-[#8B9A6B]/10 overflow-x-auto">
              {QUICK_ACTIONS.map((qa) => {
                const Icon = qa.icon
                return (
                  <button
                    key={qa.label}
                    onClick={() => handleQuickAction(qa.action)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white border border-[#8B9A6B]/15 text-[10px] font-medium text-[#4A4A4A] hover:border-[#8B9A6B]/40 hover:text-[#8B9A6B] hover:shadow-sm transition-all duration-200 flex-shrink-0"
                  >
                    <Icon className="w-3 h-3 text-[#8B9A6B]" />
                    {qa.label}
                  </button>
                )
              })}
            </div>

            {/* Messages + Input */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 bg-gradient-to-b from-[#FAF8F5] to-[#F5F5F0]">
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
                        {msg.sender === 'bot' && <BotAvatar />}

                        <div className={`flex flex-col gap-2 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                          <div
                            className={`px-4 py-2.5 rounded-2xl ${
                              msg.sender === 'user'
                                ? 'bg-gradient-to-br from-[#8B9A6B] to-[#6B7A5B] text-white rounded-br-md shadow-md shadow-[#8B9A6B]/20'
                                : 'bg-white text-[#1E1E1E] border border-[#8B9A6B]/10 rounded-bl-md shadow-sm'
                            }`}
                          >
                            <div className="text-[13.5px] leading-relaxed">
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  strong: ({ children }) => (
                                    <strong className={`font-semibold ${msg.sender === 'user' ? 'text-white' : 'text-[#8B9A6B]'}`}>{children}</strong>
                                  ),
                                  ul: ({ children }) => <ul className="list-disc pl-4 space-y-0.5 my-1.5">{children}</ul>,
                                  ol: ({ children }) => <ol className="list-decimal pl-4 space-y-0.5 my-1.5">{children}</ol>,
                                  li: ({ children }) => <li>{children}</li>,
                                  p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                                  table: ({ children }) => (
                                    <div className="my-2 overflow-x-auto rounded-lg border border-[#8B9A6B]/15">
                                      <table className="w-full text-left border-collapse text-[12px]">{children}</table>
                                    </div>
                                  ),
                                  thead: ({ children }) => (
                                    <thead className={msg.sender === 'user' ? 'bg-white/15' : 'bg-[#8B9A6B]/10'}>{children}</thead>
                                  ),
                                  tr: ({ children }) => (
                                    <tr className={`border-b last:border-b-0 ${msg.sender === 'user' ? 'border-white/15' : 'border-[#8B9A6B]/10'}`}>{children}</tr>
                                  ),
                                  th: ({ children }) => (
                                    <th className={`px-2.5 py-1.5 font-semibold ${msg.sender === 'user' ? 'text-white' : 'text-[#8B9A6B]'}`}>{children}</th>
                                  ),
                                  td: ({ children }) => <td className="px-2.5 py-1.5 align-top">{children}</td>,
                                }}
                              >
                                {msg.text}
                              </ReactMarkdown>
                            </div>

                            <span className={`block mt-1 text-[10px] ${msg.sender === 'user' ? 'text-white/60' : 'text-[#4A4A4A]/35'}`}>
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>

                            {msg.sender === 'bot' && <MessageActions text={msg.text} />}
                          </div>

                          {/* NEW: Project cards attached below the bubble when
                              the reply is about a specific known project */}
                          {msg.projectCards && msg.projectCards.length > 0 && (
                            <div className={`grid gap-2 w-full ${msg.projectCards.length > 1 ? 'grid-cols-1' : 'grid-cols-1'}`} style={{ maxWidth: 260 }}>
                              {msg.projectCards.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                              ))}
                            </div>
                          )}
                        </div>

                        {msg.sender === 'user' && <UserAvatar />}
                      </motion.div>
                    ))
                  )}

                  {isTyping && <TypingIndicator />}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex-shrink-0 px-3.5 py-3 bg-white border-t border-[#8B9A6B]/10">
                  <div className="flex items-center gap-2">
                    {isSpeechSupported && (
                      <button
                        onClick={toggleVoiceInput}
                        disabled={isTyping}
                        aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                        className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed ${
                          isListening ? 'bg-red-500 text-white' : 'bg-[#8B9A6B]/10 text-[#8B9A6B] hover:bg-[#8B9A6B]/20'
                        }`}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                    )}

                    <div className="relative flex-1 min-w-0">
                      {isListening && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
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
                        placeholder={isListening ? '' : isTyping ? 'Just a moment…' : 'Ask me anything...'}
                        disabled={isListening || isTyping}
                        aria-label="Message input"
                        className={`w-full h-10 px-4 border rounded-full focus:outline-none focus:ring-2 text-sm transition-colors duration-200 disabled:opacity-60 ${
                          isListening
                            ? 'bg-red-50 border-red-200 pl-24 text-red-700'
                            : 'bg-[#F5F5F0] border-[#8B9A6B]/20 focus:border-[#8B9A6B] focus:ring-[#8B9A6B]/15 text-[#1E1E1E]'
                        }`}
                      />
                    </div>

                    <button
                      onClick={() => handleSend()}
                      aria-label="Send message"
                      disabled={!canSend}
                      className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-all duration-200 ${
                        canSend ? 'bg-gradient-to-br from-[#8B9A6B] to-[#5F7048] hover:shadow-lg hover:shadow-[#8B9A6B]/30' : 'bg-[#8B9A6B]/20 cursor-not-allowed'
                      }`}
                    >
                      <Send className={`w-4 h-4 ${canSend ? 'text-white' : 'text-[#8B9A6B]/40'}`} />
                    </button>
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