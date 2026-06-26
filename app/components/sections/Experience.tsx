'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    company: 'TechCorp',
    role: 'AI Developer',
    duration: '2023 - Present',
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
    achievements: [
      'Built RESTful APIs with Node.js',
      'Created responsive UIs with React',
      'Improved code coverage by 40%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Work <span className="text-[#00A86B]">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-[#00A86B]/30 hover:border-[#00A86B] transition-all duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#00A86B] rounded-full shadow-lg shadow-[#00A86B]/20" />
                <div className="bg-[#141414] p-6 rounded-xl border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-[#00A86B]">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-[#00A86B] mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}