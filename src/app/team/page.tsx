'use client'

import { loadCompanyStats, loadTeamData } from '@/lib/data-loader'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function TeamPage() {
  const { teamMembers, leadershipTeam } = loadTeamData()
  const { leadershipStats, companyStats } = loadCompanyStats()
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
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
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Meet Our Team
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Our diverse team of passionate professionals brings together decades of combined experience 
              in software engineering, design, and digital strategy.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Passionate Professionals, Exceptional Results</span>
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
          {/* Left Column - Stats & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Team Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Team Overview
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat) => (
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

              {/* Leadership Stats */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <StarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Leadership Stats
                </h2>
                <div className="space-y-4">
                  {leadershipStats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className="p-3 rounded-lg bg-blue-100 mr-4">
                          <ChartBarIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Connect With Us
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ready to work with our team? Let&rsquo;s discuss your project.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Start Your Project →
                    </Link>
                    <Link
                      href="/about/careers"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Join Our Team →
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Leadership Team →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Team Members */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Core Team</h2>
              <p className="text-gray-600">
                Meet the experts who make NavioX a trusted partner for digital transformation.
              </p>
            </div>
            
            {/* Team Members Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredMember(member.name)}
                  onHoverEnd={() => setHoveredMember(null)}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Member Header */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden">
                    {/* Avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>

                    {/* Leadership Badge */}
                    {leadershipTeam.some(lead => lead.name === member.name) && (
                      <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <StarIcon className="h-3 w-3" />
                        Leadership
                      </div>
                    )}

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === member.name ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90 flex items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <div className="text-sm font-medium mb-2">Get in touch</div>
                        <div className="flex justify-center gap-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <EnvelopeIcon className="h-4 w-4" />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6">
                    {/* Name and Role */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <WrenchScrewdriverIcon className="h-4 w-4 mr-2 text-blue-600" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                            +{member.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Experience and Education */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <BriefcaseIcon className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="font-medium text-gray-900">Experience</span>
                        </div>
                        <div className="text-gray-700">{member.experience}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <AcademicCapIcon className="h-4 w-4 mr-2 text-green-600" />
                          <span className="font-medium text-gray-900">Education</span>
                        </div>
                        <div className="text-gray-700">{member.education}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss your project and see how our expert team can help you achieve your digital goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Start Your Project
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about/careers"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Join Our Team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 