'use client'

import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CogIcon,
  RocketLaunchIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SiAmazon,
  SiAnsible,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiTerraform
} from 'react-icons/si'

// Process descriptions for cloud services
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'Assessment & Strategy': 'Evaluate current infrastructure, identify migration opportunities, and develop a comprehensive cloud strategy aligned with business goals.',
    'Architecture Design': 'Design scalable, secure, and cost-effective cloud architecture using industry best practices and modern cloud patterns.',
    'Security Implementation': 'Implement robust security measures including identity management, network security, and compliance frameworks.',
    'Migration & Deployment': 'Execute smooth migration with minimal downtime, ensuring data integrity and application performance.',
    'Monitoring & Optimization': 'Set up comprehensive monitoring, establish performance baselines, and continuously optimize for cost and performance.',
    'Training & Documentation': 'Provide team training, create detailed documentation, and establish operational procedures for ongoing management.',
    'Support & Maintenance': 'Offer ongoing support, regular updates, and proactive maintenance to ensure optimal cloud performance.',
    'Continuous Improvement': 'Regular reviews, performance analysis, and strategic updates to keep your cloud infrastructure current and efficient.'
  }
  return descriptions[step] || 'Professional cloud transformation process step.'
}

// Technology icon mapping for cloud services
const techIconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'AWS': SiAmazon,
  'Azure': CloudArrowUpIcon,
  'Google Cloud': SiGooglecloud,
  'Kubernetes': SiKubernetes,
  'Docker': SiDocker,
  'Terraform': SiTerraform,
  'Ansible': SiAnsible,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'Jenkins': SiJenkins,
  'GitHub Actions': SiGithubactions
}

// Cloud services based on TheToriqul's expertise
const cloudServices = {
  id: 'cloud-solutions',
  name: 'Cloud Solutions',
  description: 'Scalable cloud infrastructure and DevOps automation solutions',
  features: [
    'AWS Cloud Architecture',
    'Infrastructure as Code (Terraform)',
    'Kubernetes Orchestration',
    'CI/CD Pipeline Automation',
    'Cloud Security Implementation',
    'Monitoring & Observability',
    'Cost Optimization',
    'Multi-Cloud Strategy'
  ],
  technologies: [
    'AWS',
    'Azure',
    'Google Cloud',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Ansible',
    'Prometheus',
    'Grafana',
    'Jenkins',
    'GitHub Actions'
  ],
  benefits: [
    {
      icon: RocketLaunchIcon,
      title: 'Accelerated Deployment',
      description: 'Deploy applications faster with automated CI/CD pipelines and infrastructure provisioning'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Security',
      description: 'Implement security best practices with automated compliance and monitoring'
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs through right-sizing, automation, and efficient resource management'
    },
    {
      icon: CogIcon,
      title: 'Scalable Architecture',
      description: 'Build cloud-native applications that scale automatically based on demand'
    }
  ],
  process: [
    'Cloud Assessment & Strategy',
    'Architecture Design',
    'Infrastructure Provisioning',
    'Application Migration',
    'Security Implementation',
    'Monitoring Setup',
    'Team Training',
    'Ongoing Support'
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

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 mb-20">
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
              <CloudArrowUpIcon className="h-4 w-4 text-blue-300 mr-2" />
              <span className="text-sm font-medium text-blue-100">Cloud-Native Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Cloud Solutions &
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                DevOps Automation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Transform your infrastructure with cloud-native solutions, automated DevOps practices, 
              and scalable architectures. Expert in AWS, Kubernetes, and Infrastructure as Code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Cloud Assessment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage our expertise in cloud architecture and DevOps to accelerate your digital transformation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {cloudServices.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
                Comprehensive Cloud Services
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From cloud migration to infrastructure automation, we provide end-to-end cloud solutions 
                tailored to your business needs.
              </p>

              <div className="grid gap-4">
                {cloudServices.features.map((feature, index) => (
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
                <ServerIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Infrastructure as Code
                </h3>
                <p className="text-slate-600">
                  Automated, version-controlled infrastructure deployment with Terraform and Ansible
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                  <div className="text-xs text-slate-600">Uptime SLA</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">50%</div>
                  <div className="text-xs text-slate-600">Cost Reduction</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10x</div>
                  <div className="text-xs text-slate-600">Faster Deployment</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-xs text-slate-600">Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Master
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leveraging industry-leading tools and platforms for optimal cloud solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {cloudServices.technologies.map((tech) => {
              const IconComponent = techIconMap[tech] || CogIcon
              return (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {tech}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Our Cloud Transformation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology for successful cloud adoption and digital transformation
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
              {cloudServices.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < cloudServices.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < cloudServices.process.length - 1 && (
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your cloud strategy and build a scalable, secure, and cost-effective solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}