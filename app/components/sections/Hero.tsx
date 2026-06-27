'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#F5F5F0]">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-xs font-medium text-[#8B9A6B] mb-6">
            Open to Work
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2C2C] mb-3">
            Sara <span className="text-[#8B9A6B]">Manzoor</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-[#8B9A6B] font-medium mb-4">
            Full Stack Developer & AI Engineer
          </p>

          {/* Description */}
          <p className="text-[#4A4A4A] max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Building intelligent, scalable applications with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a
              href="#contact"
              className="bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white px-8 py-3 rounded-xl transition-all text-sm font-medium shadow-md hover:shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="border-2 border-[#8B9A6B] text-[#8B9A6B] hover:bg-[#8B9A6B]/10 px-8 py-3 rounded-xl transition-all text-sm font-medium"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://linkedin.com/in/sara-manzoor-3a8a56365/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-md transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5 text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors" />
            </a>
            <a
              href="https://github.com/Sara12-2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-md transition-all duration-300"
            >
              <FaGithub className="w-5 h-5 text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-md transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5 text-[#4A4A4A] hover:text-[#8B9A6B] transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] uppercase tracking-widest text-[#8B9A6B]/50">Scroll</span>
              <ChevronDown className="w-5 h-5 text-[#8B9A6B]/50" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}