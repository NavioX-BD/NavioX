'use client'

import {
    ArrowUpRightIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    LightBulbIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'Cloud Solutions', href: '/services/cloud' },
      { name: 'Digital Strategy', href: '/services/strategy' },
      { name: 'API Development', href: '/services/api' },
      { name: 'DevOps Solutions', href: '/services/devops' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Projects', href: '/projects' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Developer Tools', href: '/tools' },
      { name: 'Knowledge Base', href: '/kb' },
      { name: 'Support Center', href: '/support' },
      { name: 'Status Page', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
    ],
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/NavioX-BD',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/naviox-solutions',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/NavioXSolutions',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/naviox',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
        {/* Navigation Grid - 7 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Brand & Description - 2 Columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Image
                  className="h-10 w-auto max-w-[180px]"
                  src="/images/brand/banner_transparent.png"
                  alt="NavioX Solutions Inc."
                  width={180}
                  height={40}
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-sm leading-6 text-gray-600">
                  <span className="text-blue-600 font-semibold">NavioX Solutions Inc.</span> serves as your digital compass, guiding businesses through uncharted technological territories with precision-crafted software solutions.
                </p>
                
                <div className="flex items-center space-x-2 text-gray-500">
                  <CodeBracketIcon className="h-4 w-4" />
                  <span className="text-sm">Built with excellence, engineered for scale</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <a href="mailto:info@navioxbd.com" className="text-sm hover:text-blue-600 transition-colors">
                    info@navioxbd.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPinIcon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services - 1 Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
              <LightBulbIcon className="h-4 w-4 mr-2 text-blue-600" />
              Services
            </h3>
            <ul role="list" className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRightIcon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company - 1 Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Company</h3>
            <ul role="list" className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRightIcon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - 1 Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Resources</h3>
            <ul role="list" className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRightIcon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stay Updated - 2 Columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-6">Stay Updated</h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Get the latest insights on software engineering and industry trends.
              </p>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-l-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((item) => (
                  <motion.a 
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white border border-gray-200 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple Horizontal Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom Bar - Compact */}
      <motion.div 
        className="bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>&copy; {currentYear} NavioX Solutions Inc. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Crafting digital excellence since 2024</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {navigation.legal.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer