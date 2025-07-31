'use client'

import { ArrowRightIcon, CheckIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Import the projects data
const projectsData = {
  "projectStats": {
    "totalProjects": "150+",
    "completedProjects": "150+",
    "ongoingProjects": "25+",
    "clientSatisfaction": "98%",
    "averageDeliveryTime": "2-3 months",
    "technologiesUsed": "15+"
  },
  "featuredProjects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "category": "Web Application",
      "description": "A comprehensive e-commerce solution with advanced features including payment processing, inventory management, and analytics dashboard.",
      "technologies": ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      "image": "/images/projects/ecommerce.jpg",
      "client": "TechRetail Inc.",
      "duration": "3 months",
      "results": [
        "40% increase in conversion rate",
        "60% reduction in cart abandonment",
        "99.9% uptime achieved"
      ]
    },
    {
      "id": 2,
      "title": "Healthcare Management System",
      "category": "Enterprise Software",
      "description": "A complete healthcare management system for hospitals with patient records, appointment scheduling, and billing integration.",
      "technologies": ["Next.js", "TypeScript", "MongoDB", "Docker", "Azure"],
      "image": "/images/projects/healthcare.jpg",
      "client": "MediCare Solutions",
      "duration": "6 months",
      "results": [
        "Streamlined patient care workflow",
        "Reduced administrative overhead by 30%",
        "Improved data accuracy by 95%"
      ]
    },
    {
      "id": 3,
      "title": "Mobile Banking App",
      "category": "Mobile Application",
      "description": "A secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      "technologies": ["React Native", "Node.js", "Firebase", "Stripe", "AWS"],
      "image": "/images/projects/banking.jpg",
      "client": "DigitalBank Ltd.",
      "duration": "4 months",
      "results": [
        "50% increase in mobile transactions",
        "Enhanced security with biometric auth",
        "4.8/5 user rating"
      ]
    },
    {
      "id": 4,
      "title": "AI-Powered Analytics Dashboard",
      "category": "Data Analytics",
      "description": "An intelligent analytics platform that provides real-time insights and predictive analytics for business decision-making.",
      "technologies": ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
      "image": "/images/projects/analytics.jpg",
      "client": "DataInsight Corp.",
      "duration": "5 months",
      "results": [
        "80% faster data processing",
        "90% accuracy in predictions",
        "Real-time insights delivery"
      ]
    },
    {
      "id": 5,
      "title": "Real Estate Management System",
      "category": "Web Application",
      "description": "A comprehensive real estate platform with property listings, virtual tours, and customer relationship management.",
      "technologies": ["Vue.js", "Laravel", "MySQL", "AWS", "Stripe"],
      "image": "/images/projects/realestate.jpg",
      "client": "PropertyMax Realty",
      "duration": "4 months",
      "results": [
        "35% increase in property inquiries",
        "Streamlined property management",
        "Enhanced customer experience"
      ]
    },
    {
      "id": 6,
      "title": "Educational Learning Platform",
      "category": "E-Learning",
      "description": "An interactive learning platform with video courses, assessments, and progress tracking for educational institutions.",
      "technologies": ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
      "image": "/images/projects/education.jpg",
      "client": "EduTech Academy",
      "duration": "5 months",
      "results": [
        "10,000+ active students",
        "95% course completion rate",
        "Improved learning outcomes"
      ]
    }
  ],
  "projectCategories": [
    {
      "name": "Web Applications",
      "count": 60,
      "description": "Custom web applications and platforms"
    },
    {
      "name": "Mobile Applications",
      "count": 35,
      "description": "iOS and Android mobile apps"
    },
    {
      "name": "E-Commerce Solutions",
      "count": 25,
      "description": "Online stores and marketplaces"
    },
    {
      "name": "Enterprise Software",
      "count": 20,
      "description": "Business management systems"
    },
    {
      "name": "Data Analytics",
      "count": 10,
      "description": "Analytics and reporting platforms"
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

export default function ProjectsPage() {
  const { projectStats, featuredProjects, projectCategories } = projectsData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mb-20">
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
              <CheckIcon className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-blue-100">150+ Successful Projects</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Our Project
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Discover our comprehensive portfolio of successful projects across various industries. 
              From web applications to mobile solutions, we deliver exceptional results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#featured-projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Featured Projects
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Start Your Project
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
            className="grid grid-cols-2 lg:grid-cols-6 gap-8"
          >
            {Object.entries(projectStats).map(([key, value]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  {value}
                </div>
                <div className="text-sm font-medium text-slate-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
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
              Project Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our diverse project portfolio across different domains and technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {category.count}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {category.description}
                  </p>
                  <Link
                    href={`/projects/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    View Projects
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Showcasing our most impactful and innovative projects that demonstrate our expertise
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-slate-300 group-hover:text-slate-400 transition-colors duration-300">
                      {project.id}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {project.client}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/projects/case-studies/${project.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    View Case Study
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create something amazing together. 
              Our team is ready to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}