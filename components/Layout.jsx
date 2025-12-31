'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
        
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Senior Software Engineer at Red Hat | Data & AI Team | Building enterprise AI solutions, MCP servers, and scalable web applications | 7+ years experience | Award-winning full-stack developer | Open source contributor with 12.8K+ NPM downloads" />
        <meta name="keywords" content="Karan Raina, Software Engineer, Red Hat, AI Engineer, MCP Servers, Full-Stack Developer, React, Node.js, TypeScript, Python, FastAPI, Open Source, Performance Engineering, Web Development" />
        <meta name="author" content="Karan Raina" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://karanraina.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/karan-raina.jpeg" />
        <link rel="apple-touch-icon" href="/images/karan-raina.jpeg" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karanraina.com" />
        <meta property="og:site_name" content="Karan Raina" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Senior Software Engineer at Red Hat specializing in AI agents, MCP servers, and enterprise web applications. Award-winning developer with 7+ years experience building highly scalable systems." />
        <meta property="og:image" content="https://karanraina.com/images/karan-raina.jpeg" />
        <meta property="og:image:alt" content="Karan Raina - Senior Software Engineer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@karankraina" />
        <meta name="twitter:creator" content="@karankraina" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Senior Software Engineer at Red Hat | Building enterprise AI solutions, MCP servers, and scalable web applications" />
        <meta name="twitter:image" content="https://karanraina.com/images/karan-raina.jpeg" />

        {/* Additional SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        
        {/* Performance and Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Karan Raina",
              "url": "https://karanraina.com",
              "image": "https://karanraina.com/images/karan-raina.jpeg",
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Red Hat",
                "url": "https://www.redhat.com"
              },
              "description": "Senior Software Engineer at Red Hat specializing in AI agents, MCP servers, and enterprise web applications",
              "alumniOf": "Tata Consultancy Services",
              "knowsAbout": ["JavaScript", "TypeScript", "Node.js", "React", "Python", "FastAPI", "AI Engineering", "Performance Engineering", "Web Development"],
              "sameAs": [
                "https://github.com/karankraina",
                "https://linkedin.com/in/karankraina",
                "https://twitter.com/karankraina",
                "https://blogs.karanraina.com"
              ],
              "email": "karanraina1996@gmail.com"
            })
          }}
        />
      </Head>

      {/* GitHub Buttons Script */}
      <Script
        src="https://buttons.github.io/buttons.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen relative bg-slate-950">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                Karan Raina
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="https://blogs.karanraina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="container-custom py-4 space-y-3">
                  <a
                    href="#about"
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </a>
                  <a
                    href="https://blogs.karanraina.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                  >
                    Blog
                  </a>
                  <a
                    href="#contact"
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
          <div className="container-custom py-12">
            <div className="text-center space-y-4">
              <p className="text-gray-500">
                Building scalable web applications and AI solutions, one line of code at a time.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
                <span>© 2025 Karan Raina</span>
                <span className="hidden sm:inline">•</span>
                <span>Built with Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}