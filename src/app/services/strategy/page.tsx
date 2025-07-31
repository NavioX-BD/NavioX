'use client'

import { loadServicesData } from '@/lib/data-loader'
import {
    ChartBarIcon,
    CheckIcon,
    ClockIcon,
    CogIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StrategyPage() {
  const servicesData = loadServicesData()
  const strategy = servicesData.serviceCategories.find(service => service.id === 'strategy')

  if (!strategy) {
    return <div>Service not found</div>
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
        className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20"
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            >
              <CogIcon className="h-5 w-5 mr-2" />
              <span className="text-orange-100">Digital Strategy</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Digital Strategy & Consulting
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto"
            >
              {strategy.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
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
          {/* Left Column - Process & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Development Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-orange-600" />
                  Strategy Process
                </h2>
                <div className="space-y-4">
                  {strategy.process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-orange-600 font-semibold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{step}</h3>
                          <p className="text-sm text-gray-600">
                            {getProcessDescription(step)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-3 text-orange-600" />
                  Key Benefits
                </h2>
                <div className="space-y-3">
                  {[
                    "Strategic Planning",
                    "Technology Assessment",
                    "Process Optimization",
                    "Change Management",
                    "ROI Focused",
                    "Ongoing Support"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-orange-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="h-6 w-6 mr-3 text-orange-600" />
                  Get Started
                </h2>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Ready to Transform?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Let&rsquo;s discuss your digital transformation needs and create a strategic roadmap.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      Start Your Project →
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      View Strategy Projects →
                    </Link>
                    <Link
                      href="/services"
                      className="block text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Service Details */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p className="text-gray-600 mb-6">
                  We specialize in digital transformation and technology consulting that helps businesses modernize their operations and achieve competitive advantages through strategic technology implementation.
                </p>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">What We Provide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {strategy.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <CogIcon className="h-5 w-5 text-orange-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{feature}</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {getFeatureDescription(feature)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {strategy.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-gray-50 rounded-lg px-4 py-3 text-center"
                    >
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Examples */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service Examples</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Technology Assessment",
                      description: "Comprehensive evaluation of current technology stack and identification of improvement opportunities.",
                      icon: RocketLaunchIcon
                    },
                    {
                      title: "Digital Transformation",
                      description: "End-to-end digital transformation strategies to modernize business processes and systems.",
                      icon: UserGroupIcon
                    },
                    {
                      title: "Process Automation",
                      description: "Workflow automation and business process optimization to improve efficiency and reduce costs.",
                      icon: ClockIcon
                    },
                    {
                      title: "Legacy Modernization",
                      description: "Migration and modernization of legacy systems to modern, scalable architectures.",
                      icon: CogIcon
                    }
                  ].map((example) => (
                    <motion.div
                      key={example.title}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <example.icon className="h-5 w-5 text-orange-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{example.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{example.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-orange-600 to-amber-700"
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
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss your digital transformation needs and create a strategic roadmap that drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
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

// Helper functions for descriptions
function getProcessDescription(step: string): string {
  const descriptions: Record<string, string> = {
    "Current State Analysis": "We analyze your current technology landscape, processes, and business objectives.",
    "Gap Assessment": "We identify gaps between current capabilities and desired outcomes.",
    "Strategy Development": "We create a comprehensive digital transformation strategy tailored to your business.",
    "Implementation Planning": "Detailed roadmap and implementation plan with clear milestones and deliverables.",
    "Change Management": "Support for organizational change and user adoption of new technologies.",
    "Success Monitoring": "Ongoing monitoring and optimization to ensure strategy success and ROI."
  }
  return descriptions[step] || "Professional strategy development step with industry best practices."
}

function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "Technology Consulting": "Expert guidance on technology decisions, architecture, and implementation strategies.",
    "Digital Transformation": "End-to-end digital transformation strategies to modernize business operations.",
    "Process Automation": "Workflow automation and business process optimization for improved efficiency.",
    "Legacy Modernization": "Migration and modernization of legacy systems to modern, scalable architectures."
  }
  return descriptions[feature] || "Professional digital strategy solution tailored to your business needs."
} 