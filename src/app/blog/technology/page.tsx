'apos;use client'apos;

import {
    ArrowRightIcon,
    CalendarDaysIcon,
    CpuChipIcon
} from 'apos;@heroicons/react/24/outline'apos;
import { motion } from 'apos;framer-motion'apos;
import Link from 'apos;next/link'apos;

// Technology blog data
const technologyData = {
  stats: {
    totalTechPosts: "40+",
    techCategories: "10",
    averageReadTime: "10 minutes",
    monthlyReaders: "3,000+"
  },
  featuredPosts: [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends in web development including AI integration, WebAssembly, and the rise of edge computing that will shape the future.",
      author: "Sarah Chen",
      date: "2025-01-15",
      category: "Web Development",
      readTime: "8 min read",
      image: "/images/blog/web-dev-2025.jpg",
      tags: ["Web Development", "AI", "Technology Trends", "2025"],
      trending: true,
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "The Impact of AI on Software Development",
      excerpt: "Discover how artificial intelligence is transforming the software development process and what it means for developers in the modern era.",
      author: "Ahmed Rahman",
      date: "2025-01-05",
      category: "AI & Machine Learning",
      readTime: "10 min read",
      image: "/images/blog/ai-software-dev.jpg",
      tags: ["AI", "Machine Learning", "Software Development", "Automation"],
      trending: true,
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Kubernetes in 2025: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced Kubernetes patterns, service mesh integration, and cloud-native application deployment strategies for enterprise scale.",
      author: "Md Toriqul Islam",
      date: "2024-12-30",
      category: "DevOps & Cloud",
      readTime: "15 min read",
      image: "/images/blog/kubernetes-2025.jpg",
      tags: ["Kubernetes", "DevOps", "Cloud Native", "Container Orchestration"],
      trending: false,
      difficulty: "Expert"
    },
    {
      id: 4,
      title: "Infrastructure as Code: Terraform vs Pulumi Comparison",
      excerpt: "A comprehensive comparison of Terraform and Pulumi for infrastructure automation, including pros, cons, and real-world use cases.",
      author: "Md Toriqul Islam",
      date: "2024-12-25",
      category: "DevOps & Cloud",
      readTime: "12 min read",
      image: "/images/blog/iac-comparison.jpg",
      tags: ["IaC", "Terraform", "Pulumi", "DevOps", "Automation"],
      trending: false,
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Serverless Architecture: Beyond the Hype",
      excerpt: "Understanding when and how to implement serverless architecture effectively, including cost considerations and performance optimization strategies.",
      author: "Sarah Chen",
      date: "2024-12-20",
      category: "Cloud Architecture",
      readTime: "11 min read",
      image: "/images/blog/serverless-architecture.jpg",
      tags: ["Serverless", "AWS Lambda", "Cloud Architecture", "Performance"],
      trending: false,
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "GraphQL vs REST: Making the Right Choice in 2025",
      excerpt: "An in-depth analysis of GraphQL and REST APIs, helping you choose the right approach for your next project based on specific requirements.",
      author: "David Kim",
      date: "2024-12-15",
      category: "API Development",
      readTime: "9 min read",
      image: "/images/blog/graphql-vs-rest.jpg",
      tags: ["GraphQL", "REST", "API Design", "Backend Development"],
      trending: false,
      difficulty: "Intermediate"
    }
  ],
  techCategories: [
    {
      category: "AI & Machine Learning",
      description: "Latest developments in artificial intelligence, machine learning, and automation",
      postCount: 8,
      topics: ["AI Development Tools", "Machine Learning Frameworks", "Natural Language Processing", "Computer Vision"],
      color: "purple"
    },
    {
      category: "DevOps & Cloud",
      description: "Cloud infrastructure, DevOps practices, and modern deployment strategies",
      postCount: 12,
      topics: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code", "Monitoring"],
      color: "blue"
    },
    {
      category: "Web Development",
      description: "Frontend and backend web development trends, frameworks, and best practices",
      postCount: 10,
      topics: ["React", "Next.js", "Node.js", "TypeScript", "Web Performance", "Progressive Web Apps"],
      color: "green"
    },
    {
      category: "Mobile Development",
      description: "Mobile app development, cross-platform solutions, and mobile-first approaches",
      postCount: 6,
      topics: ["React Native", "Flutter", "iOS Development", "Android Development", "Mobile UI/UX"],
      color: "orange"
    },
    {
      category: "Database & Backend",
      description: "Database technologies, backend architectures, and data management solutions",
      postCount: 4,
      topics: ["PostgreSQL", "MongoDB", "Redis", "Database Optimization", "Microservices", "API Design"],
      color: "red"
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

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 mb-20">
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
              <CpuChipIcon className="h-4 w-4 text-cyan-300 mr-2" />
              <span className="text-sm font-medium text-cyan-100">Tech Insights</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Technology
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Trends & Tutorials
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-cyan-100 max-w-3xl mx-auto mb-10"
            >
              Explore cutting-edge technology trends, in-depth tutorials, and expert insights 
              that keep you ahead in the rapidly evolving world of software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#featured-posts"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Tech Content
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{technologyData.stats.totalTechPosts}</div>
              <div className="text-sm font-medium text-slate-600">Tech Articles</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{technologyData.stats.techCategories}</div>
              <div className="text-sm font-medium text-slate-600">Tech Categories</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{technologyData.stats.averageReadTime}</div>
              <div className="text-sm font-medium text-slate-600">Average Read Time</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{technologyData.stats.monthlyReaders}</div>
              <div className="text-sm font-medium text-slate-600">Monthly Readers</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured-posts" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Featured Technology Posts
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dive deep into the latest technology trends, tutorials, and expert insights from our development team.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologyData.featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {post.trending && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                          Trending
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.difficulty === 'apos;Beginner'apos; ? 'apos;bg-green-100 text-green-600'apos; :
                        post.difficulty === 'apos;Intermediate'apos; ? 'apos;bg-yellow-100 text-yellow-600'apos; :
                        post.difficulty === 'apos;Advanced'apos; ? 'apos;bg-orange-100 text-orange-600'apos; :
                        'apos;bg-red-100 text-red-600'apos;
                      }`}>
                        {post.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">by {post.author}</span>
                    <Link
                      href={`/blog/technology/${post.id}`}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                    >
                      Read Article
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Categories Section */}
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
              Technology Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive coverage of technology topics across different domains and expertise levels.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologyData.techCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    category.color === 'apos;purple'apos; ? 'apos;bg-purple-100 text-purple-800'apos; :
                    category.color === 'apos;blue'apos; ? 'apos;bg-blue-100 text-blue-800'apos; :
                    category.color === 'apos;green'apos; ? 'apos;bg-green-100 text-green-800'apos; :
                    category.color === 'apos;orange'apos; ? 'apos;bg-orange-100 text-orange-800'apos; :
                    'apos;bg-red-100 text-red-800'apos;
                  }`}>
                    {category.postCount} posts
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Popular Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/blog/technology?category=${encodeURIComponent(category.category)}`}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                >
                  Explore Category
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Technology Insights
            </h2>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto mb-8">
              Don'apos;t miss out on the latest technology trends and development insights. Subscribe to our newsletter for weekly tech updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Subscribe to Tech Updates
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                View All Blog Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}