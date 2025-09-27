'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '../components/Layout'
import GlowCard from '../components/ui/GlowCard'
import ProjectCard from '../components/ui/ProjectCard'
import SocialLinks from '../components/ui/SocialLinks'
import TechStack from '../components/ui/TechStack'
import { Download, MapPin, Calendar, Award, Briefcase, Code, Users, Mail } from 'lucide-react'

const featuredProjects = [
  {
    title: 'MCP TypeScript Template',
    description: 'High-performance TypeScript template for creating Model Context Protocol (MCP) servers using Node.js and Fastify. Provides type-safe development with comprehensive error handling and session management.',
    tech: ['TypeScript', 'Node.js', 'Fastify', 'MCP Protocol'],
    github: 'https://github.com/karankraina/mcp-typescript',
    logo: 'KR',
    featured: true
  },
  {
    title: 'Template MCP Server',
    company: 'Red Hat Data & AI',
    description: 'Production-ready template for developing Model Context Protocol (MCP) servers using Python and FastAPI with enterprise-grade features, comprehensive testing, and containerized deployment.',
    tech: ['Python', 'FastAPI', 'FastMCP', 'Pydantic', 'Docker', 'Kubernetes'],
    github: 'https://github.com/redhat-data-and-ai/template-mcp-server',
    logo: 'RH',
    featured: true
  },
  {
    title: 'Template Agent',
    company: 'Red Hat Data & AI',
    description: 'Enterprise AI agent framework with streaming capabilities, conversation management, and PostgreSQL integration. Built for production environments with comprehensive monitoring.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Langfuse', 'SSE'],
    github: 'https://github.com/redhat-data-and-ai/template-agent',
    logo: 'RH',
    featured: true
  },
  {
    title: 'express-under-pressure',
    description: 'Middleware for monitoring server health under high load in ExpressJS applications.',
    tech: ['Node.js', 'Express', 'Performance'],
    github: 'https://github.com/karankraina/express-under-pressure',
    live: 'https://www.npmjs.com/package/express-under-pressure',
    featured: true
  },
  {
    title: 'nodejs-threads',
    description: 'Simplified function-based implementation of Node.js worker threads for better performance.',
    tech: ['Node.js', 'Worker Threads', 'Performance'],
    github: 'https://github.com/karankraina/nodejs-threads',
    live: 'https://www.npmjs.com/package/nodejs-threads'
  },
  {
    title: 'react-hydration-overlay',
    description: 'Webpack plugin for fixing server-client hydration issues in React applications.',
    tech: ['React', 'SSR', 'Webpack', 'Development Tools'],
    github: 'https://github.com/karankraina/react-hydration-overlay',
    live: 'https://www.npmjs.com/package/react-hydration-overlay'
  }
]

