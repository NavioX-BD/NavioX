'use client'

import { loadServicesData } from '@/lib/data-loader'
import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  CogIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const servicesData = loadServicesData()
  const { serviceCategories, serviceStats, pricingTiers, technologies } = servicesData

  const iconMap = {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    CloudArrowUpIcon,
    CogIcon,
    ComputerDesktopIcon,
    ShieldCheckIcon,
    ChartBarIcon
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
              <SparklesIcon className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-100">Enterprise-Grade Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Software Engineering
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We build secure, scalable, and innovative software solutions that drive business transformation. 
              From concept to deployment, we deliver excellence at every step.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/20"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {Object.entries(serviceStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{value}</div>
                <div className="text-sm font-medium text-slate-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive software engineering solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceCategories.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                                 <motion.div
                   key={service.id}
                   variants={itemVariants}
                   whileHover={{ y: -8, scale: 1.02 }}
                   className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                 >
                   {/* Service Header */}
                   <div className={`relative h-40 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/10"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg">
                         <IconComponent className="h-8 w-8" />
                       </div>
                     </div>
                     <div className="absolute bottom-4 left-4 right-4">
                       <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                       <p className="text-white/90 text-sm">{service.description}</p>
                     </div>
                   </div>

                   {/* Service Content */}
                   <div className="p-6">
                     {/* Features */}
                     <div className="mb-5">
                       <h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wide">Key Features</h4>
                       <div className="space-y-2">
                         {service.features.slice(0, 3).map((feature) => (
                           <div key={feature} className="flex items-center text-sm text-slate-600">
                             <CheckIcon className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                             {feature}
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Technologies */}
                     <div className="mb-5">
                       <h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wide">Technologies</h4>
                       <div className="flex flex-wrap gap-1.5">
                         {service.technologies.slice(0, 3).map((tech) => (
                           <span
                             key={tech}
                             className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                           >
                             {tech}
                           </span>
                         ))}
                         {service.technologies.length > 3 && (
                           <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                             +{service.technologies.length - 3}
                           </span>
                         )}
                       </div>
                     </div>

                     {/* CTA */}
                     <Link
                       href={`/services/${service.id}`}
                       className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                     >
                       Learn more
                       <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </Link>
                   </div>
                 </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
               Our Process
             </h2>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto">
               A proven methodology that ensures successful delivery and exceptional results
             </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: UserGroupIcon, title: "Discovery", description: "Understanding your needs and objectives" },
              { icon: CogIcon, title: "Planning", description: "Strategic roadmap and architecture design" },
              { icon: CodeBracketIcon, title: "Development", description: "Agile development with continuous delivery" },
              { icon: RocketLaunchIcon, title: "Deployment", description: "Seamless launch and ongoing support" }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                                 <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
               Technology Stack
             </h2>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto">
               We leverage cutting-edge technologies to build robust, scalable solutions
             </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(technologies).map(([category, techList]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8"
              >
                                 <h3 className="text-lg font-bold text-slate-900 mb-6 capitalize">
                    {category.replace('-', ' ')}
                  </h3>
                <div className="space-y-3">
                  {techList.slice(0, 8).map((tech) => (
                    <div key={tech} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {tech}
                    </div>
                  ))}
                  {techList.length > 8 && (
                    <div className="text-sm text-slate-500 pt-2">
                      +{techList.length - 8} more technologies
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
               Pricing Plans
             </h2>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto">
               Flexible pricing options designed to meet your project requirements and budget
             </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 ${
                  tier.name === 'Professional' ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
              >
                {tier.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-6">
                    Most Popular
                  </div>
                )}
                
                                 <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                 <div className="text-2xl font-bold text-slate-900 mb-1">{tier.price}</div>
                <p className="text-slate-600 mb-8">{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    tier.name === 'Professional'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                         <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
               Ready to Build Something Amazing?
             </h2>
             <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
               Let&apos;s discuss your project and see how we can help you achieve your digital goals with our expert team.
             </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xl"
                >
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/20"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 