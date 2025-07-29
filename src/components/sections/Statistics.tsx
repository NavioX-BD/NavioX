'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    id: 1,
    name: 'Years of Experience',
    value: 10,
    suffix: '+',
    description: 'Delivering enterprise-grade software solutions'
  },
  {
    id: 2,
    name: 'Projects Completed',
    value: 150,
    suffix: '+',
    description: 'Successful projects across various industries'
  },
  {
    id: 3,
    name: 'Client Satisfaction',
    value: 98,
    suffix: '%',
    description: 'Client satisfaction rate based on project delivery'
  },
  {
    id: 4,
    name: 'Team Members',
    value: 50,
    suffix: '+',
    description: 'Expert developers, designers, and consultants'
  },
  {
    id: 5,
    name: 'Countries Served',
    value: 25,
    suffix: '+',
    description: 'Global reach with local expertise'
  },
  {
    id: 6,
    name: 'Technologies Mastered',
    value: 30,
    suffix: '+',
    description: 'Modern frameworks and cutting-edge tools'
  }
]

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // 2 seconds
    const increment = value / (duration / 16) // 60fps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span className="text-4xl sm:text-5xl font-bold text-blue-600">
      {displayValue}{suffix}
    </span>
  )
}

const Statistics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Track Record</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Excellence in Software Development
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Numbers that reflect our commitment to delivering exceptional software solutions and building lasting partnerships.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  {/* Counter */}
                  <div className="text-center">
                    <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {stat.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 h-2 w-2 bg-blue-600 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <blockquote className="text-xl font-medium text-gray-900 italic">
              &ldquo;At NavioX, we don&apos;t just deliver software—we build partnerships that drive lasting success. Our track record speaks to our commitment to excellence and innovation.&rdquo;
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-gray-900">NavioX Team</div>
              <div className="text-sm text-gray-600">Your Technology Navigation Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics 