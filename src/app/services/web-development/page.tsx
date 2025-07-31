'apos;use client'apos;

import {
    ArrowRightIcon,
    CheckIcon,
    CodeBracketIcon
} from 'apos;@heroicons/react/24/outline'apos;
import { motion } from 'apos;framer-motion'apos;
import Link from 'apos;next/link'apos;
import {
    SiAmazon,
    SiDocker,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from 'apos;react-icons/si'apos;

// Process descriptions for Web Development
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'apos;Discovery & Requirements Analysis'apos;: 'apos;Understand your business goals, user needs, and technical requirements to create a comprehensive project plan.'apos;,
    'apos;UI/UX Design & Prototyping'apos;: 'apos;Create intuitive user interfaces, wireframes, and interactive prototypes for optimal user experience.'apos;,
    'apos;Frontend Development'apos;: 'apos;Build responsive, modern web applications using the latest technologies and best practices.'apos;,
    'apos;Backend Development'apos;: 'apos;Develop robust server-side logic, APIs, and database architecture for scalable applications.'apos;,
    'apos;Testing & Quality Assurance'apos;: 'apos;Comprehensive testing including unit tests, integration tests, and user acceptance testing.'apos;,
    'apos;Deployment & Launch'apos;: 'apos;Deploy to production with monitoring, performance optimization, and launch support.'apos;,
    'apos;Post-Launch Support'apos;: 'apos;Provide ongoing maintenance, updates, and support to ensure optimal performance.'apos;,
    'apos;Continuous Improvement'apos;: 'apos;Regular updates, feature enhancements, and performance optimizations based on user feedback.'apos;
  }
  return descriptions[step] || 'apos;Professional web development process step.'apos;
}

// Technology icon mapping for Web Development
const techIconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'apos;React'apos;: SiReact,
  'apos;Next.js'apos;: SiNextdotjs,
  'apos;TypeScript'apos;: SiTypescript,
  'apos;Node.js'apos;: SiNodedotjs,
  'apos;Python'apos;: SiPython,
  'apos;PostgreSQL'apos;: SiPostgresql,
  'apos;MongoDB'apos;: SiMongodb,
  'apos;Redis'apos;: SiRedis,
  'apos;Docker'apos;: SiDocker,
  'apos;AWS'apos;: SiAmazon,
  'apos;Vercel'apos;: SiVercel,
  'apos;Tailwind CSS'apos;: SiTailwindcss
}

// Web Development service data
const webDevService = {
  id: 'apos;web-development'apos;,
  name: 'apos;Web Development'apos;,
  description: 'apos;Custom web applications and digital solutions built with modern technologies and best practices'apos;,
  features: [
    'apos;Custom Web Applications'apos;,
    'apos;E-commerce Solutions'apos;,
    'apos;Progressive Web Apps (PWA)'apos;,
    'apos;Content Management Systems'apos;,
    'apos;API Integration & Development'apos;,
    'apos;Database Design & Optimization'apos;,
    'apos;Performance Optimization'apos;,
    'apos;SEO & Analytics Implementation'apos;
  ],
  webSolutions: [
    {
      type: 'apos;E-commerce Platforms'apos;,
      description: 'apos;Full-featured online stores with payment integration and inventory management'apos;,
      features: ['apos;Shopping cart and checkout'apos;, 'apos;Payment gateway integration'apos;, 'apos;Inventory management'apos;, 'apos;Order tracking and management'apos;, 'apos;Customer accounts and profiles'apos;, 'apos;Admin dashboard and analytics'apos;]
    },
    {
      type: 'apos;Business Applications'apos;,
      description: 'apos;Custom web applications tailored for business operations and workflows'apos;,
      features: ['apos;User authentication and authorization'apos;, 'apos;Real-time data synchronization'apos;, 'apos;Advanced search and filtering'apos;, 'apos;Data visualization and reporting'apos;, 'apos;Workflow automation'apos;, 'apos;Third-party integrations'apos;]
    },
    {
      type: 'apos;Content Management Systems'apos;,
      description: 'apos;Flexible CMS solutions for content-driven websites and digital publishing'apos;,
      features: ['apos;Intuitive content editor'apos;, 'apos;Multi-user permissions'apos;, 'apos;SEO optimization tools'apos;, 'apos;Media management'apos;, 'apos;Custom content types'apos;, 'apos;API-driven architecture'apos;]
    },
    {
      type: 'apos;Progressive Web Apps'apos;,
      description: 'apos;App-like experiences with web technologies for enhanced user engagement'apos;,
      features: ['apos;Offline functionality'apos;, 'apos;Push notifications'apos;, 'apos;App-like interface'apos;, 'apos;Fast loading with caching'apos;, 'apos;Cross-platform compatibility'apos;, 'apos;Easy installation'apos;]
    }
  ],
  technologies: [
    'apos;React'apos;,
    'apos;Next.js'apos;,
    'apos;TypeScript'apos;,
    'apos;Node.js'apos;,
    'apos;Python'apos;,
    'apos;PostgreSQL'apos;,
    'apos;MongoDB'apos;,
    'apos;Redis'apos;,
    'apos;Docker'apos;,
    'apos;AWS'apos;,
    'apos;Vercel'apos;,
    'apos;Tailwind CSS'apos;
  ],
  process: [
    'apos;Discovery & Requirements Analysis'apos;,
    'apos;UI/UX Design & Prototyping'apos;,
    'apos;Frontend Development'apos;,
    'apos;Backend API Development'apos;,
    'apos;Database Design & Integration'apos;,
    'apos;Testing & Quality Assurance'apos;,
    'apos;Deployment & Launch'apos;,
    'apos;Maintenance & Optimization'apos;
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

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 mb-20">
        <div className="absolute inset-0 bg-[url('apos;data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'apos;)] opacity-20"></div>
        
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
              <CodeBracketIcon className="h-4 w-4 text-blue-300 mr-2" />
              <span className="text-sm font-medium text-blue-100">Web Innovation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Web Development &
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Build powerful web applications with modern technologies. From responsive websites to complex 
              web platforms, we deliver solutions that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Web Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#web-solutions"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-sm font-medium text-slate-600">Web Projects Delivered</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-600">Uptime Performance</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">&lt;2s</div>
              <div className="text-sm font-medium text-slate-600">Average Load Time</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600">Mobile Responsive</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Web Solutions Section */}
      <section id="web-solutions" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Web Solutions We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we deliver solutions tailored to your specific business needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {webDevService.webSolutions.map((solution) => (
              <motion.div
                key={solution.type}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {solution.type}
                </h3>
                <p className="text-slate-600 mb-6">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We leverage modern technologies and frameworks to build robust, scalable, and maintainable web applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {webDevService.technologies.map((tech) => {
              const IconComponent = techIconMap[tech] || CodeBracketIcon
              return (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {tech}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A structured approach that ensures quality, efficiency, and successful project delivery from concept to launch.
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
              {webDevService.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < webDevService.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < webDevService.process.length - 1 && (
                    <div className="lg:hidden flex justify-center -mt-6 mb-2 z-10 relative">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm" style={{ boxShadow: 'apos;0 2px 8px 0 rgba(0,0,0,0.04)'apos; }}>
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
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Let'apos;s create a powerful web solution that drives your business forward. From concept to launch, we'apos;ll be with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}