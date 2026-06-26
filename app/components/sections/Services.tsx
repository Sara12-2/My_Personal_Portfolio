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
  Sparkles
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Building complete web applications from frontend to backend using React, Next.js, Node.js, and modern technologies.',
    icon: Code2,
    features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL'],
  },
  {
    id: 2,
    title: 'AI/ML Solutions',
    description: 'Implementing cutting-edge artificial intelligence and machine learning solutions to solve complex business problems.',
    icon: Brain,
    features: ['OpenAI/LangChain', 'TensorFlow/PyTorch', 'NLP & Computer Vision'],
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Designing and developing robust, scalable backend systems with REST APIs, microservices, and cloud architecture.',
    icon: Server,
    features: ['REST APIs', 'Microservices', 'Cloud (AWS/GCP)'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive, and responsive user interfaces that deliver exceptional user experiences.',
    icon: Layers,
    features: ['Figma/Adobe XD', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id: 5,
    title: 'AI Consulting',
    description: 'Providing expert guidance on AI strategy, technology selection, and implementation roadmaps for your business.',
    icon: Lightbulb,
    features: ['AI Strategy', 'Technology Selection', 'Implementation Roadmap'],
  },
  {
    id: 6,
    title: 'Technical Mentorship',
    description: 'Helping teams level up their skills with personalized mentoring, code reviews, and best practices.',
    icon: Users,
    features: ['Code Reviews', 'Team Training', 'Best Practices'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Open to Work Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A86B]/10 border border-[#00A86B]/30 rounded-full text-[#00A86B] text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Open to Work
              <span className="w-2 h-2 bg-[#00A86B] rounded-full animate-pulse" />
            </span>
          </div>

          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#00A86B]">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm available for freelance projects, full-time positions, and AI consulting. Here's how I can help you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-[#0A0A0A]/50 p-6 rounded-xl border border-[#00A86B]/10 hover:border-[#00A86B]/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="inline-flex p-3 bg-[#00A86B]/10 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-[#00A86B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[#00A86B]/10 text-[#00A86B] text-xs rounded-full border border-[#00A86B]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Interested in working together? Let's bring your ideas to life!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#00A86B] hover:bg-[#007A4D] text-white rounded-lg transition-all duration-300 text-lg font-medium shadow-lg shadow-[#00A86B]/20 hover:shadow-[#00A86B]/40"
            >
              <Users className="w-5 h-5" />
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}