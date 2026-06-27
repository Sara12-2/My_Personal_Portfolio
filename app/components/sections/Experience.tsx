'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle, Sparkles, ArrowRight } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'TechCorp',
    role: 'AI Developer',
    duration: '2023 - Present',
    icon: '🤖',
    achievements: [
      'Built AI chatbot with 95% accuracy',
      'Led team of 5 developers',
      'Reduced response time by 60%',
    ],
  },
  {
    id: 2,
    company: 'WebSolutions',
    role: 'Full Stack Developer',
    duration: '2021 - 2023',
    icon: '💻',
    achievements: [
      'Developed 10+ production apps',
      'Implemented CI/CD pipeline',
      'Mentored junior developers',
    ],
  },
  {
    id: 3,
    company: 'StartupHub',
    role: 'Software Engineer Intern',
    duration: '2020 - 2021',
    icon: '🚀',
    achievements: [
      'Built RESTful APIs with Node.js',
      'Created responsive UIs with React',
      'Improved code coverage by 40%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

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
              My Journey
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Work <span className="text-[#8B9A6B]">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8B9A6B]/20 hidden md:block transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#8B9A6B] flex items-center justify-center shadow-lg shadow-[#8B9A6B]/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-4 md:text-right' : 'md:pl-4 md:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 group"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="flex items-center gap-2 text-[#8B9A6B] mb-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#8B9A6B]/10 rounded-full">
                        <Calendar className="w-4 h-4 text-[#8B9A6B]" />
                        <span className="text-sm font-medium text-[#8B9A6B]">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#8B9A6B]/5 transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-[#8B9A6B] mt-0.5 flex-shrink-0" />
                          <span className="text-[#4A4A4A] text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Line */}
                    <div className={`mt-4 w-12 h-0.5 bg-[#8B9A6B]/30 rounded-full ${index % 2 === 0 ? 'ml-auto' : 'ml-0'}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-[#4A4A4A] text-sm">
              Always looking for new challenges and opportunities 🚀
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}