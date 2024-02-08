import React from 'react'
import letsTalk from '../../assets/letsTalk.png'

const LetsTalk = () => {
  return (
    <div className="hero min-h-screen bg-gray-50 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='text-black mr-10'>
          <h1 className="text-4xl font-bold">Lets make something great together. We are trusted by over 5000+ clients</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
          <div className="join">
            <button className="btn bg-yellow-400 border-none rounded-full text-white">Join us</button>
          </div>
        </div>
        <img src={letsTalk} className="w-sm md:w-1/2 rounded-lg" />
      </div>
    </div>
  )
}

export default LetsTalk