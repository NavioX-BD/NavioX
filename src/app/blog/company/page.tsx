'use client'

import {
    ArrowRightIcon,
    BuildingOfficeIcon,
    CheckIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Company Updates blog data
const companyUpdatesData = {
  stats: {
    totalUpdates: "20+",
    monthlyUpdates: "2-3",
    teamGrowth: "150%",
    clientSatisfaction: "98%"
  },
  featuredUpdates: [
    {
      id: 1,
      title: "NavioX Expands Team with 5 New Cloud Engineers",
      excerpt: "We're excited to announce the addition of five senior cloud engineers to our growing team, strengthening our AWS, Azure, and GCP expertise.",
      author: "HR Team",
      date: "2025-01-20",
      category: "Team Growth",
      readTime: "3 min read",
      image: "/images/blog/team-expansion.jpg",
      tags: ["Team Growth", "Hiring", "Cloud Engineers", "Expansion"],
      updateType: "Team",
      highlights: [
        "5 new senior cloud engineers joined",
        "Expanded AWS and Azure expertise",
        "Strengthened DevOps capabilities",
        "Enhanced client service capacity"
      ]
    },
    {
      id: 2,
      title: "New Partnership with Leading Cloud Infrastructure Provider",
      excerpt: "NavioX announces strategic partnership to deliver enhanced cloud solutions and provide clients with cutting-edge infrastructure services.",
      author: "Leadership Team",
      date: "2025-01-15",
      category: "Partnerships",
      readTime: "4 min read",
      image: "/images/blog/partnership-announcement.jpg",
      tags: ["Partnership", "Cloud Infrastructure", "Strategic Alliance", "Growth"],
      updateType: "Business",
      highlights: [
        "Strategic cloud infrastructure partnership",
        "Enhanced service offerings",
        "Improved client solutions",
        "Market expansion opportunities"
      ]
    },
    {
      id: 3,
      title: "NavioX Achieves AWS Advanced Consulting Partner Status",
      excerpt: "We're proud to announce that NavioX has achieved AWS Advanced Consulting Partner status, recognizing our cloud expertise and client success.",
      author: "Technical Leadership",
      date: "2025-01-10",
      category: "Certifications",
      readTime: "5 min read",
      image: "/images/blog/aws-advanced-partner.jpg",
      tags: ["AWS", "Certification", "Partnership", "Cloud Expertise"],
      updateType: "Achievement",
      highlights: [
        "AWS Advanced Consulting Partner status",
        "Recognized cloud expertise",
        "Enhanced AWS service capabilities",
        "Validated technical competency"
      ]
    },
    {
      id: 4,
      title: "Opening New Development Center in Austin, Texas",
      excerpt: "NavioX is expanding operations with a new development center in Austin, bringing our services closer to clients in the Central US region.",
      author: "Executive Team",
      date: "2025-01-05",
      category: "Expansion",
      readTime: "6 min read",
      image: "/images/blog/austin-office-opening.jpg",
      tags: ["Office Expansion", "Austin", "Growth", "Regional Presence"],
      updateType: "Expansion",
      highlights: [
        "New Austin development center",
        "Regional market expansion",
        "Local talent acquisition",
        "Enhanced client proximity"
      ]
    },
    {
      id: 5,
      title: "NavioX Launches Internal Innovation Lab",
      excerpt: "Introducing our new Innovation Lab where our team explores cutting-edge technologies and develops proof-of-concepts for future client solutions.",
      author: "R&D Team",
      date: "2024-12-28",
      category: "Innovation",
      readTime: "7 min read",
      image: "/images/blog/innovation-lab-launch.jpg",
      tags: ["Innovation", "R&D", "Technology", "Future Solutions"],
      updateType: "Initiative",
      highlights: [
        "Internal Innovation Lab established",
        "Cutting-edge technology exploration",
        "Future solution development",
        "Enhanced R&D capabilities"
      ]
    },
    {
      id: 6,
      title: "Employee Spotlight: Celebrating Our DevOps Team Excellence",
      excerpt: "Recognizing the outstanding contributions of our DevOps team in delivering exceptional infrastructure solutions and client satisfaction.",
      author: "Management Team",
      date: "2024-12-20",
      category: "Team Recognition",
      readTime: "4 min read",
      image: "/images/blog/devops-team-spotlight.jpg",
      tags: ["Team Recognition", "DevOps", "Employee Spotlight", "Excellence"],
      updateType: "Recognition",
      highlights: [
        "DevOps team recognition",
        "Outstanding client satisfaction",
        "Infrastructure excellence",
        "Team achievement celebration"
      ]
    }
  ],
  updateCategories: [
    {
      category: "Team & Culture",
      description: "Updates about our growing team, company culture, and employee achievements",
      updateCount: 8,
      recentTopics: ["Team Expansion", "Employee Recognition", "Company Culture", "Training Programs"]
    },
    {
      category: "Business Growth",
      description: "Company milestones, partnerships, and business expansion news",
      updateCount: 6,
      recentTopics: ["Strategic Partnerships", "Market Expansion", "Revenue Growth", "Client Acquisitions"]
    },
    {
      category: "Technology & Innovation",
      description: "Technology investments, innovation initiatives, and R&D developments",
      updateCount: 4,
      recentTopics: ["Innovation Lab", "Technology Stack", "R&D Projects", "Technical Certifications"]
    },
    {
      category: "Community & Events",
      description: "Community involvement, industry events, and thought leadership activities",
      updateCount: 2,
      recentTopics: ["Industry Events", "Community Involvement", "Speaking Engagements", "Open Source"]
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

export default function CompanyUpdatesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-900 mb-20">
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
              <BuildingOfficeIcon className="h-4 w-4 text-slate-300 mr-2" />
              <span className="text-sm font-medium text-slate-100">Company News</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Company
              <span className="block bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">
                Updates
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-100 max-w-3xl mx-auto mb-10"
            >
              Stay connected with NavioX's journey, growth milestones, team achievements, and exciting 
              developments as we continue to innovate and expand our services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#company-news"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Latest Updates
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                About NavioX
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{companyUpdatesData.stats.totalUpdates}</div>
              <div className="text-sm font-medium text-slate-600">Company Updates</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{companyUpdatesData.stats.monthlyUpdates}</div>
              <div className="text-sm font-medium text-slate-600">Monthly Updates</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{companyUpdatesData.stats.teamGrowth}</div>
              <div className="text-sm font-medium text-slate-600">Team Growth</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{companyUpdatesData.stats.clientSatisfaction}</div>
              <div className="text-sm font-medium text-slate-600">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company News Section */}
      <section id="company-news" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Latest Company Updates
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover the latest news, milestones, and developments from NavioX as we grow and evolve.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companyUpdatesData.featuredUpdates.map((update) => (
              <motion.article
                key={update.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-full">
                      {update.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      update.updateType === 'Team' ? 'bg-green-100 text-green-600' :
                      update.updateType === 'Business' ? 'bg-blue-100 text-blue-600' :
                      update.updateType === 'Achievement' ? 'bg-yellow-100 text-yellow-600' :
                      update.updateType === 'Expansion' ? 'bg-purple-100 text-purple-600' :
                      update.updateType === 'Initiative' ? 'bg-indigo-100 text-indigo-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {update.updateType}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200 line-clamp-2">
                    {update.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {update.excerpt}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">Key Highlights:</h4>
                    <div className="space-y-1">
                      {update.highlights.slice(0, 2).map((highlight) => (
                        <div key={highlight} className="flex items-center text-xs">
                          <CheckIcon className="h-3 w-3 text-slate-500 mr-2 flex-shrink-0" />
                          <span className="text-slate-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {update.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{new Date(update.date).toLocaleDateString()}</span>
                    <span>{update.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/company/${update.id}`}
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                  >
                    Read Full Update
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Update Categories Section */}
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
              Update Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore company updates organized by different aspects of our business and growth journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {companyUpdatesData.updateCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 text-sm font-medium rounded-full">
                    {category.updateCount} updates
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Recent Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.recentTopics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/blog/company?category=${encodeURIComponent(category.category)}`}
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium text-sm"
                >
                  View All Updates
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
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
              Join Our Growing Journey
            </h2>
            <p className="text-lg text-slate-100 max-w-3xl mx-auto mb-8">
              Be part of NavioX's exciting growth story. Explore career opportunities or partner with us to build the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/careers"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                View Career Opportunities
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-slate-800 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}