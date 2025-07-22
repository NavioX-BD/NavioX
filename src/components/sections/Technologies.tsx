'use client'

import { motion } from 'framer-motion'

const technologies = {
  'Frontend': [
    { name: 'React', description: 'Modern UI development', color: 'text-blue-600 bg-blue-50' },
    { name: 'Next.js', description: 'Full-stack React framework', color: 'text-gray-700 bg-gray-50' },
    { name: 'TypeScript', description: 'Type-safe development', color: 'text-blue-600 bg-blue-50' },
    { name: 'Vue.js', description: 'Progressive framework', color: 'text-green-600 bg-green-50' },
    { name: 'Angular', description: 'Enterprise applications', color: 'text-red-600 bg-red-50' },
    { name: 'Tailwind CSS', description: 'Utility-first styling', color: 'text-cyan-600 bg-cyan-50' }
  ],
  'Backend': [
    { name: 'Node.js', description: 'JavaScript runtime', color: 'text-green-600 bg-green-50' },
    { name: 'Python', description: 'Versatile programming', color: 'text-yellow-600 bg-yellow-50' },
    { name: 'Java', description: 'Enterprise development', color: 'text-orange-600 bg-orange-50' },
    { name: '.NET', description: 'Microsoft ecosystem', color: 'text-purple-600 bg-purple-50' },
    { name: 'GraphQL', description: 'API query language', color: 'text-pink-600 bg-pink-50' },
    { name: 'REST APIs', description: 'Web service architecture', color: 'text-indigo-600 bg-indigo-50' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', description: 'Amazon Web Services', color: 'text-orange-600 bg-orange-50' },
    { name: 'Azure', description: 'Microsoft Cloud', color: 'text-blue-600 bg-blue-50' },
    { name: 'Google Cloud', description: 'GCP services', color: 'text-red-600 bg-red-50' },
    { name: 'Docker', description: 'Containerization', color: 'text-blue-600 bg-blue-50' },
    { name: 'Kubernetes', description: 'Container orchestration', color: 'text-purple-600 bg-purple-50' },
    { name: 'CI/CD', description: 'Automated pipelines', color: 'text-green-600 bg-green-50' }
  ],
  'Mobile': [
    { name: 'React Native', description: 'Cross-platform apps', color: 'text-blue-600 bg-blue-50' },
    { name: 'Flutter', description: 'Google mobile UI', color: 'text-blue-600 bg-blue-50' },
    { name: 'iOS (Swift)', description: 'Native iOS development', color: 'text-gray-700 bg-gray-50' },
    { name: 'Android (Kotlin)', description: 'Native Android development', color: 'text-green-600 bg-green-50' },
    { name: 'PWA', description: 'Progressive Web Apps', color: 'text-purple-600 bg-purple-50' },
    { name: 'Ionic', description: 'Hybrid mobile apps', color: 'text-blue-600 bg-blue-50' }
  ],
  'Database': [
    { name: 'PostgreSQL', description: 'Relational database', color: 'text-blue-600 bg-blue-50' },
    { name: 'MongoDB', description: 'NoSQL database', color: 'text-green-600 bg-green-50' },
    { name: 'Redis', description: 'In-memory data store', color: 'text-red-600 bg-red-50' },
    { name: 'MySQL', description: 'Popular SQL database', color: 'text-orange-600 bg-orange-50' },
    { name: 'Elasticsearch', description: 'Search engine', color: 'text-yellow-600 bg-yellow-50' },
    { name: 'Firebase', description: 'Google cloud database', color: 'text-orange-600 bg-orange-50' }
  ]
}

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

const Technologies = () => {
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
          <h2 className="text-base font-semibold leading-7 text-blue-600">Technology Stack</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cutting-Edge Technologies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We leverage the latest technologies and frameworks to build scalable, maintainable, and future-ready solutions.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="space-y-12">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                variants={item}
                className="group"
              >
                {/* Category Title */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                </div>

                {/* Technology Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="group relative p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg bg-white"
                    >
                      {/* Tech Icon/Name */}
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tech.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                          <span className="text-lg font-bold">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                        
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {tech.name}
                        </h4>
                        
                        <p className="text-xs text-gray-500">
                          {tech.description}
                        </p>
                      </div>

                      {/* Hover Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need a Different Technology?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is always learning and adapting to new technologies. If you have specific requirements or prefer a particular tech stack, we&apos;re happy to accommodate.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
              >
                Discuss Your Tech Stack
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies 