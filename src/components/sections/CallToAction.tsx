'use client'

import { ArrowRightIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto"
          >
            Ready to transform your business with cutting-edge software solutions? 
            Our team is here to turn your vision into reality with enterprise-grade development and support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
              >
                <ChatBubbleLeftRightIcon className="mr-3 h-5 w-5" />
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              <PhoneIcon className="mr-3 h-5 w-5" />
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-200">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&lt; 24h</div>
              <div className="text-sm text-blue-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm text-blue-200">Initial Consultation</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/20 pt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Quick Start</h4>
              <p className="text-sm text-blue-200">
                Get started in under 48 hours with our streamlined onboarding process.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">No Lock-in</h4>
              <p className="text-sm text-blue-200">
                Flexible contracts with the freedom to scale up or down as needed.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Full Transparency</h4>
              <p className="text-sm text-blue-200">
                Complete visibility into progress, costs, and development milestones.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-sm text-blue-200">
                Join 150+ satisfied clients who have achieved their digital goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 mb-6">
            Questions? We&apos;re here to help. Reach out for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a 
              href="mailto:contact@navioxsolutions.com" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200"
            >
              <span className="mr-2">📧</span>
              contact@navioxsolutions.com
            </a>
            <a 
              href="tel:+1-555-NAVIOX-1" 
              className="flex items-center text-blue-200 hover:text-white transition-colors duration-200"
            >
              <span className="mr-2">📞</span>
              +1 (555) NAVIOX-1
            </a>
            <div className="flex items-center text-blue-200">
              <span className="mr-2">🌍</span>
              Available Worldwide
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default CallToAction 