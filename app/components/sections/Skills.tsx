'use client'

import { motion } from 'framer-motion'

const skills = {
  'AI/ML': ['OpenAI', 'LangChain', 'Python', 'TensorFlow'],
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Prisma', 'PostgreSQL', 'MySQL'],
  'Tools': ['Docker', 'AWS', 'Git', 'Vercel'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            My <span className="text-[#00A86B]">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0A]/50 p-6 rounded-xl border border-[#00A86B]/20 hover:border-[#00A86B]/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#00A86B] mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] rounded-full text-sm border border-[#00A86B]/20"
                    >
                      {skill}
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