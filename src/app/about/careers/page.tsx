'use client'

import { loadCareersData } from '@/lib/data-loader'
import {
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
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CareersPage() {
  const { openPositions, companyCulture, benefits } = loadCareersData()

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
    UserGroupIcon
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
          className="space-y-16"
        >
          {/* Why Join NavioX */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join NavioX?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&rsquo;re not just building software—we&rsquo;re charting digital destinies. Join us in our mission 
                to become the lighthouse of innovation in the software engineering ocean.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyCulture.map((culture, index) => {
                const IconComponent = iconMap[culture.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={culture.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
                  >
                    <div className={`bg-${culture.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 text-${culture.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{culture.title}</h3>
                    <p className="text-gray-600">
                      {culture.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in taking care of our team members. Here&rsquo;s what we offer to support your growth and well-being.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </motion.div>

          {/* Open Positions */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to join our team? Explore our current openings and find the perfect role for your skills and aspirations.
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <BriefcaseIcon className="h-4 w-4 mr-1" />
                            {position.department}
                          </span>
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
                      <Link
                        href={`mailto:careers@navioxbd.com?subject=Application for ${position.title}`}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Apply Now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{position.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Application Process</h2>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">1</div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-blue-100 text-sm">Submit your application and portfolio</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">2</div>
                  <h3 className="font-semibold mb-2">Review</h3>
                  <p className="text-blue-100 text-sm">We&rsquo;ll review your application within 48 hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">3</div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-blue-100 text-sm">Technical and cultural fit interviews</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">4</div>
                  <h3 className="font-semibold mb-2">Join</h3>
                  <p className="text-blue-100 text-sm">Welcome to the NavioX team!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&rsquo;t see a position that matches your skills? We&rsquo;re always looking for talented individuals 
              to join our team. Send us your resume and let&rsquo;s discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@navioxbd.com?subject=General Application"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send General Application
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 