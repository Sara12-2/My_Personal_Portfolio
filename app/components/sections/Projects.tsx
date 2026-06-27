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
  Network,
  Wallet,
  Calendar,
  Home,
  Utensils,
  Watch,
  ShoppingBag,
  Cloud,
  Award,
  Coffee,
  MessageSquare,
  Database,
  Shield,
  CreditCard,
  Mail,
  Image,
  Server,
  Eye
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  // ============ DASHBOARDS ============
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
    id: 2,
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

  // ============ LANDING PAGES ============
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: 'TechNest — Premium React E-Commerce Website',
    description: 'Modern e-commerce web application built with React and Vite. Features glassmorphism UI, dark/light mode, shopping cart, wishlist, and seamless checkout flow.',
    category: 'web',
    tech: ['React', 'Vite', 'JavaScript', 'CSS3', 'LocalStorage'],
    live: 'https://tech-nest-ecommerce.vercel.app/',
    github: 'https://github.com/Sara12-2/TechNest-Ecommerce',
    image: '/images/projects/technest.png',
    icon: ShoppingBag,
    color: '#8B5CF6',
  },

  // ============ OTHER WEB APPS ============
  {
    id: 7,
    title: 'Nimbus Weather Dashboard',
    description: 'Modern weather dashboard with real-time data, 5-day forecast, air quality index, search system, and dark/light mode with glassmorphism UI.',
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API', 'LocalStorage'],
    live: 'https://nimbus-weather-dashboard.vercel.app/',
    github: 'https://github.com/Sara12-2/Nimbus_Weather_Dashboard',
    image: '/images/projects/nimbus.png',
    icon: Cloud,
    color: '#06B6D4',
  },
  {
    id: 8,
    title: 'QuizAura Pro',
    description: 'Interactive quiz application with glassmorphism UI, timer-based questions, keyboard shortcuts, instant feedback, score tracking, and confetti celebrations.',
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Font Awesome'],
    live: 'https://quizaura-pro.vercel.app/',
    github: 'https://github.com/Sara12-2/QuizAura_Pro',
    image: '/images/projects/quizaura.png',
    icon: Award,
    color: '#8B5CF6',
  },

  // ============ FULL STACK PROJECTS ============
  {
    id: 9,
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
    id: 10,
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
    title: 'Digital Debate Judge',
    description: 'Modern web application for organizing and judging debates with participant registration, judge panel with scoring, and results leaderboard.',
    category: 'fullstack',
    tech: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'Typed.js'],
    live: '',
    github: 'https://github.com/Sara12-2/Digital_Debate_judge_web_development_project',
    image: '/images/projects/debate.png',
    icon: MessageSquare,
    color: '#8B5CF6',
  },

  // ============ AI/ML PROJECTS ============
  {
    id: 12,
    title: 'Softtec 2026 ML Competition – High-Cost Patient Prediction',
    description: 'Binary classification model predicting healthcare members with high medical costs (>$30,000) using historical administrative data and ensemble learning (LightGBM + XGBoost).',
    category: 'ai',
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn', 'Pandas'],
    live: '',
    github: 'https://github.com/Sara12-2/Softtec-2026-ML-Competition',
    image: '/images/projects/softtec.png',
    icon: Brain,
    color: '#8B9A6B',
  },
  // ============ AI/ML PROJECTS (Add this project) ============
  {
    id: 26,
    title: 'House Price Prediction — Kaggle Competition',
    description: 'Advanced regression model predicting residential house sale prices using XGBoost. Achieved RMSLE 0.13710 and Global Rank #2,199 on Kaggle. Features 79 variables and engineered "TotalSF" feature.',
    category: 'ai',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy'],
    live: '',
    github: 'https://github.com/Sara12-2/House-Price-Prediction-Kaggle',
    image: '/images/projects/house-price.png',
    icon: Home,
    color: '#8B9A6B',
  },
  {
    id: 13,
    title: 'UoL AI Assistant — South Punjab Generative AI Hackathon 2026',
    description: 'Top 10 hackathon project — Bilingual AI assistant for University of Layyah with Groq Llama 3, Flask, MySQL, and voice support. Built for students, applicants, and visitors.',
    category: 'ai',
    tech: ['Python', 'Flask', 'Groq API', 'MySQL', 'JavaScript'],
    live: 'https://uo-l-ai-assistant-hackathon-2026.vercel.app/',
    github: 'https://github.com/Sara12-2/UoL-AI-Assistant-Hackathon-2026',
    image: '/images/projects/uol-ai-assistant.png',
    icon: Brain,
    color: '#8B5CF6',
  },
  {
    id: 14,
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
    id: 15,
    title: 'AI-Powered Resume Screening System',
    description: 'NLP-based resume classification system using deep learning. Automatically categorizes resumes into job categories with TF-IDF vectorization, Keras model, and Streamlit dashboard.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Streamlit'],
    live: '',
    github: 'https://github.com/Sara12-2/AI-Powered-Resume-Screening-System',
    image: '/images/projects/resume-screening.png',
    icon: Brain,
    color: '#2ECC71',
  },
  {
    id: 16,
    title: 'Smart Retail Shelf Monitoring with YOLOv8',
    description: 'Real-time retail shelf monitoring system using YOLOv8 object detection. Detects products in video feed, counts them, and provides low-stock alerts via Tkinter GUI.',
    category: 'ai',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Tkinter', 'Ultralytics'],
    live: '',
    github: 'https://github.com/Sara12-2/Smart-Retail-Shelf-Monitoring',
    image: '/images/projects/retail-shelf.png',
    icon: Brain,
    color: '#F97316',
  },
  {
    id: 17,
    title: 'Handwritten Digit Classifier (CNN-based)',
    description: 'Real-time digit recognition system using Convolutional Neural Networks trained on MNIST dataset. Deployed with Streamlit for drawing and image upload predictions.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'NumPy'],
    live: '',
    github: 'https://github.com/Sara12-2/Handwritten-Digit-Classifier',
    image: '/images/projects/digit-classifier.png',
    icon: Brain,
    color: '#8B5CF6',
  },
  {
    id: 18,
    title: 'Sentiment Analysis with RNN (IMDB Reviews)',
    description: 'RNN-based sentiment analysis model classifying IMDB movie reviews as positive or negative. Built with TensorFlow/Keras using SimpleRNN layers with dropout and embedding.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'RNN', 'NumPy'],
    live: '',
    github: 'https://github.com/Sara12-2/Sentiment-Analysis-RNN-IMDB',
    image: '/images/projects/sentiment-rnn.png',
    icon: Brain,
    color: '#1E90FF',
  },
  {
    id: 19,
    title: 'Market Basket Analysis by Apriori Algorithm',
    description: 'Interactive Streamlit dashboard for Market Basket Analysis using Apriori Algorithm and Association Rule Mining. Upload CSV/Excel transactions and generate frequent itemsets with support, confidence, and lift metrics.',
    category: 'ai',
    tech: ['Python', 'Streamlit', 'Pandas', 'Mlxtend', 'Apriori'],
    live: '',
    github: 'https://github.com/Sara12-2/Market-Basket-Analysis',
    image: '/images/projects/market-basket.png',
    icon: Database,
    color: '#8B9A6B',
  },
  {
    id: 20,
    title: 'Mountain Car Agent (Q-Learning with Gymnasium)',
    description: 'Reinforcement Learning agent using Q-Learning with epsilon-greedy exploration to solve MountainCar-v0 environment from OpenAI Gymnasium.',
    category: 'ai',
    tech: ['Python', 'Gymnasium', 'NumPy', 'Matplotlib', 'Q-Learning'],
    live: '',
    github: 'https://github.com/Sara12-2/Mountain-Car-Q-Learning',
    image: '/images/projects/mountain-car.png',
    icon: Brain,
    color: '#F97316',
  },
  {
    id: 21,
    title: 'Credit Card Fraud Detection',
    description: 'Machine learning model for detecting fraudulent credit card transactions using SMOTE oversampling, Logistic Regression, and Random Forest classifiers with comprehensive evaluation metrics.',
    category: 'ai',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas', 'Matplotlib'],
    live: '',
    github: 'https://github.com/Sara12-2/Credit-Card-Fraud-Detection',
    image: '/images/projects/fraud-detection.png',
    icon: CreditCard,
    color: '#22C55E',
  },
  {
    id: 22,
    title: 'Sentiment Analysis (NLP - Twitter Airline Data)',
    description: 'Machine learning model for sentiment analysis on Twitter airline reviews. Classifies tweets as Positive, Neutral, or Negative using TF-IDF and multiple classifiers.',
    category: 'ai',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'WordCloud'],
    live: '',
    github: 'https://github.com/Sara12-2/Sentiment-Analysis-Twitter-Airline',
    image: '/images/projects/sentiment-nlp.png',
    icon: MessageSquare,
    color: '#8B5CF6',
  },
  {
    id: 23,
    title: 'Spam SMS Detection',
    description: 'Machine learning model to classify SMS messages as Spam or Legitimate (Ham) using TF-IDF vectorization, Naive Bayes, and Logistic Regression.',
    category: 'ai',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Pandas'],
    live: '',
    github: 'https://github.com/Sara12-2/Spam-SMS-Detection',
    image: '/images/projects/spam-detection.png',
    icon: Mail,
    color: '#F97316',
  },
  {
    id: 24,
    title: 'CIFAR-10 Image Classification using CNN',
    description: 'Convolutional Neural Network trained on CIFAR-10 dataset for image classification. Deployed with interactive Streamlit app for real-time predictions with confidence scores.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Pillow'],
    live: '',
    github: 'https://github.com/Sara12-2/CIFAR10-Image-Classifier',
    image: '/images/projects/cifar10.png',
    icon: Image,
    color: '#06B6D4',
  },

  // ============ COMPUTER NETWORKS ============
  {
    id: 25,
    title: 'Software House Network Design & Implementation',
    description: 'Enterprise-grade LAN design for a software house with 5 departments, VLAN segmentation, inter-VLAN routing (Router-on-a-Stick), and centralized server room. Simulated in Cisco Packet Tracer.',
    category: 'networks',
    tech: ['Cisco Packet Tracer', 'VLAN', 'Inter-VLAN Routing', '802.1Q Trunking', 'Static IP'],
    live: '',
    github: 'https://github.com/Sara12-2/Software-House-Network-Design',
    image: '/images/projects/network-design.png',
    icon: Server,
    color: '#1E90FF',
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: Layers },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'fullstack', label: 'Full Stack', icon: Code2 },
  { id: 'ai', label: 'AI/ML', icon: Brain },
  { id: 'networks', label: 'Networks', icon: Server },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
              A showcase of my work across Web Development, Full Stack, AI/ML, and Computer Networks
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              const hasLive = project.live && project.live !== ''
              const isHovered = hoveredId === project.id
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500"
                >
                  <div className="relative w-full h-56 bg-[#F5F5F0] overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5">
                        <Icon className="w-16 h-16 text-[#8B9A6B]/20" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="absolute inset-3 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B9A6B] via-[#A8B89A] to-[#8B9A6B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B9A6B] rounded-full border border-[#8B9A6B]/20 shadow-sm font-medium">
                        {categories.find(c => c.id === project.category)?.label || project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-1 bg-black/50 backdrop-blur-sm text-white/90 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] px-2 py-1 bg-black/50 backdrop-blur-sm text-white/90 rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                      {hasLive ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors font-medium group/link"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                          <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-sm text-[#4A4A4A]/50 font-medium">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors font-medium"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
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
            ].map((stat) => (
              <div key={stat.label} className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center">
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}