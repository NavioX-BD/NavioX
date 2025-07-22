'use client'

import {
    ArrowRightIcon,
    ChartBarIcon,
    CloudArrowUpIcon,
    CodeBracketIcon,
    CogIcon,
    DevicePhoneMobileIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Custom Software Development',
    description: 'End-to-end custom software solutions tailored to your business needs, from concept to deployment.',
    icon: CodeBracketIcon,
    features: ['Web Applications', 'Enterprise Software', 'API Development', 'System Integration'],
    href: '/services/web-development'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: DevicePhoneMobileIcon,
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    href: '/services/mobile-apps'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and modern DevOps practices for reliable, high-performance applications.',
    icon: CloudArrowUpIcon,
    features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Microservices', 'Serverless'],
    href: '/services/cloud'
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic consulting and implementation to modernize your technology stack and business processes.',
    icon: CogIcon,
    features: ['Legacy Modernization', 'Process Automation', 'Digital Strategy', 'Technology Consulting'],
    href: '/services/strategy'
  },
  {
    title: 'Data & Analytics',
    description: 'Transform your data into actionable insights with modern analytics and business intelligence solutions.',
    icon: ChartBarIcon,
    features: ['Data Engineering', 'Business Intelligence', 'Machine Learning', 'Real-time Analytics'],
    href: '/services/data-analytics'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality assurance to ensure your software meets the highest standards.',
    icon: ShieldCheckIcon,
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'QA Consulting'],
    href: '/services/qa'
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

const Services = () => {
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
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Full-Stack Software Engineering
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive software development services to help businesses transform their ideas into robust, scalable solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-base text-gray-600 mb-8">
            Need a custom solution? We&apos;ll work with you to understand your unique requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
          >
            Discuss Your Project
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 