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
  Award,
  Users,
  FolderGit2,
  Rocket,
  Eye,
  FileCheck,
  FileBadge,
  GitBranch
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
      'Leading development teams and overseeing full project lifecycle from planning to deployment',
      'Managing operations, resource allocation, and cross-functional collaboration'
    ],
    skills: ['Operations Management', 'Project Management', 'Strategic Planning', 'Team Leadership'],
    icon: Briefcase,
    color: '#8B9A6B',
    logo: '/images/companies/devhatch.png',
    github: 'https://github.com/Sara12-2',
    live: 'https://devhatch.vercel.app',
  },

  // ============ GIRLSCRIPT SUMMER OF CODE ============
  {
    id: 2,
    title: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC) 2026',
    companyLink: 'https://gssoc.girlscript.tech/',
    location: 'Remote',
    period: 'May 2026 – Aug 2026 · 3 mos',
    type: 'Open Source',
    description: [
      'Contributed to open-source projects as part of GirlScript Summer of Code 2026',
      'Resolved issues, submitted pull requests, and collaborated with maintainers and fellow contributors'
    ],
    skills: ['Open Source', 'Git', 'GitHub', 'Collaboration', 'Code Review'],
    icon: GitBranch,
    color: '#8B9A6B',
    logo: '/images/companies/gssoc.png',
    github: 'https://github.com/Sara12-2',
  },

  // ============ SOFTTEC 2026 ML COMPETITION ============
  {
    id: 3,
    title: 'Project Lead',
    company: 'Softtec 2026 — FAST NUCES Lahore',
    companyLink: 'https://nu.edu.pk/Campus/Lahore',
    location: 'Lahore, Pakistan',
    period: '2026 · ML Competition',
    type: 'Competition',
    description: [
      'Led a team in the Softtec 2026 Machine Learning Competition at FAST NUCES Lahore',
      'Built an ensemble model (XGBoost + LightGBM) for high-cost patient prediction, achieving 0.825 recall'
    ],
    skills: ['XGBoost', 'LightGBM', 'Team Leadership', 'Feature Engineering'],
    icon: Award,
    color: '#8B9A6B',
    logo: '/images/companies/fast-nuces.png',
    github: 'https://github.com/Sara12-2/High_Cost_Patient_prediction_Softtec_Competition_Project',
  },

  // ============ AFYNIX DIGITAL ============
  {
    id: 4,
    title: 'Web Developer Intern',
    company: 'Afynix Digital',
    companyLink: 'https://www.linkedin.com/company/111725218/',
    location: 'Remote',
    period: 'May 2026 – Jun 2026 · 2 mos',
    type: 'Internship',
    description: [
      'Built responsive React apps including TechNest e-commerce, Nimbus Weather dashboard, and ARCWATCH landing page',
      'Implemented cart/wishlist systems, dark/light mode, and real-time API integrations'
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
    id: 5,
    title: 'Machine Learning Intern',
    company: 'SAM AI Technologies',
    companyLink: 'https://www.linkedin.com/company/112771912/',
    location: 'Remote',
    period: 'May 2026 · 1 mo',
    type: 'Internship',
    description: [
      'Built and evaluated ML models for fraud detection, sentiment analysis, and spam classification',
      'Applied SMOTE, XGBoost, and NLP preprocessing with full precision/recall/F1 evaluation'
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
    id: 6,
    title: 'Machine Learning Intern',
    company: 'Elevvo Pathways',
    companyLink: 'https://www.linkedin.com/company/107009063/',
    location: 'Cairo, Egypt · Remote',
    period: 'Aug 2025 – Sep 2025 · 2 mos',
    type: 'Internship',
    description: [
      'Delivered 7 ML projects spanning regression, classification, clustering, and time-series forecasting',
      'Achieved 90%+ accuracy using Scikit-learn, XGBoost, and feature engineering pipelines'
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
]

const TYPE_STYLES: Record<string, { icon: any; bg: string; text: string; border: string }> = {
  'Self-employed': { icon: Briefcase, bg: 'bg-[#8B9A6B]/10', text: 'text-[#8B9A6B]', border: 'border-[#8B9A6B]/30' },
  'Internship': { icon: Award, bg: 'bg-[#6B8E9A]/10', text: 'text-[#5A7A85]', border: 'border-[#6B8E9A]/30' },
  'Open Source': { icon: GitBranch, bg: 'bg-[#9A7B6B]/10', text: 'text-[#8A6B57]', border: 'border-[#9A7B6B]/30' },
  'Competition': { icon: Award, bg: 'bg-[#B8952E]/10', text: 'text-[#9A7A1E]', border: 'border-[#B8952E]/30' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/15 rounded-full blur-3xl" />
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B9A6B 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />
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

          {/* Experience Grid - 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => {
              const Icon = exp.icon

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="group relative bg-white/40 backdrop-blur-xl p-6 rounded-3xl border border-white/50 ring-1 ring-[#8B9A6B]/5 shadow-[0_8px_32px_rgba(139,154,107,0.15)] hover:shadow-[0_20px_50px_rgba(139,154,107,0.28)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-full flex flex-col">
                    {/* Glass Shine Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                    {/* Gradient Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-500 group-hover:h-1.5 bg-gradient-to-r from-[#8B9A6B]/40 via-[#8B9A6B] to-[#8B9A6B]/40" />

                    {/* Header: Neuron Logo + Title + Badge */}
                    <div className="flex items-start justify-between gap-3 pt-1">
                      <div className="flex items-start gap-3">
                        {/* Neuron-style Logo */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className="absolute -inset-1.5 rounded-full border border-[#8B9A6B]/40"
                            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: index * 0.3 }}
                          />
                          <div className="relative w-14 h-14 rounded-full bg-white/40 backdrop-blur-xl shadow-[0_6px_18px_rgba(139,154,107,0.2)] border border-white/50 ring-1 ring-[#8B9A6B]/10 flex items-center justify-center overflow-hidden">
                            {exp.logo ? (
                              <img src={exp.logo} alt={exp.company} className="w-9 h-9 object-contain relative z-10" />
                            ) : (
                              <Icon className="w-7 h-7 text-[#8B9A6B] relative z-10" />
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#2C2C2C] transition-colors duration-300 group-hover:text-[#8B9A6B]">
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
                      </div>
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border backdrop-blur-md font-medium whitespace-nowrap shadow-sm flex-shrink-0 ${TYPE_STYLES[exp.type]?.bg ?? 'bg-[#8B9A6B]/10'} ${TYPE_STYLES[exp.type]?.text ?? 'text-[#8B9A6B]'} ${TYPE_STYLES[exp.type]?.border ?? 'border-[#8B9A6B]/30'}`}>
                        {(() => {
                          const TypeIcon = TYPE_STYLES[exp.type]?.icon ?? Briefcase
                          return <TypeIcon className="w-3.5 h-3.5" />
                        })()}
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
                            className="text-[10px] px-2 py-1 bg-white/30 backdrop-blur-md hover:bg-[#8B9A6B]/15 border border-white/40 rounded-full text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors"
                          >
                            {project.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#8B9A6B]/10 mt-auto">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 backdrop-blur-md rounded-full border shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md bg-[#8B9A6B]/10 text-[#8B9A6B] border-white/40 ring-1 ring-[#8B9A6B]/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Corner Accent - Mini Node Graph */}
                    <svg className="absolute bottom-3 right-3 w-16 h-16 opacity-[0.18] pointer-events-none" viewBox="0 0 64 64" fill="none">
                      <line x1="10" y1="50" x2="30" y2="34" stroke="#8B9A6B" strokeWidth="1" />
                      <line x1="30" y1="34" x2="50" y2="16" stroke="#8B9A6B" strokeWidth="1" />
                      <line x1="30" y1="34" x2="46" y2="46" stroke="#8B9A6B" strokeWidth="1" />
                      <circle cx="10" cy="50" r="2.5" fill="#8B9A6B" />
                      <circle cx="30" cy="34" r="3" fill="#8B9A6B" />
                      <circle cx="50" cy="16" r="2.5" fill="#8B9A6B" />
                      <circle cx="46" cy="46" r="2" fill="#8B9A6B" />
                    </svg>
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
              { label: 'Companies', value: '6', icon: Users },
              { label: 'Internships', value: '3', icon: Award },
              { label: 'Projects', value: '15+', icon: FolderGit2 },
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