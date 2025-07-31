'use client'

import { loadServicesData } from '@/lib/data-loader'
import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  CogIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const servicesData = loadServicesData()
  const { serviceCategories, serviceStats, pricingTiers, technologies } = servicesData

  const iconMap = {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    CloudArrowUpIcon,
    CogIcon,
    ComputerDesktopIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    ServerIcon,
    CpuChipIcon,
    CommandLineIcon
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mb-20">
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
              <SparklesIcon className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-100">Enterprise-Grade Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Software Engineering
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We build secure, scalable, and innovative software solutions that drive business transformation. 
              From concept to deployment, we deliver excellence at every step.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/20"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Services
                </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive software engineering solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          {/* Premium Service Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {serviceCategories.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              
                return (
                  <motion.div
                    key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div className="relative h-full bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-300/60">
                    
                    {/* Premium Header */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-200/20"></div>
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern id={`hexagon-${service.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                              <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#hexagon-${service.id})`}/>
                        </svg>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 border border-slate-200/40 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-12 h-12 border border-slate-200/40 rounded-full"></div>
                      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-100/50 rounded-full"></div>
                      
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                      
                      {/* Premium Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Glow Ring */}
                          <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                          
                          {/* Icon Container */}
                          <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-slate-200/60 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                            <IconComponent className="h-10 w-10 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>
                          
                          {/* Pulse Ring */}
                          <div className="absolute inset-0 rounded-2xl ring-2 ring-slate-200/40 group-hover:ring-blue-400/40 transition-all duration-500"></div>
                        </div>
                      </div>
                      
                      {/* Service Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
                          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                            {service.name.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8">
                      {/* Title & Description */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          What You Get
                        </h4>
                        <div className="space-y-3">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={feature} className="flex items-start group/item">
                              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3 group-hover/item:bg-green-200 transition-colors duration-200">
                                <CheckIcon className="h-3 w-3 text-green-600" />
                              </div>
                              <span className="text-sm text-slate-700 leading-relaxed font-medium">
                              {feature}
                            </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-200">
                              +{service.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/services/${service.id}`}
                        className="group/cta inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span>Explore Service</span>
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                      </Link>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                  </div>

                  {/* Premium Shadow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery and exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: UserGroupIcon, title: "Discovery", description: "Understanding your needs and objectives" },
              { icon: CogIcon, title: "Planning", description: "Strategic roadmap and architecture design" },
              { icon: CodeBracketIcon, title: "Development", description: "Agile development with continuous delivery" },
              { icon: RocketLaunchIcon, title: "Deployment", description: "Seamless launch and ongoing support" }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section - Redesigned */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50/60 via-blue-50/20 to-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <CpuChipIcon className="h-4 w-4 mr-2" />
              Technology Excellence
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our carefully curated technology stack ensures scalability, performance, and maintainability across all our solutions
            </p>
          </motion.div>

          {/* Tech Categories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(technologies).map(([category, techList], index) => {
              const categoryIcons = {
                'frontend': CodeBracketIcon,
                'backend': ServerIcon,
                'mobile': DevicePhoneMobileIcon,
                'cloud': CloudArrowUpIcon,
                'databases': ComputerDesktopIcon,
                'devsecops': ShieldCheckIcon
              }
              
              const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || CogIcon
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl border border-slate-200/60 p-8 transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-300">
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mr-4 group-hover:bg-blue-100 transition-colors duration-300">
                        <CategoryIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 capitalize">
                          {category.replace('-', ' ')}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {techList.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Tech Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {techList.slice(0, 6).map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.3 }}
                          viewport={{ once: true }}
                          className="group/tech relative"
                        >
                          <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100 transition-all duration-200 group-hover/tech:bg-slate-100 group-hover/tech:border-slate-200">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm font-medium text-slate-700 truncate">
                              {tech}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* More Technologies Indicator */}
                    {techList.length > 6 && (
                      <div className="mt-4 text-center">
                        <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          +{techList.length - 6} more technologies
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technology Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Our Technology Stack Matters
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Every technology choice is deliberate, ensuring optimal performance, security, and scalability for your projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: RocketLaunchIcon,
                  title: "Performance First",
                  description: "Optimized for speed and efficiency with modern frameworks and best practices"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Enterprise Security",
                  description: "Industry-standard security protocols and compliance-ready implementations"
                },
                {
                  icon: CogIcon,
                  title: "Future-Proof",
                  description: "Scalable architecture that grows with your business needs and requirements"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-20 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Pricing Plans
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your project requirements and budget
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 ${
                  tier.name === 'Professional' ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
              >
                {tier.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-6">
                    Most Popular
                    </div>
                )}
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-slate-900 mb-1">{tier.price}</div>
                <p className="text-slate-600 mb-8">{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    tier.name === 'Professional'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how we can help you achieve your digital goals with our expert team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl"
                >
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/20"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 