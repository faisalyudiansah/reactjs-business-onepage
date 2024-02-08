import React from 'react'
import InfoFooter from './InfoFooter'

const Footer = () => {
  return (
    <div className="relative bg-slate-600">
      <div class="custom-shape-divider-top-1707385120">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
        >
          <path
            d="M3000 1L0 0 925.75 50.42 1200 60z"
            fill="rgba(255, 255, 255, 1)"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between p-10">
          <h2 className="mb-6 text-xl md:text-3xl font-bold w-full md:w-1/2">
            Join our community by using our services and grow quickly your business
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
            Try it for free
          </button>
        </div>
        <InfoFooter />
      </div>
    </div>
  )
}

export default Footer