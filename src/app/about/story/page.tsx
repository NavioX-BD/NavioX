'use client'

import {
  BeakerIcon,
  GlobeAltIcon,
  MapPinIcon,
  RocketLaunchIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OurStoryPage() {
  const storyElements = [
    {
      title: 'The Origin of NavioX',
      description: 'NavioX is more than just a company name—it\'s a philosophy encoded in two powerful elements.',
      icon: StarIcon,
      content: [
        {
          subtitle: '"Navio" - The Navigator',
          text: 'Derived from the Latin "navis" (ship) and Spanish "navío" (vessel), representing guidance through complex waters, expertise in charting unknown territories, safe passage through challenging journeys, and leadership in exploration and discovery.'
        },
        {
          subtitle: '"X" - The Excellence Factor',
          text: 'The X represents multiple dimensions of our identity: eXcellence in everything we deliver, eXploration of cutting-edge technologies, eXponential growth for our clients, X-factor that sets us apart from competitors, and the unknown variable we help solve for businesses.'
        }
      ]
    },
    {
      title: 'The Digital Ocean Metaphor',
      description: 'In our brand universe, the technology landscape is a vast digital ocean.',
      icon: GlobeAltIcon,
      content: [
        {
          subtitle: 'The Challenges (Storms & Currents)',
          text: 'Rapidly changing technologies (shifting currents), complex integration requirements (treacherous reefs), security threats (pirate attacks), budget constraints (resource limitations), and timeline pressures (racing against storms).'
        },
        {
          subtitle: 'NavioX as Your Navigator',
          text: 'We have the experience of sailing these waters countless times, expertise in knowing safe routes and hidden shortcuts, the most advanced navigation tools (modern tech stack), skilled developers as your experienced maritime team, and proven methodologies to keep you on course.'
        }
      ]
    },
    {
      title: 'The NavioX Vessel',
      description: 'Our "ship" is built with the finest materials in the software engineering world.',
      icon: RocketLaunchIcon,
      content: [
        {
          subtitle: 'The Hull (Foundation)',
          text: 'Next.js & React - Strong, flexible framework. TypeScript - Precision engineering and type safety. Modern architecture - Built to withstand digital storms.'
        },
        {
          subtitle: 'The Sails (Performance)',
          text: 'Optimized code - Catches every performance breeze. Responsive design - Adapts to any digital wind direction. Scalable solutions - Expands as your journey grows.'
        },
        {
          subtitle: 'The Navigation Tools (Methodology)',
          text: 'Agile development - Course corrections in real-time. Continuous integration - Always knowing your exact position. Quality assurance - Multiple navigation systems for accuracy.'
        }
      ]
    }
  ]

  const whatSetsUsApart = [
    {
      title: 'We don\'t just build websites',
      subtitle: 'We chart digital destinies',
      icon: MapPinIcon
    },
    {
      title: 'We don\'t just write code',
      subtitle: 'We plot strategic courses',
      icon: RocketLaunchIcon
    },
    {
      title: 'We don\'t just deliver projects',
      subtitle: 'We navigate partnerships',
      icon: UserGroupIcon
    },
    {
      title: 'We don\'t just solve problems',
      subtitle: 'We discover opportunities',
      icon: BeakerIcon
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
              Our Story
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The journey of NavioX—from a simple idea to becoming your trusted digital navigator 
              in the vast ocean of technology.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <StarIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Where Code Meets Course</span>
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
          {/* Name Etymology */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Meaning Behind Our Name</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  <strong>NavioX = Navigation × Excellence</strong>
                </p>
                <p className="text-gray-600 mt-2">
                  &ldquo;We are the digital navigators who multiply your business potential through excellence in software engineering.&rdquo;
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">&ldquo;Navio&rdquo; - The Navigator</h3>
                  <p className="text-blue-800">
                    Derived from the Latin &ldquo;navis&rdquo; (ship) and Spanish &ldquo;navío&rdquo; (vessel), representing guidance through complex waters, expertise in charting unknown territories, safe passage through challenging journeys, and leadership in exploration and discovery.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">&ldquo;X&rdquo; - The Excellence Factor</h3>
                  <p className="text-purple-800">
                    The X represents multiple dimensions: eXcellence in everything we deliver, eXploration of cutting-edge technologies, eXponential growth for our clients, X-factor that sets us apart, and the unknown variable we help solve.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Elements */}
          {storyElements.map((element) => (
            <motion.div key={element.title} variants={itemVariants}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 mr-4">
                    <element.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{element.title}</h2>
                    <p className="text-gray-600">{element.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {element.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-blue-200 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* What Sets Us Apart */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets NavioX Apart</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Unlike traditional development companies, we approach software engineering with the precision and expertise of master navigators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whatSetsUsApart.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-blue-600 font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Promise */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                &ldquo;When you partner with NavioX, you&rsquo;re not just hiring developers—you&rsquo;re commissioning master navigators who will guide your business through the digital ocean to shores of unprecedented success.&rdquo;
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">We will never leave you stranded</h3>
                  <p className="text-blue-100 text-sm">in digital waters</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">We will always chart</h3>
                  <p className="text-blue-100 text-sm">the most efficient course to your goals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold mb-2">We will ensure you reach</h3>
                  <p className="text-blue-100 text-sm">your destination stronger than when you started</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Your Journey</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/about/mission"
                className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission & Vision</h3>
                <p className="text-gray-600 text-sm">Learn about our core values and goals</p>
              </Link>
              <Link
                href="/about/leadership"
                className="block p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership Team</h3>
                <p className="text-gray-600 text-sm">Meet our executives and key leaders</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 