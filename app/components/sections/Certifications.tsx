'use client'

import { motion } from 'framer-motion'
import { Award, Sparkles, Calendar, Code2, Brain, Database, Briefcase, Cloud, GitBranch, FileText } from 'lucide-react'

const certifications = [
  { id: 1, title: 'Maximize Productivity with AI Tools', issuer: 'Google', date: '2025', skills: ['Generative AI', 'Gemini AI', 'AI Automation'], icon: Brain, logo: '/images/certificates/google.png' },
  { id: 2, title: 'Intro to Deep Learning', issuer: 'Kaggle', date: 'Aug 2025', skills: ['Deep Learning', 'Neural Networks', 'TensorFlow'], icon: Brain, logo: '/images/certificates/kaggle.png' },
  { id: 3, title: 'APIs in Python', issuer: 'DataCamp', date: 'Aug 2025', skills: ['APIs', 'Python', 'Data Fetching'], icon: Code2, logo: '/images/certificates/datacamp.png' },
  { id: 4, title: 'Machine Learning', issuer: 'Innovista', date: 'Aug 2025', skills: ['AI Tools', 'Pandas', 'Machine Learning'], icon: Brain, logo: '/images/certificates/innovista.png' },
  { id: 5, title: 'Introduction to AI', issuer: 'Google', date: '2025', skills: ['AI Tools', 'AI Automation', 'Machine Learning'], icon: Brain, logo: '/images/certificates/google.png' },
  { id: 6, title: 'Intro to Machine Learning', issuer: 'Kaggle', date: 'Jul 2025', skills: ['ML', 'Python', 'Scikit-learn'], icon: Brain, logo: '/images/certificates/kaggle.png' },
  { id: 7, title: 'Prompt Engineering', issuer: 'DataCamp', date: 'Aug 2025', skills: ['Prompt Engineering', 'AI Tools', 'Generative AI'], icon: FileText, logo: '/images/certificates/datacamp.png' },
  { id: 8, title: 'Basics of Machine Learning Algorithm', issuer: 'UniAthena', date: '2025', skills: ['ML Algorithms', 'Supervised Learning', 'Unsupervised Learning'], icon: Brain, logo: '/images/certificates/uniathena.png' },
  { id: 9, title: 'Foundation: Data, Data Everywhere', issuer: 'Google', date: '2025', skills: ['Data Science', 'Data Cleaning', 'Data Analytics'], icon: Database, logo: '/images/certificates/google.png' },
  { id: 10, title: 'Pandas', issuer: 'Kaggle', date: 'Jul 2025', skills: ['Pandas', 'Data Manipulation', 'Python'], icon: Database, logo: '/images/certificates/kaggle.png' },
  { id: 11, title: 'Supervised Learning with Scikit-learn', issuer: 'DataCamp', date: 'Aug 2025', skills: ['Supervised Learning', 'Scikit-learn', 'Classification'], icon: Brain, logo: '/images/certificates/datacamp.png' },
  { id: 12, title: 'Freelancing Course', issuer: 'Digital Dream Web and Graphic', date: '2025', skills: ['Fiverr', 'Freelancing', 'Client Handling'], icon: Briefcase },
  { id: 13, title: 'Foundations of Data Science', issuer: 'Google', date: '2025', skills: ['Data Science', 'Pandas', 'Data Analysis'], icon: Database, logo: '/images/certificates/google.png' },
  { id: 14, title: 'Data Cleaning', issuer: 'Kaggle', date: 'Jul 2025', skills: ['Data Cleaning', 'Pandas', 'Data Preprocessing'], icon: Database, logo: '/images/certificates/kaggle.png' },
  { id: 15, title: 'Introduction to Cloud Computing & AWS', issuer: 'AWS Student Builder Group - University of Layyah', date: 'May 2026', skills: ['Cloud Computing', 'AWS', 'EC2', 'S3'], icon: Cloud, logo: '/images/certificates/aws.png' },
  { id: 16, title: 'Introduction to Git and GitHub', issuer: 'Google', date: '2025', skills: ['Git', 'GitHub', 'Version Control'], icon: GitBranch, logo: '/images/certificates/google.png' },
  { id: 17, title: 'Machine Learning Competition - Softec', issuer: 'FAST NUCES, Lahore Campus', date: '2025', skills: ['ML Algorithms', 'EDA', 'Data Science'], icon: Award, logo: '/images/certificates/fast.png' },
  { id: 18, title: 'The Nuts and Bolts of Machine Learning', issuer: 'Google', date: '2025', skills: ['ML Algorithms', 'Supervised Learning', 'Unsupervised Learning'], icon: Brain, logo: '/images/certificates/google.png' },
  { id: 19, title: 'Python (Basic)', issuer: 'HackerRank', date: 'Jun 2026', skills: ['Python', 'Problem Solving', 'Programming Basics'], icon: Code2, logo: '/images/certificates/hackerrank.png' },
  { id: 20, title: 'Prompting Like a Pro', issuer: 'Google', date: '2025', skills: ['Content Creation', 'AI Tools', 'Prompt Engineering'], icon: FileText, logo: '/images/certificates/google.png' },
  { id: 21, title: 'Python', issuer: 'Kaggle', date: 'Jul 2026', skills: ['Python', 'Programming Basics', 'Data Types'], icon: Code2, logo: '/images/certificates/kaggle.png' },
  { id: 22, title: 'Internship Completion Certificate — Web Development', issuer: 'Afynix Digital', date: 'Jun 2026', skills: ['React.js', 'Web Development', 'Internship'], icon: Briefcase, logo: '/images/companies/afynix.png' },
  { id: 23, title: 'Project Management', issuer: 'Google', date: '2025', skills: ['Agile', 'Scrum', 'Project Planning'], icon: Briefcase, logo: '/images/certificates/google.png' },
  { id: 24, title: 'Internship Completion Certificate — Machine Learning', issuer: 'SAM AI Technologies', date: 'May 2026', skills: ['Machine Learning', 'Python', 'Internship'], icon: Brain, logo: '/images/companies/sam-ai.png' },
  { id: 25, title: 'Basics in Machine Learning', issuer: 'UniAthena', date: 'Jul 2025', skills: ['Pandas', 'Python', 'Machine Learning'], icon: Brain, logo: '/images/certificates/uniathena.png' },
  { id: 26, title: 'Introduction to Prompt Engineering', issuer: 'Simplilearn', date: 'Jul 2025', skills: ['Prompt Engineering', 'AI Tools', 'Generative AI'], icon: FileText, logo: '/images/certificates/simplilearn.png' },
  // NOTE: 4 items removed here that duplicated Honors.tsx (2nd Position ICS, CM Merit
  // Award, E-Scotte Scholarship, Finance Management Team) — those now live only in
  // Honors.tsx since that section is specifically for awards/honors.
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9A6B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
              {certifications.length} Professional Certifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { label: 'Total', value: certifications.length, icon: Award },
              { label: 'Google', value: certifications.filter(c => c.issuer === 'Google').length, icon: Brain },
              { label: 'Kaggle', value: certifications.filter(c => c.issuer === 'Kaggle').length, icon: Award },
              { label: 'DataCamp', value: certifications.filter(c => c.issuer === 'DataCamp').length, icon: Database },
              { label: 'Others', value: certifications.filter(c => !['Google', 'Kaggle', 'DataCamp'].includes(c.issuer)).length, icon: Briefcase },
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#8B9A6B]/10 text-center transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:scale-105"
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl font-bold text-[#8B9A6B]">{stat.value}</div>
                <div className="text-xs text-[#4A4A4A]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="group bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-[#8B9A6B]/10 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#8B9A6B]/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-[#8B9A6B]/10 flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-[#8B9A6B]/30 group-hover:scale-105">
                      {cert.logo ? (
                        <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110" />
                      ) : (
                        <Icon className="w-6 h-6 text-[#8B9A6B] transition-all duration-300 group-hover:scale-110" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#8B9A6B] transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[#4A4A4A] font-medium">{cert.issuer}</p>
                      {cert.date && (
                        <div className="flex items-center gap-1 mt-1 text-xs text-[#4A4A4A]/70">
                          <Calendar className="w-3 h-3 text-[#8B9A6B]" />
                          {cert.date}
                        </div>
                      )}
                    </div>
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#8B9A6B]/10 group-hover:border-[#8B9A6B]/20 transition-colors duration-300">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span 
                          key={skill} 
                          className="text-[10px] px-2 py-1 bg-[#8B9A6B]/10 text-[#8B9A6B] rounded-full border border-[#8B9A6B]/10 transition-all duration-300 hover:bg-[#8B9A6B] hover:text-white hover:border-[#8B9A6B] cursor-default"
                        >
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
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}