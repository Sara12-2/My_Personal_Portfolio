'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
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
    <section id="contact" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's Build Something <span className="text-[#00A86B]">Amazing</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#141414] p-6 rounded-xl border border-[#00A86B]/10">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail className="w-5 h-5 text-[#00A86B]" />
                    <span>sara@example.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone className="w-5 h-5 text-[#00A86B]" />
                    <span>+92 300 1234567</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#00A86B]" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#141414] p-6 rounded-xl border border-[#00A86B]/10">
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <p className="text-gray-300">Available for freelance and full-time opportunities.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Open to work</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500"
                />
              </div>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white"
              >
                <option value="">Select Project Type</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="ai">AI/ML Solutions</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="consulting">Consulting</option>
              </select>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white"
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
                  className="px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white"
                >
                  <option value="">Timeline</option>
                  <option value="1-2">ASAP (1-2 weeks)</option>
                  <option value="1month">1 Month</option>
                  <option value="2-3">2-3 Months</option>
                  <option value="3-6">3-6 Months</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Project Description *"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#141414] border border-[#00A86B]/10 rounded-lg focus:outline-none focus:border-[#00A86B] text-white placeholder-gray-500 resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00A86B] hover:bg-[#007A4D] text-white px-8 py-3 rounded-lg transition-all duration-300 text-lg font-medium shadow-lg shadow-[#00A86B]/20 hover:shadow-[#00A86B]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}