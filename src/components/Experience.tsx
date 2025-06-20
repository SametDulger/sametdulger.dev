'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar, FiBook, FiAward, FiLinkedin } from 'react-icons/fi'

const experiences = [
  {
    title: 'System Monitoring Specialist',
    company: 'PRP Business Solutions',
    location: 'Istanbul, Turkey',
    period: 'Sep 2024 - Oct 2024',
    type: 'work',
    description: [
      'Monitored system performance and resolved technical issues',
      'Ensured system reliability and uptime',
      'Collaborated with development teams for system optimization',
    ],
  },
  {
    title: 'Jr. Software Developer',
    company: 'Tailormade Information Systems',
    location: 'Istanbul, Turkey',
    period: 'July 2023 - May 2024',
    type: 'work',
    description: [
      'Developed software solutions using .NET framework',
      'Participated in code reviews and team collaboration',
      'Gained 1 year of professional programming experience',
      'Worked on new project launches and existing software management',
    ],
  },
]

const education = [
  {
    title: 'Computer Programming',
    company: 'IU',
    location: 'Istanbul, Turkey',
    period: '2023 -',
    type: 'education',
    description: [
      'Currently studying Computer Programming',
      'Learning advanced programming concepts and software development',
    ],
  },
  {
    title: 'Web Design and Coding',
    company: 'AU',
    location: 'Eskisehir, Turkey',
    period: '2023 -',
    type: 'education',
    description: [
      'Currently studying Web Design and Coding',
      'Learning modern web development technologies',
    ],
  },
  {
    title: 'Radiotherapy',
    company: 'IGU',
    location: 'Istanbul, Turkey',
    period: '2014-2016',
    type: 'education',
    description: [
      'Completed Radiotherapy program',
      'Gained healthcare and technical knowledge',
    ],
  },
]

const certificates = [
  {
    title: 'IBM Back-end JavaScript Developer Specialization',
    issuer: 'IBM',
    date: '2025',
    description: [
      'Node.js and Express.js server development',
      'MongoDB database integration and operations',
      'RESTful API design and implementation',
      'Authentication and security best practices',
    ],
  },
  {
    title: 'IBM Full-Stack JavaScript Developer Specialization',
    issuer: 'IBM',
    date: '2025',
    description: [
      'React.js frontend development and components',
      'Node.js and Express.js backend architecture',
      'JavaScript ES6+ modern features and syntax',
      'Full-stack application deployment strategies',
    ],
  },
  {
    title: 'Microsoft Backend Developer',
    issuer: 'Microsoft',
    date: '2025',
    description: [
      'ASP.NET Core web API development',
      'Entity Framework Core and SQL Server',
      'Microsoft Azure cloud services integration',
      'Performance optimization and scalability',
    ],
  },
  {
    title: 'Microsoft Full-Stack Developer Specialization',
    issuer: 'Microsoft',
    date: '2025',
    description: [
      'Blazor frontend framework development',
      'ASP.NET Core MVC and web applications',
      'Azure DevOps and CI/CD pipelines',
      'Microsoft Copilot AI-powered development',
    ],
  },
  {
    title: 'Software (.NET) Achievement Certificate',
    issuer: 'BilgeAdam Akademi',
    date: '2023',
    description: [
      'C# programming fundamentals and syntax',
      '.NET Framework architecture and libraries',
      'Object-oriented programming principles',
      'ASP.NET Core MVC application development',
    ],
  },
  {
    title: 'Software (.NET) Participation Certificate',
    issuer: 'BilgeAdam Akademi',
    date: '2023',
    description: [
      'C# language basics and data types',
      'Control structures and loop implementations',
      'Exception handling and debugging',
      'MVC design patterns and architecture',
    ],
  },

]

export default function Experience() {
  return (
    <section id="experience" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">


        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-white text-center">Work Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === experiences.length - 1 && experiences.length % 2 !== 0 ? 'md:col-span-2' : ''}
              >
                <div className="card h-full min-h-[280px] w-full text-center">
                  <div className="flex flex-col mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-white">{exp.title}</h4>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FiBriefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-center">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-white text-center">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=""
              >
                <div className="card h-full min-h-[280px] w-full text-center">
                  <div className="flex flex-col mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-white">{edu.title}</h4>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FiBook className="w-4 h-4" />
                          <span>{edu.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-center">
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-white text-center">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch justify-items-center">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === certificates.length - 1 && certificates.length % 3 !== 0 ? 'md:col-start-2' : ''}
              >
                <div className="card h-full min-h-[280px] w-[420px] text-center">
                  <div className="flex flex-col mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{cert.title}</h4>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FiAward className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm text-center">
                    {cert.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Want to see more of my certifications?</p>
            <a
              href="https://www.linkedin.com/in/sametdulger/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <FiLinkedin className="w-5 h-5" />
              <span>View All Certificates on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 