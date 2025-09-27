'use client'

import { motion } from 'framer-motion'

export default function GlowCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`card-glow ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}