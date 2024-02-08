import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/Services/Services'
import AnalysisSEO from './components/analysisSEO/AnalysisSEO'
import Footer from './components/footer/Footer'
import LetsTalk from './components/letsTalk/LetsTalk'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AnalysisSEO />
      <LetsTalk />
      <Footer />
    </>
  )
}

export default Home