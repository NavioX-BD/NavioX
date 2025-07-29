'use client'

import {
  AcademicCapIcon,
  BeakerIcon,
  BuildingOfficeIcon,
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

export default function AboutPage() {
  const companyStats = [
    { number: '2025', label: 'Launch Year' },
    { number: '10K+', label: 'Monthly Visitors Target' },
    { number: '50+', label: 'Leads per Month' },
    { number: '95%+', label: 'Client Satisfaction' }
  ]

  const coreValues = [
    {
      title: 'Direction',
      description: 'Every project has a true north—we help you find it and stay on course.',
      icon: LightBulbIcon,
      color: 'blue'
    },
    {
      title: 'Stability',
      description: 'In turbulent digital seas, we provide the anchor of reliable, secure solutions.',
      icon: ShieldCheckIcon,
      color: 'green'
    },
    {
      title: 'Adaptability',
      description: 'Like skilled sailors, we adjust our approach when conditions change.',
      icon: GlobeAltIcon,
      color: 'purple'
    },
    {
      title: 'Partnership',
      description: 'We&rsquo;re not just your service provider—we&rsquo;re your co-navigators on this digital voyage.',
      icon: UserGroupIcon,
      color: 'orange'
    }
  ]

  const milestones = [
    {
      year: '2025',
      title: 'NavioX Launch',
      description: 'NavioX Solutions Inc. officially launches with the mission to be your digital compass in the software engineering ocean.',
      icon: RocketLaunchIcon
    },
    {
      year: '2025',
      title: 'Brand Establishment',
      description: 'Establishing NavioX as a trusted software engineering company with professional credibility and lead generation.',
      icon: StarIcon
    },
    {
      year: '2025',
      title: 'Portfolio Development',
      description: 'Building our portfolio showcase to display technical expertise through project case studies.',
      icon: ChartBarIcon
    },
    {
      year: '2025',
      title: 'Client Relationships',
      description: 'Providing seamless communication and project tracking for our valued clients.',
      icon: UserGroupIcon
    },
    {
      year: '2025',
      title: 'Market Positioning',
      description: 'Positioning NavioX as an industry leader in software engineering with strong brand recognition.',
      icon: GlobeAltIcon
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Working towards becoming the lighthouse of innovation in the software engineering ocean.',
      icon: HeartIcon
    }
  ]

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
              About NavioX
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We are your digital compass, guiding businesses through uncharted technological territories 
              with precision-crafted software solutions. We don&rsquo;t just write code—we plot your digital destiny.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <BuildingOfficeIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Charting Digital Excellence, Navigating Your Success</span>
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
          {/* Company Stats - Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company Statistics */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Impact
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                      <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HeartIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Values
                </h2>
                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg bg-${value.color}-100 mr-4`}>
                          <value.icon className={`h-6 w-6 text-${value.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                          <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Get Started */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <RocketLaunchIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Ready to Start?
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Let&rsquo;s Build Together</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ready to transform your business with innovative software solutions? 
                    Let&rsquo;s discuss your project and chart the course to success.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Start Your Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content - Right Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-12">
              {/* About Us */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      NavioX Solutions Inc. is a forward-thinking software engineering company dedicated to 
                      transforming businesses through innovative digital solutions. We specialize in creating 
                      cutting-edge web applications, mobile solutions, and digital platforms that drive growth 
                      and competitive advantage for our clients.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our team of experienced developers, designers, and strategists work collaboratively to 
                      deliver solutions that not only meet technical requirements but also align with business 
                      objectives. We believe in the power of technology to solve complex challenges and create 
                      meaningful impact for organizations across various industries.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      With a focus on modern technologies, best practices, and user-centered design, we help 
                      businesses navigate the digital landscape with confidence. Our commitment to excellence, 
                      innovation, and client success drives everything we do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                                     <p className="text-gray-700 leading-relaxed">
                     NavioX Solutions Inc. serves as your digital compass, guiding businesses through 
                     uncharted technological territories with precision-crafted software solutions. We don&rsquo;t 
                     just write code—we plot your digital destiny, ensuring every line of code steers your 
                     business toward sustainable growth and competitive advantage.
                   </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-indigo-100 mr-4">
                      <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                                     <p className="text-gray-700 leading-relaxed">
                     To become the lighthouse of innovation in the software engineering ocean—where businesses 
                     navigate to find their true digital north, transforming complex challenges into streamlined 
                     solutions that propel them beyond their horizons.
                   </p>
                </div>
              </div>

              {/* Company Journey */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <milestone.icon className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-lg font-bold text-blue-600 mr-3">{milestone.year}</span>
                            <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Culture Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Brand Values</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Anchored in navigation principles, our values guide every decision and action we take 
               in serving our clients and building lasting partnerships.
             </p>
           </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              </div>
                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
               <p className="text-gray-600">
                 We don&rsquo;t just reach your intended destination—we help you discover new islands of opportunity.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-green-600" />
              </div>
                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
               <p className="text-gray-600">
                 We maintain the highest standards in code quality, design, and delivery processes.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BeakerIcon className="h-8 w-8 text-purple-600" />
              </div>
                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
               <p className="text-gray-600">
                 Honest, transparent, and ethical business practices in everything we do.
               </p>
            </motion.div>
          </div>
        </motion.section>

                {/* Navigation Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learn More About NavioX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/about/story"
                className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Story</h3>
                <p className="text-gray-600 text-sm">Learn how NavioX was founded and our journey</p>
              </Link>
              <Link
                href="/about/mission"
                className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission & Vision</h3>
                <p className="text-gray-600 text-sm">Our core values and goals</p>
              </Link>
              <Link
                href="/about/leadership"
                className="block p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership Team</h3>
                <p className="text-gray-600 text-sm">Meet our executives and key leaders</p>
              </Link>
              <Link
                href="/about/careers"
                className="block p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Careers</h3>
                <p className="text-gray-600 text-sm">Join our growing team</p>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Chart Your Digital Course?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            When you partner with NavioX, you&rsquo;re not just hiring developers—you&rsquo;re commissioning master navigators 
            who will guide your business through the digital ocean to shores of unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/team"
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