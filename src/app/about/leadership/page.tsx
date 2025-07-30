'use client'

import { loadCompanyStats, loadLeadershipData, loadTeamData } from '@/lib/data-loader'
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  LightBulbIcon,
  MapPinIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LeadershipPage() {
  const { leadershipTeam } = loadTeamData()
  const { leadershipStats } = loadCompanyStats()
  const { leadershipValues } = loadLeadershipData()

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
    LightBulbIcon,
    ChartBarIcon,
    ShieldCheckIcon,
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
              Leadership Team
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Meet the visionary leaders who guide NavioX&rsquo;s journey to become your trusted digital navigator. 
              Our executive team brings together diverse expertise and global perspectives.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <BuildingOfficeIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Charting the Course to Success</span>
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
          {/* Leadership Stats - Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Leadership Statistics */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Leadership Overview
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {leadershipStats.map((stat, index) => (
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

              {/* Leadership Values */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LightBulbIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Values
                </h2>
                <div className="space-y-4">
                  {leadershipValues.map((value, index) => {
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

              {/* Join Our Team */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <RocketLaunchIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Join Our Team
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">We&apos;re Growing!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Join our team of digital navigators and help us chart the course for innovative software solutions.
                  </p>
                  <Link
                    href="/about/careers"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Open Positions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Members - Right Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the experts who lead our mission to transform businesses through innovative technology solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Member Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.role}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {member.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Experience:</span>
                          <div className="font-medium">{member.experience}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Education:</span>
                          <div className="font-medium">{member.education}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Links */}
                      <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Email
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Our Leadership?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let&rsquo;s discuss your project and see how our experienced leadership team can guide your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/about/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 