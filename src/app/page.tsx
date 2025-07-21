import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like Next.js, React, and TypeScript.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: '📱',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless architectures for modern businesses.',
      icon: '☁️',
    },
    {
      title: 'Digital Strategy',
      description: 'Strategic consulting to help navigate your digital transformation journey.',
      icon: '🧭',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <Image
                src="/images/brand/logo.png"
                alt="NavioX Solutions Inc."
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block">Charting Digital Excellence,</span>
              <span className="block text-blue-600">Navigating Your Success</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              NavioX Solutions Inc. serves as your digital compass, guiding businesses through uncharted technological territories with precision-crafted software solutions. We don&apos;t just write code—we plot your digital destiny.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                href="/projects"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Navigate Your Digital Transformation
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We offer comprehensive software engineering services to steer your business toward success.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-white text-2xl">
                    {service.icon}
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {service.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Our Philosophy</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Where Code Meets Course
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Just as ancient mariners relied on the stars to navigate vast oceans, modern businesses need a trusted navigator to traverse the digital landscape. NavioX combines the precision of navigation with the excellence of execution.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">🎯</span>
                      Technical Excellence.
                    </dt>
                    <dd className="inline"> Cutting-edge technology stack with modern development practices.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">🤝</span>
                      Client-Centric Approach.
                    </dt>
                    <dd className="inline"> Transparent communication and personalized solutions.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">🚀</span>
                      Innovation & Scalability.
                    </dt>
                    <dd className="inline"> Future-ready architecture that grows with your business.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧭</div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Digital Compass</h3>
                    <p className="mt-2 text-gray-600">
                      Steering innovation forward through precision-crafted solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Chart Your Digital Course?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let&apos;s transform your ideas into digital reality. Contact us today to begin your journey toward digital excellence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
