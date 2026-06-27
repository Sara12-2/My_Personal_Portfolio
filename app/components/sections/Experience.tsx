'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Sparkles,
  Code2,
  Brain,
  Monitor,
  Award,
  Clock,
  Users,
  FolderGit2,
  Rocket,
  Eye,
  FileCheck,
  FileBadge,
  Server
} from 'lucide-react'

const experiences = [
  // ============ CHIEF OPERATING OFFICER ============
  {
    id: 1,
    title: 'Chief Operating Officer',
    company: 'DevHatch Labs',
    companyLink: 'https://www.linkedin.com/company/126724172/',
    location: 'Punjab, Pakistan · Remote',
    period: 'Jun 2026 – Present · 1 mo',
    type: 'Self-employed',
    description: [
      'Overseeing daily operations and strategic planning for DevHatch Labs',
      'Managing project delivery, resource allocation, and team coordination',
      'Implementing operational workflows and process optimization',
      'Leading cross-functional teams to deliver high-quality software solutions'
    ],
    skills: ['Operations Management', 'Project Management', 'Strategic Planning', 'Team Leadership'],
    icon: Briefcase,
    color: '#8B9A6B',
    logo: '/images/companies/devhatch.png',
    github: 'https://github.com/Sara12-2',
    live: 'https://devhatch.vercel.app',
  },

  // ============ AFYNIX DIGITAL ============
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Afynix Digital',
    companyLink: 'https://www.linkedin.com/company/111725218/',
    location: 'Remote',
    period: 'May 2026 – Present · 2 mos',
    type: 'Internship',
    description: [
      'Built responsive web applications using React.js and modern JavaScript',
      'Developed a Weather Dashboard with real-time API integration and 5-day forecast',
      'Created QuizAura Pro — an interactive quiz app with timer, keyboard shortcuts, and confetti celebrations',
      'Designed ARCWATCH — a premium smartwatch landing page with glassmorphism UI, dynamic product rendering, shopping cart, and wishlist system',
      'Implemented dark/light mode, LocalStorage persistence, and toast notifications'
    ],
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'LocalStorage'],
    icon: Code2,
    color: '#8B9A6B',
    logo: '/images/companies/afynix.png',
    github: 'https://github.com/Sara12-2/TechNest-Ecommerce',
    live: 'https://tech-nest-ecommerce.vercel.app/',
    projects: [
      { name: 'TechNest E-Commerce', link: 'https://github.com/Sara12-2/TechNest-Ecommerce' },
      { name: 'Nimbus Weather', link: 'https://github.com/Sara12-2/Nimbus_Weather_Dashboard' },
      { name: 'QuizAura Pro', link: 'https://github.com/Sara12-2/QuizAura_Pro' },
      { name: 'ARCWATCH', link: 'https://github.com/Sara12-2/Smart_Watch_Landing_Page' },
    ]
  },

  // ============ SAM AI TECHNOLOGIES ============
  {
    id: 3,
    title: 'Machine Learning Intern',
    company: 'SAM AI Technologies',
    companyLink: 'https://www.linkedin.com/company/112771912/',
    location: 'Remote',
    period: 'May 2026 · 1 mo',
    type: 'Internship',
    description: [
      'Built machine learning models for real-world applications including fraud detection and sentiment analysis',
      'Developed a Credit Card Fraud Detection system using SMOTE oversampling and Random Forest/XGBoost',
      'Created a Twitter Sentiment Analysis model for multi-class classification (Positive/Neutral/Negative) using TF-IDF and multiple classifiers',
      'Built a Spam SMS Detection model using Naive Bayes and Logistic Regression with text preprocessing',
      'Applied comprehensive model evaluation techniques including precision, recall, F1-score, and ROC-AUC'
    ],
    skills: ['Python', 'Scikit-learn', 'SMOTE', 'NLTK', 'XGBoost', 'TF-IDF', 'Pandas'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/companies/sam-ai.png',
    github: 'https://github.com/Sara12-2',
    projects: [
      { name: 'Credit Card Fraud Detection', link: 'https://github.com/Sara12-2/Credit-Card-Fraud-Detection' },
      { name: 'Twitter Sentiment Analysis', link: 'https://github.com/Sara12-2/Sentiment-Analysis-Twitter-Airline' },
      { name: 'Spam SMS Detection', link: 'https://github.com/Sara12-2/Spam-SMS-Detection' },
    ],
    certificate: '/certificates/sam-ai-certificate.pdf',
    lor: '/certificates/sam-ai-lor.pdf',
  },

  // ============ ELEVVO PATHWAYS ============
  {
    id: 4,
    title: 'Machine Learning Intern',
    company: 'Elevvo Pathways',
    companyLink: 'https://www.linkedin.com/company/107009063/',
    location: 'Cairo, Egypt · Remote',
    period: 'Aug 2025 – Sep 2025 · 2 mos',
    type: 'Internship',
    description: [
      'Completed comprehensive ML projects covering regression, classification, clustering, time-series forecasting, and ensemble learning',
      'Built a Student Score Prediction model using Linear and Polynomial Regression with comprehensive EDA',
      'Created Mall Customer Segmentation using K-Means and DBSCAN clustering with Silhouette Score evaluation',
      'Developed a Loan Approval Prediction system using Logistic Regression, Decision Trees, and SMOTE',
      'Built Walmart Sales Forecasting using time-series feature engineering and lag features',
      'Created a Forest Cover Type Classification model using Random Forest and XGBoost with hyperparameter tuning'
    ],
    skills: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/companies/elevvo.png',
    github: 'https://github.com/Sara12-2',
    projects: [
      { name: 'Student Score Prediction', link: 'https://github.com/Sara12-2/Student-Score-Prediction' },
      { name: 'Mall Customer Segmentation', link: 'https://github.com/Sara12-2/Mall-Customer-Segmentation' },
      { name: 'Loan Approval Prediction', link: 'https://github.com/Sara12-2/Loan-Approval-Prediction' },
      { name: 'Walmart Sales Forecasting', link: 'https://github.com/Sara12-2/Walmart-Sales-Forecasting' },
      { name: 'Forest Cover Classification', link: 'https://github.com/Sara12-2/Forest-Cover-Type-Classification' },
      { name: 'House Price Prediction', link: 'https://github.com/Sara12-2/House-Price-Prediction-Kaggle' },
      { name: 'Softtec 2026 Competition', link: 'https://github.com/Sara12-2/Softtec-2026-ML-Competition' },
    ]
  },

  // ============ FULL STACK PROJECTS (UNIVERSITY) ============
  {
    id: 5,
    title: 'Full-Stack Developer (Academic Projects)',
    company: 'University of Layyah',
    companyLink: 'https://www.linkedin.com/school/university-of-layyah/',
    location: 'Layyah, Pakistan',
    period: 'Sep 2024 – Present',
    type: 'Academic',
    description: [
      'Developed a Grocery Store Website — full-stack e-commerce with 42+ products, user authentication, admin dashboard, and delivery slot selection',
      'Designed an enterprise-grade Software House Network with 5 departments, VLAN segmentation, inter-VLAN routing (Router-on-a-Stick), and centralized server room in Cisco Packet Tracer',
      'Created a Digital Debate Judge web app with participant registration, scoring panel, and results leaderboard'
    ],
    skills: ['Python', 'Flask', 'MySQL', 'Cisco Packet Tracer', 'VLAN', 'Inter-VLAN Routing', 'Bootstrap', 'Chart.js', 'JavaScript'],
    icon: Monitor,
    color: '#8B9A6B',
    logo: '/images/companies/uol.png',
    github: 'https://github.com/Sara12-2',
    projects: [
      { name: 'Grocery Store', link: 'https://github.com/Sara12-2/Grocery_Store_Website-' },
      { name: 'Software House Network Design', link: 'https://github.com/Sara12-2/Software-House-Network-Design' },
      { name: 'Digital Debate Judge', link: 'https://github.com/Sara12-2/Digital_Debate_judge_web_development_project' },
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Experience
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Professional <span className="text-[#8B9A6B]">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My professional journey across Web Development, Machine Learning, and Leadership
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 md:pl-0 mb-16 last:mb-0"
                >
                  {/* Timeline Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B9A6B]/40 via-[#8B9A6B]/20 to-transparent -translate-x-1/2" />

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#8B9A6B] border-4 border-white shadow-lg shadow-[#8B9A6B]/20 z-10">
                    <div className="absolute inset-1 rounded-full bg-white/20 animate-pulse" />
                  </div>

                  <div className={`md:flex md:items-start md:gap-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Logo Section */}
                    <div className="hidden md:block md:w-1/3">
                      <div className={`flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div 
                          className="relative w-24 h-24 rounded-2xl bg-white shadow-xl border-2 border-[#8B9A6B]/20 flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={exp.company} 
                              className="w-14 h-14 object-contain relative z-10" 
                            />
                          ) : (
                            <Icon className="w-12 h-12 text-[#8B9A6B] relative z-10" />
                          )}
                          <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#8B9A6B]/20" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`md:w-2/3 ${isEven ? 'md:pr-6' : 'md:pl-6'}`}>
                      <div className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        {/* Gradient Top Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:h-1.5 bg-gradient-to-r from-[#8B9A6B]/40 via-[#8B9A6B] to-[#8B9A6B]/40" />

                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 pt-1">
                          <div>
                            <h3 className="text-xl font-bold text-[#2C2C2C] transition-colors duration-300 group-hover:text-[#8B9A6B]">
                              {exp.title}
                            </h3>
                            <a
                              href={exp.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors font-medium inline-flex items-center gap-1.5 text-sm group/link"
                            >
                              {exp.company}
                              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full border font-medium whitespace-nowrap shadow-sm bg-[#8B9A6B]/10 text-[#8B9A6B] border-[#8B9A6B]/30">
                            {exp.type}
                          </span>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#4A4A4A]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-[#8B9A6B]" />
                            {exp.period}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#4A4A4A]/30" />
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#8B9A6B]" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="mt-4 space-y-2.5 text-[#4A4A4A] text-sm">
                          {exp.description.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 shadow-sm bg-[#8B9A6B]" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Quick Action Icons - GitHub, Live, Certificate, LOR */}
                        <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-[#8B9A6B]/10">
                          {/* GitHub */}
                          {exp.github && (
                            <a
                              href={exp.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors group/btn"
                            >
                              <FolderGit2 className="w-4 h-4 text-[#8B9A6B]" />
                              <span className="group-hover/btn:underline">GitHub</span>
                            </a>
                          )}

                          {/* Live Demo */}
                          {exp.live && (
                            <a
                              href={exp.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors group/btn"
                            >
                              <Rocket className="w-4 h-4 text-[#8B9A6B]" />
                              <span className="group-hover/btn:underline">Live</span>
                            </a>
                          )}

                          {/* Certificate */}
                          {exp.certificate && (
                            <a
                              href={exp.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors group/btn"
                            >
                              <FileCheck className="w-4 h-4 text-[#8B9A6B]" />
                              <span className="group-hover/btn:underline">Certificate</span>
                            </a>
                          )}

                          {/* LOR */}
                          {exp.lor && (
                            <a
                              href={exp.lor}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors group/btn"
                            >
                              <FileBadge className="w-4 h-4 text-[#8B9A6B]" />
                              <span className="group-hover/btn:underline">LOR</span>
                            </a>
                          )}

                          {/* View All Projects */}
                          {exp.projects && exp.projects.length > 0 && (
                            <a
                              href={exp.projects[0].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors group/btn"
                            >
                              <Eye className="w-4 h-4 text-[#8B9A6B]" />
                              <span className="group-hover/btn:underline">{exp.projects.length} Projects</span>
                            </a>
                          )}
                        </div>

                        {/* Project Repo Links (Quick Access) */}
                        {exp.projects && exp.projects.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {exp.projects.map((project, idx) => (
                              <a
                                key={idx}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] px-2 py-1 bg-[#8B9A6B]/5 hover:bg-[#8B9A6B]/15 border border-[#8B9A6B]/10 rounded-full text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors"
                              >
                                {project.name}
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#8B9A6B]/10">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-3 py-1.5 bg-white rounded-full border shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md bg-[#8B9A6B]/10 text-[#8B9A6B] border-[#8B9A6B]/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Decorative Corner Accent */}
                        <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full opacity-5 pointer-events-none bg-[#8B9A6B]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Total Roles', value: experiences.length, icon: Briefcase },
              { label: 'Companies', value: '4', icon: Users },
              { label: 'Internships', value: '3', icon: Award },
              { label: 'Projects', value: '18+', icon: FolderGit2 },
            ].map((stat) => {
              const StatIcon = stat.icon
              return (
                <div 
                  key={stat.label} 
                  className="group bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-[#8B9A6B]/10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 rounded-full bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B]/20 transition-colors duration-300">
                      <StatIcon className="w-5 h-5 text-[#8B9A6B]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                  <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}