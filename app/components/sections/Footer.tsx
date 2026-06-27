'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F5F0] border-t border-[#8B9A6B]/10 py-10 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B9A6B]/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-[#2C2C2C] tracking-tight">
              <span className="text-[#8B9A6B]">S</span>ara
              <span className="text-[#8B9A6B]">.</span>
            </h3>
            <p className="text-[#4A4A4A] text-xs mt-0.5">
              Full Stack Developer & AI Engineer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-[10px] text-[#4A4A4A]/40">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-[#8B9A6B] fill-[#8B9A6B]" />
              <span>• {currentYear}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/sara-manzoor-3a8a56365/' },
              { label: 'GitHub', href: 'https://github.com/Sara12-2' },
              { label: 'Twitter', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-[#4A4A4A]/60 hover:text-[#8B9A6B] transition-all duration-300 text-sm font-medium group"
              >
                {social.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#8B9A6B] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right flex flex-col items-center md:items-end gap-2"
          >
            <p className="text-xs text-[#4A4A4A]/50">
              © {currentYear} <span className="text-[#8B9A6B] font-medium">Sara Manzoor</span>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-lg transition-all duration-300 shadow-md shadow-[#8B9A6B]/20 hover:shadow-lg inline-flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-5 border-t border-[#8B9A6B]/5 text-center">
          <p className="text-[9px] text-[#4A4A4A]/20 tracking-[0.15em] uppercase">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}