'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Calendar, 
  Sparkles, 
  BookOpen, 
  Award, 
  Brain, 
  MapPin,
  ExternalLink
} from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'BS in Computer Science',
    institution: 'University of Layyah',
    institutionLink: 'https://www.linkedin.com/school/university-of-layyah/',
    year: '2024 – 2028',
    gpa: 'CGPA: 4.0/4.0',
    location: 'Layyah, Pakistan',
    logo: '/images/companies/uol.png',
    courses: [
      'Programming Fundamentals',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Operating Systems',
      'Computer Networks'
    ],
    icon: GraduationCap,
    color: '#8B9A6B',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Decorations */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header - Centered */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-xs sm:text-sm font-medium text-[#8B9A6B] mb-3 sm:mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Education
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Academic <span className="text-[#8B9A6B]">Background</span>
            </h2>
            <div className="w-14 sm:w-16 md:w-20 h-1 bg-[#8B9A6B] mx-auto mt-3 sm:mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-[#4A4A4A] mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
              My educational journey and qualifications that shaped my career
            </p>
          </div>

          {/* Education Cards - Centered */}
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 hover:-translate-y-1">
                    
                    {/* === EVERYTHING CENTERED === */}
                    <div className="flex flex-col items-center text-center">
                      
                      {/* Logo - Centered */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white shadow-lg border-2 border-[#8B9A6B]/20 flex items-center justify-center overflow-hidden flex-shrink-0 mx-auto mb-3 sm:mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain relative z-10" 
                          />
                        ) : (
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#8B9A6B] relative z-10" />
                        )}
                        <div className="absolute -inset-1 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#8B9A6B]/20" />
                      </div>

                      {/* Degree - Centered */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                        {edu.degree}
                      </h3>

                      {/* Institution - Centered */}
                      <a
                        href={edu.institutionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors font-medium inline-flex items-center gap-1.5 group/link"
                      >
                        {edu.institution}
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                      </a>

                      {/* Badges - Centered */}
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                        <span className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#8B9A6B]/10 rounded-full text-xs sm:text-sm font-medium text-[#8B9A6B] border border-[#8B9A6B]/20 whitespace-nowrap">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-[10px] sm:text-xs">{edu.year}</span>
                        </span>
                        <span className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#8B9A6B]/10 rounded-full text-xs sm:text-sm font-medium text-[#8B9A6B] border border-[#8B9A6B]/20 whitespace-nowrap">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-[10px] sm:text-xs">{edu.gpa}</span>
                        </span>
                      </div>

                      {/* Location - Centered */}
                      <div className="flex items-center justify-center gap-1.5 mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#4A4A4A]">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B9A6B] flex-shrink-0" />
                        {edu.location}
                      </div>

                      {/* Courses - Centered */}
                      <div className="mt-3 sm:mt-4 w-full">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#2C2C2C] mb-1.5 sm:mb-2.5 flex items-center justify-center gap-1.5 sm:gap-2">
                          <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B9A6B]" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/50 text-[#4A4A4A] rounded-full text-[10px] sm:text-xs border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:bg-[#8B9A6B]/5 transition-all duration-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Decorative Number - Hidden on small screens */}
                    <div className="hidden sm:block absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-[#8B9A6B]/5 select-none pointer-events-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <p className="text-xs sm:text-sm text-[#4A4A4A] flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
              <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B9A6B]" />
              Always learning, always growing
              <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B9A6B]" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}