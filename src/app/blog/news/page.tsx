'use client'

import {
    ArrowRightIcon,
    CalendarDaysIcon,
    NewspaperIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Industry News blog data
const industryNewsData = {
  stats: {
    totalNewsArticles: "25+",
    weeklyUpdates: "3-5",
    industryTopics: "12+",
    averageReadTime: "4 minutes"
  },
  featuredNews: [
    {
      id: 1,
      title: "AI Revolution in Software Development: GitHub Copilot Usage Surges 300%",
      excerpt: "Latest industry reports show unprecedented adoption of AI-powered development tools, with GitHub Copilot leading the transformation in how developers write code.",
      author: "Tech Industry Analyst",
      date: "2025-01-20",
      category: "AI & Development",
      readTime: "6 min read",
      image: "/images/blog/ai-development-surge.jpg",
      tags: ["AI", "GitHub Copilot", "Industry Report", "Development Tools"],
      trending: true,
      source: "TechCrunch, GitHub"
    },
    {
      id: 2,
      title: "Cloud Computing Market Reaches $500B: AWS, Azure, and GCP Battle for Dominance",
      excerpt: "The global cloud computing market has reached a milestone $500 billion valuation, with major players announcing significant infrastructure investments.",
      author: "Market Research Team",
      date: "2025-01-18",
      category: "Cloud Computing",
      readTime: "5 min read",
      image: "/images/blog/cloud-market-500b.jpg",
      tags: ["Cloud Computing", "AWS", "Azure", "Market Analysis"],
      trending: true,
      source: "Gartner, IDC"
    },
    {
      id: 3,
      title: "Web3 and Blockchain Development: Major Companies Pivot to Decentralized Solutions",
      excerpt: "Fortune 500 companies are increasingly adopting blockchain technology for supply chain management, digital identity, and decentralized applications.",
      author: "Blockchain Reporter",
      date: "2025-01-15",
      category: "Blockchain & Web3",
      readTime: "8 min read",
      image: "/images/blog/web3-enterprise-adoption.jpg",
      tags: ["Blockchain", "Web3", "Enterprise", "Decentralization"],
      trending: false,
      source: "Forbes, CoinDesk"
    },
    {
      id: 4,
      title: "Cybersecurity Threats Evolve: Zero-Trust Architecture Becomes Industry Standard",
      excerpt: "With cyber attacks increasing by 40% in 2024, organizations are rapidly adopting zero-trust security models to protect their digital assets.",
      author: "Security Analyst",
      date: "2025-01-12",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/images/blog/zero-trust-security.jpg",
      tags: ["Cybersecurity", "Zero Trust", "Security", "Enterprise"],
      trending: false,
      source: "SANS Institute, Cybersecurity Ventures"
    },
    {
      id: 5,
      title: "Mobile Development Trends: Flutter and React Native Dominate Cross-Platform Market",
      excerpt: "Latest developer surveys reveal Flutter and React Native account for 75% of cross-platform mobile development, with native development declining.",
      author: "Mobile Development Reporter",
      date: "2025-01-10",
      category: "Mobile Development",
      readTime: "5 min read",
      image: "/images/blog/mobile-dev-trends.jpg",
      tags: ["Mobile Development", "Flutter", "React Native", "Cross-Platform"],
      trending: false,
      source: "Stack Overflow Survey, JetBrains"
    },
    {
      id: 6,
      title: "Remote Work Technology: Collaboration Tools Market Grows 250% Post-Pandemic",
      excerpt: "The collaboration software market has experienced unprecedented growth, with new tools emerging to support distributed teams and hybrid work models.",
      author: "Workplace Technology Reporter",
      date: "2025-01-08",
      category: "Workplace Technology",
      readTime: "6 min read",
      image: "/images/blog/remote-work-tech.jpg",
      tags: ["Remote Work", "Collaboration Tools", "Workplace Technology", "Productivity"],
      trending: false,
      source: "McKinsey, Slack State of Work"
    }
  ],
  newsCategories: [
    {
      category: "AI & Machine Learning",
      description: "Latest developments in artificial intelligence and machine learning technologies",
      articleCount: 8,
      recentTopics: ["AI Development Tools", "Machine Learning Platforms", "AI Ethics", "Automation"]
    },
    {
      category: "Cloud Computing",
      description: "Cloud infrastructure, services, and market developments",
      articleCount: 6,
      recentTopics: ["Multi-cloud Strategies", "Serverless Computing", "Edge Computing", "Cloud Security"]
    },
    {
      category: "Cybersecurity",
      description: "Security threats, solutions, and industry best practices",
      articleCount: 5,
      recentTopics: ["Zero Trust Security", "Data Privacy", "Threat Intelligence", "Security Automation"]
    },
    {
      category: "Mobile & Web Development",
      description: "Development frameworks, tools, and industry standards",
      articleCount: 6,
      recentTopics: ["Cross-Platform Development", "Progressive Web Apps", "API Development", "DevOps"]
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

export default function IndustryNewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 mb-20">
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
              <NewspaperIcon className="h-4 w-4 text-orange-300 mr-2" />
              <span className="text-sm font-medium text-orange-100">Industry Updates</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl font-bold text-white mb-6 tracking-tight sm:text-4xl"
            >
              Industry
              <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                News
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-orange-100 max-w-3xl mx-auto mb-10"
            >
              Stay informed with the latest technology industry news, market trends, and developments 
              that shape the future of software development and digital innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#trending-news"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Trending News
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{industryNewsData.stats.totalNewsArticles}</div>
              <div className="text-sm font-medium text-slate-600">News Articles</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{industryNewsData.stats.weeklyUpdates}</div>
              <div className="text-sm font-medium text-slate-600">Weekly Updates</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{industryNewsData.stats.industryTopics}</div>
              <div className="text-sm font-medium text-slate-600">Industry Topics</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl font-bold text-slate-900 mb-2">{industryNewsData.stats.averageReadTime}</div>
              <div className="text-sm font-medium text-slate-600">Average Read Time</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trending News Section */}
      <section id="trending-news" className="py-20 bg-slate-50/60 backdrop-blur-sm mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Latest Industry News
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay updated with the most recent developments and trends shaping the technology industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryNewsData.featuredNews.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    {article.trending && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Trending
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="text-xs text-slate-400 mb-4">
                    Source: {article.source}
                  </div>

                  <Link
                    href={`/blog/news/${article.id}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                  >
                    Read Full Article
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Categories Section */}
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
              News Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore news and updates across different technology sectors and industry verticals.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {industryNewsData.newsCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    {category.articleCount} articles
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
                  href={`/blog/news?category=${encodeURIComponent(category.category)}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  View All Articles
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Informed with Industry Updates
            </h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto mb-8">
              Don't miss out on the latest technology trends and industry developments. Subscribe to our newsletter for weekly updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg"
              >
                Subscribe to Newsletter
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-300"
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