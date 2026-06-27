'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F5F0]/95 backdrop-blur-sm border-t border-[#8B9A6B]/15 py-12 relative overflow-hidden">
      {/* Decorative Gradient Line - Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B9A6B]/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-[#2C2C2C] tracking-tight">
              <span className="text-[#8B9A6B]">S</span>ara
              <span className="text-[#8B9A6B]">.</span>
            </h3>
            <p className="text-[#4A4A4A] text-sm mt-1 font-medium">
              Full Stack Developer & AI Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1.5 mt-2.5 text-xs text-[#4A4A4A]/40">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-[#8B9A6B] fill-[#8B9A6B] animate-pulse" />
              <span>• {currentYear}</span>
            </div>
          </motion.div>

          {/* Social Links - Theme Matched */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-[#4A4A4A]/70 hover:text-[#8B9A6B] transition-all duration-300 text-sm font-medium group"
              >
                {social}
                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8B9A6B] group-hover:w-full transition-all duration-300 ease-out" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Back to Top - Theme Matched */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-right flex flex-col items-center md:items-end gap-2"
          >
            <p className="text-[#4A4A4A]/60 text-sm">
              © {currentYear} <span className="text-[#8B9A6B] font-medium">Sara Manzoor</span>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-xl transition-all duration-300 shadow-lg shadow-[#8B9A6B]/20 hover:shadow-[#8B9A6B]/40 inline-flex items-center justify-center group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Border Line - Theme Matched */}
        <div className="mt-10 pt-6 border-t border-[#8B9A6B]/10 text-center">
          <p className="text-[10px] text-[#4A4A4A]/25 tracking-[0.2em] uppercase">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}