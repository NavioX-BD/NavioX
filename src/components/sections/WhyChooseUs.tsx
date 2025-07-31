'use client'

import {
  BoltIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const reasons = [
  {
    id: 1,
    title: 'Technical Excellence',
    description: 'Our team consists of senior engineers with deep expertise in modern technologies and best practices.',
    icon: BoltIcon,
    details: [
      'Average 8+ years of experience',
      'Certified in latest technologies',
      'Continuous learning culture',
      'Open source contributors'
    ]
  },
  {
    id: 2,
    title: 'Security First',
    description: 'We prioritize security at every stage of development with enterprise-grade protection.',
    icon: ShieldCheckIcon,
    details: [
      'OWASP security standards',
      'Regular security audits',
      'Encrypted data handling',
      'Compliance ready solutions'
    ]
  },
  {
    id: 3,
    title: 'Dedicated Teams',
    description: 'Work with a dedicated team that becomes an extension of your organization.',
    icon: UserGroupIcon,
    details: [
      'Consistent team members',
      'Direct communication channels',
      'Aligned with your goals',
      'Cultural fit assessment'
    ]
  },
  {
    id: 4,
    title: 'Agile Delivery',
    description: 'Fast, iterative development with regular feedback loops and transparent progress tracking.',
    icon: ClockIcon,
    details: [
      '2-week sprint cycles',
      'Daily standups',
      'Regular demos',
      'Continuous integration'
    ]
  },
  {
    id: 5,
    title: 'Clear Communication',
    description: 'Transparent communication with regular updates and collaborative decision-making.',
    icon: ChatBubbleLeftRightIcon,
    details: [
      'Weekly progress reports',
      'Real-time project dashboards',
      'Direct team access',
      'Multiple communication channels'
    ]
  },
  {
    id: 6,
    title: 'Scalable Architecture',
    description: 'Future-proof solutions built to scale with your business growth and evolving needs.',
    icon: CogIcon,
    details: [
      'Microservices architecture',
      'Cloud-native solutions',
      'Performance optimization',
      'Modular design patterns'
    ]
  },
  {
    id: 7,
    title: 'Data-Driven Decisions',
    description: 'Leverage analytics and metrics to make informed decisions throughout the development process.',
    icon: ChartBarIcon,
    details: [
      'Performance monitoring',
      'User behavior analytics',
      'A/B testing capabilities',
      'ROI measurement'
    ]
  },
  {
    id: 8,
    title: 'Global Reach',
    description: 'Work across time zones with flexible scheduling and 24/7 support capabilities.',
    icon: GlobeAltIcon,
    details: [
      'Multi-timezone coverage',
      'Flexible working hours',
      'Global best practices',
      'Cultural diversity'
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const WhyChooseUs = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose NavioX</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Success is Our Mission
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <motion.div
                key={reason.id}
                variants={item}
                className="group relative"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 h-full">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300 mb-6">
                    <reason.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {reason.details.map((detail) => (
                      <li key={detail} className="flex items-center text-xs text-gray-500">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            
            <div className="relative">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join 150+ companies that have trusted NavioX to deliver exceptional software solutions. Let&apos;s discuss how we can help you achieve your goals.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                  >
                    Start Your Project
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 