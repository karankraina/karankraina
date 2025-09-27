'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiFastapi,
  SiNestjs
} from 'react-icons/si'

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
]

export default function TechStack() {
  return (
    <div className="py-12">
      <motion.h2
        className="heading-lg text-center mb-12 text-gradient"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technology Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="card group cursor-pointer text-center"
            initial={{ opacity: 0, scale: 0.8 }}
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
              rotateY: 15,
              transition: { duration: 0.2 }
            }}
          >
            <tech.icon
              className="w-12 h-12 mx-auto mb-3 transition-colors duration-300"
              style={{ color: tech.color }}
            />
            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}