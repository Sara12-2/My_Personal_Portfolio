'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Clock, 
  Briefcase, 
  User, 
  Building
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import toast from 'react-hot-toast'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.success('Message sent successfully! I\'ll get back to you soon.')
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
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
                  {/* Email */}
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

                  {/* Phone */}
                  <motion.a
                    href="tel:+92 316 4764391"
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

                  {/* Location */}
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

                {/* Social Links - Using react-icons */}
                <div className="mt-6 pt-6 border-t border-[#8B9A6B]/10">
                  <p className="text-xs text-[#4A4A4A]/60 mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {[
                      { icon: FaGithub, href: 'https://github.com/Sara12-2', label: 'GitHub' },
                      { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/', label: 'LinkedIn' },
                      { icon: FaTwitter, href: 'https://twitter.com/', label: 'Twitter' },
                      { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram' },
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
                  {['Remote', 'Hybrid', 'On-site'].map((type) => (
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
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
                      placeholder="Your Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B9A6B]" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
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
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] appearance-none cursor-pointer transition-all duration-300"
                  >
                    <option value="">Select Project Type</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="ai">AI/ML Solutions</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="px-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] appearance-none cursor-pointer transition-all duration-300"
                  >
                    <option value="">Budget Range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="px-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] appearance-none cursor-pointer transition-all duration-300"
                  >
                    <option value="">Timeline</option>
                    <option value="1-2">ASAP (1-2 weeks)</option>
                    <option value="1month">1 Month</option>
                    <option value="2-3">2-3 Months</option>
                    <option value="3-6">3-6 Months</option>
                  </select>
                </div>

                <div className="mt-4">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project *"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#8B9A6B]/10 rounded-xl focus:outline-none focus:border-[#8B9A6B] focus:ring-2 focus:ring-[#8B9A6B]/20 text-[#2C2C2C] placeholder-[#4A4A4A]/50 resize-none transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B] hover:from-[#6B7A5B] hover:to-[#5A6A4B] text-white px-8 py-3.5 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg shadow-[#8B9A6B]/30 hover:shadow-[#8B9A6B]/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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