'use client'

import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Platform Modernization',
    client: 'Global Retail Corp',
    industry: 'Retail & E-commerce',
    description: 'Complete overhaul of legacy e-commerce platform resulting in 300% performance improvement and 45% increase in conversion rates.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
    metrics: [
      { label: 'Performance Boost', value: '300%' },
      { label: 'Conversion Increase', value: '45%' },
      { label: 'Page Load Time', value: '2.1s' }
    ],
    image: '/images/projects/ecommerce-project.jpg',
    href: '/projects/ecommerce-modernization',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Healthcare Data Analytics Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    description: 'AI-powered analytics platform for processing medical data, improving patient outcomes by 25% through predictive insights.',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'Data Processing', value: '10TB/day' },
      { label: 'Accuracy Improvement', value: '25%' },
      { label: 'Response Time', value: '<500ms' }
    ],
    image: '/images/projects/healthcare-analytics.jpg',
    href: '/projects/healthcare-analytics',
    category: 'AI & Analytics'
  },
  {
    id: 3,
    title: 'Financial Trading Mobile App',
    client: 'FinTech Innovations',
    industry: 'Finance',
    description: 'Cross-platform mobile trading application with real-time market data and advanced security features.',
    technologies: ['React Native', 'Firebase', 'WebSocket', 'Blockchain'],
    metrics: [
      { label: 'Active Users', value: '50K+' },
      { label: 'Trade Volume', value: '$2M/day' },
      { label: 'App Rating', value: '4.8★' }
    ],
    image: '/images/projects/trading-app.jpg',
    href: '/projects/trading-app',
    category: 'Mobile Development'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const CaseStudies = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Results for Real Businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we&apos;ve helped companies transform their digital presence and achieve measurable business growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={item}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                      {study.category}
                    </span>
                  </div>
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-4xl font-bold">
                      {study.title.split(' ')[0].charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Client & Industry */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600">{study.client}</span>
                    <span className="text-xs text-gray-500">{study.industry}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={study.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    View Case Study
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-base text-gray-600 mb-8">
            Explore more success stories and see how we can help your business achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
            >
              View All Projects
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies 