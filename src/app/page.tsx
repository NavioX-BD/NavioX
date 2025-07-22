import CallToAction from '@/components/sections/CallToAction'
import CaseStudies from '@/components/sections/CaseStudies'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Statistics from '@/components/sections/Statistics'
import Technologies from '@/components/sections/Technologies'
import Testimonials from '@/components/sections/Testimonials'
import WhyChooseUs from '@/components/sections/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Statistics />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
