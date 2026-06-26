'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'MS in Computer Science',
    institution: 'Stanford University',
    year: '2020 - 2022',
    gpa: '3.9/4.0',
    courses: ['Machine Learning', 'Advanced AI', 'Distributed Systems'],
  },
  {
    id: 2,
    degree: 'BS in Software Engineering',
    institution: 'MIT',
    year: '2016 - 2020',
    gpa: '3.8/4.0',
    courses: ['Data Structures', 'Algorithms', 'Database Systems'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#00A86B]">Education</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#141414] p-6 rounded-xl border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#00A86B]">
                      <GraduationCap className="w-5 h-5" />
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-gray-300 mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] rounded-full text-sm border border-[#00A86B]/20">
                    GPA: {edu.gpa}
                  </span>
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-[#0A0A0A]/50 text-gray-300 rounded-full text-sm border border-[#00A86B]/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}