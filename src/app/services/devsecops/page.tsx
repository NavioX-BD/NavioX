'use client'

import { loadServicesData } from '@/lib/data-loader'
import {
    CheckIcon,
    CogIcon,
    LockClosedIcon,
    RocketLaunchIcon,
    ServerIcon,
    ShieldCheckIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DevSecOpsPage() {
  const servicesData = loadServicesData()
  const devsecops = servicesData.serviceCategories.find(service => service.id === 'devsecops')

  if (!devsecops) {
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
        className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20"
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
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              <span className="text-emerald-100">DevSecOps Excellence</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              DevSecOps & Security Automation
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto"
            >
              {devsecops.description}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
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
                  <CogIcon className="h-6 w-6 mr-3 text-emerald-600" />
                  DevSecOps Process
                </h2>
                <div className="space-y-4">
                  {devsecops.process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
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
                  <ShieldCheckIcon className="h-6 w-6 mr-3 text-emerald-600" />
                  Key Benefits
                </h2>
                <div className="space-y-3">
                  {[
                    "Security by Design",
                    "Automated Security",
                    "Compliance Ready",
                    "Risk Reduction",
                    "Continuous Monitoring",
                    "Zero Trust Architecture"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="h-6 w-6 mr-3 text-emerald-600" />
                  Get Started
                </h2>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Ready to Secure?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Let&rsquo;s discuss your DevSecOps needs and create a security-first infrastructure.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                    >
                      Start Your Project →
                    </Link>
                    <Link
                      href="/projects"
                      className="block text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                    >
                      View Security Projects →
                    </Link>
                    <Link
                      href="/services"
                      className="block text-emerald-600 hover:text-emerald-700 font-medium text-sm"
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
                  DevSecOps is our core expertise. We integrate security into every stage of the development lifecycle, ensuring your applications and infrastructure are secure by design, not as an afterthought.
                </p>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">What We Provide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {devsecops.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                          <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Security Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {devsecops.technologies.map((tech) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-6">Security Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "CI/CD Security",
                      description: "Automated security scanning and vulnerability assessment in deployment pipelines.",
                      icon: RocketLaunchIcon
                    },
                    {
                      title: "Infrastructure Security",
                      description: "Secure cloud infrastructure with automated compliance and governance.",
                      icon: ServerIcon
                    },
                    {
                      title: "Container Security",
                      description: "Docker and Kubernetes security with runtime protection and scanning.",
                      icon: LockClosedIcon
                    },
                    {
                      title: "Compliance Automation",
                      description: "Automated compliance checks for SOC2, GDPR, HIPAA, and industry standards.",
                      icon: ShieldCheckIcon
                    }
                  ].map((example) => (
                    <motion.div
                      key={example.title}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                          <example.icon className="h-5 w-5 text-emerald-600" />
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
        className="py-20 bg-gradient-to-r from-emerald-600 to-green-700"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss your DevSecOps requirements and create a security-first infrastructure that protects your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
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
    "Security Assessment": "We evaluate your current security posture and identify vulnerabilities and risks.",
    "DevSecOps Implementation": "We integrate security tools and practices into your development pipeline.",
    "Security Automation": "We automate security scanning, testing, and compliance checks throughout the CI/CD process.",
    "Compliance Setup": "We configure automated compliance monitoring for industry standards and regulations.",
    "Security Monitoring": "We implement continuous security monitoring and alerting for threats and vulnerabilities.",
    "Continuous Security": "We maintain ongoing security improvements and updates to keep your systems protected."
  }
  return descriptions[step] || "Professional DevSecOps implementation step with industry best practices."
}

function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    "Security Automation": "Automated security scanning, testing, and compliance checks integrated into your CI/CD pipeline.",
    "CI/CD Security": "Security-first deployment pipelines with automated vulnerability assessment and threat detection.",
    "Infrastructure Security": "Secure cloud infrastructure with automated compliance, governance, and security controls.",
    "Compliance & Governance": "Automated compliance monitoring for SOC2, GDPR, HIPAA, and industry-specific regulations."
  }
  return descriptions[feature] || "Professional DevSecOps solution tailored to your security needs."
} 