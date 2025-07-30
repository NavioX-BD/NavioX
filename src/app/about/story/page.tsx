'use client'

import { loadCompanyStats, loadStoryData } from '@/lib/data-loader'
import {
  BeakerIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MapPinIcon,
  RocketLaunchIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OurStoryPage() {
  const { storyElements, whatSetsUsApart } = loadStoryData()
  const { companyStats } = loadCompanyStats()

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

  // Icon mapping for dynamic rendering
  const iconMap = {
    StarIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
    MapPinIcon,
    UserGroupIcon,
    BeakerIcon,
    ChartBarIcon
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
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The journey of NavioX—from a simple idea to becoming your trusted digital navigator 
              in the vast ocean of software engineering.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Charting Digital Excellence Since 2025</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Left Column - Stats & Values */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Journey
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-xs font-medium text-gray-700">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* What Sets Us Apart */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <StarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  What Sets Us Apart
                </h2>
                <div className="space-y-4">
                  {whatSetsUsApart.map((item, index) => {
                    const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 4) * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                      >
                        <div className="flex items-start">
                          <div className="p-3 rounded-lg bg-blue-100 mr-4">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-blue-600 font-medium">{item.subtitle}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <RocketLaunchIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Learn More
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Explore Our Journey</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover more about our mission, leadership, and values.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/about/mission"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Mission & Vision →
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Leadership Team →
                    </Link>
                    <Link
                      href="/about"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      About Us →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Story Elements */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Story</h2>
              <p className="text-gray-600">
                The journey of NavioX—from a simple idea to becoming your trusted digital navigator.
              </p>
            </div>
            
            <div className="space-y-8">
              {storyElements.map((element, index) => {
                const IconComponent = iconMap[element.icon as keyof typeof iconMap]
                return (
                  <motion.div key={element.title} variants={itemVariants}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-lg bg-blue-100 mr-4">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{element.title}</h3>
                          <p className="text-gray-600">{element.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {element.content.map((content, contentIndex) => (
                          <motion.div
                            key={content.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index * 0.2) + (contentIndex * 0.1) }}
                            className="border-l-4 border-blue-200 pl-6"
                          >
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{content.subtitle}</h4>
                            <p className="text-gray-700 leading-relaxed">{content.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Digital Story?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s discuss your project and see how we can help you navigate the digital landscape with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about/mission"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn Our Mission
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 