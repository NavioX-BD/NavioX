'use client'

import { loadContactData } from '@/lib/data-loader'
import {
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CloudIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Load data from JSON files
  const contactData = loadContactData()

  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
      EnvelopeIcon,
      UserGroupIcon,
      ComputerDesktopIcon,
      BuildingOfficeIcon,
      GlobeAltIcon,
      DevicePhoneMobileIcon,
      CloudIcon,
      DocumentTextIcon
    }
    return iconMap[iconName] || DocumentTextIcon
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simple form submission for static export
      const formDataToSend = new FormData()
      formDataToSend.append('form-name', 'contact')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('service', formData.service)
      formDataToSend.append('budget', formData.budget)
      formDataToSend.append('timeline', formData.timeline)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('newsletter', formData.newsletter ? 'true' : 'false')

      // Submit to Netlify using standard form submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after success (no auto-close)
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
          subject: '',
            service: '',
            budget: '',
            timeline: '',
            message: '',
            newsletter: false
          })
        // Do not setSubmitStatus('idle') automatically
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Transform contact methods data to include icon components
  const contactMethods = contactData.contactMethods.map(method => ({
    ...method,
    icon: getIconComponent(method.icon)
  }))

  // Transform services data to include icon components
  const services = contactData.services.map(service => ({
    ...service,
    icon: getIconComponent(service.icon)
  }))

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
              Chart Your Digital Course
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to navigate the digital ocean? Let&apos;s discuss how NavioX can guide your business 
              through uncharted technological territories with precision-crafted software solutions.
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span className="text-blue-100">Response within 24 hours</span>
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
          {/* Contact Methods - Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg bg-${method.color}-100 mr-4`}>
                          <method.icon className={`h-6 w-6 text-${method.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                          <a 
                            href={method.link}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                          >
                            {method.contact}
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPinIcon className="h-6 w-6 mr-3 text-blue-600" />
                  Our Locations
                </h2>
                <div className="space-y-4">
                  {contactData.officeLocations.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 4) * 0.1 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{office.city}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>{office.address}</p>
                        <p className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          {office.hours}
                        </p>
                        <p className="flex items-center">
                          <GlobeAltIcon className="h-4 w-4 mr-2" />
                          {office.timezone}
                        </p>
                        <div className="pt-2">
                          <p className="font-medium text-gray-700 mb-1">Services:</p>
                          <div className="flex flex-wrap gap-1">
                            {office.services.map((service, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h2>
                <p className="text-gray-600">
                  Tell us about your project and we&apos;ll chart the perfect course for your digital success.
                </p>
              </div>

              {/* Success Modal */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
                  onClick={() => setSubmitStatus('idle')}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm p-3 sm:p-4 relative max-h-[50vh] overflow-y-auto border border-gray-100"
                    style={{ minHeight: 'auto' }}
                    onClick={e => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 sm:p-1.5 transition-all duration-200 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="text-center">
                      {/* Success Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
                        className="mb-3"
                      >
                        <div className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/20">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Success Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="mb-3"
                      >
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Thank you for reaching out to <span className="font-semibold text-blue-600">NavioX</span>. 
                          We&apos;ve received your project details and our team is excited to help you navigate your digital journey.
                        </p>
                      </motion.div>



                      {/* Response Time Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="inline-flex items-center bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-2 py-1 mb-3"
                      >
                        <div className="bg-amber-100 rounded-full p-0.5 mr-1.5">
                          <svg className="w-2.5 h-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-amber-800 font-medium text-xs">Response: 24 hours or less</span>
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="flex gap-2"
                      >
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200 transition-all duration-200 font-medium text-xs border border-gray-200 hover:border-gray-300"
                        >
                          Continue
                        </button>
                        <Link
                          href="/"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-center text-xs shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center"
                        >
                          Home
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Error Modal */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
                  onClick={() => setSubmitStatus('idle')}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    className="bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm p-3 sm:p-4 relative max-h-[50vh] overflow-y-auto border border-gray-100"
                    style={{ minHeight: 'auto' }}
                    onClick={e => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 sm:p-1.5 transition-all duration-200 z-10"
                    >
                      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="text-center">
                      {/* Error Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
                        className="mb-3"
                      >
                        <div className="bg-gradient-to-br from-red-400 via-red-500 to-rose-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-500/20">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Error Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="mb-3"
                      >
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                          Something went wrong
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          We couldn&apos;t send your message. You can still reach us directly.
                        </p>
                      </motion.div>

                      {/* Alternative Contact Methods */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-2.5 mb-3 border border-red-100/50"
                      >
                        <h4 className="font-medium text-red-900 mb-2 text-xs">Contact us directly:</h4>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex items-center justify-center p-1.5 bg-white/70 rounded border border-white/80">
                            <svg className="w-3 h-3 mr-1.5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:info@navioxbd.com" className="text-red-700 hover:text-red-800 font-medium text-xs">info@navioxbd.com</a>
                          </div>
                          <div className="flex items-center justify-center p-1.5 bg-white/70 rounded border border-white/80">
                            <svg className="w-3 h-3 mr-1.5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+8801765939006" className="text-red-700 hover:text-red-800 font-medium text-xs">+880 1765-939006</a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="flex gap-2"
                      >
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200 transition-all duration-200 font-medium text-xs border border-gray-200 hover:border-gray-300"
                        >
                          Try Again
                        </button>
                        <Link
                          href="/contact"
                          className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-3 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium text-center text-xs shadow-md shadow-red-500/20 hover:shadow-red-500/30 flex items-center justify-center"
                        >
                          Contact
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden form for Netlify detection */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {contactData.budgetRanges.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {contactData.timelineOptions.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Brief description of your inquiry or project"
                  />
                  <div className="mt-1 text-xs text-gray-500 text-right">
                    {formData.subject.length}/100 characters
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for industry insights and updates
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Charting Your Course...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Chart Your Course
                    </div>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                </p>
            </div>

              {/* What to Expect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What to Expect After Submission
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">1</div>
                      <div>
                        <p className="font-medium text-blue-800">Initial Review</p>
                        <p className="text-blue-700">We&apos;ll review your requirements within 2-4 hours</p>
                  </div>
                </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">2</div>
                      <div>
                        <p className="font-medium text-blue-800">Detailed Response</p>
                        <p className="text-blue-700">You&apos;ll receive a comprehensive response within 24 hours</p>
                  </div>
                </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">3</div>
                      <div>
                        <p className="font-medium text-blue-800">Free Consultation</p>
                        <p className="text-blue-700">We&apos;ll schedule a free 30-minute consultation call</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">4</div>
                      <div>
                        <p className="font-medium text-blue-800">Custom Proposal</p>
                        <p className="text-blue-700">You&apos;ll get a tailored project proposal and timeline</p>
                  </div>
                </div>
                  </div>
                </div>
              </motion.div>
              </div>


          </motion.div>
        </motion.div>
      </div>

      {/* Additional Contact Information */}
      <motion.section 
        className="bg-gray-50 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you prefer email, phone, or in-person meetings, we&apos;re here to help 
              navigate your digital transformation journey.
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
                <EnvelopeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a detailed response within 24 hours</p>
              <a 
                href="mailto:info@navioxbd.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                info@navioxbd.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a 
                href="tel:+8801765939006"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +880 1765-939006
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting</p>
              <span className="text-purple-600 font-medium">
                Gulshan-2, Dhaka 1212
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 