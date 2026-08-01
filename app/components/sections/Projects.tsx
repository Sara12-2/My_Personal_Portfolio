'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Brain, 
  Globe, 
  Code2, 
  Wallet,
  Home,
  Coffee,
  ShoppingBag,
  Calendar,
  Ticket,
  FileText,
  Package,
  Utensils,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 3,
    title: 'EventSphere Pro — Event Booking Platform',
    problem: "small event organizers need real ticketing infrastructure — booking, seat tracking, revenue — but existing options are either an expensive platform or a form bolted onto a calendar.",
    solution: "a multi-role (attendee/organizer/admin) booking platform with seat-locked bookings that can't overbook, JWT auth with httpOnly + CSRF-protected refresh cookies, and a revenue analytics panel. Result: 11 passing pytest tests, one-command Docker setup (PostgreSQL + Flask + React).",
    category: 'fullstack',
    tech: ['React', 'Flask', 'PostgreSQL', 'JWT Authentication', 'Docker'],
    live: '',
    github: 'https://github.com/Sara12-2/EventSphere-Pro',
    image: '/images/projects/eventsphere.png',
    icon: Ticket,
    color: '#EC4899',
  },
  {
    id: 4,
    title: 'PaperMind AI — RAG-Powered PDF Q&A',
    problem: "reading long research papers to find one fact is slow, and asking a general LLM instead risks a confident, hallucinated answer with no way to verify it.",
    solution: "a RAG pipeline — PDFs split into page-aware chunks, embedded locally (zero-cost, no API calls), retrieved by cosine similarity, and answered by an LLM instructed to cite the exact page it used. Result: every answer grounded in the actual document, with inline page citations.",
    category: 'ai',
    tech: ['Next.js', 'Flask', 'Sentence Transformers', 'Groq API (Llama 3)', 'Python'],
    live: '',
    github: 'https://github.com/Sara12-2/PaperMind-AI',
    image: '/images/projects/papermind.png',
    icon: FileText,
    color: '#0EA5E9',
  },
  {
    id: 7,
    title: 'StockFlow AI — Inventory Management SaaS',
    problem: "small e-commerce teams outgrow spreadsheets for inventory but can't justify the cost or complexity of a full ERP system.",
    solution: "a full-stack SaaS where every number that matters — forecasts, reorder quantities — is computed deterministically; an LLM is used only to narrate the trend, never to invent a figure. Real-time Socket.IO alerts, full RBAC. Result: 42 backend tests, CI pipeline, graceful degradation if Redis/Groq are unavailable.",
    category: 'ai',
    tech: ['Next.js', 'React', 'Flask', 'Redis', 'Docker', 'Groq API'],
    live: 'https://drive.google.com/file/d/1HHUJQYC6oSzfxB-GVjuexE-uqA_HF_8g/view?usp=sharing',
    github: 'https://github.com/Sara12-2/Full-Stack-Inventory-Management-SaaS-with-AI-Forecasting',
    image: '/images/projects/stockflow.png',
    icon: Package,
    color: '#0D9488',
  },
  {
    id: 1,
    title: 'AURUM Finance Dashboard',
    problem: "most personal finance tools demand a signup and subscription just to log an expense.",
    solution: "a zero-backend, browser-based dashboard with full transaction CRUD, category budgets with color-coded alerts, multi-currency support, and CSV/JSON export — all persisted locally, no account required.",
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Font Awesome'],
    live: 'https://expense-tracer-dashboard.vercel.app/',
    github: 'https://github.com/Sara12-2/Expense_Tracer_Dashboard',
    image: '/images/projects/aurum-dashboard.png',
    icon: Wallet,
    color: '#8B9A6B',
  },
  {
    id: 8,
    title: 'UoL AI Assistant — South Punjab Generative AI Hackathon 2026',
    problem: "students, applicants, and visitors had no quick way to get role-relevant answers about University of Layyah — information was scattered across static pages.",
    solution: "a bilingual (English/Urdu) AI assistant grounded in real scraped university data, with role-based responses, voice I/O, and an offline keyword-fallback mode. Built with Groq Llama 3 70B, a 7-table MySQL schema, and production security (rate limiting, CORS, input sanitization). Top 10 out of 23+ teams.",
    category: 'ai',
    tech: ['Python', 'Flask', 'Groq API (Llama 3 70B)', 'MySQL', 'BeautifulSoup4', 'JavaScript'],
    live: 'https://uo-l-ai-assistant-hackathon-2026.vercel.app/',
    github: 'https://github.com/Sara12-2/UoL-AI-Assistant-Hackathon-2026',
    image: '/images/projects/uol-ai-assistant.png',
    icon: Brain,
    color: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Grocery Store Website — Full-Stack E-commerce',
    problem: "small grocery businesses need an online storefront, but affordable e-commerce options rarely include real security or delivery logistics.",
    solution: "a full-stack platform (42+ products) with bcrypt-hashed auth, login-attempt lockout, delivery-slot scheduling, and an admin analytics dashboard.",
    category: 'fullstack',
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'Chart.js'],
    live: '',
    github: 'https://github.com/Sara12-2/Grocery_Store_Website-',
    image: '/images/projects/grocery.png',
    icon: ShoppingBag,
    color: '#22C55E',
  },
  {
    id: 22,
    title: 'Apex Appointment Dashboard',
    problem: "small service businesses need appointment scheduling without paying for a heavyweight SaaS subscription.",
    solution: "a single-file dashboard with a FullCalendar-powered schedule, full appointment CRUD, and dynamic accent-color theming — drop the file anywhere and it runs.",
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'FullCalendar'],
    live: 'https://appointment-booking-dashboard-ten.vercel.app/',
    github: 'https://github.com/Sara12-2/Appointment_booking_Dashboard',
    image: '/images/projects/apex-dashboard.png',
    icon: Calendar,
    color: '#1E90FF',
  },
  {
    id: 9,
    title: 'Softtec 2026 ML Competition — High-Cost Patient Prediction',
    problem: "healthcare payers can't identify which members will become high-cost (>$30k/year) until the cost has already happened.",
    solution: "a LightGBM + XGBoost ensemble on 336 engineered features, with the decision threshold tuned to maximize recall — catching over 82% of true high-cost members before costs occur. Result: 0.825 recall, Softtec 2026 ML Competition, FAST NUCES Lahore.",
    category: 'ai',
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn', 'Pandas'],
    live: '',
    github: 'https://github.com/Sara12-2/High_Cost_Patient_prediction_Softtec_Competition_Project',
    image: '/images/projects/softtec.png',
    icon: Brain,
    color: '#8B9A6B',
  },
  {
    id: 23,
    title: 'LuxEstate — Real Estate Landing Page',
    problem: "real estate listings need to convert international buyers, but most landing pages show a single currency and no way to estimate real costs.",
    solution: "an interactive landing page with live search/filter, a real-time mortgage calculator, and a multi-currency switcher (USD/AED/GBP).",
    category: 'web',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Chart.js', 'Font Awesome'],
    live: 'https://luxury-real-estate-landing-page-drk.vercel.app/',
    github: 'https://github.com/Sara12-2/luxury-real-estate-landing-page',
    image: '/images/projects/luxestate.png',
    icon: Home,
    color: '#d4af37',
  },
  {
    id: 6,
    title: 'Smart Cafeteria System',
    problem: "campus/office cafeterias running orders manually leads to mistakes and no visibility into what's actually selling.",
    solution: "a full-stack ordering system with role-based access, bcrypt-hashed auth, live order tracking, and a revenue analytics dashboard.",
    category: 'fullstack',
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'Chart.js'],
    live: '',
    github: 'https://github.com/Sara12-2/Smart_Cafeteria_Full_Stack_Website',
    image: '/images/projects/cafeteria.png',
    icon: Coffee,
    color: '#8B6B4D',
  },
  {
    id: 11,
    title: 'ASL Sign Language Recognition',
    problem: "most people can't understand American Sign Language, creating a real communication barrier with no accessible, real-time translation tool.",
    solution: "a CNN trained on class-balanced, augmented ASL image data, served through CLI, image upload, and live webcam inference — with horizontal flip intentionally disabled, since mirroring a hand sign changes its meaning.",
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Tkinter'],
    live: '',
    github: 'https://github.com/Sara12-2/ASL_Sign_Language_Recognition',
    image: '/images/projects/asl.png',
    icon: Brain,
    color: '#1E90FF',
  },
  {
    id: 13,
    title: 'Smart Retail Shelf Monitoring with YOLOv8',
    problem: "manual shelf audits are slow and easy to skip, so stockouts often go unnoticed until a sale is lost.",
    solution: "a real-time YOLOv8 detection pipeline that counts items per frame and triggers color-coded low-stock alerts — architected so the detection model can be swapped for a custom-trained, SKU-specific model with zero code changes.",
    category: 'ai',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Tkinter', 'Ultralytics'],
    live: '',
    github: 'https://github.com/Sara12-2/Smart_Retail_Shelf_Monitoring_with_YOLOv8',
    image: '/images/projects/retail-shelf.png',
    icon: Brain,
    color: '#F97316',
  },
  {
    id: 2,
    title: 'TechNest — Premium React E-Commerce Website',
    problem: "small e-commerce businesses need a modern, engaging storefront to compete with bigger brands, but generic templates look dated.",
    solution: "a React + Vite storefront with a glassmorphism UI, real-time search/category filtering, and persistent cart/wishlist management.",
    category: 'web',
    tech: ['React', 'Vite', 'JavaScript', 'CSS3', 'LocalStorage'],
    live: 'https://tech-nest-ecommerce.vercel.app/',
    github: 'https://github.com/Sara12-2/TechNest_Ecommerce_Website',
    image: '/images/projects/technest.png',
    icon: ShoppingBag,
    color: '#8B5CF6',
  },
  {
    id: 24,
    title: 'SwiftEats — Food Delivery Landing Page',
    problem: "restaurant startups need a premium, trustworthy landing page to convert visitors into orders without the cost of a full custom build.",
    solution: "a fully responsive landing page with live menu filtering, an animated FAQ accordion, and scroll-triggered animations via the Intersection Observer API.",
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Lucide Icons', 'Google Fonts'],
    live: 'https://restaurant-food-delivery-website-la.vercel.app/',
    github: 'https://github.com/Sara12-2/Swifteats_Premium_food_delievery_landing_page',
    image: '/images/projects/swifteats.png',
    icon: Utensils,
    color: '#F97316',
  },
  {
    id: 17,
    title: 'StudySmart AI — Intelligent Study Tracking System',
    problem: "students rarely get real visibility into their own study habits — which hours, subjects, or conditions actually drive productivity.",
    solution: "a study tracker using pandas/NumPy statistical analysis (Z-score anomaly detection, correlation, linear-trend forecasting — not trained ML models) to surface patterns and recommendations, shipped as both a Flask web app and a CLI sharing the same core engine.",
    category: 'fullstack',
    tech: ['Python', 'Flask', 'SQLite', 'Pandas', 'NumPy'],
    live: '',
    github: 'https://github.com/Sara12-2/Study_Smart_AI',
    image: '/images/projects/studysmart-ai.png',
    icon: BookOpen,
    color: '#4F8A5B',
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'fullstack', label: 'Full Stack', icon: Code2 },
  { id: 'ai', label: 'AI/ML', icon: Brain },
]

