'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    CreditCardIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// E-commerce Projects data
const ecommerceProjectsData = {
  stats: {
    totalStores: "25+",
    averageConversion: "3.2%",
    totalRevenue: "$10M+",
    averageUptime: "99.9%"
  },
  featuredProjects: [
    {
      id: 1,
      title: "Multi-Vendor Marketplace",
      category: "B2B/B2C Platform",
      description: "A comprehensive multi-vendor e-commerce platform with vendor management, commission tracking, and advanced analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
      image: "/images/projects/marketplace.jpg",
      client: "MarketHub Inc.",
      duration: "6 months",
      features: ["Multi-vendor support", "Advanced analytics", "Mobile responsive", "Payment gateway"],
      results: [
        "500+ active vendors",
        "40% increase in sales",
        "99.9% uptime achieved"
      ]
    },
    {
      id: 2,
      title: "Fashion E-commerce Platform",
      category: "B2C Retail",
      description: "A modern fashion e-commerce site with AR try-on features, personalized recommendations, and social shopping.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "AWS", "TensorFlow"],
      image: "/images/projects/fashion.jpg",
      client: "StyleForward Boutique",
      duration: "4 months",
      features: ["AR try-on", "AI recommendations", "Social features", "Inventory sync"],
      results: [
        "60% increase in conversion",
        "45% reduction in returns",
        "Featured in TechCrunch"
      ]
    },
    {
      id: 3,
      title: "Grocery Delivery Platform",
      category: "Food & Grocery",
      description: "A complete grocery delivery ecosystem with real-time inventory, delivery tracking, and subscription services.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe", "Google Maps"],
      image: "/images/projects/grocery.jpg",
      client: "FreshMart Express",
      duration: "5 months",
      features: ["Real-time tracking", "Subscription service", "Inventory management", "Multi-payment"],
      results: [
        "200% growth in orders",
        "30-min average delivery",
        "95% customer retention"
      ]
    },
    {
      id: 4,
      title: "Electronics B2B Portal",
      category: "B2B Wholesale",
      description: "A B2B wholesale platform for electronics with bulk pricing, credit terms, and automated invoicing.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "AWS", "QuickBooks API"],
      image: "/images/projects/electronics.jpg",
      client: "TechWholesale Corp.",
      duration: "4 months",
      features: ["Bulk pricing", "Credit management", "Auto invoicing", "ERP integration"],
      results: [
        "300+ B2B customers",
        "50% faster order processing",
        "Reduced manual work by 70%"
      ]
    }
  ],
  ecommerceTypes: [
    {
      type: "B2C E-commerce Stores",
      description: "Customer-facing online stores with modern shopping experiences",
      features: ["Product catalog", "Shopping cart", "Payment processing", "Order management", "Customer accounts", "Review system"]
    },
    {
      type: "B2B Wholesale Platforms",
      description: "Business-to-business platforms with specialized wholesale features",
      features: ["Bulk pricing", "Credit terms", "Purchase orders", "Account management", "ERP integration", "Custom catalogs"]
    },
    {
      type: "Multi-Vendor Marketplaces",
      description: "Platforms supporting multiple vendors with centralized management",
      features: ["Vendor onboarding", "Commission tracking", "Dispute resolution", "Analytics dashboard", "Payment splitting", "Vendor ratings"]
    },
    {
      type: "Subscription Commerce",
      description: "Recurring revenue models with subscription management",
      features: ["Subscription plans", "Recurring billing", "Customer portal", "Usage tracking", "Dunning management", "Analytics"]
    }
  ],
  ecommerceFeatures: [
    {
      category: "Core Features",
      features: ["Product Management", "Shopping Cart", "Checkout Process", "Payment Gateway", "Order Management", "Inventory Tracking"]
    },
    {
      category: "Advanced Features",
      features: ["AI Recommendations", "AR/VR Try-on", "Multi-currency", "Multi-language", "Advanced Search", "Wishlist"]
    },
    {
      category: "Business Features",
      features: ["Analytics Dashboard", "Customer Segmentation", "Marketing Tools", "SEO Optimization", "A/B Testing", "Performance Monitoring"]
    },
    {
      category: "Integration Features",
      features: ["ERP Integration", "CRM Integration", "Email Marketing", "Social Media", "Shipping APIs", "Tax Calculation"]
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

export default function EcommerceProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 mb-20">
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
              <ShoppingBagIcon className="h-4 w-4 text-purple-300 mr-2" />
              <span className="text-sm font-medium text-purple-100">E-commerce Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              E-commerce
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-purple-100 max-w-3xl mx-auto mb-10"
            >
              Discover our e-commerce portfolio featuring custom online stores, marketplaces, and B2B platforms 
              that drive sales and deliver exceptional shopping experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your E-commerce Project
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{ecommerceProjectsData.stats.totalStores}</div>
              <div className="text-sm font-medium text-slate-600">E-commerce Stores Built</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{ecommerceProjectsData.stats.averageConversion}</div>
              <div className="text-sm font-medium text-slate-600">Average Conversion Rate</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{ecommerceProjectsData.stats.totalRevenue}</div>
              <div className="text-sm font-medium text-slate-600">Revenue Generated</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{ecommerceProjectsData.stats.averageUptime}</div>
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
              Featured E-commerce Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our successful e-commerce implementations across various industries and business models.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {ecommerceProjectsData.featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <CreditCardIcon className="h-5 w-5 text-slate-400" />
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
                          <CheckIcon className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
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
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* E-commerce Types Section */}
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
              E-commerce Solutions We Build
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in various types of e-commerce platforms to meet different business models and requirements.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {ecommerceProjectsData.ecommerceTypes.map((type) => (
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
                      <CheckIcon className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Launch Your E-commerce Store?
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-8">
              Let's build an e-commerce platform that converts visitors into customers and drives your online business growth. From concept to launch and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Start Your E-commerce Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
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