'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    ClockIcon,
    DocumentTextIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Case Studies data
const caseStudiesData = {
  stats: {
    totalCaseStudies: "15+",
    averageROI: "300%",
    successRate: "100%",
    averageTimeline: "4-6 months"
  },
  featuredCaseStudies: [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "Retail",
      challenge: "Legacy e-commerce platform with poor performance, low conversion rates, and scalability issues affecting business growth.",
      solution: "Complete platform redesign with modern React/Node.js architecture, performance optimization, and enhanced user experience.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Stripe"],
      timeline: "4 months",
      teamSize: "8 developers",
      results: {
        metrics: [
          { label: "Conversion Rate", before: "1.2%", after: "3.8%", improvement: "+217%" },
          { label: "Page Load Time", before: "8.5s", after: "1.2s", improvement: "-85%" },
          { label: "Monthly Revenue", before: "$50K", after: "$180K", improvement: "+260%" },
          { label: "Cart Abandonment", before: "75%", after: "35%", improvement: "-53%" }
        ],
        businessImpact: [
          "Annual revenue increased by $1.5M",
          "Customer satisfaction improved by 85%",
          "Reduced server costs by 40%",
          "Improved SEO ranking to top 3 positions"
        ]
      },
      testimonial: {
        quote: "NavioX transformed our struggling e-commerce platform into a high-performing sales machine. The results exceeded our expectations.",
        author: "Sarah Johnson",
        position: "CEO, TechRetail Inc."
      }
    },
    {
      id: 2,
      title: "Healthcare System Digital Transformation",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Paper-based patient management system causing inefficiencies, data errors, and compliance issues in a multi-facility healthcare network.",
      solution: "Comprehensive digital transformation with HIPAA-compliant patient management system, EHR integration, and automated workflows.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Azure", "FHIR", "Docker"],
      timeline: "8 months",
      teamSize: "12 developers",
      results: {
        metrics: [
          { label: "Patient Processing Time", before: "45 min", after: "12 min", improvement: "-73%" },
          { label: "Data Accuracy", before: "78%", after: "99.2%", improvement: "+27%" },
          { label: "Administrative Costs", before: "$2M/year", after: "$1.2M/year", improvement: "-40%" },
          { label: "Patient Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "+50%" }
        ],
        businessImpact: [
          "Eliminated paper-based processes entirely",
          "Achieved full HIPAA compliance",
          "Reduced staff overtime by 60%",
          "Improved patient care quality metrics"
        ]
      },
      testimonial: {
        quote: "The digital transformation has revolutionized how we deliver patient care. Our staff can now focus on patients instead of paperwork.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, MediCare Solutions"
      }
    },
    {
      id: 3,
      title: "Financial Trading Platform Optimization",
      client: "InvestTech Capital",
      industry: "Fintech",
      challenge: "High-frequency trading platform experiencing latency issues, system outages, and regulatory compliance challenges affecting trading performance.",
      solution: "Complete system architecture overhaul with microservices, real-time data processing, and enhanced security measures.",
      technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Kubernetes", "PostgreSQL"],
      timeline: "6 months",
      teamSize: "15 developers",
      results: {
        metrics: [
          { label: "System Latency", before: "50ms", after: "0.8ms", improvement: "-98%" },
          { label: "System Uptime", before: "97.5%", after: "99.99%", improvement: "+2.5%" },
          { label: "Daily Trading Volume", before: "$100M", after: "$1.2B", improvement: "+1100%" },
          { label: "Compliance Score", before: "75%", after: "100%", improvement: "+33%" }
        ],
        businessImpact: [
          "Achieved sub-millisecond trading execution",
          "Full SOC 2 Type II compliance",
          "Increased daily profits by 400%",
          "Zero security incidents in 12 months"
        ]
      },
      testimonial: {
        quote: "NavioX delivered a trading platform that gives us a significant competitive advantage. The performance improvements are remarkable.",
        author: "Robert Martinez",
        position: "CTO, InvestTech Capital"
      }
    }
  ],
  methodology: [
    {
      phase: "Discovery & Analysis",
      description: "Comprehensive assessment of current systems, challenges, and business objectives",
      deliverables: ["Current state analysis", "Gap assessment", "Technical requirements", "Success metrics definition"]
    },
    {
      phase: "Strategy & Planning",
      description: "Solution architecture design and detailed project planning",
      deliverables: ["Solution architecture", "Technical specifications", "Project roadmap", "Risk mitigation plan"]
    },
    {
      phase: "Development & Implementation",
      description: "Agile development with continuous testing and stakeholder feedback",
      deliverables: ["MVP development", "Feature iterations", "Quality assurance", "Performance optimization"]
    },
    {
      phase: "Deployment & Optimization",
      description: "Production deployment with monitoring and continuous improvement",
      deliverables: ["Production deployment", "Performance monitoring", "User training", "Post-launch support"]
    }
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

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-700 to-purple-800 mb-20">
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
              <DocumentTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
              <span className="text-sm font-medium text-indigo-100">Success Stories</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Project
              <span className="block bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Case Studies
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-indigo-100 max-w-3xl mx-auto mb-10"
            >
              Dive deep into our most successful projects with detailed breakdowns of challenges, solutions, 
              and measurable business impact across various industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discuss Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#case-studies"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Case Studies
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{caseStudiesData.stats.totalCaseStudies}</div>
              <div className="text-sm font-medium text-slate-600">Detailed Case Studies</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{caseStudiesData.stats.averageROI}</div>
              <div className="text-sm font-medium text-slate-600">Average ROI</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{caseStudiesData.stats.successRate}</div>
              <div className="text-sm font-medium text-slate-600">Project Success Rate</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{caseStudiesData.stats.averageTimeline}</div>
              <div className="text-sm font-medium text-slate-600">Average Timeline</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section id="case-studies" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore detailed breakdowns of our most impactful projects with measurable results and client testimonials.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudiesData.featuredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                          {caseStudy.industry}
                        </span>
                        <div className="flex items-center text-sm text-slate-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {caseStudy.timeline}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <UserGroupIcon className="h-4 w-4 mr-1" />
                          {caseStudy.teamSize}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-lg text-slate-600">
                        {caseStudy.client}
                      </p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Solution</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-6">Results & Impact</h4>
                    
                    {/* Metrics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {caseStudy.results.metrics.map((metric) => (
                        <div key={metric.label} className="bg-slate-50 rounded-xl p-4">
                          <div className="text-sm font-medium text-slate-600 mb-2">{metric.label}</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-slate-500">Before: {metric.before}</div>
                            <div className="text-xs text-slate-500">After: {metric.after}</div>
                          </div>
                          <div className="text-lg font-bold text-green-600 mt-2">{metric.improvement}</div>
                        </div>
                      ))}
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h5 className="text-md font-semibold text-slate-900 mb-4">Business Impact</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {caseStudy.results.businessImpact.map((impact) => (
                          <div key={impact} className="flex items-center">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-slate-700">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <blockquote className="text-indigo-900 italic mb-4">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-indigo-900">{caseStudy.testimonial.author}</div>
                        <div className="text-sm text-indigo-600">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our Proven Methodology
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A systematic approach that ensures project success through careful planning, execution, and continuous improvement.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {caseStudiesData.methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                variants={itemVariants}
                className="relative"
              >
                {index < caseStudiesData.methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">
                    {phase.phase}
                  </h3>
                  <p className="text-slate-600 text-center mb-4 text-sm">
                    {phase.description}
                  </p>
                  <div className="space-y-2">
                    {phase.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8">
              Let&apos;s work together to build a solution that delivers measurable business impact. Your project could be our next featured case study.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}