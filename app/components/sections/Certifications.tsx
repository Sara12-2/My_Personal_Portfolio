'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, ExternalLink, Calendar, Code2, Brain, Database, Briefcase } from 'lucide-react'

const certifications = [
  // ============ AI & MACHINE LEARNING ============
  {
    id: 1,
    title: 'Maximize Productivity with AI Tools',
    issuer: 'Google',
    issuerLink: 'https://www.linkedin.com/company/1441/',
    date: '2025',
    skills: ['Generative AI', 'Gemini AI', 'AI Automation'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/certificates/google.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 2,
    title: 'Introduction to AI',
    issuer: 'Google',
    issuerLink: 'https://www.linkedin.com/company/1441/',
    date: '2025',
    skills: ['AI Fundamentals', 'Machine Learning', 'Deep Learning'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/certificates/google.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 3,
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    issuerLink: 'https://www.linkedin.com/company/deeplearning-ai/',
    date: '2025',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
    icon: Brain,
    color: '#8B5CF6',
    logo: '/images/certificates/deeplearning.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 4,
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    issuerLink: 'https://www.linkedin.com/company/deeplearning-ai/',
    date: '2025',
    skills: ['CNNs', 'RNNs', 'Transformers', 'GANs'],
    icon: Brain,
    color: '#8B5CF6',
    logo: '/images/certificates/deeplearning.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 5,
    title: 'Natural Language Processing',
    issuer: 'DeepLearning.AI',
    issuerLink: 'https://www.linkedin.com/company/deeplearning-ai/',
    date: '2025',
    skills: ['NLP', 'Transformers', 'BERT', 'GPT'],
    icon: Brain,
    color: '#8B5CF6',
    logo: '/images/certificates/deeplearning.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 6,
    title: 'Generative AI with LLMs',
    issuer: 'DeepLearning.AI',
    issuerLink: 'https://www.linkedin.com/company/deeplearning-ai/',
    date: '2025',
    skills: ['LLMs', 'RAG', 'Prompt Engineering'],
    icon: Brain,
    color: '#8B5CF6',
    logo: '/images/certificates/deeplearning.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 7,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    issuerLink: 'https://www.linkedin.com/company/1441/',
    date: '2025',
    skills: ['TensorFlow', 'Keras', 'Deep Learning'],
    icon: Brain,
    color: '#8B9A6B',
    logo: '/images/certificates/google.png',
    credentialLink: 'https://coursera.org/share/...',
  },

  // ============ WEB DEVELOPMENT ============
  {
    id: 8,
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    issuerLink: 'https://www.linkedin.com/company/udemy/',
    date: '2025',
    skills: ['React.js', 'Hooks', 'Redux', 'Next.js'],
    icon: Code2,
    color: '#1E90FF',
    logo: '/images/certificates/udemy.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 9,
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    issuerLink: 'https://www.linkedin.com/company/freecodecamp/',
    date: '2025',
    skills: ['JavaScript', 'DSA', 'ES6'],
    icon: Code2,
    color: '#2ECC71',
    logo: '/images/certificates/freecodecamp.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 10,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    issuerLink: 'https://www.linkedin.com/company/freecodecamp/',
    date: '2025',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    icon: Code2,
    color: '#2ECC71',
    logo: '/images/certificates/freecodecamp.png',
    credentialLink: 'https://coursera.org/share/...',
  },

  // ============ DATA SCIENCE ============
  {
    id: 11,
    title: 'Data Science Specialization',
    issuer: 'IBM',
    issuerLink: 'https://www.linkedin.com/company/ibm/',
    date: '2025',
    skills: ['Data Analysis', 'Pandas', 'NumPy'],
    icon: Database,
    color: '#F97316',
    logo: '/images/certificates/ibm.png',
    credentialLink: 'https://coursera.org/share/...',
  },
  {
    id: 12,
    title: 'SQL for Data Science',
    issuer: 'Coursera',
    issuerLink: 'https://www.linkedin.com/company/coursera/',
    date: '2025',
    skills: ['MySQL', 'PostgreSQL', 'Database Design'],
    icon: Database,
    color: '#8B5CF6',
    logo: '/images/certificates/coursera.png',
    credentialLink: 'https://coursera.org/share/...',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B9A6B]/10 border border-[#8B9A6B]/20 rounded-full text-sm font-medium text-[#8B9A6B] mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Certifications
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
              Licenses & <span className="text-[#8B9A6B]">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-[#8B9A6B] mx-auto mt-4 rounded-full" />
            <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
              {certifications.length}+ Professional Certifications in AI, Web Development & Data Science
            </p>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Total Certifications', value: certifications.length, icon: Award },
              { label: 'AI/ML', value: certifications.filter(c => c.icon === Brain).length, icon: Brain },
              { label: 'Web Development', value: certifications.filter(c => c.icon === Code2).length, icon: Code2 },
              { label: 'Data Science', value: certifications.filter(c => c.icon === Database).length, icon: Database },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center">
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-xs text-[#4A4A4A]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-[#8B9A6B]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-[#8B9A6B]/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain" />
                      ) : (
                        <Icon className="w-6 h-6 text-[#8B9A6B]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[#4A4A4A]">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-[#4A4A4A]/70">
                        <Calendar className="w-3 h-3 text-[#8B9A6B]" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#8B9A6B]/10">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-2 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full border border-[#8B9A6B]/10">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Link */}
                  {cert.credentialLink && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-[#8B9A6B] hover:text-[#6B7A5B] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Show Credential
                    </a>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}