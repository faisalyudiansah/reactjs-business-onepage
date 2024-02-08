import React from 'react'
import CardService from './CardService'

const Services = () => {
    return (
        <>
            <section className='min-h-screen bg-gray-50 p-10'>
                <div className='text-center md:px-64'>
                    <h4 className='text-gray-400'>WHAT WE DO?</h4>
                    <h1 className='font-bold mt-5 text-4xl text-black'>
                        The Service we offer is specially designed  to meet your needs.
                    </h1>
                </div>
                <div className='flex flex-wrap justify-center items-center mt-16 gap-5'>
                    <CardService title={'SEO Services'} />
                    <CardService title={'Web Design'} />
                    <CardService title={'Social Engagement'} />
                    <CardService title={'Content Marketing'} />
                </div>

            </section>
        </>
    )
}

export default Services