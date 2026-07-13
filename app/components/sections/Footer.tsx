'use client'

import { motion } from 'framer-motion'
import { 
  ArrowUp, 
  Heart, 
  Mail,
  Briefcase,
  Code2,
  Brain,
  Users,
  Trophy,
  Rocket,
  Globe,
  Sparkles,
  MessageCircle,
  Zap,
  Layers,
  Home
} from 'lucide-react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaKaggle, 
  FaHackerrank,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  // Services
  const services = [
    { icon: Code2, label: 'Web Development', color: '#8B9A6B' },
    { icon: Brain, label: 'AI/ML Solutions', color: '#8B5CF6' },
    { icon: Users, label: 'Collaboration', color: '#2ECC71' },
    { icon: Trophy, label: 'Hackathons', color: '#F1C40F' },
    { icon: Rocket, label: 'Innovation', color: '#1E90FF' },
    { icon: Globe, label: 'Remote Work', color: '#8B9A6B' },
  ]

  // Social Links
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Sara12-2', label: 'GitHub', color: '#2C2C2C' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaKaggle, href: 'https://www.kaggle.com/sara765', label: 'Kaggle', color: '#20BEFF' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Sara_34/', label: 'LeetCode', color: '#FFA116' },
    { icon: FaHackerrank, href: 'https://www.hackerrank.com/profile/saramanzoor342', label: 'HackerRank', color: '#2EC866' },
    { icon: Mail, href: 'mailto:saramanzoor76@gmail.com', label: 'Email', color: '#8B9A6B' },
  ]

  // FIX: Quick Links now use the same smooth-scroll behavior as Navigation.tsx
  // instead of a plain <a href> hard jump/reload, for a consistent UX.
  const quickLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Projects', href: '#projects', icon: Layers },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', icon: MessageCircle },
  ]

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <footer className="bg-[#F5F5F0] border-t border-[#8B9A6B]/10 py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B9A6B]/20 to-transparent" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-[#2C2C2C] tracking-tight">
                <span className="text-[#8B9A6B]">S</span>ara
                <span className="text-[#8B9A6B]">.</span>
              </h3>
              <p className="text-[#4A4A4A] text-sm mt-1 leading-relaxed">
                Full Stack Developer & AI Engineer
              </p>
              <p className="text-[#4A4A4A]/60 text-xs mt-2 max-w-xs leading-relaxed">
                Building intelligent, scalable solutions with a passion for innovation, 
                collaboration, and real-world impact.
              </p>
              <div className="flex items-center gap-1 mt-3 text-[10px] text-[#4A4A4A]/30">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-[#8B9A6B] fill-[#8B9A6B]" />
                <span>• {currentYear}</span>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-[#2C2C2C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B9A6B]" />
                What I Do
              </h4>
              <div className="flex flex-col gap-2.5">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2.5 text-sm text-[#4A4A4A]/70 hover:text-[#8B9A6B] transition-colors duration-300 group cursor-default"
                    >
                      <Icon className="w-4 h-4" style={{ color: service.color }} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-[#2C2C2C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8B9A6B]" />
                Quick Links
              </h4>
              <div className="flex flex-col gap-2.5">
                {quickLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleQuickLinkClick(e, link.href)}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2.5 text-sm text-[#4A4A4A]/70 hover:text-[#8B9A6B] transition-all duration-300"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{link.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Connect & Social */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-[#2C2C2C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#8B9A6B]" />
                Connect
              </h4>
              
              <div className="space-y-3">
                {/* Availability */}
                <div className="flex items-center gap-2 text-sm text-[#4A4A4A]/70">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
                    <span className="font-medium text-[#2ECC71] text-xs">Open to Work</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#4A4A4A]/50 leading-relaxed">
                  Available for remote collaborations, hackathons, and innovative projects.
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/80 rounded-xl border border-[#8B9A6B]/10 hover:border-[#8B9A6B]/30 hover:shadow-md transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon 
                        className="w-4 h-4 text-[#4A4A4A]/60 group-hover:text-[#8B9A6B] transition-colors duration-300" 
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Next.js', 'React', 'Python', 'Flask', 'AI/ML'].map((tech) => (
                    <span key={tech} className="text-[8px] px-2 py-1 bg-[#8B9A6B]/5 border border-[#8B9A6B]/10 rounded-full text-[#4A4A4A]/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-[#8B9A6B]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-[#4A4A4A]/30 tracking-[0.1em] uppercase text-center sm:text-left">
              © {currentYear} <span className="text-[#8B9A6B]/50 font-medium">Sara Manzoor</span> 
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <div className="flex items-center gap-4 text-[10px] text-[#4A4A4A]/20">
              <span>Built with</span>
              <span className="flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                Next.js
              </span>
              <span className="w-px h-3 bg-[#4A4A4A]/10" />
              <span className="flex items-center gap-1">
                Tailwind
              </span>
              <span className="w-px h-3 bg-[#4A4A4A]/10" />
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Framer Motion
              </span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] rounded-xl transition-all duration-300 shadow-md shadow-[#8B9A6B]/20 hover:shadow-lg inline-flex items-center justify-center group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}