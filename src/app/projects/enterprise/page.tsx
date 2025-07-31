'apos;use client'apos;

import {
    ArrowRightIcon,
    BuildingOfficeIcon,
    ChartBarIcon,
    CheckIcon
} from 'apos;@heroicons/react/24/outline'apos;
import { motion } from 'apos;framer-motion'apos;
import Link from 'apos;next/link'apos;

// Enterprise Projects data
const enterpriseProjectsData = {
  stats: {
    totalEnterpriseProjects: "20+",
    averageProjectSize: "$500K+",
    enterpriseClients: "Fortune 500",
    averageTeamSize: "15+ developers"
  },
  featuredProjects: [
    {
      id: 1,
      title: "Healthcare Management System",
      category: "Healthcare",
      description: "A comprehensive healthcare management system for hospitals with patient records, appointment scheduling, billing integration, and compliance features.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Docker", "Azure", "FHIR"],
      image: "/images/projects/healthcare-enterprise.jpg",
      client: "MediCare Solutions",
      duration: "8 months",
      teamSize: "12 developers",
      features: ["HIPAA compliance", "EHR integration", "Real-time monitoring", "Multi-facility support"],
      results: [
        "30% reduction in administrative overhead",
        "95% improvement in data accuracy",
        "HIPAA compliant implementation",
        "Serving 50,000+ patients"
      ]
    },
    {
      id: 2,
      title: "Financial Trading Platform",
      category: "Fintech",
      description: "A high-frequency trading platform with real-time market data, algorithmic trading, risk management, and regulatory compliance.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "Kubernetes"],
      image: "/images/projects/trading-platform.jpg",
      client: "InvestTech Capital",
      duration: "12 months",
      teamSize: "18 developers",
      features: ["Real-time trading", "Risk management", "Regulatory compliance", "High availability"],
      results: [
        "99.99% uptime achieved",
        "Sub-millisecond latency",
        "SOC 2 Type II compliant",
        "$1B+ daily trading volume"
      ]
    },
    {
      id: 3,
      title: "Supply Chain Management System",
      category: "Manufacturing",
      description: "An end-to-end supply chain management platform with inventory tracking, supplier management, demand forecasting, and logistics optimization.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TensorFlow", "Blockchain"],
      image: "/images/projects/supply-chain.jpg",
      client: "GlobalMfg Corp",
      duration: "10 months",
      teamSize: "15 developers",
      features: ["Blockchain tracking", "AI forecasting", "IoT integration", "Multi-region support"],
      results: [
        "40% reduction in inventory costs",
        "60% improvement in delivery times",
        "Full supply chain transparency",
        "Integration with 200+ suppliers"
      ]
    },
    {
      id: 4,
      title: "Enterprise Resource Planning (ERP)",
      category: "Manufacturing",
      description: "A comprehensive ERP system integrating finance, HR, manufacturing, and CRM modules with advanced analytics and reporting.",
      technologies: ["Angular", "Java", "Oracle", "Docker", "Jenkins", "Microservices"],
      image: "/images/projects/erp-system.jpg",
      client: "TechManufacturing Inc",
      duration: "14 months",
      teamSize: "20 developers",
      features: ["Modular architecture", "Advanced analytics", "Multi-company support", "API integration"],
      results: [
        "50% faster business processes",
        "Unified data across departments",
        "Real-time business insights",
        "ROI achieved in 18 months"
      ]
    }
  ],
  enterpriseTypes: [
    {
      type: "Healthcare Systems",
      description: "HIPAA-compliant healthcare management and patient care solutions",
      features: ["Electronic Health Records", "Patient Management", "Billing Integration", "Compliance Monitoring", "Telemedicine", "Medical Device Integration"]
    },
    {
      type: "Financial Platforms",
      description: "Secure, scalable financial services and trading platforms",
      features: ["Real-time Trading", "Risk Management", "Regulatory Compliance", "Payment Processing", "Fraud Detection", "Audit Trails"]
    },
    {
      type: "Manufacturing ERP",
      description: "Comprehensive enterprise resource planning for manufacturing",
      features: ["Production Planning", "Inventory Management", "Quality Control", "Supply Chain", "Financial Integration", "Reporting & Analytics"]
    },
    {
      type: "Government Solutions",
      description: "Secure, compliant solutions for government agencies",
      features: ["Citizen Services", "Data Security", "Compliance Management", "Workflow Automation", "Document Management", "Public Transparency"]
    }
  ],
  enterpriseCapabilities: [
    {
      category: "Scalability & Performance",
      capabilities: ["Microservices Architecture", "Load Balancing", "Auto-scaling", "Performance Optimization", "Caching Strategies", "Database Optimization"]
    },
    {
      category: "Security & Compliance",
      capabilities: ["Data Encryption", "Access Control", "Audit Logging", "Compliance Frameworks", "Penetration Testing", "Security Monitoring"]
    },
    {
      category: "Integration & APIs",
      capabilities: ["Legacy System Integration", "Third-party APIs", "Data Migration", "Real-time Sync", "Webhook Management", "API Gateway"]
    },
    {
      category: "DevOps & Infrastructure",
      capabilities: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Alerting", "Disaster Recovery", "Multi-cloud Deployment"]
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

export default function EnterpriseProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 mb-20">
        <div className="absolute inset-0 bg-[url('apos;data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'apos;)] opacity-20"></div>
        
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
              <BuildingOfficeIcon className="h-4 w-4 text-slate-300 mr-2" />
              <span className="text-sm font-medium text-slate-100">Enterprise Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Enterprise
              <span className="block bg-gradient-to-r from-slate-300 to-gray-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-100 max-w-3xl mx-auto mb-10"
            >
              Explore our enterprise-grade solutions designed for large-scale organizations, featuring robust 
              architecture, security compliance, and seamless integration capabilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discuss Enterprise Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#featured-projects"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Projects
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{enterpriseProjectsData.stats.totalEnterpriseProjects}</div>
              <div className="text-sm font-medium text-slate-600">Enterprise Projects</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{enterpriseProjectsData.stats.averageProjectSize}</div>
              <div className="text-sm font-medium text-slate-600">Average Project Size</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{enterpriseProjectsData.stats.enterpriseClients}</div>
              <div className="text-sm font-medium text-slate-600">Enterprise Clients</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{enterpriseProjectsData.stats.averageTeamSize}</div>
              <div className="text-sm font-medium text-slate-600">Average Team Size</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Enterprise Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover our large-scale enterprise implementations across various industries and business domains.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {enterpriseProjectsData.featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <ChartBarIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <CheckIcon className="h-4 w-4 text-slate-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Team: {project.teamSize}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Types Section */}
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
              Enterprise Solutions We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in building enterprise-grade solutions across various industries with focus on scalability, security, and compliance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {enterpriseProjectsData.enterpriseTypes.map((type) => (
              <motion.div
                key={type.type}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {type.type}
                </h3>
                <p className="text-slate-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-3">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-lg text-slate-100 max-w-3xl mx-auto mb-8">
              Let'apos;s build an enterprise solution that scales with your organization and drives digital transformation. From planning to deployment and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Discuss Enterprise Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-slate-800 transition-all duration-300"
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