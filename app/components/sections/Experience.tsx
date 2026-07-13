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
  GitBranch
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const experiences = [
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
    skills: ['Operations Management', 'Project Management', 'Team Leadership'],
    icon: Briefcase,
    color: '#8B9A6B',
    logo: '/images/companies/devhatch.png',
  },
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
    skills: ['Open Source', 'Git', 'Collaboration'],
    icon: GitBranch,
    color: '#8B9A6B',
    logo: '/images/companies/gssoc.png',
  },
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
    skills: ['XGBoost', 'LightGBM', 'Feature Engineering'],
    icon: Award,
    color: '#8B9A6B',
    logo: '/images/companies/fast-nuces.png',
    github: 'https://github.com/Sara12-2/High_Cost_Patient_prediction_Softtec_Competition_Project',
  },
  {
    id: 4,
    title: 'Web Developer Intern',
    company: 'Afynix Digital',
    companyLink: 'https://www.linkedin.com/company/111725218/',
    location: 'Remote',
    period: 'May 2026 – Jun 2026 · 2 mos',
    type: 'Internship',
    description: [
      'Built TechNest (React e-commerce) and ARCWATCH (smartwatch landing page) with cart/wishlist and dark/light mode',
      'Implemented real-time API integrations across multiple client-facing web apps'
    ],
    skills: ['React.js', 'JavaScript', 'REST APIs'],
    icon: Code2,
    color: '#8B9A6B',
    logo: '/images/companies/afynix.png',
    github: 'https://github.com/Sara12-2/TechNest-Ecommerce',
    live: 'https://tech-nest-ecommerce.vercel.app/',
  },
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
    skills: ['Scikit-learn', 'SMOTE', 'NLTK'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/companies/sam-ai.png',
    projects: [
      { name: 'Fraud Detection', link: 'https://github.com/Sara12-2/Credit-Card-Fraud-Detection' },
      { name: 'Sentiment Analysis', link: 'https://github.com/Sara12-2/Sentiment-Analysis-Twitter-Airline' },
      { name: 'Spam Detection', link: 'https://github.com/Sara12-2/Spam-SMS-Detection' },
    ],
  },
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
    skills: ['Scikit-learn', 'XGBoost', 'Feature Engineering'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/companies/elevvo.png',
    projects: [
      { name: 'Student Score Prediction', link: 'https://github.com/Sara12-2/Student-Score-Prediction' },
      { name: 'Customer Segmentation', link: 'https://github.com/Sara12-2/Mall-Customer-Segmentation' },
      { name: 'Loan Approval Prediction', link: 'https://github.com/Sara12-2/Loan-Approval-Prediction' },
      { name: 'Sales Forecasting', link: 'https://github.com/Sara12-2/Walmart-Sales-Forecasting' },
      { name: 'Forest Cover Classification', link: 'https://github.com/Sara12-2/Forest-Cover-Type-Classification' },
      { name: 'House Price Prediction', link: 'https://github.com/Sara12-2/House-Price-Prediction-Kaggle' },
    ],
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
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-14">
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

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {experiences.map((exp, index) => {
              const Icon = exp.icon

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-[0_4px_20px_rgba(139,154,107,0.06)] hover:shadow-[0_12px_40px_rgba(139,154,107,0.15)] transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
                    
                    {/* Top Border Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#8B9A6B]/40 via-[#8B9A6B] to-[#8B9A6B]/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#8B9A6B]/8 border border-[#8B9A6B]/15 flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:border-[#8B9A6B]/30">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-6 h-6 object-contain" />
                        ) : (
                          <Icon className="w-5 h-5 text-[#8B9A6B]" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors font-medium inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className={`hidden sm:inline-flex items-center gap-1 text-[9px] px-2 py-1 rounded-full border font-medium flex-shrink-0 ${TYPE_STYLES[exp.type]?.bg ?? 'bg-[#8B9A6B]/10'} ${TYPE_STYLES[exp.type]?.text ?? 'text-[#8B9A6B]'} ${TYPE_STYLES[exp.type]?.border ?? 'border-[#8B9A6B]/20'}`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#4A4A4A]/70 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8B9A6B]" />
                        {exp.period}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#4A4A4A]/30" />
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8B9A6B]" />
                        {exp.location}
                      </span>
                      <span className={`sm:hidden inline-flex items-center text-[9px] px-2 py-0.5 rounded-full border font-medium ${TYPE_STYLES[exp.type]?.bg ?? 'bg-[#8B9A6B]/10'} ${TYPE_STYLES[exp.type]?.text ?? 'text-[#8B9A6B]'} ${TYPE_STYLES[exp.type]?.border ?? 'border-[#8B9A6B]/20'}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 text-xs text-[#4A4A4A] flex-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 bg-[#8B9A6B]" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links row — only real, role-specific links; capped at 2 */}
                    {(exp.github || exp.live || (exp.projects && exp.projects.length > 0)) && (
                      <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-[#8B9A6B]/8">
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A]/60 hover:text-[#8B9A6B] transition-colors"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                        {exp.live && (
                          <a
                            href={exp.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A]/60 hover:text-[#8B9A6B] transition-colors"
                          >
                            <Rocket className="w-3.5 h-3.5" />
                            Live
                          </a>
                        )}
                        {exp.projects && exp.projects.length > 0 && (
                          <a
                            href={exp.projects[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-[#4A4A4A]/60 hover:text-[#8B9A6B] transition-colors"
                          >
                            <FolderGit2 className="w-3.5 h-3.5" />
                            {exp.projects.length} Projects
                          </a>
                        )}
                      </div>
                    )}

                    {/* Skills — capped at 3, no overflow clutter */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#8B9A6B]/8">
                      {exp.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] px-2.5 py-1 rounded-full bg-[#8B9A6B]/8 text-[#8B9A6B] border border-[#8B9A6B]/10 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
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
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Total Roles', value: experiences.length, icon: Briefcase },
              { label: 'Companies', value: '6', icon: Users },
              { label: 'Internships', value: '3', icon: Award },
              { label: 'Projects', value: '15+', icon: FolderGit2 },
            ].map((stat) => {
              const StatIcon = stat.icon
              return (
                <motion.div 
                  key={stat.label} 
                  className="group bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-1.5">
                    <div className="p-2 rounded-full bg-[#8B9A6B]/8 group-hover:bg-[#8B9A6B]/15 transition-colors duration-300">
                      <StatIcon className="w-4 h-4 text-[#8B9A6B]" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-[#8B9A6B]">{stat.value}</div>
                  <div className="text-xs text-[#4A4A4A]">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}