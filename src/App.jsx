import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-[#142538] overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App