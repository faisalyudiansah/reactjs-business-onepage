import React from 'react'
import analysisImg from '../../assets/analysis.png'

const AnalysisSEO = () => {
  return (
    <div className="hero min-h-screen bg-white p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={analysisImg} className="w-sm md:w-1/2 rounded-lg" />
        <div className='text-black'>
          <h1 className="text-4xl font-bold">Wonder how much faster your website can go? Easily check your SEO score now.</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="join">
            <input className="input bg-white border-4 input-bordered join-item" placeholder="Your website" />
            <button className="btn join-item bg-yellow-400 hover:bg-yellow-600 text-white border-none rounded-r-full">Check</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisSEO