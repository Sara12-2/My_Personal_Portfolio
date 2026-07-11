'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Code2, 
  Brain, 
  Server, 
  Layers, 
  Lightbulb, 
  Users,
  Sparkles,
  ArrowRight,
  Monitor,
  Database,
  Rocket,
  Trophy,
  Globe,
  Coffee,
  Zap,
  Cpu,
  Layout,
  Terminal,
  Cloud,
  Award,
  MessageCircle,
  Heart,
  Mail,
  CheckCircle2,
  Star,
  Palette,
  BarChart3,
  Bot,
  Landmark
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Portfolio & UI/UX Design',
    description: 'Custom portfolio websites, landing pages, and UI/UX designs with smooth animations, glassmorphism, and modern aesthetics. Tailored to your brand identity.',
    icon: Palette,
    color: '#8B9A6B',
    gradient: 'from-[#8B9A6B]/20 to-[#8B9A6B]/5',
    features: ['Portfolio Design', 'Landing Pages', 'UI/UX Design', 'Animations & Interactions'],
  },
  {
    id: 2,
    title: 'Dashboard & Admin Panels',
    description: 'Interactive dashboards with real-time analytics, charts, data visualization, and admin panels. Built with Chart.js, Recharts, and modern UI frameworks.',
    icon: BarChart3,
    color: '#1E90FF',
    gradient: 'from-[#1E90FF]/20 to-[#1E90FF]/5',
    features: ['Analytics Dashboards', 'Admin Panels', 'Data Visualization', 'Real-time Charts'],
  },
  {
    id: 3,
    title: 'Full Stack Web Apps (Flask)',
    description: 'End-to-end web applications with Python Flask backend, SQLite/MySQL databases, user authentication, and deployment on Vercel, Render, or custom hosting.',
    icon: Server,
    color: '#22C55E',
    gradient: 'from-[#22C55E]/20 to-[#22C55E]/5',
    features: ['Flask Backend', 'Database Design', 'User Authentication', 'API Development'],
  },
  {
    id: 4,
    title: 'React.js & Next.js Websites',
    description: 'Modern, responsive websites and web applications built with React.js and Next.js. Server-side rendering, static site generation, and optimized performance.',
    icon: Code2,
    color: '#61DAFB',
    gradient: 'from-[#61DAFB]/20 to-[#61DAFB]/5',
    features: ['React.js Apps', 'Next.js Websites', 'SSR & SSG', 'Performance Optimization'],
  },
  {
    id: 5,
    title: 'AI Chatbots & Assistants',
    description: 'Intelligent chatbots and virtual assistants powered by GPT, LangChain, and NLP. Custom-trained for customer support, education, and business automation.',
    icon: Bot,
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5',
    features: ['AI Chatbots', 'Virtual Assistants', 'RAG Systems', 'NLP Integration'],
  },
  {
    id: 6,
    title: 'Landing Pages & Marketing Sites',
    description: 'High-converting landing pages and marketing websites with SEO optimization, responsive design, and compelling call-to-actions. Built with modern tools.',
    icon: Landmark,
    color: '#F97316',
    gradient: 'from-[#F97316]/20 to-[#F97316]/5',
    features: ['Landing Pages', 'Marketing Sites', 'SEO Optimization', 'Lead Generation'],
  },
  {
    id: 7,
    title: 'AI/ML Solutions & Models',
    description: 'Custom AI and Machine Learning solutions including classification, regression, NLP, Computer Vision, and Generative AI models for real-world problems.',
    icon: Brain,
    color: '#8B9A6B',
    gradient: 'from-[#8B9A6B]/20 to-[#8B9A6B]/5',
    features: ['Classification', 'NLP & CV', 'Generative AI', 'Predictive Models'],
  },
  {
    id: 8,
    title: 'NLP & Text Analytics',
    description: 'Natural Language Processing solutions for sentiment analysis, text classification, named entity recognition, and topic modeling using spaCy, NLTK, and Transformers.',
    icon: Brain,
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5',
    features: ['Sentiment Analysis', 'Text Classification', 'NER', 'Topic Modeling'],
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const ref = useRef(null)

  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Premium Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B9A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B9A6B]/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(transparent_0%,_transparent_95%,_#8B9A6B_95%,_#8B9A6B_100%),_linear-gradient(90deg,_transparent_0%,_transparent_95%,_#8B9A6B_95%,_#8B9A6B_100%)] bg-[length:80px_80px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Open to Work Badge - Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-[#8B9A6B]/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <span className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-[#8B9A6B]/20 rounded-full shadow-lg hover:shadow-[#8B9A6B]/20 transition-all duration-300">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B9A6B] animate-pulse" />
                <span className="text-[#8B9A6B] text-xs sm:text-sm font-medium tracking-wide">Open to Work</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2ECC71] rounded-full animate-ping" />
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2ECC71] rounded-full animate-pulse" />
                </span>
                <span className="hidden sm:inline text-[10px] text-[#4A4A4A]/30 font-mono">● Available Now</span>
              </span>
            </div>
          </motion.div>

          {/* Section Header - Premium */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-[10px] sm:text-sm font-medium text-[#8B9A6B] mb-3 sm:mb-5"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#8B9A6B]" />
              What I Offer
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] tracking-tight">
              Services &{' '}
              <span className="text-[#8B9A6B]">Expertise</span>
            </h2>

            {/* ✅ Subtitle Added */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-sm sm:text-base text-[#4A4A4A]/70 max-w-2xl mx-auto"
            >
              Transforming ideas into powerful digital solutions with modern technologies
            </motion.p>
          </div>

          {/* Services Grid - Premium Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredId === service.id

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredId(service.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group relative cursor-default"
                >
                  {/* Premium Card */}
                  <div 
                    className={`
                      relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 
                      border transition-all duration-500 overflow-hidden h-full
                      ${isHovered 
                        ? 'border-[#8B9A6B]/40 shadow-2xl shadow-[#8B9A6B]/20' 
                        : 'border-[#8B9A6B]/10 shadow-lg hover:shadow-xl'
                      }
                    `}
                  >
                    {/* Animated Gradient Background */}
                    <div 
                      className={`
                        absolute inset-0 bg-gradient-to-br ${service.gradient}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      `} 
                    />

                    {/* Glowing Border Effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-[radial-gradient(circle_at_top_right,rgba(139,154,107,0.08),transparent_60%)]
                    `} />

                    {/* Floating Particles */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 rounded-full bg-[#8B9A6B]/30"
                            animate={{
                              y: [0, -4, 0],
                              opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10">
                      {/* Icon with Premium Animation */}
                      <div className="relative mb-4 sm:mb-5">
                        <div className={`
                          absolute -inset-1 rounded-2xl bg-[#8B9A6B]/10 blur-xl
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        `} />
                        <div 
                          className={`
                            relative inline-flex p-3 sm:p-4 rounded-2xl transition-all duration-500
                            ${isHovered ? 'scale-110 rotate-6' : 'group-hover:scale-110 group-hover:rotate-3'}
                          `}
                          style={{ 
                            background: `${service.color}15`,
                            boxShadow: isHovered ? `0 8px 30px ${service.color}30` : 'none'
                          }}
                        >
                          <Icon 
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500" 
                            style={{ color: service.color }}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`
                        text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 mb-1.5 sm:mb-2
                        ${isHovered ? 'text-[#8B9A6B]' : 'text-[#1E1E1E]'}
                      `}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#4A4A4A]/70 leading-relaxed mb-3 sm:mb-4">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-1 sm:space-y-1.5">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#4A4A4A]/60"
                          >
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B9A6B] flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* ❌ Dotted Line Removed */}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Premium Collaboration Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm rounded-full border border-[#8B9A6B]/10 shadow-lg hover:shadow-[#8B9A6B]/20 transition-all duration-300">
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B9A6B]" />
              <span className="text-xs sm:text-sm text-[#4A4A4A]/70 font-medium">Available for</span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
                {['Freelance', 'Remote', 'Hackathons', 'Collaboration'].map((item, idx) => (
                  <span key={item} className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#8B9A6B]" />
                    <span className="text-[10px] sm:text-sm font-semibold text-[#8B9A6B]">{item}</span>
                    {idx < 3 && <span className="hidden sm:inline text-[#4A4A4A]/20">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Premium Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <p className="text-[#4A4A4A] mb-4 sm:mb-6 text-base sm:text-lg font-light tracking-wide">
              Let's build something <span className="text-[#8B9A6B] font-medium">amazing</span> together. 🚀
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base font-semibold shadow-xl shadow-[#8B9A6B]/25 hover:shadow-[#8B9A6B]/40 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Let's Work Together
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}