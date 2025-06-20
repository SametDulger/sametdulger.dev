'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/SametDulger',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/SametDulger/',
  },
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/_SametDlgr',
  },
]

export default function Hero() {
  return (
    <header className="hero-section flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">I&apos;m Samet Dulger</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-8" role="doc-subtitle">
            Full Stack Developer
          </p>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            <p>
              <strong className="text-white">Full Stack Developer</strong> specializing in 
              <strong className="text-white"> .NET, React</strong> and modern web technologies. 
              Building scalable applications with <strong className="text-white"> ASP.NET Core</strong>.
            </p>
          </div>
          <div className="flex justify-center gap-6 mb-16 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 group"
                aria-label={`Visit my ${link.name} profile`}
              >
                <link.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="absolute left-1/2 transform -translate-x-1/2 bottom-4 md:bottom-8 animate-bounce hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down to see more content"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        <FiArrowDown className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
      </button>
    </header>
  )
} 