'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react'
import GlowCard from './GlowCard'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <GlowCard className="h-full group p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            {project.logo && (
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">{project.logo}</span>
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              {project.company && (
                <p className="text-xs sm:text-sm text-gray-400 truncate">{project.company}</p>
              )}
            </div>
          </div>

          <div className="flex space-x-2 self-start">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group/icon"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover/icon:text-white transition-colors duration-300" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group/icon"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover/icon:text-white transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tech?.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {project.featured && (
            <div className="flex items-center space-x-1 text-yellow-400 text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              <span>Featured Project</span>
            </div>
          )}

          {project.github && (
            <div className="github-button-wrapper">
              <a
                className="github-button"
                href={project.github}
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                data-show-count="true"
                aria-label={`Star ${project.github.split('/').slice(-2).join('/')} on GitHub`}
              >
                Star
              </a>
            </div>
          )}
        </div>
      </GlowCard>
    </motion.div>
  )
}