'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiGlobe, FiShoppingCart, FiCalendar, FiLock, FiTruck, FiUsers, FiSettings, FiCoffee, FiFilm, FiHome, FiMapPin, FiShoppingBag, FiMonitor, FiBookOpen, FiBriefcase } from 'react-icons/fi'
// Removed unused React hooks import

const projects = [
  {
    title: 'SD_Turizm',
    description: 'Tourism management system with hotel, tour, and financial features.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Turizm',
    demo: '#',
    icon: FiMapPin,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'SD_Burger',
    description: 'Multi-branch burger restaurant management with menu and order system.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Burger',
    demo: '#',
    icon: FiShoppingBag,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'SD_Hotel',
    description: 'Hotel management system with room booking and guest services.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Hotel',
    demo: '#',
    icon: FiHome,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'SD_Ticaret',
    description: 'E-commerce platform with product management and sales tracking.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Ticaret',
    demo: '#',
    icon: FiShoppingCart,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'SD_Sinema',
    description: 'Cinema management system with movie scheduling and ticket sales.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Sinema',
    demo: '#',
    icon: FiFilm,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'SD_Tur',
    description: 'Travel agency system with booking and itinerary management.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Tur',
    demo: '#',
    icon: FiMapPin,
    color: 'from-teal-500 to-blue-500',
  },
  {
    title: 'SD_IKYS',
    description: 'HR management system with employee and payroll features.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_IKYS',
    demo: '#',
    icon: FiUsers,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'SD_Kolej',
    description: 'School management system with student and teacher features.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Kolej',
    demo: '#',
    icon: FiBookOpen,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'SD_Restaurant',
    description: 'Restaurant management with order processing and inventory.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Restaurant',
    demo: '#',
    icon: FiHome,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'SD_Fuar',
    description: 'Exhibition management platform with event planning features.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Fuar',
    demo: '#',
    icon: FiBriefcase,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'SD_Ajans',
    description: 'Advertising agency system with client and portfolio management.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Ajans',
    demo: '#',
    icon: FiGlobe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SD_Film',
    description: 'Film rental system with .NET 9 backend and React 19 frontend.',
    technologies: ['C#', '.NET 9', 'React 19', 'TypeScript'],
    github: 'https://github.com/SametDulger/SD_Film',
    demo: '#',
    icon: FiFilm,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'SD_Cafe',
    description: 'Cafe management system with order and menu management.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/SD_Cafe',
    demo: '#',
    icon: FiCoffee,
    color: 'from-amber-400 to-orange-600',
  },
  {
    title: 'Sepetza',
    description: 'E-commerce platform with .NET 9 backend and React 17 frontend.',
    technologies: ['C#', '.NET 9', 'React 17', 'TypeScript'],
    github: 'https://github.com/SametDulger/Sepetza',
    demo: '#',
    icon: FiShoppingCart,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'ECommerceApp',
    description: 'E-commerce application with product and user management.',
    technologies: ['C#', '.NET 9', 'ASP.NET Core', 'EF Core'],
    github: 'https://github.com/SametDulger/ECommerceApp',
    demo: '#',
    icon: FiShoppingBag,
    color: 'from-green-400 to-emerald-600',
  },
]

export default function Projects() {
  // Removed unused state variables for cleaner code

  return (
    <section id="projects" className="section bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center mb-12">My Projects</h2>
        </motion.div>

        {/* All Projects Grid - Responsive: 2 per row on mobile, 5 per row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-full flex flex-col text-center w-full">
                <div className="relative h-36 mb-4 rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-sm md:text-base font-bold mb-2 text-white leading-tight">{project.title}</h4>
                  <p className="text-gray-400 mb-3 text-xs leading-relaxed line-clamp-2 md:line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1 py-0.5 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-3 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    <FiGithub className="w-3 h-3" />
                    <span>Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-xs"
                    >
                      <FiExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/SametDulger"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <FiGithub className="w-5 h-5" />
            <span>View All Repositories on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 