'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc.',
    image: '/images/testimonials/sarah-johnson.jpg',
    rating: 5,
    content: 'NavioX transformed our legacy system into a modern, scalable platform. Their technical expertise and attention to detail exceeded our expectations. The project was delivered on time and within budget.',
    project: 'Enterprise Platform Modernization'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'InnovateLab',
    image: '/images/testimonials/michael-chen.jpg',
    rating: 5,
    content: 'Working with NavioX was a game-changer for our startup. They built our MVP from scratch and helped us scale to 100k+ users. Their agile approach and deep technical knowledge are impressive.',
    project: 'SaaS Platform Development'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP of Digital Strategy',
    company: 'Global Healthcare Solutions',
    image: '/images/testimonials/emily-rodriguez.jpg',
    rating: 5,
    content: 'The AI-powered analytics platform NavioX developed has revolutionized how we process patient data. The insights we\'re getting are helping us improve patient outcomes significantly.',
    project: 'Healthcare Analytics Platform'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Head of Engineering',
    company: 'FinTech Innovations',
    image: '/images/testimonials/david-thompson.jpg',
    rating: 5,
    content: 'NavioX delivered a robust, secure trading platform that handles millions in daily transactions. Their expertise in financial technology and security best practices is outstanding.',
    project: 'Trading Platform Development'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager',
    company: 'E-Commerce Plus',
    image: '/images/testimonials/lisa-wang.jpg',
    rating: 5,
    content: 'Our e-commerce platform performance improved by 300% after NavioX\'s optimization. Customer satisfaction has increased dramatically, and our conversion rates are at an all-time high.',
    project: 'E-Commerce Optimization'
  },
  {
    id: 6,
    name: 'Robert Foster',
    role: 'COO',
    company: 'Manufacturing Pro',
    image: '/images/testimonials/robert-foster.jpg',
    rating: 5,
    content: 'The IoT solution NavioX built for our manufacturing operations has increased efficiency by 40%. Real-time monitoring and predictive maintenance have transformed our processes.',
    project: 'IoT Manufacturing Solution'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Client Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with NavioX and the results we&apos;ve delivered together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={item}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-blue-600/20 font-serif">&ldquo;</div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Project */}
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  {/* Avatar Placeholder */}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600 mt-1">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600 mt-1">Average Project Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 