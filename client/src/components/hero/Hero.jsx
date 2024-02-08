import React from 'react'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <>
      <section className="hero min-h-[600px] bg-white">
        <div className="hero-content flex-col md:flex-row">
          <img src={heroImage} className="w-sm md:w-1/2 rounded-lg" />
          <div className='md:mt-0 mt-5 text-black'>
            <h1 className="text-5xl font-bold">Grow Your Business with Our Solutions!</h1>
            <p className="py-6 text-justify">We help our clients to increase their website traffic. Rangkings and visibility in search result</p>
            <button className="btn bg-yellow-400 border-none rounded-full text-white">Try it for free</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero