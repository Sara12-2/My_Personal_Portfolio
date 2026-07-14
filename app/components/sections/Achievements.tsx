'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Trophy, Medal, Star, Calendar } from 'lucide-react'

const honors = [
  {
    id: 1,
    title: 'Finance Management Team – HELLO WORLD 2025',
    issuer: 'University of Layyah',
    date: 'Dec 2025',
    type: 'Participation',
    icon: Award,
    color: '#8B9A6B',
    logo: '/images/companies/uol.png',
  },
  {
    id: 2,
    title: '2nd Position in ICS – DG Khan Board',
    issuer: 'BISE DG Khan',
    date: '2024',
    type: 'Position Holder',
    icon: Trophy,
    color: '#8B9A6B',
    logo: '/images/honors/bise-dg-khan.png',
  },
  {
    id: 3,
    title: 'Chief Minister Merit Award – Laptop Scheme',
    issuer: 'Govt. of Punjab',
    date: '2025',
    type: 'Merit Award',
    icon: Star,
    color: '#8B9A6B',
    logo: '/images/honors/cm-punjab.png',
  },
  {
    id: 4,
    title: 'E-Scotte Award – Merit Scholarship',
    issuer: 'BISE Multan',
    date: ' Sep 2025',
    type: 'Scholarship',
    icon: Medal,
    color: '#8B9A6B',
    logo: '/images/honors/bise-multan.png',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-xs sm:text-sm font-medium text-[#8B9A6B] mb-3 sm:mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Honors & Awards
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Achievements & <span className="text-[#8B9A6B]">Recognitions</span>
            </h2>
            <div className="w-14 sm:w-16 md:w-20 h-1 bg-[#8B9A6B] mx-auto mt-3 sm:mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-[#4A4A4A] mt-3 sm:mt-4 max-w-2xl mx-auto">
              {honors.length} awards and recognitions from various institutions
            </p>
          </div>

          {/* Cards Grid - 4 in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {honors.map((honor, index) => {
              const Icon = honor.icon
              return (
                <motion.div
                  key={honor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 hover:-translate-y-2 text-center relative"
                >
                  {/* Icon/Logo */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-lg border-2 border-[#8B9A6B]/20 flex items-center justify-center mx-auto mb-2 sm:mb-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {honor.logo ? (
                      <img 
                        src={honor.logo} 
                        alt={honor.issuer} 
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10" 
                      />
                    ) : (
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B9A6B] relative z-10" />
                    )}
                    <div className="absolute -inset-1 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#8B9A6B]/20" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300 line-clamp-2 min-h-[32px] sm:min-h-[40px]">
                    {honor.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-[10px] sm:text-xs text-[#4A4A4A] mt-0.5 sm:mt-1 line-clamp-1">{honor.issuer}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-[#4A4A4A]/70">
                    <span className="flex items-center gap-0.5 sm:gap-1">
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8B9A6B]" />
                      {honor.date}
                    </span>
                    <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-[#4A4A4A]/30" />
                    <span className="px-1.5 sm:px-2 py-0.5 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full text-[8px] sm:text-[10px] font-medium border border-[#8B9A6B]/20 whitespace-nowrap">
                      {honor.type}
                    </span>
                  </div>

                  {/* Decorative Number */}
                  <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-3 text-3xl sm:text-4xl font-bold text-[#8B9A6B]/5 select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats - Responsive - 3 Cards in 1 Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Total Awards', value: honors.length, icon: Award },
                { label: 'Position Holder', value: honors.filter(h => h.type === 'Position Holder').length, icon: Trophy },
                { label: 'Scholarships', value: honors.filter(h => h.type === 'Scholarship').length, icon: Medal },
              ].map((stat) => {
                const StatIcon = stat.icon
                return (
                  <motion.div 
                    key={stat.label} 
                    className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-[#8B9A6B]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="p-1.5 sm:p-2 rounded-full bg-[#8B9A6B]/10 group-hover:bg-[#8B9A6B]/20 transition-colors duration-300">
                      <StatIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B9A6B]" />
                    </div>
                    <div className="text-sm sm:text-xl font-bold text-[#8B9A6B] mt-0.5 sm:mt-1">{stat.value}</div>
                    <div className="text-[8px] sm:text-xs text-[#4A4A4A] text-center leading-tight">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}