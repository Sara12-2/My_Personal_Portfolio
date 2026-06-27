'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Sparkles, BookOpen, Award } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'MS in Computer Science',
    institution: 'Stanford University',
    year: '2020 - 2022',
    gpa: '3.9/4.0',
    courses: ['Machine Learning', 'Advanced AI', 'Distributed Systems'],
    icon: Award,
  },
  {
    id: 2,
    degree: 'BS in Software Engineering',
    institution: 'MIT',
    year: '2016 - 2020',
    gpa: '3.8/4.0',
    courses: ['Data Structures', 'Algorithms', 'Database Systems'],
    icon: BookOpen,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
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
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              My Education
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Academic <span className="text-[#8B9A6B]">Background</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My educational journey and qualifications that shaped my career
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#8B9A6B]/20 hidden md:block" />

            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-24 pb-12 last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#8B9A6B] flex items-center justify-center shadow-lg shadow-[#8B9A6B]/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-full w-0.5 h-4 bg-[#8B9A6B]/20 md:hidden" />
                  </div>

                  {/* Card */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 group-hover:border-[#8B9A6B]/30">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-[#4A4A4A] font-medium mt-1">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#8B9A6B]/10 rounded-full">
                        <Calendar className="w-4 h-4 text-[#8B9A6B]" />
                        <span className="text-sm font-medium text-[#8B9A6B]">{edu.year}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full text-sm border border-[#8B9A6B]/20">
                        <Award className="w-3.5 h-3.5" />
                        GPA: {edu.gpa}
                      </span>
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 bg-white/50 text-[#4A4A4A] rounded-full text-sm border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:bg-[#8B9A6B]/5 transition-all duration-300"
                        >
                          {course}
                        </span>
                      ))}
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
            <p className="text-[#4A4A4A] text-sm">
              Always learning, always growing 📚
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}