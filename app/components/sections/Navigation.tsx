'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    // Scroll effect
    setScrolled(window.scrollY > 50)

    // Active section detection
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    let current = 'home'
    
    // Check if we're at the top
    if (window.scrollY < 200) {
      setActiveSection('home')
      return
    }

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        // Section is considered active when its top is near the viewport top
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section
          break
        }
      }
    }
    
    setActiveSection(current)
  }, [])

  // Throttle function
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100)
    window.addEventListener('scroll', throttledScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Handle hash on load
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(hash)
        }, 100)
      }
    }
  }, [])

  // Handle resize - close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }

      document.addEventListener('keydown', handleTab)
      return () => document.removeEventListener('keydown', handleTab)
    }
  }, [isOpen])

  // Handle smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('home')
      // Update URL without hash
      window.history.pushState(null, '', '/')
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      const sectionName = href.replace('#', '')
      setActiveSection(sectionName)
      // Update URL hash
      window.history.pushState(null, '', href)
    }
  }

  // Check if link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return activeSection === 'home'
    }
    return activeSection === href.replace('#', '')
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#8B9A6B]/5' 
          : 'bg-white/80 backdrop-blur-md'
      } border-b border-[#8B9A6B]/10`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a 
            href="/" 
            className="text-2xl font-bold text-[#2C2C2C] tracking-tight transition-colors hover:text-[#8B9A6B]"
            onClick={(e) => handleNavClick(e, '/')}
            aria-label="Sara Manzoor - Home"
          >
            <span className="text-[#8B9A6B]">S</span>ara
            <span className="text-[#8B9A6B]"> </span>
            <span className="text-[#8B9A6B]">M</span>anzoor
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative group text-sm font-medium tracking-wide transition-all duration-300 ${
                    active 
                      ? 'text-[#8B9A6B] font-semibold' 
                      : 'text-[#4A4A4A] hover:text-[#8B9A6B]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                  {/* Only underline indicator - no dot */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#8B9A6B] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#8B9A6B]/10 text-[#2C2C2C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B9A6B]/50"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-[#8B9A6B]/10"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href)
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                        active 
                          ? 'bg-[#8B9A6B]/10 text-[#8B9A6B] font-semibold' 
                          : 'text-[#4A4A4A] hover:bg-[#8B9A6B]/5 hover:text-[#8B9A6B]'
                      }`}
                      role="menuitem"
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.name}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}