// ✅ FIXED: Added TypeScript types
function truncateWords(text: string, wordCount: number) {
  const words = text.split(' ')
  if (words.length <= wordCount) return text
  return words.slice(0, wordCount).join(' ') + '...'
}

function ProjectCard({ project, canHover }: { project: any; canHover: boolean }) {
  const Icon = project.icon
  const hasLive = project.live && project.live !== ''
  const [expanded, setExpanded] = useState(false)

  const problemShort = truncateWords(project.problem, 10)
  const solutionShort = truncateWords(project.solution, 10)
  const needsToggle =
    project.problem.split(' ').length > 10 || project.solution.split(' ').length > 10

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={canHover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#8B9A6B]/10 shadow-[0_4px_20px_rgba(139,154,107,0.08)] hover:shadow-[0_12px_40px_rgba(139,154,107,0.18)] h-full flex flex-col transition-all duration-300"
    >
      {/* Browser Mockup Thumbnail */}
      <div className="w-full bg-[#F5F5F0]">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-[#8B9A6B]/10 m-3 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#8B9A6B]/20">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F0EFEA] border-b border-[#E5E4DF]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-0.5 bg-white/60 rounded-md text-[10px] text-[#8B9A6B]/50 font-mono truncate max-w-[150px]">
                {project.title.split(' — ')[0]}
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-video bg-white overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)` }}
              >
                <Icon className="w-12 h-12" style={{ color: `${project.color}30` }} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-5 pb-5 pt-1 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-medium text-[#8B9A6B] bg-[#8B9A6B]/10 px-3 py-1 rounded-full border border-[#8B9A6B]/15">
            {categories.find((c) => c.id === project.category)?.label || project.category}
          </span>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${project.color}12` }}
          >
            <Icon className="w-4 h-4" style={{ color: project.color }} />
          </div>
        </div>

        <h3 className="text-base font-bold text-[#1A1A1A] leading-tight group-hover:text-[#8B9A6B] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Problem / Solution */}
        <div className="text-[#4A4A4A] text-sm leading-relaxed mt-2 mb-1 flex-1 space-y-1.5">
          <p>
            <span className="font-semibold text-[#2C2C2C]">Problem: </span>
            {expanded ? project.problem : problemShort}
          </p>
          <p>
            <span className="font-semibold text-[#2C2C2C]">Solution: </span>
            {expanded ? project.solution : solutionShort}
          </p>
          {needsToggle && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors pt-0.5"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#8B9A6B]/8">
          {project.tech.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="text-[9px] px-2.5 py-1 rounded-full bg-[#8B9A6B]/8 text-[#8B9A6B] border border-[#8B9A6B]/10 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[9px] px-2.5 py-1 rounded-full bg-[#8B9A6B]/8 text-[#8B9A6B] border border-[#8B9A6B]/10 font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-5 pt-3.5 mt-1 border-t border-[#8B9A6B]/6">
          {hasLive ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={canHover ? { x: 3 } : undefined}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm font-medium text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </motion.a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-[#4A4A4A]/40 font-medium">
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </span>
          )}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={canHover ? { x: 3 } : undefined}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-sm font-medium text-[#4A4A4A]/60 hover:text-[#8B9A6B] transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches)
  }, [])

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              My Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Featured <span className="text-[#8B9A6B]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              A showcase of my work across Web Development, Full Stack, and AI/ML
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = filter === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  whileHover={canHover ? { scale: 1.05 } : undefined}
                  whileTap={{ scale: 0.95 }}
                  suppressHydrationWarning
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#8B9A6B] text-white shadow-lg shadow-[#8B9A6B]/30'
                      : 'bg-white/50 text-[#4A4A4A] hover:bg-[#8B9A6B]/10 border border-[#8B9A6B]/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8B9A6B]'}`} />
                  <span className="text-sm font-medium">{cat.label}</span>
                </motion.button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} canHover={canHover} />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Total Projects', value: projects.length },
              { label: 'Web Apps', value: projects.filter((p) => p.category === 'web').length },
              { label: 'AI/ML', value: projects.filter((p) => p.category === 'ai').length },
              { label: 'Full Stack', value: projects.filter((p) => p.category === 'fullstack').length },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:border-[#8B9A6B]/30"
                whileHover={canHover ? { y: -3 } : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}