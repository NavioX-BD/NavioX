'use client'

import {
    ArrowRightIcon,
    CheckIcon,
    LightBulbIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Best Practices blog data
const bestPracticesData = {
  stats: {
    totalGuides: "30+",
    practiceAreas: "8",
    averageReadTime: "12 minutes",
    implementationRate: "95%"
  },
  featuredPractices: [
    {
      id: 1,
      title: "Clean Code Principles: Writing Maintainable and Readable Code",
      excerpt: "Master the fundamental principles of clean code that make your applications more maintainable, readable, and scalable for long-term success.",
      author: "Senior Developer",
      date: "2025-01-18",
      category: "Code Quality",
      readTime: "15 min read",
      image: "/images/blog/clean-code-principles.jpg",
      tags: ["Clean Code", "Best Practices", "Code Quality", "Maintainability"],
      difficulty: "Intermediate",
      practiceType: "Development",
      keyTakeaways: [
        "SOLID principles implementation",
        "Meaningful naming conventions",
        "Function and class design patterns",
        "Code documentation strategies"
      ]
    },
    {
      id: 2,
      title: "React Performance Optimization: Advanced Techniques and Patterns",
      excerpt: "Comprehensive guide to optimizing React applications with advanced techniques including memoization, lazy loading, and efficient state management.",
      author: "React Expert",
      date: "2025-01-15",
      category: "Frontend Development",
      readTime: "18 min read",
      image: "/images/blog/react-performance.jpg",
      tags: ["React", "Performance", "Optimization", "Frontend"],
      difficulty: "Advanced",
      practiceType: "Framework",
      keyTakeaways: [
        "React.memo and useMemo optimization",
        "Code splitting strategies",
        "State management best practices",
        "Bundle size optimization"
      ]
    },
    {
      id: 3,
      title: "API Design Best Practices: Building RESTful and GraphQL APIs",
      excerpt: "Learn industry-standard practices for designing robust, scalable, and developer-friendly APIs that stand the test of time.",
      author: "Backend Architect",
      date: "2025-01-12",
      category: "Backend Development",
      readTime: "20 min read",
      image: "/images/blog/api-design-practices.jpg",
      tags: ["API Design", "REST", "GraphQL", "Backend"],
      difficulty: "Intermediate",
      practiceType: "Architecture",
      keyTakeaways: [
        "RESTful API design principles",
        "GraphQL schema best practices",
        "API versioning strategies",
        "Error handling and status codes"
      ]
    },
    {
      id: 4,
      title: "Database Optimization: Performance Tuning and Query Optimization",
      excerpt: "Essential database optimization techniques to improve query performance, reduce load times, and ensure scalable data operations.",
      author: "Database Expert",
      date: "2025-01-10",
      category: "Database",
      readTime: "16 min read",
      image: "/images/blog/database-optimization.jpg",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      difficulty: "Advanced",
      practiceType: "Database",
      keyTakeaways: [
        "Index optimization strategies",
        "Query performance analysis",
        "Database schema design",
        "Connection pooling best practices"
      ]
    },
    {
      id: 5,
      title: "DevOps Security: Implementing Security in CI/CD Pipelines",
      excerpt: "Comprehensive guide to integrating security practices into your DevOps workflows with automated security testing and compliance checks.",
      author: "DevSecOps Engineer",
      date: "2025-01-08",
      category: "DevOps & Security",
      readTime: "14 min read",
      image: "/images/blog/devsecops-practices.jpg",
      tags: ["DevOps", "Security", "CI/CD", "Automation"],
      difficulty: "Advanced",
      practiceType: "Security",
      keyTakeaways: [
        "Security scanning automation",
        "Vulnerability management",
        "Compliance as code",
        "Secret management practices"
      ]
    },
    {
      id: 6,
      title: "Mobile App Development: Cross-Platform Best Practices",
      excerpt: "Best practices for building high-quality cross-platform mobile applications that deliver native-like performance and user experience.",
      author: "Mobile Development Lead",
      date: "2025-01-05",
      category: "Mobile Development",
      readTime: "12 min read",
      image: "/images/blog/mobile-best-practices.jpg",
      tags: ["Mobile Development", "Cross-Platform", "React Native", "Flutter"],
      difficulty: "Intermediate",
      practiceType: "Mobile",
      keyTakeaways: [
        "Platform-specific optimizations",
        "State management patterns",
        "Performance monitoring",
        "App store optimization"
      ]
    }
  ],
  practiceCategories: [
    {
      category: "Code Quality & Architecture",
      description: "Best practices for writing clean, maintainable, and scalable code",
      guideCount: 8,
      topics: ["Clean Code", "SOLID Principles", "Design Patterns", "Code Reviews", "Refactoring"]
    },
    {
      category: "Performance Optimization",
      description: "Techniques to optimize application performance and user experience",
      guideCount: 6,
      topics: ["Frontend Optimization", "Backend Performance", "Database Tuning", "Caching Strategies"]
    },
    {
      category: "Security & DevOps",
      description: "Security best practices and DevOps implementation guidelines",
      guideCount: 5,
      topics: ["Security Testing", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
    },
    {
      category: "Testing & Quality Assurance",
      description: "Testing strategies and quality assurance methodologies",
      guideCount: 4,
      topics: ["Unit Testing", "Integration Testing", "E2E Testing", "Test Automation"]
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

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 mb-20">
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
              <LightBulbIcon className="h-4 w-4 text-emerald-300 mr-2" />
              <span className="text-sm font-medium text-emerald-100">Development Guides</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Best
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Practices
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-emerald-100 max-w-3xl mx-auto mb-10"
            >
              Master software development with our comprehensive collection of best practices, coding standards, 
              and proven methodologies used by industry experts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#featured-guides"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Best Practices
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                All Blog Posts
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{bestPracticesData.stats.totalGuides}</div>
              <div className="text-sm font-medium text-slate-600">Practice Guides</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{bestPracticesData.stats.practiceAreas}</div>
              <div className="text-sm font-medium text-slate-600">Practice Areas</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{bestPracticesData.stats.averageReadTime}</div>
              <div className="text-sm font-medium text-slate-600">Average Read Time</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{bestPracticesData.stats.implementationRate}</div>
              <div className="text-sm font-medium text-slate-600">Implementation Success</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Practices Section */}
      <section id="featured-guides" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Best Practice Guides
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive guides covering essential development practices, from code quality to performance optimization.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {bestPracticesData.featuredPractices.map((guide) => (
              <motion.article
                key={guide.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                      {guide.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wider">Key Takeaways:</h4>
                    <div className="space-y-1">
                      {guide.keyTakeaways.slice(0, 2).map((takeaway) => (
                        <div key={takeaway} className="flex items-center text-xs">
                          <CheckIcon className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-slate-600">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{guide.readTime}</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded">
                      {guide.practiceType}
                    </span>
                  </div>

                  <Link
                    href={`/blog/best-practices/${guide.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                  >
                    Read Practice Guide
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Practice Categories Section */}
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
              Practice Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore best practices organized by development areas and expertise levels.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {bestPracticesData.practiceCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                    {category.guideCount} guides
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/blog/best-practices?category=${encodeURIComponent(category.category)}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                >
                  View All Guides
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
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
              Ready to Implement Best Practices?
            </h2>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto mb-8">
              Transform your development process with industry-proven best practices. Let&apos;s help you build better software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Get Expert Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}