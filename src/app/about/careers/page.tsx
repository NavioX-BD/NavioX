'use client'

import { loadCareersData, loadCompanyStats } from '@/lib/data-loader'
import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  MapPinIcon,
  RocketLaunchIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CareersPage() {
  const { openPositions, companyCulture, benefits } = loadCareersData()
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

  // Icon mapping for dynamic icon rendering
  const iconMap = {
    AcademicCapIcon,
    BeakerIcon,
    BriefcaseIcon,
    ClockIcon,
    GlobeAltIcon,
    HeartIcon,
    LightBulbIcon,
    MapPinIcon,
    RocketLaunchIcon,
    StarIcon,
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
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Become part of our mission to chart digital excellence. Join a team of passionate 
              professionals who are transforming businesses through innovative technology solutions.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">We&rsquo;re Growing!</span>
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
          {/* Left Column - Stats & Culture */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Growth
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

              {/* Company Culture */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HeartIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Culture
                </h2>
                <div className="space-y-4">
                  {companyCulture.slice(0, 4).map((culture, index) => {
                    const IconComponent = iconMap[culture.icon as keyof typeof iconMap]
                    return (
                      <motion.div
                        key={culture.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 4) * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                      >
                        <div className="flex items-start">
                          <div className={`p-3 rounded-lg bg-${culture.color}-100 mr-4`}>
                            <IconComponent className={`h-6 w-6 text-${culture.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{culture.title}</h3>
                            <p className="text-sm text-gray-600">{culture.description}</p>
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
                  <h3 className="font-semibold text-gray-900 mb-3">Explore Our Team</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn more about our leadership, mission, and values.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/about/leadership"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Leadership Team →
                    </Link>
                    <Link
                      href="/about/mission"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Mission & Vision →
                    </Link>
                    <Link
                      href="/about/story"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Our Story →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits & Positions */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Team</h2>
              <p className="text-gray-600">
                Become part of our mission to chart digital excellence and transform businesses through innovative technology solutions.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <StarIcon className="h-6 w-6 mr-3 text-blue-600" />
                Benefits & Perks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg bg-${benefit.color}-100 mr-4`}>
                          <IconComponent className={`h-6 w-6 text-${benefit.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Open Positions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BriefcaseIcon className="h-6 w-6 mr-3 text-blue-600" />
                Open Positions
              </h2>
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <AcademicCapIcon className="h-4 w-4 mr-1" />
                            {position.experience}
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Apply Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
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
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s discuss how you can contribute to our team and help us chart digital excellence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about/leadership"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 