'use client'

import { useState } from 'react'
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
  Utensils,
  Watch,
  BookOpen
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'AURUM Finance Dashboard',
    description: 'Premium enterprise-grade personal finance dashboard with real-time tracking, analytics, budgets, and dark/light mode.',
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
    description: '🏆 Top 10 out of 23+ teams. Bilingual (English/Urdu) AI assistant for University of Layyah with role-based responses, voice I/O, and offline fallback across 16+ topics. Built with Groq Llama 3 70B, a 7-table MySQL schema, and production security (rate limiting, CORS, input sanitization).',
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
    description: 'Complete full-stack grocery delivery platform with 42+ products, user authentication, admin dashboard, smart analytics, and delivery slot selection.',
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
    description: 'Sophisticated appointment management dashboard for service businesses with calendar, client directory, and real-time analytics.',
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
    description: 'Binary classification model predicting healthcare members with high medical costs (>$30,000) using historical administrative data and ensemble learning (LightGBM + XGBoost).',
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
    description: 'Premium luxury real estate landing page with interactive property listings, multi-currency support, mortgage calculator, wishlist, and animated statistics.',
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
    description: 'Complete full-stack cafeteria management system with user authentication, shopping cart, order management, reviews, coupons, and admin dashboard.',
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
    description: 'Deep learning CNN model for American Sign Language (ASL) hand sign recognition. Includes data preprocessing, augmentation, model training, and Tkinter GUI for image upload predictions.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Tkinter'],
    live: '',
    github: 'https://github.com/Sara12-2/ASL_Sign_Language_Recognition',
    image: '/images/projects/asl.png',
    icon: Brain,
    color: '#1E90FF',
  },
  {
    id: 24,
    title: 'SwiftEats — Food Delivery Landing Page',
    description: 'Modern, interactive food delivery landing page with menu filtering, FAQ accordion, cart simulation, toast notifications, and smooth animations.',
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Lucide Icons', 'Google Fonts'],
    live: 'https://restaurant-food-delivery-website-la.vercel.app/',
    github: 'https://github.com/Sara12-2/Swifteats_Premium_food_delievery_landing_page',
    image: '/images/projects/swifteats.png',
    icon: Utensils,
    color: '#F97316',
  },
  {
    id: 12,
    title: 'AI-Powered Resume Screening System',
    description: 'NLP-based resume classification system using deep learning. Automatically categorizes resumes into job categories with TF-IDF vectorization, Keras model, and Streamlit dashboard.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Streamlit'],
    live: '',
    github: 'https://github.com/Sara12-2/AI_Powered_Resume_Screening_system',
    image: '/images/projects/resume-screening.png',
    icon: Brain,
    color: '#2ECC71',
  },
  {
    id: 25,
    title: 'ARCWATCH — Premium Smartwatch Landing Page',
    description: 'Modern smartwatch e-commerce landing page with glassmorphism, dynamic product rendering, shopping cart, wishlist, and dark/light themes.',
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
    live: 'https://smart-watch-landing-page-gules.vercel.app/',
    github: 'https://github.com/Sara12-2/Smart_Watch_Landing_Page',
    image: '/images/projects/arcwatch.png',
    icon: Watch,
    color: '#6366F1',
  },
  {
    id: 13,
    title: 'Smart Retail Shelf Monitoring with YOLOv8',
    description: 'Real-time retail shelf monitoring system using YOLOv8 object detection. Detects products in video feed, counts them, and provides low-stock alerts via Tkinter GUI.',
    category: 'ai',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Tkinter', 'Ultralytics'],
    live: '',
    github: 'https://github.com/Sara12-2/Smart_Retail_Shelf_Monitoring_with_YOLOv8',
    image: '/images/projects/retail-shelf.png',
    icon: Brain,
    color: '#F97316',
  },
  {
    id: 16,
    title: 'Mountain Car Agent (Q-Learning with Gymnasium)',
    description: 'Reinforcement Learning agent using Q-Learning with epsilon-greedy exploration to solve MountainCar-v0 environment from OpenAI Gymnasium.',
    category: 'ai',
    tech: ['Python', 'Gymnasium', 'NumPy', 'Matplotlib', 'Q-Learning'],
    live: '',
    github: 'https://github.com/Sara12-2/Mountain_Car_Reinforcement_learning_Agent',
    image: '/images/projects/mountain-car.png',
    icon: Brain,
    color: '#F97316',
  },
  {
    id: 2,
    title: 'TechNest — Premium React E-Commerce Website',
    description: 'Modern e-commerce web application built with React and Vite. Features glassmorphism UI, dark/light mode, shopping cart, wishlist, and seamless checkout flow.',
    category: 'web',
    tech: ['React', 'Vite', 'JavaScript', 'CSS3', 'LocalStorage'],
    live: 'https://tech-nest-ecommerce.vercel.app/',
    github: 'https://github.com/Sara12-2/TechNest_Ecommerce_Website',
    image: '/images/projects/technest.png',
    icon: ShoppingBag,
    color: '#8B5CF6',
  },
  {
    id: 17,
    title: 'StudySmart AI — Intelligent Study Tracking System',
    description: 'AI-powered study tracker that analyzes productivity patterns, detects optimal study hours, and delivers personalized recommendations. Includes pattern analysis, productivity predictions with confidence scoring, streak tracking, dark mode, multi-language support (EN/UR/HI), and SQLite + auto-backup data storage.',
    category: 'ai',
    tech: ['Python', 'Flask', 'SQLite', 'Pandas', 'Scikit-learn', 'NumPy'],
    live: '',
    github: '#',
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

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

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
                  whileHover={{ scale: 1.05, y: -2 }}
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
            {filteredProjects.map((project) => {
              const Icon = project.icon
              const hasLive = project.live && project.live !== ''
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/50 ring-1 ring-[#8B9A6B]/10 shadow-[0_8px_32px_rgba(139,154,107,0.12)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(139,154,107,0.3)] hover:ring-[#8B9A6B]/30 h-full flex flex-col cursor-pointer"
                >
                  {/* Glass Shine Overlay - Enhanced on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none z-10 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Gradient Top Border — tinted per project with animation */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 z-20 transition-all duration-500 group-hover:h-2"
                    style={{ background: `linear-gradient(90deg, ${project.color}40, ${project.color}, ${project.color}40)` }}
                  />

                  <div className="relative w-full h-52 bg-[#F5F5F0] overflow-hidden">
                    {/* Image with zoom effect on hover */}
                    {project.image ? (
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                        style={{ background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)` }}
                      >
                        <Icon className="w-16 h-16 transition-all duration-500 group-hover:scale-110" style={{ color: `${project.color}40` }} />
                      </div>
                    )}

                    {/* Permanent subtle bottom gradient for legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

                    {/* Colored icon badge — with hover animation */}
                    <motion.div 
                      className="absolute top-3 left-3 w-9 h-9 rounded-xl backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: `${project.color}25` }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-4.5 h-4.5 transition-all duration-300" style={{ color: project.color }} />
                    </motion.div>

                    <div className="absolute top-3 right-3">
                      <span className="text-xs px-3 py-1.5 bg-white/80 backdrop-blur-md text-[#8B9A6B] rounded-full border border-white/50 shadow-sm font-medium transition-all duration-300 group-hover:bg-[#8B9A6B] group-hover:text-white group-hover:border-[#8B9A6B]">
                        {categories.find(c => c.id === project.category)?.label || project.category}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#2C2C2C] transition-all duration-300 group-hover:text-[#8B9A6B] group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mt-2 line-clamp-3 transition-all duration-300 group-hover:text-[#2C2C2C]">
                      {project.description}
                    </p>

                    {/* Tech Stack - With hover animation */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#8B9A6B]/10 transition-all duration-300 group-hover:border-[#8B9A6B]/30">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="text-[10px] px-2.5 py-1 backdrop-blur-md rounded-full border shadow-sm bg-[#8B9A6B]/10 text-[#8B9A6B] border-white/40 ring-1 ring-[#8B9A6B]/10 transition-all duration-300 hover:bg-[#8B9A6B] hover:text-white hover:scale-105 hover:ring-[#8B9A6B]/30 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 mt-auto">
                      {hasLive ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 text-sm text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors font-medium group/link relative"
                        >
                          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:rotate-[-10deg]" />
                          Live Demo
                          <span className="inline-block transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100">→</span>
                        </motion.a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-sm text-[#4A4A4A]/50 font-medium">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 text-sm text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors font-medium group/github"
                      >
                        <FaGithub className="w-4 h-4 transition-transform duration-300 group-hover/github:rotate-[-10deg]" />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Total Projects', value: projects.length },
              { label: 'Web Apps', value: projects.filter(p => p.category === 'web').length },
              { label: 'AI/ML', value: projects.filter(p => p.category === 'ai').length },
              { label: 'Full Stack', value: projects.filter(p => p.category === 'fullstack').length },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:border-[#8B9A6B]/30 hover:scale-105"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-[#8B9A6B] transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}