'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, ExternalLink, Calendar, Code2, Brain, Database, Briefcase, Cloud, GitBranch, FileText } from 'lucide-react'

const certifications = [
  // ============ GOOGLE CERTIFICATES (8) ============
  {
    id: 1,
    title: 'Maximize Productivity with AI Tools',
    issuer: 'Google',
    date: '2025',
    skills: ['Generative AI', 'Gemini AI', 'AI Automation'],
    icon: Brain,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 2,
    title: 'Introduction to AI',
    issuer: 'Google',
    date: '2025',
    skills: ['AI Tools', 'AI Automation', 'Machine Learning'],
    icon: Brain,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 3,
    title: 'Foundation: Data, Data Everywhere',
    issuer: 'Google',
    date: '2025',
    skills: ['Data Science', 'Data Cleaning', 'Data Analytics'],
    icon: Database,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 4,
    title: 'Foundations of Data Science',
    issuer: 'Google',
    date: '2025',
    skills: ['Data Science', 'Pandas', 'Data Analysis'],
    icon: Database,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 5,
    title: 'Introduction to Git and GitHub',
    issuer: 'Google',
    date: '2025',
    skills: ['Git', 'GitHub', 'Version Control'],
    icon: GitBranch,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 6,
    title: 'The Nuts and Bolts of Machine Learning',
    issuer: 'Google',
    date: '2025',
    skills: ['ML Algorithms', 'Supervised Learning', 'Unsupervised Learning'],
    icon: Brain,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 7,
    title: 'Prompting Like a Pro',
    issuer: 'Google',
    date: '2025',
    skills: ['Content Creation', 'AI Tools', 'Prompt Engineering'],
    icon: FileText,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },
  {
    id: 8,
    title: 'Project Management',
    issuer: 'Google',
    date: '2025',
    skills: ['Agile', 'Scrum', 'Project Planning'],
    icon: Briefcase,
    logo: '/images/certificates/google.png',
    credentialLink: '#',
  },

  // ============ KAGGLE COURSES (4) ============
  {
    id: 9,
    title: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    date: 'Aug 2025',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow'],
    icon: Brain,
    logo: '/images/certificates/kaggle.png',
    credentialLink: '#',
  },
  {
    id: 10,
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: 'Jul 2025',
    skills: ['ML', 'Python', 'Scikit-learn'],
    icon: Brain,
    logo: '/images/certificates/kaggle.png',
    credentialLink: '#',
  },
  {
    id: 11,
    title: 'Pandas',
    issuer: 'Kaggle',
    date: 'Jul 2025',
    skills: ['Pandas', 'Data Manipulation', 'Python'],
    icon: Database,
    logo: '/images/certificates/kaggle.png',
    credentialLink: '#',
  },
  {
    id: 12,
    title: 'Data Cleaning',
    issuer: 'Kaggle',
    date: 'Jul 2025',
    skills: ['Data Cleaning', 'Pandas', 'Data Preprocessing'],
    icon: Database,
    logo: '/images/certificates/kaggle.png',
    credentialLink: '#',
  },

  // ============ DATACAMP CERTIFICATES (3) ============
  {
    id: 13,
    title: 'APIs in Python',
    issuer: 'DataCamp',
    date: 'Aug 2025',
    skills: ['APIs', 'Python', 'Data Fetching'],
    icon: Code2,
    logo: '/images/certificates/datacamp.png',
    credentialLink: '#',
  },
  {
    id: 14,
    title: 'Prompt Engineering',
    issuer: 'DataCamp',
    date: 'Aug 2025',
    skills: ['Prompt Engineering', 'AI Tools', 'Generative AI'],
    icon: FileText,
    logo: '/images/certificates/datacamp.png',
    credentialLink: '#',
  },
  {
    id: 15,
    title: 'Supervised Learning with Scikit-learn',
    issuer: 'DataCamp',
    date: 'Aug 2025',
    skills: ['Supervised Learning', 'Scikit-learn', 'Classification'],
    icon: Brain,
    logo: '/images/certificates/datacamp.png',
    credentialLink: '#',
  },

  // ============ OTHER CERTIFICATES (7) ============
  {
    id: 16,
    title: 'Machine Learning',
    issuer: 'Innovista',
    date: 'Aug 2025',
    skills: ['AI Tools', 'Pandas', 'Machine Learning'],
    icon: Brain,
    logo: '/images/certificates/innovista.png',
    credentialLink: '#',
  },
  {
    id: 17,
    title: 'Basics of Machine Learning Algorithm',
    issuer: 'UniAthena',
    date: '2025',
    skills: ['ML Algorithms', 'Supervised Learning', 'Unsupervised Learning'],
    icon: Brain,
    logo: '/images/certificates/uniathena.png',
    credentialLink: '#',
  },
  {
    id: 18,
    title: 'Basics in Machine Learning',
    issuer: 'UniAthena',
    date: 'Jul 2025',
    skills: ['Pandas', 'Python', 'Machine Learning'],
    icon: Brain,
    logo: '/images/certificates/uniathena.png',
    credentialLink: '#',
  },
  // Digital Dream Web certificate mein logo ko icon se replace karein
{
  id: 19,
  title: 'Freelancing Course',
  issuer: 'Digital Dream Web and Graphic',
  date: '2025',
  skills: ['Fiverr', 'Freelancing', 'Client Handling'],
  icon: Briefcase,  // ✅ Icon use karein
  // logo: '/images/certificates/digitaldream.png',  // ❌ Remove karein
  credentialLink: '#',
},
  {
    id: 20,
    title: 'Introduction to Cloud Computing & AWS',
    issuer: 'AWS Student Builder Group - University of Layyah',
    date: 'May 2026',
    skills: ['Cloud Computing', 'AWS', 'EC2', 'S3'],
    icon: Cloud,
    logo: '/images/certificates/aws.png',
    credentialLink: '#',
  },
  {
    id: 21,
    title: 'Introduction to Prompt Engineering',
    issuer: 'Simplilearn',
    date: 'Jul 2025',
    skills: ['Prompt Engineering', 'AI Tools', 'Generative AI'],
    icon: FileText,
    logo: '/images/certificates/simplilearn.png',
    credentialLink: '#',
  },
  {
    id: 22,
    title: 'Machine Learning Competition - Softec',
    issuer: 'FAST NUCES, Lahore Campus',
    date: '2025',
    skills: ['ML Algorithms', 'EDA', 'Data Science'],
    icon: Award,
    logo: '/images/certificates/fast.png',
    credentialLink: '#',
  },

  // ============ UNIVERSITY OF LAYYAH (1) ============
  {
    id: 23,
    title: 'Finance Management Team – HELLO WORLD 2025',
    issuer: 'University of Layyah',
    date: 'Dec 2025',
    skills: ['Finance Management', 'Budget Planning', 'Event Coordination', 'Team Collaboration'],
    icon: Briefcase,
    logo: '/images/companies/uol.png',
    credentialLink: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/overlay/Honor/1753234015/treasury/',
  },

  // ============ ACADEMIC ACHIEVEMENTS (3) ============
  {
    id: 24,
    title: '2nd Position in ICS Examination',
    issuer: 'Board of Intermediate & Secondary Education (BISE) DG Khan',
    date: '2023',
    skills: ['Academic Excellence', 'ICS', 'Position Holder', 'Computer Science'],
    icon: Award,
    logo: '/images/honors/bise-dg-khan.png',
    credentialLink: 'https://www.linkedin.com/in/sara-manzoor-3a8a56365/overlay/Honor/1988554966/treasury/',
  },
  {
    id: 25,
    title: 'Chief Minister Merit Award - Laptop Scheme',
    issuer: 'Government of Punjab',
    date: '2023',
    skills: ['Merit Award', 'Academic Excellence', 'Laptop Scheme', 'Government Recognition'],
    icon: Award,
    logo: '/images/honors/cm-punjab.png',
    credentialLink: '#',
  },
  {
    id: 26,
    title: 'E-Scotte Merit-Based Scholarship',
    issuer: 'Board of Intermediate & Secondary Education (BISE) Multan',
    date: '2023',
    skills: ['Scholarship', 'Academic Excellence', 'Merit-Based', 'Board Recognition'],
    icon: Award,
    logo: '/images/honors/bise-multan.png',
    credentialLink: '#',
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
              {certifications.length} Professional Certifications & Academic Achievements
            </p>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { label: 'Total', value: certifications.length, icon: Award },
              { label: 'Google', value: certifications.filter(c => c.issuer === 'Google').length, icon: Brain },
              { label: 'Kaggle', value: certifications.filter(c => c.issuer === 'Kaggle').length, icon: Award },
              { label: 'DataCamp', value: certifications.filter(c => c.issuer === 'DataCamp').length, icon: Database },
              { label: 'Others', value: certifications.filter(c => !['Google', 'Kaggle', 'DataCamp'].includes(c.issuer)).length, icon: Briefcase },
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
                  transition={{ duration: 0.4, delay: index * 0.03 }}
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
                      {cert.date && (
                        <div className="flex items-center gap-1 mt-1 text-xs text-[#4A4A4A]/70">
                          <Calendar className="w-3 h-3 text-[#8B9A6B]" />
                          {cert.date}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Skills */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#8B9A6B]/10">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span key={skill} className="text-[10px] px-2 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full border border-[#8B9A6B]/10">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="text-[10px] px-2 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full border border-[#8B9A6B]/10">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Credential Link */}
                  {cert.credentialLink && cert.credentialLink !== '#' && (
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