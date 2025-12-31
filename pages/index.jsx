'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '../components/Layout'
import GlowCard from '../components/ui/GlowCard'
import ProjectCard from '../components/ui/ProjectCard'
import SocialLinks from '../components/ui/SocialLinks'
import TechStack from '../components/ui/TechStack'
import { ArrowRight, MapPin, Calendar, Award, Briefcase, Mail, ExternalLink } from 'lucide-react'

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
  { label: 'Years Experience', value: '7+' },
  { label: 'Performance Impact', value: '5K+ RPS' },
  { label: 'NPM Downloads', value: '12.8K+' },
  { label: 'Awards Won', value: '10+' }
]

const experiences = [
  {
    company: 'Red Hat',
    role: 'Senior Software Engineer',
    team: 'Data & AI Team',
    period: 'February 2024 - Present',
    location: 'Bengaluru, India',
    logo: 'RH',
    logoColor: 'bg-red-600',
    highlights: [
      'Developing production-ready AI agent frameworks with streaming capabilities',
      'Building Model Context Protocol (MCP) servers for enterprise integration',
      'Contributing to Red Hat\'s open-source AI ecosystem',
      'Working with Python, FastAPI, LangGraph, PostgreSQL, and Kubernetes'
    ]
  },
  {
    company: 'Fynd (Reliance)',
    role: 'Software Development Engineer - 1 (Team Lead)',
    team: 'Theme Engine Team',
    period: 'October 2022 - February 2024',
    location: 'Ahmedabad, India',
    logo: 'FY',
    logoColor: 'bg-blue-600',
    achievements: {
      performance: '5K+ RPS',
      optimization: '40% ↑',
      memory: '20% ↓'
    },
    highlights: [
      'Led React team in architecting high-performance theme engine',
      'Increased throughput by 40% through Redis optimization',
      'Reduced memory usage by 20% with advanced optimization techniques',
      'Implemented micro-frontends architecture',
      'Multiple awards including Fynd Innovator of the Year'
    ]
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer',
    period: 'July 2018 - October 2022',
    location: 'Gandhinagar, India',
    logo: 'TCS',
    logoColor: 'bg-purple-600',
    highlights: [
      'Developed manufacturing pipeline automation features',
      'Built REST APIs with PostgreSQL database interactions',
      'Implemented security with role-based access and JWT authentication',
      '6 Awards for Excellence recognition'
    ]
  }
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Minimal & Clean */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-24 h-24 mx-auto mb-8">
                <Image
                  src="/images/karan-raina.jpeg"
                  alt="Karan Raina"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Karan Raina
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              Senior Software Engineer at <span className="text-red-500 font-semibold">Red Hat</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            >
              Building enterprise AI solutions, MCP servers, and scalable web applications. 
              Specializing in performance engineering and architecting high-throughput systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a
                href="#contact"
                className="btn-primary group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://blogs.karanraina.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                Read My Blog
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16"
            >
              <SocialLinks size="md" />
            </motion.div>

            {/* Stats - Minimal Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Concise */}
      <section id="about" className="py-20 border-t border-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack web developer from India 🇮🇳 with 7+ years of experience building 
                highly scalable and enterprise-level modern web applications that serve millions of users.
              </p>
              <p>
                Currently at <span className="text-red-500 font-medium">Red Hat</span>, I work in the Data and AI team 
                developing cutting-edge solutions including AI agents and Model Context Protocol (MCP) servers.
              </p>
              <p>
                My expertise spans performance engineering, having achieved 40% throughput improvements and 
                20% memory optimization in production systems. I'm passionate about creating micro-frontends, 
                microservices architecture, and developer tooling.
              </p>
              <p>
                As an active open-source contributor with 12.8K+ NPM downloads, I've contributed to projects like 
                Fastify, Pino, and Autocannon. I'm also passionate about military aviation ✈️, defense forces, 
                space exploration 🌌, and mountains ⛰️.
              </p>
            </div>
          </motion.div>

          <TechStack />
        </div>
      </section>

      {/* Experience Section - Clean Timeline */}
      <section id="experience" className="py-20 border-t border-slate-800">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${exp.logoColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{exp.logo}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                      </div>
                      <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                      {exp.team && (
                        <p className="text-sm text-gray-500 mb-3">{exp.team}</p>
                      )}
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      
                      {exp.achievements && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                            <div className="text-green-400 text-xs font-medium">Performance</div>
                            <div className="text-white text-lg font-bold">{exp.achievements.performance}</div>
                          </div>
                          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
                            <div className="text-blue-400 text-xs font-medium">Throughput</div>
                            <div className="text-white text-lg font-bold">{exp.achievements.optimization}</div>
                          </div>
                          <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
                            <div className="text-purple-400 text-xs font-medium">Memory</div>
                            <div className="text-white text-lg font-bold">{exp.achievements.memory}</div>
                          </div>
                        </div>
                      )}

                      <ul className="text-gray-400 space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-slate-800">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Simplified */}
      <section id="awards" className="py-20 border-t border-slate-800">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Awards & Recognition
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Fynd Innovator of the Year</h3>
                    <p className="text-blue-400 text-sm mb-2">Fynd (Reliance) • 2023</p>
                    <p className="text-gray-400 text-sm">
                      Recognition for enhancing performance and stability in the React Theme Engine,
                      achieving 5K+ RPS and 40% throughput improvement.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Fynd Star Award</h3>
                    <p className="text-yellow-400 text-sm mb-2">Fynd (Reliance) • 2023</p>
                    <p className="text-gray-400 text-sm">
                      Awarded for taking complete ownership of React Theme Engine and
                      delivering exceptional results in team leadership.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">6x Awards for Excellence</h3>
                    <p className="text-purple-400 text-sm mb-2">Tata Consultancy Services • 2018-2022</p>
                    <p className="text-gray-400 text-sm">
                      Multiple recognitions for outstanding contributions in manufacturing pipeline automation,
                      API development, and security implementations.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal */}
      <section id="contact" className="py-20 border-t border-slate-800">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-lg text-gray-400 mb-8">
              I'm always open to discussing new opportunities, collaborating on interesting projects,
              or just having a chat about technology and innovation.
            </p>

            <div className="mb-8">
              <a
                href="mailto:karanraina1996@gmail.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                karanraina1996@gmail.com
              </a>
            </div>

            <SocialLinks showLabels size="md" />
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
