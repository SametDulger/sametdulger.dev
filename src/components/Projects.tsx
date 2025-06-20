'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiGlobe, FiShoppingCart, FiCalendar, FiLock, FiTruck, FiUsers, FiSettings } from 'react-icons/fi'
// Removed unused React hooks import

const projects = [
  {
    title: 'E-Plant Shopping',
    description: 'E-commerce platform for plant shopping with modern React frontend and comprehensive shopping features.',
    technologies: ['JavaScript', 'React', 'E-commerce'],
    github: 'https://github.com/SametDulger/e-plantShopping',
    demo: '#',
    icon: FiShoppingCart,
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'User Management API',
    description: 'Comprehensive user management API with authentication, authorization, and user profile management features.',
    technologies: ['C#', '.NET', 'Web API', 'Authentication'],
    github: 'https://github.com/SametDulger/UserManagementAPI',
    demo: '#',
    icon: FiUsers,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'LogiTrack Order Management',
    description: 'RESTful API for order management system with comprehensive tracking and logistics features built with .NET.',
    technologies: ['C#', '.NET', 'Web API', 'Entity Framework'],
    github: 'https://github.com/SametDulger/LogiTrackOrderManagementAPI',
    demo: '#',
    icon: FiTruck,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'SafeVault',
    description: 'Secure data management application built with C# and .NET framework focusing on data protection and user security.',
    technologies: ['C#', '.NET', 'Security', 'Data Protection'],
    github: 'https://github.com/SametDulger/SafeVault',
    demo: '#',
    icon: FiLock,
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'EventEase',
    description: 'Event management platform for organizing and managing events with user-friendly interface and comprehensive features.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    github: 'https://github.com/SametDulger/EventEase',
    demo: '#',
    icon: FiCalendar,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'InventoryHub',
    description: 'A comprehensive inventory management system built with modern web technologies for efficient stock tracking and management.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    github: 'https://github.com/SametDulger/InventoryHub',
    demo: '#',
    icon: FiDatabase,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Conference Event Planner',
    description: 'Conference and event planning application with scheduling, attendee management, and event organization features.',
    technologies: ['JavaScript', 'Event Management'],
    github: 'https://github.com/SametDulger/conference_event_planner',
    demo: '#',
    icon: FiCalendar,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'NLayerApp',
    description: 'N-Layer architecture application demonstrating clean architecture principles and separation of concerns in .NET.',
    technologies: ['C#', '.NET', 'Architecture'],
    github: 'https://github.com/SametDulger/NLayerApp',
    demo: '#',
    icon: FiCode,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'TeknoromaApp',
    description: 'Technology-focused application built with C# and .NET framework showcasing modern development practices.',
    technologies: ['C#', '.NET', 'Technology'],
    github: 'https://github.com/SametDulger/TeknoromaApp',
    demo: '#',
    icon: FiSettings,
    color: 'from-cyan-500 to-blue-500',
  },


  {
    title: 'AdvertisementApp',
    description: 'Advertisement management application with comprehensive ad creation, management, and tracking features.',
    technologies: ['C#', '.NET', 'Advertisement'],
    github: 'https://github.com/SametDulger/AdvertisementApp',
    demo: '#',
    icon: FiGlobe,
    color: 'from-yellow-500 to-orange-500',
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
                    {project.technologies.slice(0, 1).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 text-xs md:px-2 md:py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 1 && (
                      <span className="px-1.5 py-0.5 text-xs md:px-2 md:py-1 bg-gray-500/10 text-gray-400 rounded-full border border-gray-500/20">
                        +{project.technologies.length - 1}
                      </span>
                    )}
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