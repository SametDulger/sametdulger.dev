'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiFlag, FiZap, FiBook } from 'react-icons/fi'

// Calculate age dynamically
const calculateAge = (birthDate: Date): number => {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

const birthDate = new Date(1994, 9, 24) // October 24, 1994 (month is 0-indexed)
const currentAge = calculateAge(birthDate)

const aboutItems = [
  { label: 'Location', text: 'Istanbul, TR', icon: FiMapPin },
  { label: 'Age', text: currentAge.toString(), icon: FiCalendar },
  { label: 'Nationality', text: 'Turkey / Turkish', icon: FiFlag },
  { label: 'Education', text: 'IGU, IU, AU', icon: FiBook },
  { label: 'Interests', text: 'Technology Innovation', icon: FiZap },
]

const skillGroups = [
  {
    name: 'Backend Development',
    skills: [
      { name: 'C#', level: 7 },
      { name: '.NET Core', level: 7 },
      { name: 'JavaScript', level: 7 },
      { name: 'Python', level: 6 },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 7 },
      { name: 'Next.js', level: 7 },
      { name: 'TypeScript', level: 7 },
      { name: 'Tailwind CSS', level: 7 },
    ],
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'SQL Server', level: 7 },
      { name: 'Entity Framework', level: 7 },
      { name: 'Git', level: 7 },
      { name: 'Docker', level: 5 },
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">


        {/* Personal Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16 justify-items-center items-stretch">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index === aboutItems.length - 1 ? 'md:col-span-1 col-span-2 justify-self-center' : ''}`}
            >
              <div className="card h-full min-h-[160px] w-48 text-center">
                <item.icon className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{item.label}</h3>
                <p className="text-white">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-white text-center">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <div className="card text-center">
                  <h4 className="text-xl font-semibold mb-6 text-white">{group.name}</h4>
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-blue-400">{skill.level}/10</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 