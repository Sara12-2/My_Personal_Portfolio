'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Projects', value: '15+' },
  { label: 'Clients', value: '20+' },
  { label: 'AI Models', value: '5+' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">  {/* ← bg-dark → bg-[#0A0A0A] */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-[#00A86B]">Me</span>  {/* ← text-primary → text-[#00A86B] */}
          </h2>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-[#00A86B] shadow-xl shadow-[#00A86B]/20 overflow-hidden">  {/* ← border-primary → border-[#00A86B] */}
                <img
                  src="https://ui-avatars.com/api/?name=Sara&size=256&background=00A86B&color=fff"
                  alt="Sara"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer & AI Engineer with 3+ years of experience
                building modern web applications and AI solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across React, Next.js, Node.js, Python, and AI/ML technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#00A86B]">{stat.value}</div>  {/* ← text-primary → text-[#00A86B] */}
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}