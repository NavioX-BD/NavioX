'use client'

import {
    ArrowRightIcon,
    ChartBarIcon,
    CheckIcon,
    CogIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Digital Strategy service based on consulting expertise
const strategyService = {
  id: 'digital-strategy',
  name: 'Digital Strategy',
  description: 'Technology consulting and digital transformation guidance',
  features: [
    'Technology Assessment & Audit',
    'Digital Transformation Roadmap',
    'Cloud Migration Strategy',
    'DevOps Implementation Planning',
    'Legacy System Modernization',
    'Process Automation Strategy',
    'Technology Stack Recommendations',
    'Team Training & Knowledge Transfer'
  ],
  services: [
    {
      icon: ChartBarIcon,
      title: 'Technology Assessment',
      description: 'Comprehensive evaluation of your current technology landscape and infrastructure',
      deliverables: ['Current State Analysis', 'Gap Assessment Report', 'Risk Evaluation', 'Recommendations']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Strategic roadmap for modernizing your technology and processes',
      deliverables: ['Transformation Strategy', 'Implementation Roadmap', 'Change Management Plan', 'Success Metrics']
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Identify and automate manual processes to improve efficiency',
      deliverables: ['Process Analysis', 'Automation Opportunities', 'Tool Recommendations', 'Implementation Plan']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Legacy Modernization',
      description: 'Strategy for modernizing legacy systems and applications',
      deliverables: ['Modernization Strategy', 'Migration Plan', 'Risk Mitigation', 'Timeline & Budget']
    }
  ],
  industries: [
    {
      name: 'Healthcare',
      challenges: ['Compliance requirements', 'Data security', 'System integration'],
      solutions: ['HIPAA-compliant solutions', 'Secure cloud migration', 'Interoperability planning']
    },
    {
      name: 'Financial Services',
      challenges: ['Regulatory compliance', 'Security concerns', 'Legacy systems'],
      solutions: ['Regulatory-compliant architecture', 'Zero-trust security', 'Gradual modernization']
    },
    {
      name: 'Manufacturing',
      challenges: ['Operational efficiency', 'IoT integration', 'Supply chain visibility'],
      solutions: ['Industry 4.0 roadmap', 'IoT strategy', 'Digital supply chain']
    },
    {
      name: 'Retail & E-commerce',
      challenges: ['Customer experience', 'Scalability', 'Omnichannel integration'],
      solutions: ['Customer-centric architecture', 'Cloud-native solutions', 'Unified commerce platform']
    }
  ],
  process: [
    'Discovery & Assessment',
    'Strategic Planning',
    'Roadmap Development',
    'Implementation Planning',
    'Change Management',
    'Execution Support',
    'Monitoring & Optimization',
    'Continuous Improvement'
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

// Process descriptions for digital strategy consulting
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'Discovery & Assessment': 'Analyze current technology landscape, business processes, and identify opportunities for digital transformation.',
    'Strategic Planning': 'Develop comprehensive digital strategy aligned with business goals, market trends, and technology capabilities.',
    'Roadmap Development': 'Create detailed implementation roadmap with timelines, milestones, and resource allocation for digital initiatives.',
    'Implementation Planning': 'Design detailed execution plans, risk mitigation strategies, and change management approaches.',
    'Change Management': 'Implement organizational change strategies, training programs, and stakeholder engagement initiatives.',
    'Execution Support': 'Provide ongoing guidance, technical expertise, and project management support during implementation.',
    'Monitoring & Optimization': 'Track progress, measure KPIs, and continuously optimize digital transformation initiatives.',
    'Continuous Improvement': 'Establish feedback loops, performance reviews, and iterative improvement processes.'
  }
  return descriptions[step] || 'Professional digital strategy consulting process step.'
}

export default function DigitalStrategyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 mb-20">
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
              <LightBulbIcon className="h-4 w-4 text-orange-300 mr-2" />
              <span className="text-sm font-medium text-orange-100">Strategic Innovation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Digital Strategy &
              <span className="block bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                Technology Consulting
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-orange-100 max-w-3xl mx-auto mb-10"
            >
              Transform your business with strategic technology consulting. From digital transformation 
              roadmaps to cloud migration strategies, we guide your technology decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Strategy Session
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Strategic Consulting Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology consulting to accelerate your digital transformation journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {strategyService.services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl mr-4 group-hover:bg-orange-100 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Deliverables:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{deliverable}</span>
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
                Comprehensive Strategy Services
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From initial assessment to implementation support, we provide end-to-end 
                strategic guidance for your digital transformation journey.
              </p>

              <div className="grid gap-4">
                {strategyService.features.map((feature, index) => (
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
                <UserGroupIcon className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Expert Consulting Team
                </h3>
                <p className="text-slate-600">
                  Experienced consultants with deep expertise in cloud, DevOps, and digital transformation
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
                  <div className="text-xs text-slate-600">Projects Delivered</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-xs text-slate-600">Client Satisfaction</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
                  <div className="text-xs text-slate-600">Industries Served</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-xs text-slate-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industry Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored strategies for different industries with specific challenges and requirements
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {strategyService.industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {industry.name}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Common Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Strategic Consulting Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation and technology strategy
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
              {strategyService.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-orange-200 group-hover:bg-orange-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < strategyService.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < strategyService.process.length - 1 && (
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your digital transformation goals and create a strategic roadmap 
              that drives innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Strategy Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}