const stats = [
  { label: 'Years Experience', value: '7+', icon: Calendar },
  { label: 'Performance Impact', value: '5K+ RPS', icon: Briefcase },
  { label: 'NPM Downloads', value: '12.8K+', icon: Download },
  { label: 'Awards Won', value: '10+', icon: Award }
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 animate-pulse"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/speaking.jpg"
                  alt="Karan Raina"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Hey 👋! I'm{' '}
              <span className="text-gradient block sm:inline mt-2 sm:mt-0">Karan Raina</span>
            </h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Software Engineer at{' '}
              <span className="text-red-500 font-semibold block sm:inline">Red Hat</span>{' '}
              <span className="block sm:inline">| Data & AI Team</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building enterprise AI solutions, MCP servers, and scalable web applications.
              <span className="block sm:inline"> Award-winning full-stack developer passionate about performance engineering and open source.</span>
            </motion.p>

            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get In Touch
              </motion.a>

              <motion.a
                href="#projects"
                className="btn-secondary w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </motion.a>
            </motion.div>

            <div className="mb-8 sm:mb-12">
              <SocialLinks size="md" />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map((stat, index) => (
              <GlowCard key={stat.label} className="text-center p-3 sm:p-6">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto mb-1 sm:mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                I'm a passionate full-stack web developer from India 🇮🇳 with{' '}
                <span className="text-primary-400 font-semibold">7+ years of experience</span> building{' '}
                <span className="text-primary-400 font-semibold">highly scalable</span> and{' '}
                <span className="text-primary-400 font-semibold">enterprise-level modern web applications</span> that serve millions of users.
              </p>

              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                Currently at <span className="text-red-500 font-semibold">Red Hat</span>, I work in the{' '}
                <span className="text-primary-400 font-semibold">Data and AI team</span> developing cutting-edge solutions including{' '}
                <span className="text-green-400 font-semibold">AI agents</span> and{' '}
                <span className="text-purple-400 font-semibold">Model Context Protocol (MCP) servers</span>. Previously, I led the{' '}
                <span className="text-blue-400 font-semibold">Theme Engine team at Fynd (Reliance)</span>, where I architected a{' '}
                <span className="text-yellow-400 font-semibold">high-performance React-based engine supporting 5K+ requests per second</span>.
              </p>

              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
                My expertise spans{' '}
                <span className="text-green-400 font-semibold">performance engineering</span>, having achieved{' '}
                <span className="text-yellow-400 font-semibold">40% throughput improvements</span> and{' '}
                <span className="text-purple-400 font-semibold">20% memory optimization</span> in production systems. I'm passionate about creating{' '}
                <span className="text-blue-400 font-semibold">micro-frontends</span>,{' '}
                <span className="text-green-400 font-semibold">microservices architecture</span>, and{' '}
                <span className="text-red-400 font-semibold">developer tooling</span>.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-2">
                As an active{' '}
                <span className="text-yellow-400 font-semibold">open-source contributor</span> with{' '}
                <span className="text-primary-400 font-semibold">12.8K+ NPM downloads</span>, I've contributed to notable projects like{' '}
                <span className="text-green-400 font-semibold">Fastify</span>,{' '}
                <span className="text-blue-400 font-semibold">Pino</span>, and{' '}
                <span className="text-purple-400 font-semibold">Autocannon</span>. I'm also passionate about military aviation ✈️, defense forces, space exploration 🌌, and mountains ⛰️.
              </p>
            </div>
          </motion.div>

          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20">
        <div className="container-custom px-4 sm:px-6">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Red Hat Experience */}
            <GlowCard>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">RH</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">Senior Software Engineer</h3>
                    <span className="text-sm text-gray-400">February 2024 - Present</span>
                  </div>
                  <p className="text-lg text-red-400 mb-3">Red Hat | Data & AI Team</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Remote, India</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developing production-ready AI agent frameworks with streaming capabilities</li>
                    <li>• Building Model Context Protocol (MCP) servers for enterprise integration</li>
                    <li>• Contributing to Red Hat's open-source AI ecosystem</li>
                    <li>• Creating scalable web applications for data and AI workflows</li>
                    <li>• Working with Python, FastAPI, LangGraph, PostgreSQL, and Kubernetes</li>
                  </ul>
                </div>
              </div>
            </GlowCard>

            {/* Fynd Experience */}
            <GlowCard>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FY</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">Software Development Engineer - 1 (Team Lead)</h3>
                    <span className="text-sm text-gray-400">October 2022 - February 2024</span>
                  </div>
                  <p className="text-lg text-blue-400 mb-3">Fynd (Shopsense Retail Ltd) | Reliance Group</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Ahmedabad, India</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <div className="text-green-400 font-semibold text-sm">Performance Impact</div>
                      <div className="text-white text-lg font-bold">5K+ RPS</div>
                      <div className="text-gray-400 text-xs">Theme Engine Throughput</div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                      <div className="text-yellow-400 font-semibold text-sm">Optimization</div>
                      <div className="text-white text-lg font-bold">40% ↑</div>
                      <div className="text-gray-400 text-xs">Throughput Improvement</div>
                    </div>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Led React team</strong> in architecting high-performance theme engine using Node.js, React 18, and Express</li>
                    <li>• <strong>Increased throughput by 40%</strong> through Redis optimization and Head-of-Line blocking solutions</li>
                    <li>• <strong>Reduced memory usage by 20%</strong> with advanced optimization techniques and leak prevention</li>
                    <li>• <strong>Implemented micro-frontends</strong> to modularize codebase and enhance team autonomy</li>
                    <li>• <strong>Developed CLI tool</strong> in Node.js for partner theme management on Fynd platform</li>
                    <li>• <strong>Architected security measures</strong> protecting against XSS, CSRF, and SQL injection</li>
                    <li>• <strong>Multiple awards</strong> including Fynd Innovator of the Year and Fynd Star Award</li>
                  </ul>
                </div>
              </div>
            </GlowCard>

            {/* TCS Experience */}
            <GlowCard>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TCS</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">System Engineer</h3>
                    <span className="text-sm text-gray-400">July 2018 - October 2022</span>
                  </div>
                  <p className="text-lg text-purple-400 mb-3">Tata Consultancy Services Ltd.</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Gandhinagar, India</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Developed manufacturing pipeline automation</strong> features and enhancements</li>
                    <li>• <strong>Built REST APIs</strong> and implemented PostgreSQL database interactions</li>
                    <li>• <strong>Implemented security</strong> with role-based access and JWT authentication</li>
                    <li>• <strong>Enhanced CI/CD pipelines</strong> using GitHub Actions and GitHub Advanced Security</li>
                    <li>• <strong>Worked with ES6, Babel, Gulp</strong> and various JavaScript frameworks</li>
                    <li>• <strong>6 Awards for Excellence</strong> recognition for outstanding contributions</li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20">
        <div className="container-custom px-4 sm:px-6">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-12 sm:py-20">
        <div className="container-custom px-4 sm:px-6">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Awards & Recognition
          </motion.h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Fynd Awards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fynd Innovator of the Year</h3>
                  <p className="text-blue-400 font-medium mb-3">Fynd (Reliance) • 2023</p>
                  <p className="text-gray-300 text-sm">
                    Recognition for enhancing performance and stability in the React Theme Engine,
                    achieving 5K+ RPS and 40% throughput improvement.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fynd Star Award</h3>
                  <p className="text-yellow-400 font-medium mb-3">Fynd (Reliance) • 2023</p>
                  <p className="text-gray-300 text-sm">
                    Awarded for taking complete ownership of React Theme Engine and
                    delivering exceptional results in team leadership.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <GlowCard>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">6x Awards for Excellence</h3>
                  <p className="text-purple-400 font-medium mb-3">Tata Consultancy Services • 2018-2022</p>
                  <p className="text-gray-300 text-sm">
                    Multiple recognitions for outstanding contributions in manufacturing pipeline automation,
                    API development, and security implementations during 4+ years at TCS.
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6 text-gradient">Let's Connect!</h2>
            <p className="text-lg text-gray-300 mb-12">
              I'm always open to discussing new opportunities, collaborating on interesting projects,
              or just having a chat about technology and innovation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2 text-lg">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:karanraina1996@gmail.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  karanraina1996@gmail.com
                </a>
              </div>

              <SocialLinks showLabels size="md" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}