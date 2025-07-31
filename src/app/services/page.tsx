'use client'

import { loadServicesData } from '@/lib/data-loader'
import {
    ArrowRightIcon,
    ChartBarIcon,
    CheckIcon,
    CloudArrowUpIcon,
    CodeBracketIcon,
    CogIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const servicesData = loadServicesData()
  const { serviceCategories, serviceStats, pricingTiers, technologies } = servicesData

  // Icon mapping for dynamic rendering
  const iconMap = {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    CloudArrowUpIcon,
    CogIcon,
    ComputerDesktopIcon,
    ChartBarIcon,
    ShieldCheckIcon
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
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              DevSecOps excellence with comprehensive software engineering solutions to secure and transform your business.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">DevSecOps Excellence & Security-First Development</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Left Column - Stats & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Service Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Service Overview
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(serviceStats).map(([key, value]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                      <div className="text-xs font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CogIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Pricing Tiers
                </h2>
                <div className="space-y-4">
                  {pricingTiers.map((tier, index) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className="p-3 rounded-lg bg-blue-100 mr-4">
                          <CheckIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{tier.name}</h3>
                          <div className="text-lg font-bold text-blue-600 mb-1">{tier.price}</div>
                          <p className="text-sm text-gray-600 mb-3">{tier.description}</p>
                          <ul className="space-y-1">
                            {tier.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="text-xs text-gray-600 flex items-center">
                                <CheckIcon className="h-3 w-3 text-green-500 mr-1" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CodeBracketIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Get Started
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Ready to Start?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Let&rsquo;s discuss your project and find the perfect solution for your needs.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Start Your Project →
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Our Work →
                    </Link>
                    <Link
                      href="/about"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Learn About Us →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Service Categories */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Categories</h2>
              <p className="text-gray-600">
                Comprehensive software engineering solutions tailored to your business needs.
              </p>
            </div>
            
            {/* Service Categories Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {serviceCategories.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Service Header */}
                    <div className={`relative h-32 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">
                              +{service.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Learn more
                        <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {Object.entries(technologies).map(([category, techList]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace('-', ' ')}
                </h3>
                <div className="space-y-2">
                  {techList.slice(0, 6).map((tech) => (
                    <div key={tech} className="text-sm text-gray-600">
                      {tech}
                    </div>
                  ))}
                  {techList.length > 6 && (
                    <div className="text-sm text-gray-500">
                      +{techList.length - 6} more
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss your project and see how our expert team can help you achieve your digital goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Start Your Project
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
} 