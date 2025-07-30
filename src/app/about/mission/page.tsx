'use client'

import {
    BeakerIcon,
    ChartBarIcon,
    GlobeAltIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    StarIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { loadCompanyStats } from '@/lib/data-loader'

export default function MissionVisionPage() {
  const { successMetrics } = loadCompanyStats()
  
  const missionVision = [
    {
      title: 'Our Mission',
      icon: RocketLaunchIcon,
      color: 'blue',
      description: 'NavioX Solutions Inc. serves as your digital compass, guiding businesses through uncharted technological territories with precision-crafted software solutions. We don&rsquo;t just write code—we plot your digital destiny, ensuring every line of code steers your business toward sustainable growth and competitive advantage.',
      details: [
        'Empower businesses with innovative software solutions',
        'Drive growth, efficiency, and competitive advantage',
        'Transform complex technological challenges into elegant solutions',
        'Ensure every line of code serves your business compass'
      ]
    },
    {
      title: 'Our Vision',
      icon: StarIcon,
      color: 'purple',
      description: 'To become the lighthouse of innovation in the software engineering ocean—where businesses navigate to find their true digital north, transforming complex challenges into streamlined solutions that propel them beyond their horizons.',
      details: [
        'Become the lighthouse of innovation in software engineering',
        'Help businesses find their true digital north',
        'Transform complex challenges into streamlined solutions',
        'Propel businesses beyond their horizons'
      ]
    }
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
      title: 'Discovery',
      description: 'We don&rsquo;t just reach your intended destination—we help you discover new islands of opportunity.',
      icon: BeakerIcon,
      color: 'orange'
    },
    {
      title: 'Partnership',
      description: 'We&rsquo;re not just your service provider—we&rsquo;re your co-navigators on this digital voyage.',
      icon: UserGroupIcon,
      color: 'indigo'
    }
  ]

  const brandValues = [
    {
      title: 'Integrity',
      description: 'Honest, transparent, and ethical business practices in everything we do.',
      icon: ShieldCheckIcon,
      color: 'blue'
    },
    {
      title: 'Innovation',
      description: 'Continuous learning and adoption of new technologies.',
      icon: LightBulbIcon,
      color: 'yellow'
    },
    {
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality solutions.',
      icon: StarIcon,
      color: 'purple'
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients as true partners.',
      icon: UserGroupIcon,
      color: 'green'
    },
    {
      title: 'Growth',
      description: 'Supporting client success and business growth.',
      icon: ChartBarIcon,
      color: 'indigo'
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
              Mission & Vision
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our guiding principles and aspirations that drive every decision and action 
              in our journey to become your trusted digital navigator.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Charting Digital Excellence</span>
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
          {/* Mission & Vision Cards */}
          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-2 gap-8">
              {missionVision.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-${item.color}-100 mr-4`}>
                      <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full bg-${item.color}-600 mt-2 mr-3 flex-shrink-0`}></div>
                        <p className="text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Anchored in navigation principles, these values guide every decision and action we take 
                in serving our clients and building lasting partnerships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
          </motion.div>

          {/* Brand Values */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Brand Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental principles that define our company culture and approach to business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
          </motion.div>

          {/* Success Metrics */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Success Metrics</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Measurable goals that guide our progress and define our success in serving our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Long-term Vision */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Long-term Vision (2-3 Years)</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Market Position</h3>
                  <p className="text-blue-100 text-sm">Top 3 software engineering companies in region</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Service Expansion</h3>
                  <p className="text-blue-100 text-sm">Additional service offerings and specializations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-blue-100 text-sm">International client base and partnerships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More About NavioX</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/about/story"
                className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Story</h3>
                <p className="text-gray-600 text-sm">Learn how NavioX was founded</p>
              </Link>
              <Link
                href="/about/leadership"
                className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership Team</h3>
                <p className="text-gray-600 text-sm">Meet our executives and key leaders</p>
              </Link>
              <Link
                href="/about/careers"
                className="block p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Careers</h3>
                <p className="text-gray-600 text-sm">Join our growing team</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 