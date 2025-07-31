'use client'

import { ArrowRightIcon, MapPinIcon, PlayIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroMessages = [
    {
      title: "Charting Digital Excellence",
      subtitle: "Navigate Your Success",
      description: "We don't just write code—we plot your digital destiny"
    },
    {
      title: "Your Digital Navigator",
      subtitle: "In Uncharted Tech Waters",
      description: "Guiding businesses through complex technological transformations"
    },
    {
      title: "Where Code Meets Course",
      subtitle: "Steering Innovation Forward",
      description: "Precision-crafted software solutions that scale and deliver results"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMessages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroMessages.length])

  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
        style={{ backgroundImage: 'url(/images/bg/page-bg-1.jpg)' }} 
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-blue-200/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-indigo-200/30 rounded-full"
        />
        
        {/* Floating Dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Dynamic Content */}
          <div className="text-center lg:text-left">
            
            {/* Navigation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-blue-200/50 mb-8"
            >
              <MapPinIcon className="h-4 w-4" />
              NavioX Solutions Inc.
            </motion.div>

            {/* Animated Headlines */}
            <div className="mb-8 h-28 lg:h-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute"
                >
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {heroMessages[currentSlide].title}
                  </h1>
                  <h2 className="text-xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                    {heroMessages[currentSlide].subtitle}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated Description */}
            <div className="mb-10 h-16">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0"
                >
                  {heroMessages[currentSlide].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Chart Your Course</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
              
              <Link href="/contact">
                <button className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
                  <PlayIcon className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  Request Demo
                </button>
              </Link>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {heroMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Animated Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Central Navigation Compass */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                
                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/50"
                />
                
                {/* Central Hub */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 10px 30px rgba(59, 130, 246, 0.3)",
                      "0 20px 60px rgba(59, 130, 246, 0.4)",
                      "0 10px 30px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-3xl lg:text-4xl font-bold mb-2"
                    >
                      NavioX
                    </motion.div>
                    <div className="text-sm opacity-90">Digital Navigator</div>
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                    style={{ transformOrigin: 'center' }}
                  >
                    <div
                      className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-blue-200 flex items-center justify-center text-blue-600"
                      style={{
                        top: `${10 + Math.sin(i * Math.PI / 3) * 30}%`,
                        left: `${10 + Math.cos(i * Math.PI / 3) * 30}%`,
                      }}
                    >
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    </div>
                  </motion.div>
                ))}

                {/* Pulse Waves */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 border-2 border-indigo-400/30 rounded-full"
                />
              </div>

              {/* Floating Success Metrics */}
              {[
                { value: '100+', label: 'Projects', position: 'top-4 left-4' },
                { value: '50+', label: 'Clients', position: 'top-4 right-4' },
                { value: '99.9%', label: 'Uptime', position: 'bottom-4 left-4' },
                { value: '24/7', label: 'Support', position: 'bottom-4 right-4' }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 1 + i * 0.2, duration: 0.5 },
                    scale: { delay: 1 + i * 0.2, duration: 0.5 },
                    y: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                  }}
                  className={`absolute ${metric.position} bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50`}
                >
                  <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 