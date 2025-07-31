'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Mobile Projects data
const mobileProjectsData = {
  stats: {
    totalMobileApps: "35+",
    appStoreRating: "4.8/5",
    totalDownloads: "500K+",
    platforms: "iOS & Android"
  },
  featuredProjects: [
    {
      id: 1,
      title: "Mobile Banking App",
      category: "Fintech",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      technologies: ["React Native", "Node.js", "Firebase", "Stripe", "AWS"],
      image: "/images/projects/banking.jpg",
      client: "DigitalBank Ltd.",
      duration: "4 months",
      platforms: ["iOS", "Android"],
      results: [
        "50% increase in mobile transactions",
        "Enhanced security with biometric auth",
        "4.8/5 user rating"
      ]
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Health & Fitness",
      description: "A comprehensive fitness app with workout tracking, nutrition planning, and social features for motivation.",
      technologies: ["Flutter", "Firebase", "Google Fit", "Apple HealthKit"],
      image: "/images/projects/fitness.jpg",
      client: "FitLife Solutions",
      duration: "3 months",
      platforms: ["iOS", "Android"],
      results: [
        "100K+ active users",
        "85% user retention rate",
        "Featured on App Store"
      ]
    },
    {
      id: 3,
      title: "Food Delivery Platform",
      category: "E-commerce",
      description: "A complete food delivery ecosystem with customer app, restaurant dashboard, and delivery tracking.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      image: "/images/projects/food-delivery.jpg",
      client: "QuickEats Inc.",
      duration: "5 months",
      platforms: ["iOS", "Android", "Web"],
      results: [
        "200+ restaurant partners",
        "30% faster delivery times",
        "95% customer satisfaction"
      ]
    },
    {
      id: 4,
      title: "Educational Learning App",
      category: "Education",
      description: "An interactive learning platform for students with gamified lessons and progress tracking.",
      technologies: ["Flutter", "Firebase", "WebRTC", "Stripe"],
      image: "/images/projects/education-mobile.jpg",
      client: "LearnSmart Academy",
      duration: "4 months",
      platforms: ["iOS", "Android"],
      results: [
        "50K+ student users",
        "90% course completion rate",
        "Teachers' Choice Award"
      ]
    }
  ],
  appTypes: [
    {
      type: "Native iOS Apps",
      description: "Swift-based applications optimized for iOS ecosystem",
      features: ["Native performance", "iOS-specific features", "App Store optimization", "SwiftUI integration"]
    },
    {
      type: "Native Android Apps",
      description: "Kotlin applications leveraging Android capabilities",
      features: ["Material Design", "Google Play optimization", "Android ecosystem", "Jetpack Compose"]
    },
    {
      type: "Cross-Platform Apps",
      description: "React Native and Flutter applications for multiple platforms",
      features: ["Code reusability", "Faster development", "Cost-effective", "Unified experience"]
    },
    {
      type: "Progressive Web Apps",
      description: "Web applications with native app-like experiences",
      features: ["Offline functionality", "Push notifications", "App-like interface", "Cross-platform"]
    }
  ]
}

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

export default function MobileProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 mb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <DevicePhoneMobileIcon className="h-4 w-4 text-green-300 mr-2" />
              <span className="text-sm font-medium text-green-100">Mobile Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Mobile App
              <span className="block bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-green-100 max-w-3xl mx-auto mb-10"
            >
              Explore our mobile application portfolio featuring native iOS, Android, and cross-platform solutions 
              that deliver exceptional user experiences and drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Mobile Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#featured-projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{mobileProjectsData.stats.totalMobileApps}</div>
              <div className="text-sm font-medium text-slate-600">Mobile Apps Built</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{mobileProjectsData.stats.appStoreRating}</div>
              <div className="text-sm font-medium text-slate-600">Average App Rating</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{mobileProjectsData.stats.totalDownloads}</div>
              <div className="text-sm font-medium text-slate-600">Total Downloads</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Mobile Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover our most successful mobile applications across various industries and platforms.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mobileProjectsData.featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.platforms.map((platform) => (
                        <span key={platform} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Mobile App Development Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in various mobile app development approaches to meet your specific needs and requirements.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mobileProjectsData.appTypes.map((type) => (
              <motion.div
                key={type.type}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {type.type}
                </h3>
                <p className="text-slate-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-3">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Let&apos;s create a mobile application that engages your users and drives your business forward. From concept to App Store, we&apos;ll guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your Mobile Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}