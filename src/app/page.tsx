import Footer from '@/components/layout/footer'
import Blog from './blog'
import CallToAction from './call-to-action'
import Faqs from './faqs'
import HeroSection from './home/herosection'
import OurServices from './services'
import WhatWeDo from './what-we-do'

export default function Home() {
  return (
    <section>
      <HeroSection />
      <OurServices />
      <WhatWeDo />
      <Faqs />
      <Blog />
      <CallToAction />
      <Footer />
    </section>
  )
}
