'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'  // Sirf ChevronDown rakha

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00A86B]/5 via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-[#00A86B] shadow-lg shadow-[#00A86B]/20 overflow-hidden"
          >
            <img
              src="https://ui-avatars.com/api/?name=Sara&size=128&background=00A86B&color=fff"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Sara <span className="text-[#00A86B]">Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer & AI Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="bg-[#00A86B] hover:bg-[#007A4D] text-white px-8 py-3 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg shadow-[#00A86B]/20 hover:shadow-[#00A86B]/40"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="border border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B]/10 px-8 py-3 rounded-lg transition-all duration-300 text-lg font-medium"
            >
              View Projects
            </a>
          </motion.div>

          {/* Text Links - No Icons */}
          <div className="flex gap-6 justify-center text-sm">
            <a href="#" className="text-gray-400 hover:text-[#00A86B] transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#00A86B] transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-[#00A86B] transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-[#00A86B]" />
      </motion.div>
    </section>
  )
}