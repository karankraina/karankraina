'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  ExternalLink
} from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/karankraina',
    icon: Github,
    color: 'hover:text-gray-200',
    bgColor: 'hover:bg-gray-800'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/karankraina',
    icon: Linkedin,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/20'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/karankraina',
    icon: Twitter,
    color: 'hover:text-sky-400',
    bgColor: 'hover:bg-sky-500/20'
  },
  {
    name: 'Email',
    url: 'mailto:karanraina1996@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400',
    bgColor: 'hover:bg-red-500/20'
  },
  {
    name: 'Blog',
    url: 'https://karankraina.hashnode.dev/',
    icon: FileText,
    color: 'hover:text-green-400',
    bgColor: 'hover:bg-green-500/20'
  }
]

export default function SocialLinks({ showLabels = false, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return (
    <div className={`flex ${showLabels ? 'flex-col space-y-4' : 'flex-row space-x-4'} items-center justify-center`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${sizeClasses[size]} ${social.bgColor} ${social.color}
            flex items-center justify-center rounded-full
            bg-white/5 backdrop-blur-sm border border-white/10
            text-gray-400 transition-all duration-300
            hover:scale-110 hover:shadow-lg hover:border-white/30
            ${showLabels ? 'w-full justify-start px-4 space-x-3' : ''}
          `}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className={iconSizes[size]} />
          {showLabels && (
            <span className="font-medium">{social.name}</span>
          )}
          {showLabels && (
            <ExternalLink className="w-4 h-4 ml-auto" />
          )}
        </motion.a>
      ))}
    </div>
  )
}