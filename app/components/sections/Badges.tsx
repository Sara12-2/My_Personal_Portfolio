'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Calendar, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// ============================================
// BADGES - FULLY MIXED (Kaggle, GSSoC, GitHub)
// ============================================

const badges = [
  // ============ KAGGLE ============
  {
    id: 1,
    title: '1 Year of Kaggle',
    issuer: 'Kaggle',
    date: 'July 2026',
    description: 'Celebrating 1 year of active participation on Kaggle',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ GSSOC ============
  {
    id: 2,
    title: 'GSSoC 2026 Contributor',
    issuer: 'GS Labs by GS Group Foundation',
    date: '2026',
    description: 'Build-Contribute-Ship | Contributed to open source projects',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/gssoc-2026.png',
    link: 'https://gssoc.girlscript.org/profile/3104528d-f97e-48d6-822d-0a044f13a80a',
  },
  // ============ KAGGLE ============
  {
    id: 3,
    title: 'Dataset Creator',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Actively contributing and sharing well-structured datasets for the data science community',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 4,
    title: 'Getting Started Competitor',
    issuer: 'Kaggle',
    date: '2025',
    description: 'First official step into Kaggle competitions',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ GSSOC ============
  {
    id: 5,
    title: 'AI Agents Track',
    issuer: 'GS Labs by GS Group Foundation',
    date: '2026',
    description: 'Build-Automate-Deploy | AI Agents Track Contributor',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/gssoc-2026.png',
    link: 'https://gssoc.girlscript.org/profile/3104528d-f97e-48d6-822d-0a044f13a80a',
  },
  // ============ KAGGLE ============
  {
    id: 6,
    title: 'Community Competitor',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Engaged with the Kaggle community through competitions',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 7,
    title: 'Python Coder',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Writing, running, debugging, and learning Python code',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ GITHUB ============
  {
    id: 8,
    title: 'Quickdraw',
    issuer: 'GitHub',
    date: 'Jun 13, 2026',
    description: 'Closed an issue/pull request within 5 minutes of opening',
    icon: FaGithub,
    color: '#2C2C2C',
    logo: null,
    link: 'https://github.com/Sara12-2',
  },
  // ============ KAGGLE ============
  {
    id: 9,
    title: 'Bookmarker',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Bookmarking useful notebooks and datasets for future reference',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ GSSOC ============
  {
    id: 10,
    title: 'Open Source Track',
    issuer: 'GS Labs by GS Group Foundation',
    date: '2026',
    description: 'Build-Collaborate-Contribute | Open Source Track Contributor',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/gssoc-2026.png',
    link: 'https://gssoc.girlscript.org/profile/3104528d-f97e-48d6-822d-0a044f13a80a',
  },
  // ============ KAGGLE ============
  {
    id: 11,
    title: 'Vampire',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Late night code runner and data vampire',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 12,
    title: 'Learner',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Committed to continuous learning and skill development',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 13,
    title: 'Student',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Kaggle community member and lifelong learner',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 14,
    title: '7 Day Streak',
    issuer: 'Kaggle',
    date: '2025',
    description: '7 consecutive days of active participation on Kaggle',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
  // ============ KAGGLE ============
  {
    id: 15,
    title: 'Community Member',
    issuer: 'Kaggle',
    date: '2025',
    description: 'Active member of the Kaggle community',
    icon: null,
    color: '#8B9A6B',
    logo: '/images/certificates/kaggle.png',
    link: 'https://www.kaggle.com/sara765',
  },
]

export default function Badges() {
  return (
    <section id="badges" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Badges
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Achievements & <span className="text-[#8B9A6B]">Badges</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              {badges.length} Badges from Kaggle, GSSoC 2026 & GitHub
            </p>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Total', value: badges.length, icon: Award },
              { label: 'Kaggle', value: 11, icon: Award },
              { label: 'GSSoC 2026', value: 3, icon: Award },
              { label: 'GitHub', value: 1, icon: FaGithub },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center">
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-xs text-[#4A4A4A]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Badges Grid - FULLY MIXED */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative group bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/20 transition-all duration-300 text-center cursor-pointer"
                >
                  {/* Logo/Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-md border-2 border-[#8B9A6B]/20 flex items-center justify-center overflow-hidden mb-3 group-hover:border-[#8B9A6B] group-hover:shadow-lg transition-all duration-300">
                    {badge.logo ? (
                      <img src={badge.logo} alt={badge.issuer} className="w-10 h-10 object-contain" />
                    ) : Icon ? (
                      <Icon className="w-8 h-8 text-[#8B9A6B]" style={{ color: badge.color }} />
                    ) : (
                      <Award className="w-8 h-8 text-[#8B9A6B]" />
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors line-clamp-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-[#4A4A4A] mt-0.5">{badge.issuer}</p>
                  
                  {badge.date && (
                    <div className="flex items-center justify-center gap-1 mt-1 text-xs text-[#4A4A4A]/70">
                      <Calendar className="w-3 h-3 text-[#8B9A6B]" />
                      {badge.date}
                    </div>
                  )}

                  {/* Notification-Style Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B9A6B]/20 via-[#8B9A6B]/10 to-transparent" />
                    
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-white rounded-xl shadow-2xl shadow-[#8B9A6B]/30 border border-[#8B9A6B]/20 pointer-events-auto">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-[#8B9A6B]/20" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#8B9A6B] animate-pulse" />
                          <span className="text-[10px] font-semibold text-[#8B9A6B] uppercase tracking-wider">Achievement Unlocked</span>
                        </div>
                        <p className="text-xs text-[#2C2C2C] font-medium leading-relaxed">
                          {badge.description}
                        </p>
                        {badge.link && (
                          <a
                            href={badge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-[10px] text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Profile <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}