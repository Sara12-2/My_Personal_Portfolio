'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Brain, 
  Server, 
  Layers, 
  Lightbulb, 
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Complete web applications with modern frontend and scalable backend.',
    icon: Code2,
    color: '#8B9A6B',
  },
  {
    id: 2,
    title: 'AI & ML Solutions',
    description: 'Intelligent systems using machine learning, deep learning, and NLP.',
    icon: Brain,
    color: '#1E90FF',
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Scalable APIs, microservices, and cloud architecture.',
    icon: Server,
    color: '#2ECC71',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive, and responsive user interfaces.',
    icon: Layers,
    color: '#F1C40F',
  },
  {
    id: 5,
    title: 'AI Consulting',
    description: 'Strategic guidance on AI adoption and implementation.',
    icon: Lightbulb,
    color: '#E67E22',
  },
  {
    id: 6,
    title: 'Technical Mentorship',
    description: 'Team training, code reviews, and best practices guidance.',
    icon: Users,
    color: '#8B9A6B',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/30 rounded-full text-[#8B9A6B] text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Open to Work
              <span className="w-2 h-2 bg-[#8B9A6B] rounded-full animate-pulse" />
            </span>
          </motion.div>

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
              What I Offer
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              My <span className="text-[#8B9A6B]">Services</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              Available for freelance, full-time, and consulting opportunities.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group bg-white p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{ background: `${service.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2 group-hover:text-[#8B9A6B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-[#4A4A4A] mb-4">
              Have a project in mind? Let's work together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8B9A6B] hover:bg-[#6B7A5B] text-white rounded-xl transition-all duration-300 text-base font-semibold shadow-lg shadow-[#8B9A6B]/20"
            >
              <Users className="w-4 h-4" />
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}