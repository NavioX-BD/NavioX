'use client'

import { ArrowRightIcon, CalendarIcon, ClockIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Import the blog data
const blogData = {
  "blogStats": {
    "totalPosts": "50+",
    "monthlyReaders": "5,000+",
    "categories": "8",
    "averageReadTime": "5 minutes"
  },
  "featuredPosts": [
    {
      "id": 1,
      "title": "The Future of Web Development: Trends to Watch in 2025",
      "excerpt": "Explore the latest trends in web development including AI integration, WebAssembly, and the rise of edge computing.",
      "author": "Sarah Chen",
      "date": "2025-01-15",
      "category": "Technology Trends",
      "readTime": "8 min read",
      "image": "/images/blog/web-development-trends.jpg",
      "tags": ["Web Development", "AI", "Technology Trends", "2025"],
      "content": "The landscape of web development is evolving rapidly, with new technologies and methodologies emerging every day..."
    },
    {
      "id": 2,
      "title": "Building Scalable React Applications: Best Practices",
      "excerpt": "Learn the essential best practices for building scalable React applications that can handle growth and maintain performance.",
      "author": "David Kim",
      "date": "2025-01-10",
      "category": "Development",
      "readTime": "12 min read",
      "image": "/images/blog/react-best-practices.jpg",
      "tags": ["React", "JavaScript", "Best Practices", "Scalability"],
      "content": "React has become the go-to framework for building modern web applications..."
    },
    {
      "id": 3,
      "title": "The Impact of AI on Software Development",
      "excerpt": "Discover how artificial intelligence is transforming the software development process and what it means for developers.",
      "author": "Ahmed Rahman",
      "date": "2025-01-05",
      "category": "AI & Machine Learning",
      "readTime": "10 min read",
      "image": "/images/blog/ai-software-development.jpg",
      "tags": ["AI", "Machine Learning", "Software Development", "Automation"],
      "content": "Artificial Intelligence is revolutionizing the way we approach software development..."
    },
    {
      "id": 4,
      "title": "UX Design Principles for Better User Experience",
      "excerpt": "Master the fundamental UX design principles that create intuitive and engaging user experiences.",
      "author": "Maria Rodriguez",
      "date": "2024-12-28",
      "category": "Design",
      "readTime": "7 min read",
      "image": "/images/blog/ux-design-principles.jpg",
      "tags": ["UX Design", "User Experience", "Design Principles", "UI/UX"],
      "content": "User experience design is more than just making things look good..."
    },
    {
      "id": 5,
      "title": "DevOps Best Practices for Modern Teams",
      "excerpt": "Implement effective DevOps practices to streamline your development workflow and improve team productivity.",
      "author": "Sarah Chen",
      "date": "2024-12-20",
      "category": "DevOps",
      "readTime": "15 min read",
      "image": "/images/blog/devops-best-practices.jpg",
      "tags": ["DevOps", "CI/CD", "Automation", "Team Productivity"],
      "content": "DevOps has become essential for modern software development teams..."
    },
    {
      "id": 6,
      "title": "Building Secure Web Applications",
      "excerpt": "Learn essential security practices to protect your web applications from common vulnerabilities and attacks.",
      "author": "David Kim",
      "date": "2024-12-15",
      "category": "Security",
      "readTime": "11 min read",
      "image": "/images/blog/web-security.jpg",
      "tags": [
        "Security",
        "Web Development",
        "Best Practices",
        "Cybersecurity"
      ],
      "content": "Security should be a top priority when building web applications..."
    }
  ],
  "blogCategories": [
    {
      "name": "Technology Trends",
      "count": 12,
      "description": "Latest trends and innovations in technology"
    },
    {
      "name": "Development",
      "count": 15,
      "description": "Programming tips, tutorials, and best practices"
    },
    {
      "name": "Design",
      "count": 8,
      "description": "UX/UI design insights and principles"
    },
    {
      "name": "DevOps",
      "count": 6,
      "description": "DevOps practices and automation"
    },
    {
      "name": "AI & Machine Learning",
      "count": 5,
      "description": "AI and ML in software development"
    },
    {
      "name": "Security",
      "count": 4,
      "description": "Cybersecurity and secure development"
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

export default function BlogPage() {
  const { blogStats, featuredPosts, blogCategories } = blogData

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
              <TagIcon className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-blue-100">Tech Insights & Tutorials</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              NavioX
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Blog
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Stay updated with the latest trends, best practices, and insights from the world of technology. 
              Our team shares knowledge on web development, DevOps, AI, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#featured-posts"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Latest Posts
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Browse Categories
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {Object.entries(blogStats).map(([key, value], index) => (
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

      {/* Blog Categories */}
      <section id="categories" className="py-16 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Blog Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our diverse range of topics covering the latest in technology, development, and industry insights
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {category.count}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {category.description}
                  </p>
                  <Link
                    href={`/blog/${category.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Read Articles
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured-posts" className="py-16 bg-white/70 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 sm:text-3xl">
              Featured Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our most popular and insightful articles covering the latest trends and best practices in technology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center text-xs text-slate-600 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/blog/posts/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
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
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on the latest trends, tutorials, and insights from the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Subscribe to Newsletter
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}