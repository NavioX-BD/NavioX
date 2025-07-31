'use client'

import {
  ArrowRightIcon,
  CheckIcon,
  CogIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SiAmazon,
  SiDocker,
  SiGo,
  SiGraphql,
  SiJsonwebtokens,
  SiKubernetes,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedis
} from 'react-icons/si'

// Process descriptions for API development
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'Requirements Analysis': 'Gather detailed requirements, understand business logic, and define API specifications including endpoints, data models, and integration needs.',
    'Architecture Design': 'Design scalable API architecture with proper authentication, authorization, rate limiting, and security best practices.',
    'Database Design': 'Design efficient database schema, optimize queries, and implement proper indexing for optimal API performance.',
    'API Development': 'Build RESTful or GraphQL APIs with clean code, proper error handling, and comprehensive documentation.',
    'Testing & Quality Assurance': 'Implement comprehensive testing including unit tests, integration tests, and performance testing to ensure reliability.',
    'Security Implementation': 'Implement authentication, authorization, input validation, and security measures to protect your API.',
    'Deployment & Monitoring': 'Deploy to production with monitoring, logging, and alerting systems for optimal performance and reliability.',
    'Documentation & Training': 'Create comprehensive API documentation, provide team training, and establish maintenance procedures.'
  }
  return descriptions[step] || 'Professional API development process step.'
}

// Technology icon mapping for API development
const techIconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'Go': SiGo,
  'GraphQL': SiGraphql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'AWS API Gateway': SiAmazon,
  'Nginx': SiNginx,
  'JWT': SiJsonwebtokens
}

// API Development service based on TheToriqul's backend expertise
const apiService = {
  id: 'api-development',
  name: 'API Development',
  description: 'Backend development and system integrations with modern architectures',
  features: [
    'RESTful API Design & Development',
    'GraphQL Services & Schema Design',
    'Microservices Architecture',
    'Third-party System Integrations',
    'API Gateway Implementation',
    'Authentication & Authorization',
    'Real-time WebSocket APIs',
    'API Documentation & Testing'
  ],
  technologies: [
    'Node.js',
    'Python',
    'Go',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS API Gateway',
    'Nginx',
    'JWT'
  ],
  benefits: [
    {
      icon: RocketLaunchIcon,
      title: 'High Performance',
      description: 'Optimized APIs with caching, load balancing, and efficient database queries'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure by Design',
      description: 'Built-in security with authentication, authorization, and data validation'
    },
    {
      icon: CogIcon,
      title: 'Scalable Architecture',
      description: 'Microservices and containerized deployments that scale with your business'
    },
    {
      icon: ServerIcon,
      title: 'Cloud-Native',
      description: 'Deployed on modern cloud infrastructure with monitoring and automation'
    }
  ],
  process: [
    'Requirements Analysis & API Design',
    'Database Schema & Architecture',
    'Core API Development',
    'Security Implementation',
    'Testing & Documentation',
    'Deployment & Monitoring',
    'Performance Optimization',
    'Ongoing Maintenance'
  ],
  apiTypes: [
    {
      type: 'RESTful APIs',
      description: 'Traditional REST architecture with JSON responses',
      useCases: ['CRUD operations', 'Mobile app backends', 'Web service integrations']
    },
    {
      type: 'GraphQL APIs',
      description: 'Flexible query language for efficient data fetching',
      useCases: ['Complex data relationships', 'Frontend optimization', 'Real-time subscriptions']
    },
    {
      type: 'WebSocket APIs',
      description: 'Real-time bidirectional communication',
      useCases: ['Chat applications', 'Live updates', 'Gaming backends']
    },
    {
      type: 'Microservices',
      description: 'Distributed architecture with independent services',
      useCases: ['Enterprise applications', 'Scalable systems', 'Team autonomy']
    }
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function APIevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 mb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <ComputerDesktopIcon className="h-4 w-4 text-indigo-300 mr-2" />
              <span className="text-sm font-medium text-blue-100">Backend Excellence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              API Development &
              <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Backend Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Build robust, scalable APIs and backend services with modern architectures. 
              Expert in RESTful APIs, GraphQL, microservices, and cloud-native deployments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discuss Your API Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#api-types"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Explore API Types
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Why Choose Our API Development?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage our expertise in modern backend technologies and cloud-native architectures
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {apiService.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mx-auto mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* API Types Section */}
      <section id="api-types" className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              API Types & Architectures
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the right API architecture for your specific needs and use cases
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {apiService.apiTypes.map((apiType) => (
              <motion.div
                key={apiType.type}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {apiType.type}
                </h3>
                <p className="text-slate-600 mb-6">
                  {apiType.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Common Use Cases:</h4>
                  <ul className="space-y-2">
                    {apiType.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
                Comprehensive API Services
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From design to deployment, we provide end-to-end API development services 
                with modern best practices and cloud-native architectures.
              </p>

              <div className="grid gap-4">
                {apiService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
            >
              <div className="text-center mb-8">
                <ServerIcon className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Modern Backend Architecture
                </h3>
                <p className="text-slate-600">
                  Cloud-native APIs with containerization, monitoring, and automated deployments
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">99.9%</div>
                  <div className="text-xs text-slate-600">API Uptime</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">&lt;100ms</div>
                  <div className="text-xs text-slate-600">Response Time</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10K+</div>
                  <div className="text-xs text-slate-600">Requests/sec</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-xs text-slate-600">Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Technologies We Master
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leveraging modern backend technologies and cloud platforms for optimal performance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {apiService.technologies.map((tech) => {
              const IconComponent = techIconMap[tech] || CogIcon
              return (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {tech}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our API Development Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology for building robust, scalable, and maintainable APIs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Flow Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 gap-y-2">
              {apiService.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < apiService.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < apiService.process.length - 1 && (
                    <div className="lg:hidden flex justify-center -mt-6 mb-2 z-10 relative">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
              Ready to Build Your API?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your backend requirements and build a robust, scalable API 
              that powers your applications and integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your API Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View API Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}