'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'


const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/SametDulger',
    username: 'github.com/SametDulger',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/SametDulger/',
    username: 'linkedin.com/in/SametDulger',
  },
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/_SametDlgr',
    username: 'x.com/_SametDlgr',
  },
]



export default function Contact() {

  return (
    <section id="contact" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">


        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 text-white text-center">Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card hover:scale-105 transition-transform duration-300 block text-center"
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    <link.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">{link.name}</h4>
                    <span className="text-gray-400">{link.username}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 