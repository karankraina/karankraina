'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import AnimatedBackground from './ui/AnimatedBackground'

export default function Layout({ children, title = "Karan Raina - Senior Software Engineer" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Senior Software Engineer at Red Hat | Data & AI Team | Full-Stack Developer | Open Source Contributor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Senior Software Engineer at Red Hat specializing in AI agents, MCP servers, and enterprise web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karankraina.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@karankraina" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      {/* GitHub Buttons Script */}
      <Script
        src="https://buttons.github.io/buttons.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen relative">
        <AnimatedBackground />

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="text-lg sm:text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">Karan Raina</span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <motion.a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  About
                </motion.a>
                <motion.a
                  href="#experience"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Experience
                </motion.a>
                <motion.a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Contact
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-md border-b border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container-custom py-4 space-y-4">
                  <motion.a
                    href="#about"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={closeMobileMenu}
                    whileHover={{ x: 10 }}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#experience"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={closeMobileMenu}
                    whileHover={{ x: 10 }}
                  >
                    Experience
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={closeMobileMenu}
                    whileHover={{ x: 10 }}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    onClick={closeMobileMenu}
                    whileHover={{ x: 10 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <motion.footer
          className="border-t border-white/10 bg-white/5 backdrop-blur-sm mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="container-custom py-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Building scalable web applications and AI solutions, one line of code at a time.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <span>© 2024 Karan Raina.</span>
                <span>•</span>
                <span>Built with Next.js & Tailwind CSS</span>
                <span>•</span>
                <span>Deployed on Vercel</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  )
}