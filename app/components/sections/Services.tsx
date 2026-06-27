'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Brain, 
  Server, 
  Layers, 
  Lightbulb, 
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Building complete web applications from frontend to backend using React, Next.js, Node.js, and modern technologies.',
    icon: Code2,
    features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL'],
    color: '#8B9A6B',
  },
  {
    id: 2,
    title: 'AI/ML Solutions',
    description: 'Implementing cutting-edge artificial intelligence and machine learning solutions to solve complex business problems.',
    icon: Brain,
    features: ['OpenAI/LangChain', 'TensorFlow/PyTorch', 'NLP & Computer Vision'],
    color: '#1E90FF',
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Designing and developing robust, scalable backend systems with REST APIs, microservices, and cloud architecture.',
    icon: Server,
    features: ['REST APIs', 'Microservices', 'Cloud (AWS/GCP)'],
    color: '#2ECC71',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive, and responsive user interfaces that deliver exceptional user experiences.',
    icon: Layers,
    features: ['Figma/Adobe XD', 'Tailwind CSS', 'Responsive Design'],
    color: '#F1C40F',
  },
  {
    id: 5,
    title: 'AI Consulting',
    description: 'Providing expert guidance on AI strategy, technology selection, and implementation roadmaps for your business.',
    icon: Lightbulb,
    features: ['AI Strategy', 'Technology Selection', 'Implementation Roadmap'],
    color: '#E67E22',
  },
  {
    id: 6,
    title: 'Technical Mentorship',
    description: 'Helping teams level up their skills with personalized mentoring, code reviews, and best practices.',
    icon: Users,
    features: ['Code Reviews', 'Team Training', 'Best Practices'],
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
            <span className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/30 rounded-full text-[#8B9A6B] text-sm font-medium shadow-lg shadow-[#8B9A6B]/10">
              <Sparkles className="w-4 h-4" />
              Open to Work
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B9A6B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8B9A6B]" />
              </span>
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
              Available for freelance projects, full-time positions, and AI consulting. Here's how I can help you.
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
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-2xl hover:shadow-[#8B9A6B]/10 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: service.color }}
                  />

                  {/* Icon */}
                  <div 
                    className="inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${service.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2 group-hover:text-[#8B9A6B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs rounded-full border transition-all duration-300"
                        style={{
                          background: `${service.color}10`,
                          color: service.color,
                          borderColor: `${service.color}20`,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Number */}
                  <div className="absolute bottom-2 right-4 text-5xl font-bold opacity-5 select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-[#4A4A4A] mb-4 text-lg">
              Interested in working together? Let's bring your ideas to life!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B9A6B] to-[#6B7A5B] hover:from-[#6B7A5B] hover:to-[#5A6A4B] text-white rounded-xl transition-all duration-300 text-lg font-semibold shadow-xl shadow-[#8B9A6B]/30 hover:shadow-[#8B9A6B]/50"
            >
              <Users className="w-5 h-5" />
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}