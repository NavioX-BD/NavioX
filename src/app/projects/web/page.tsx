'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    CodeBracketIcon,
    ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Web Applications Projects data
const webProjectsData = {
  stats: {
    totalWebApps: "60+",
    averageLoadTime: "<2s",
    clientSatisfaction: "98%",
    averageUptime: "99.9%"
  },
  featuredProjects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Retail",
      description: "A comprehensive e-commerce solution with advanced features including payment processing, inventory management, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
      image: "/images/projects/ecommerce-web.jpg",
      client: "TechRetail Inc.",
      duration: "3 months",
      features: ["Multi-vendor marketplace", "Advanced search", "Real-time inventory", "Payment integration"],
      results: [
        "40% increase in conversion rate",
        "60% reduction in cart abandonment",
        "99.9% uptime achieved",
        "Sub-2s page load times"
      ]
    },
    {
      id: 2,
      title: "Real Estate Management System",
      category: "Real Estate",
      description: "A comprehensive real estate platform with property listings, virtual tours, and customer relationship management.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Stripe", "WebRTC"],
      image: "/images/projects/realestate-web.jpg",
      client: "PropertyMax Realty",
      duration: "4 months",
      features: ["Property listings", "Virtual tours", "Lead management", "Document management"],
      results: [
        "35% increase in property inquiries",
        "Streamlined property management",
        "Enhanced customer experience",
        "50% faster lead processing"
      ]
    },
    {
      id: 3,
      title: "Educational Learning Platform",
      category: "Education",
      description: "An interactive learning platform with video courses, assessments, and progress tracking for educational institutions.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "WebRTC", "Socket.io"],
      image: "/images/projects/education-web.jpg",
      client: "EduTech Academy",
      duration: "5 months",
      features: ["Video streaming", "Interactive assessments", "Progress tracking", "Discussion forums"],
      results: [
        "10,000+ active students",
        "95% course completion rate",
        "Improved learning outcomes",
        "24/7 platform availability"
      ]
    },
    {
      id: 4,
      title: "Corporate Dashboard System",
      category: "Business Intelligence",
      description: "A comprehensive business intelligence dashboard with real-time analytics, reporting, and data visualization capabilities.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "AWS", "Docker"],
      image: "/images/projects/dashboard-web.jpg",
      client: "DataCorp Analytics",
      duration: "4 months",
      features: ["Real-time analytics", "Custom reports", "Data visualization", "User permissions"],
      results: [
        "80% faster data processing",
        "Real-time business insights",
        "Improved decision making",
        "50% reduction in report generation time"
      ]
    }
  ],
  webAppTypes: [
    {
      type: "Single Page Applications (SPA)",
      description: "Fast, responsive web applications with seamless user experiences",
      features: ["Lightning-fast navigation", "Real-time updates", "Offline capabilities", "Modern UI/UX", "SEO optimization", "Progressive enhancement"]
    },
    {
      type: "Progressive Web Apps (PWA)",
      description: "Web applications with native app-like experiences and capabilities",
      features: ["App-like interface", "Offline functionality", "Push notifications", "Install prompts", "Background sync", "Responsive design"]
    },
    {
      type: "Enterprise Web Platforms",
      description: "Scalable web applications for large organizations with complex requirements",
      features: ["Multi-tenant architecture", "Advanced security", "Integration capabilities", "Scalable infrastructure", "Custom workflows", "Audit trails"]
    },
    {
      type: "E-commerce Solutions",
      description: "Complete online shopping experiences with modern commerce features",
      features: ["Product catalogs", "Shopping cart", "Payment processing", "Order management", "Inventory tracking", "Customer accounts"]
    }
  ],
  technologies: [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "PHP", "Go", "C#"]
    },
    {
      category: "Databases",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Monitoring"]
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

export default function WebProjectsPage() {
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
              <CodeBracketIcon className="h-4 w-4 text-blue-300 mr-2" />
              <span className="text-sm font-medium text-blue-100">Web Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Web Application
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Discover our web application portfolio featuring modern SPAs, PWAs, and enterprise platforms 
              built with cutting-edge technologies and best practices.
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
                Start Your Web Project
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{webProjectsData.stats.totalWebApps}</div>
              <div className="text-sm font-medium text-slate-600">Web Apps Built</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{webProjectsData.stats.averageLoadTime}</div>
              <div className="text-sm font-medium text-slate-600">Average Load Time</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{webProjectsData.stats.clientSatisfaction}</div>
              <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{webProjectsData.stats.averageUptime}</div>
              <div className="text-sm font-medium text-slate-600">Average Uptime</div>
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
              Featured Web Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our most successful web applications across various industries and use cases.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {webProjectsData.featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <ComputerDesktopIcon className="h-5 w-5 text-slate-400" />
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
                          <CheckIcon className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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
                      <span key={tech} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Web App Types Section */}
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
              Web Applications We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in various types of web applications to meet different business needs and user requirements.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {webProjectsData.webAppTypes.map((type) => (
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
                      <CheckIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
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
              Technologies We Use
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We leverage modern web technologies and frameworks to build robust, scalable, and maintainable applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {webProjectsData.technologies.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech) => (
                    <div key={tech} className="text-center">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Let&apos;s create a powerful web application that engages your users and drives your business forward. From concept to deployment and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your Web Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
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