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
    <section id="education" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Education
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Academic <span className="text-[#8B9A6B]">Background</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My educational journey and qualifications that shaped my career
            </p>
          </div>

          {/* Education Cards */}
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
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-wrap items-start gap-6">
                      {/* Logo */}
                      <div className="relative w-20 h-20 rounded-2xl bg-white shadow-lg border-2 border-[#8B9A6B]/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B9A6B]/10 to-[#8B9A6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-14 h-14 object-contain relative z-10" 
                          />
                        ) : (
                          <Icon className="w-10 h-10 text-[#8B9A6B] relative z-10" />
                        )}
                        <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#8B9A6B]/20" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <a
                              href={edu.institutionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors font-medium inline-flex items-center gap-1.5 text-sm group/link"
                            >
                              {edu.institution}
                              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#8B9A6B]/10 rounded-full text-sm font-medium text-[#8B9A6B] border border-[#8B9A6B]/20">
                              <Calendar className="w-4 h-4" />
                              {edu.year}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#8B9A6B]/10 rounded-full text-sm font-medium text-[#8B9A6B] border border-[#8B9A6B]/20">
                              <Award className="w-4 h-4" />
                              {edu.gpa}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 mt-2 text-sm text-[#4A4A4A]">
                          <MapPin className="w-4 h-4 text-[#8B9A6B]" />
                          {edu.location}
                        </div>

                        {/* Courses */}
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-[#2C2C2C] mb-2.5 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#8B9A6B]" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                              <span
                                key={course}
                                className="px-3 py-1.5 bg-white/50 text-[#4A4A4A] rounded-full text-xs border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:bg-[#8B9A6B]/5 transition-all duration-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Number */}
                    <div className="absolute bottom-4 right-4 text-6xl font-bold text-[#8B9A6B]/5 select-none pointer-events-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#4A4A4A] text-sm flex items-center justify-center gap-2">
              <Brain className="w-4 h-4 text-[#8B9A6B]" />
              Always learning, always growing
              <Brain className="w-4 h-4 text-[#8B9A6B]" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}