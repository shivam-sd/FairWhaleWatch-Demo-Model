import React from 'react'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import HeroWatch from './components/HeroWatch'
import Herowatches from './components/Herowatches'
import HeroVideo from './components/HeroVideo'
import Womenswatchess from './components/womenswatchess'
import Collections from './components/Collections'
import VideoCrousal from './components/VideoCrousal'
import Testimonial from './components/Testimonial'
import Policy from './components/Policy'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroWatch />
      <Herowatches />
      <HeroVideo />
      <Womenswatchess />
      <Collections />
      <VideoCrousal />
      <Testimonial />
      <Policy />
      <Footer />
    </div>
  )
}

export default Home
