'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    SiAmazon,
    SiDocker,
    SiKubernetes,
    SiSonarqube,
    SiTerraform,
    SiVault
} from 'react-icons/si'

// Process descriptions for DevSecOps
const getProcessDescription = (step: string): string => {
  const descriptions: { [key: string]: string } = {
    'Security Assessment & Audit': 'Comprehensive security evaluation of existing infrastructure, identifying vulnerabilities and compliance gaps.',
    'DevSecOps Strategy Development': 'Design security-first DevOps strategy integrating security practices throughout the development lifecycle.',
    'Security Tool Integration': 'Implement automated security tools for code scanning, vulnerability assessment, and compliance monitoring.',
    'Pipeline Security Implementation': 'Integrate security gates into CI/CD pipelines with automated testing and compliance checks.',
    'Compliance Framework Setup': 'Establish security policies, compliance frameworks, and governance procedures for regulatory requirements.',
    'Security Monitoring Deployment': 'Deploy comprehensive security monitoring with real-time threat detection and incident response.',
    'Team Training & Knowledge Transfer': 'Provide security training, establish best practices, and transfer knowledge to development teams.',
    'Continuous Security Optimization': 'Ongoing security improvements, threat monitoring, and proactive security enhancements.'
  }
  return descriptions[step] || 'Professional DevSecOps process step.'
}

// Technology icon mapping for DevSecOps
const techIconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'AWS Security Hub': SiAmazon,
  'Azure Security Center': ShieldCheckIcon,
  'Docker Security Scanning': SiDocker,
  'Kubernetes Security Policies': SiKubernetes,
  'Terraform Security Validation': SiTerraform,
  'SAST/DAST Tools': ShieldCheckIcon,
  'HashiCorp Vault': SiVault,
  'OWASP ZAP': ShieldCheckIcon,
  'SonarQube': SiSonarqube,
  'Twistlock': ShieldCheckIcon,
  'Falco': ShieldCheckIcon,
  'OPA Gatekeeper': ShieldCheckIcon
}

// DevSecOps service data
const devSecOpsService = {
  id: 'devsecops',
  name: 'DevSecOps',
  description: 'Security-first DevOps with automated security integration throughout the development lifecycle',
  features: [
    'Security Automation & Integration',
    'CI/CD Pipeline Security',
    'Infrastructure as Code Security',
    'Container & Kubernetes Security',
    'Compliance & Governance Automation',
    'Vulnerability Management',
    'Security Monitoring & Alerting',
    'Zero-Trust Architecture Implementation'
  ],
  securityAreas: [
    {
      area: 'Pipeline Security',
      description: 'Secure CI/CD pipelines with automated security gates and continuous scanning',
      features: ['Source code security scanning', 'Dependency vulnerability checking', 'Container image security validation', 'Infrastructure security testing']
    },
    {
      area: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with policy-as-code and automated compliance',
      features: ['Cloud security posture management', 'Network security automation', 'Identity and access management', 'Encryption and key management']
    },
    {
      area: 'Runtime Security',
      description: 'Continuous security monitoring and threat detection in production environments',
      features: ['Runtime application protection', 'Container runtime security', 'Anomaly detection and alerting', 'Incident response automation']
    },
    {
      area: 'Compliance & Governance',
      description: 'Automated compliance monitoring and security governance frameworks',
      features: ['Policy enforcement automation', 'Compliance reporting and auditing', 'Risk assessment and management', 'Security metrics and KPIs']
    }
  ],
  technologies: [
    'AWS Security Hub',
    'Azure Security Center',
    'Docker Security Scanning',
    'Kubernetes Security Policies',
    'Terraform Security Validation',
    'SAST/DAST Tools',
    'HashiCorp Vault',
    'OWASP ZAP',
    'SonarQube',
    'Twistlock',
    'Falco',
    'OPA Gatekeeper'
  ],
  process: [
    'Security Assessment & Audit',
    'DevSecOps Strategy Development',
    'Security Tool Integration',
    'Pipeline Security Implementation',
    'Compliance Framework Setup',
    'Security Monitoring Deployment',
    'Team Training & Knowledge Transfer',
    'Continuous Security Optimization'
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

export default function DevSecOpsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 mb-20">
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
              <ShieldCheckIcon className="h-4 w-4 text-emerald-300 mr-2" />
              <span className="text-sm font-medium text-emerald-100">Security First</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              DevSecOps &
              <span className="block bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Security Automation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-emerald-100 max-w-3xl mx-auto mb-10"
            >
              Integrate security seamlessly into your development lifecycle with automated security testing, 
              compliance monitoring, and secure infrastructure as code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Security Transformation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#security-areas"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Explore Security Areas
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
              <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-600">Security Uptime</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-600">Security Tools Integrated</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600">Security Monitoring</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm font-medium text-slate-600">Compliance Automation</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Areas Section */}
      <section id="security-areas" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our DevSecOps approach covers every aspect of your security landscape, from code to cloud to runtime.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {devSecOpsService.securityAreas.map((area) => (
              <motion.div
                key={area.area}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {area.area}
                </h3>
                <p className="text-slate-600 mb-6">
                  {area.description}
                </p>
                <div className="space-y-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Security Technologies & Tools
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We leverage industry-leading security tools and platforms to build robust DevSecOps pipelines.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {devSecOpsService.technologies.map((tech) => {
              const IconComponent = techIconMap[tech] || ShieldCheckIcon
              return (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {tech}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our DevSecOps Implementation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A systematic approach to integrating security into your development and operations workflows.
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
              {devSecOpsService.process.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Process Card */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed flex-1">
                      {getProcessDescription(step)}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  {index < devSecOpsService.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                        <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Flow Arrow */}
                  {index < devSecOpsService.process.length - 1 && (
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
      <section className="py-20 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Secure Your Development Pipeline?
            </h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto mb-8">
              Transform your development practices with security-first DevSecOps. Let&apos;s build a more secure, compliant, and efficient development lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your Security Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}