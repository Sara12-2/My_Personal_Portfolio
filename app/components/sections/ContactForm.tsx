'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Clock, 
  User, 
  Building,
  Loader2,
  Calendar,
  DollarSign,
  MessageSquare,
  ChevronDown
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import toast from 'react-hot-toast'

// ============================================
// CUSTOM SELECT
// FIX: native <select><option> dropdown lists have their hover/selected
// color controlled by the OS/browser — Chrome doesn't allow overriding
// it via CSS at all, Firefox only partially. That's why "Budget" etc.
// showed a blue highlight that didn't match the olive theme. This
// component renders the dropdown list ourselves (plain divs), so every
// pixel of it — including hover state — follows the site's theme.
// ============================================

interface SelectOption {
  value: string
  label: string
}

const CustomSelect = ({
  name,
  value,
  onChange,
  options,
  placeholder,
  icon,
}: {
  name: string
  value: string
  onChange: (name: string, value: string) => void
  options: SelectOption[]
  placeholder: string
  icon: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedLabel = options.find((o) => o.value === value)?.label

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full pl-10 pr-9 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-left transition-all duration-300 ${
          value ? 'text-[#2C2C2C]' : 'text-[#4A4A4A]/50'
        }`}
      >
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B9A6B]">{icon}</span>
        {selectedLabel || placeholder}
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-30 mt-2 w-full max-h-64 overflow-y-auto bg-white border border-[#8B9A6B]/15 rounded-xl shadow-xl shadow-[#8B9A6B]/10 py-1.5"
          >
            {options.map((option) => (
              <button
                key={option.value || 'placeholder'}
                type="button"
                onClick={() => {
                  onChange(name, option.value)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                  option.value === value
                    ? 'bg-[#8B9A6B] text-white font-medium'
                    : 'text-[#2C2C2C] hover:bg-[#8B9A6B]/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ============================================
// OPTIONS
// ============================================

const PROJECT_TYPE_OPTIONS: SelectOption[] = [
  { value: 'fullstack', label: 'Full Stack Development' },
  { value: 'ai', label: 'AI / Machine Learning' },
  { value: 'frontend', label: 'Frontend Development' },
  { value: 'backend', label: 'Backend Development' },
  { value: 'consulting', label: 'Technical Consulting' },
]

const BUDGET_OPTIONS: SelectOption[] = [
  { value: '5000-15000', label: '₨ 5,000 – ₨ 15,000' },
  { value: '15000-30000', label: '₨ 15,000 – ₨ 30,000' },
  { value: '30000-50000', label: '₨ 30,000 – ₨ 50,000' },
  { value: '50000-100000', label: '₨ 50,000 – ₨ 100,000' },
  { value: '100000-250000', label: '₨ 100,000 – ₨ 250,000' },
  { value: '250000+', label: '₨ 250,000+' },
  { value: 'negotiable', label: 'Negotiable' },
]

const TIMELINE_OPTIONS: SelectOption[] = [
  { value: '1week', label: '1 Week (Urgent)' },
  { value: '2weeks', label: '2 Weeks' },
  { value: '1month', label: '1 Month' },
  { value: '2-3months', label: '2-3 Months' },
  { value: '3-6months', label: '3-6 Months' },
  { value: 'flexible', label: 'Flexible' },
]

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const FORMSPREE_ID = 'xgojzedd'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast.success(' Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
        })
      } else {
        toast.error(' Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error(' Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Olive Theme Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B9A6B]/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Let's Build <span className="text-[#8B9A6B]">Something Amazing</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's work together and create something extraordinary.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* LEFT - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-6 flex items-center gap-2">
                  <span className="text-[#8B9A6B]">✦</span>
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:saramanzoor76@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#8B9A6B]/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#8B9A6B]/10 rounded-xl group-hover:bg-[#8B9A6B] transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A4A]/60">Email</p>
                      <p className="text-sm font-medium text-[#2C2C2C]">saramanzoor76@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+923164764391"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#8B9A6B]/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#8B9A6B]/10 rounded-xl group-hover:bg-[#8B9A6B] transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A4A]/60">Phone</p>
                      <p className="text-sm font-medium text-[#2C2C2C]">+92 316 4764391</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#8B9A6B]/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#8B9A6B]/10 rounded-xl group-hover:bg-[#8B9A6B] transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A4A]/60">Location</p>
                      <p className="text-sm font-medium text-[#2C2C2C]">Layyah, Punjab, Pakistan</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-[#8B9A6B]/10">
                  <p className="text-xs text-[#4A4A4A]/60 mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {[
                      { icon: FaGithub, href: 'https://github.com/Sara12-2', label: 'GitHub' },
                      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/', label: 'LinkedIn' },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="p-2.5 bg-[#8B9A6B]/10 rounded-xl hover:bg-[#8B9A6B] transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-[#8B9A6B] group-hover:text-white transition-all duration-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8B9A6B]" />
                  Availability
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  Available for freelance projects and full-time opportunities.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#2ECC71] rounded-full animate-pulse shadow-lg shadow-[#2ECC71]/30" />
                  <span className="text-sm font-medium text-[#2ECC71]">Open to Work</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Remote'].map((type) => (
                    <span key={type} className="px-3 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] text-xs rounded-full border border-[#8B9A6B]/20">
                      {type}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Project Type — custom themed dropdown */}
                <div className="mt-4">
                  <CustomSelect
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleSelectChange}
                    options={PROJECT_TYPE_OPTIONS}
                    placeholder="Select Service Type"
                    icon={<Building className="w-4 h-4" />}
                  />
                </div>

                {/* Budget & Timeline — custom themed dropdowns */}
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <CustomSelect
                    name="budget"
                    value={formData.budget}
                    onChange={handleSelectChange}
                    options={BUDGET_OPTIONS}
                    placeholder="Budget Range (PKR)"
                    icon={<DollarSign className="w-4 h-4" />}
                  />

                  <CustomSelect
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleSelectChange}
                    options={TIMELINE_OPTIONS}
                    placeholder="Project Timeline"
                    icon={<Calendar className="w-4 h-4" />}
                  />
                </div>

                {/* Message */}
                <div className="mt-4">
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#8B9A6B]" />
                    <textarea
                      name="message"
                      placeholder="Tell me about your project *"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 resize-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B] hover:from-[#6B7A5B] hover:to-[#5A6A4B] text-white px-8 py-3.5 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg shadow-[#8B9A6B]/30 hover:shadow-[#8B9A6B]/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}