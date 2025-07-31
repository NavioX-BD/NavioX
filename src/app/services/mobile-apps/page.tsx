'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    DevicePhoneMobileIcon,
    StarIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Mobile Apps service data
const mobileService = {
  id: 'mobile-apps',
  name: 'Mobile App Development',
  description: 'Native and cross-platform mobile applications for iOS and Android',
  features: [
    'iOS Native Development (Swift)',
    'Android Native Development (Kotlin)',
    'Cross-Platform Apps (React Native)',
    'Flutter Development',
    'Progressive Web Apps (PWA)',
    'Mobile Backend Services',
    'App Store Optimization',
    'Push Notifications & Analytics'
  ],
  platforms: [
    {
      name: 'iOS Development',
      description: 'Native iOS apps using Swift and SwiftUI',
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'CloudKit'],
      benefits: ['Native performance', 'Platform-specific features', 'App Store optimization']
    },
    {
      name: 'Android Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Room Database', 'Firebase'],
      benefits: ['Material Design', 'Google Play optimization', 'Android ecosystem integration']
    },
    {
      name: 'React Native',
      description: 'Cross-platform apps with single codebase',
      technologies: ['React Native', 'JavaScript', 'TypeScript', 'Expo', 'Redux'],
      benefits: ['Code reusability', 'Faster development', 'Cost-effective']
    },
    {
      name: 'Flutter',
      description: 'Google\'s UI toolkit for beautiful native apps',
      technologies: ['Dart', 'Flutter SDK', 'Material Design', 'Cupertino', 'Firebase'],
      benefits: ['Single codebase', 'High performance', 'Beautiful UI']
    }
  ],
  appTypes: [
    {
      type: 'E-commerce Apps',
      description: 'Mobile shopping experiences with payment integration',
      features: ['Product catalogs', 'Shopping cart', 'Payment gateways', 'Order tracking']
    },
    {
      type: 'Social & Communication',
      description: 'Apps for social interaction and communication',
      features: ['Real-time messaging', 'Social feeds', 'User profiles', 'Push notifications']
    },
    {
      type: 'Business & Productivity',
      description: 'Apps to enhance business operations and productivity',
      features: ['Task management', 'Team collaboration', 'Document sharing', 'Analytics']
    },
    {
      type: 'Healthcare & Fitness',
      description: 'Health monitoring and fitness tracking applications',
      features: ['Health tracking', 'Appointment booking', 'Telemedicine', 'Fitness goals']
    }
  ],
  process: [
    'Discovery & Planning',
    'UI/UX Design',
    'Development',
    'Testing & QA',
    'App Store Submission',
    'Launch & Marketing',
    'Maintenance & Updates',
    'Analytics & Optimization'
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

// Process descriptions for mobile app development
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'Discovery & Planning': 'Define app requirements, target audience, and project scope. Create detailed project roadmap and technical specifications.',
    'UI/UX Design': 'Design intuitive user interfaces and seamless user experiences. Create wireframes, prototypes, and design systems.',
    'Development': 'Build native or cross-platform mobile applications using modern frameworks and best practices.',
    'Testing & QA': 'Comprehensive testing including unit tests, integration tests, and user acceptance testing across devices.',
    'App Store Submission': 'Prepare app store assets, metadata, and ensure compliance with platform guidelines and policies.',
    'Launch & Marketing': 'Execute app launch strategy with ASO optimization, marketing campaigns, and user acquisition.',
    'Maintenance & Updates': 'Regular app updates, bug fixes, and feature enhancements to keep users engaged.',
    'Analytics & Optimization': 'Monitor app performance, user behavior, and implement data-driven improvements.'
  }
  return descriptions[step] || 'Professional mobile app development process step.'
}

export default function MobileAppsPage() {
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
              <span className="text-sm font-medium text-green-100">Mobile Innovation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Mobile App
              <span className="block bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-green-100 max-w-3xl mx-auto mb-10"
            >
              Create engaging mobile experiences with native iOS, Android, and cross-platform applications. 
              From concept to App Store, we deliver mobile solutions that users love.
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
                Start Your Mobile App
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#platforms"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Explore Platforms
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
              <div className="text-3xl font-bold text-slate-900 mb-2">35+</div>
              <div className="text-sm font-medium text-slate-600">Mobile Apps Built</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">4.8/5</div>
              <div className="text-sm font-medium text-slate-600">Average App Rating</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">500K+</div>
              <div className="text-sm font-medium text-slate-600">Total Downloads</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Development Platforms
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the right platform for your mobile app based on your target audience and requirements
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mobileService.platforms.map((platform) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {platform.name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {platform.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {platform.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Types of Mobile Apps We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From e-commerce to healthcare, we create mobile solutions for various industries and use cases
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mobileService.appTypes.map((appType) => (
              <motion.div
                key={appType.type}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {appType.type}
                </h3>
                <p className="text-slate-600 mb-6">
                  {appType.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {appType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
                Comprehensive Mobile Development
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From initial concept to App Store launch, we provide end-to-end mobile app development 
                services with ongoing support and optimization.
              </p>

              <div className="grid gap-4">
                {mobileService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
            >
              <div className="text-center mb-8">
                <StarIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  App Store Success
                </h3>
                <p className="text-slate-600">
                  Optimized for App Store and Google Play success with ASO and marketing support
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">4.8★</div>
                  <div className="text-xs text-slate-600">Average Rating</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-xs text-slate-600">Approval Rate</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">30%</div>
                  <div className="text-xs text-slate-600">Higher Downloads</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-xs text-slate-600">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Mobile App Development Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology for successful mobile app development and launch
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Flow Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 gap-y-2">
              {mobileService.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-green-200 group-hover:bg-green-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < mobileService.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < mobileService.process.length - 1 && (
                    <div className="lg:hidden flex justify-center -mt-6 mb-2 z-10 relative">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s bring your mobile app idea to life. From concept to App Store success, 
              we&apos;ll guide you through every step of the development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your App Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects/mobile"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Mobile Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}