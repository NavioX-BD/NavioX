'use client'

import { loadCompanyStats, loadMissionData } from '@/lib/data-loader'
import {
  BeakerIcon,
  ChartBarIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MissionVisionPage() {
  const { successMetrics } = loadCompanyStats()
  const { missionVision, coreValues, brandValues } = loadMissionData()

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
    RocketLaunchIcon,
    StarIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    BeakerIcon,
    UserGroupIcon,
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
              Mission & Vision
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our mission and vision guide every decision we make, every line of code we write, 
              and every partnership we build. We&rsquo;re not just building software—we&rsquo;re charting digital destinies.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Your Digital Compass to Success</span>
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
          {/* Left Column - Success Metrics & Values */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Success Metrics */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Success Metrics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {successMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">{metric.metric}</div>
                      <div className="text-xs font-medium text-gray-700">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <StarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Core Values
                </h2>
                <div className="space-y-4">
                  {coreValues.map((value, index) => {
                    const IconComponent = iconMap[value.icon as keyof typeof iconMap]
                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 4) * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                      >
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg bg-${value.color}-100 mr-4`}>
                            <IconComponent className={`h-6 w-6 text-${value.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-600">{value.description}</p>
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
                  <h3 className="font-semibold text-gray-900 mb-3">Explore Our Story</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover our journey and learn more about our team and values.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/about/story"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Our Story →
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

          {/* Right Column - Mission & Vision */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Mission & Vision</h2>
              <p className="text-gray-600">
                Our mission and vision guide every decision we make, every line of code we write, 
                and every partnership we build.
              </p>
            </div>
            
            <div className="space-y-8">
              {missionVision.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <motion.div key={item.title} variants={itemVariants}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-lg bg-${item.color}-100 mr-4`}>
                          <IconComponent className={`h-8 w-8 text-${item.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {item.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index * 0.2) + (detailIndex * 0.1) }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Brand Values */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HeartIcon className="h-6 w-6 mr-3 text-blue-600" />
                Brand Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {brandValues.map((value, index) => {
                  const IconComponent = iconMap[value.icon as keyof typeof iconMap]
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg bg-${value.color}-100 mr-4`}>
                          <IconComponent className={`h-6 w-6 text-${value.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                          <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Navigate Your Digital Future?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s discuss your project and see how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/about/story"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 