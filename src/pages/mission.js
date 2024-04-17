import React from 'react'
import Image from 'next/image'


function Mission() {
    return (
        <section className='min-h-screen flex lg:flex-row flex-col'>
            <div className='w-[50%] bg-gray flex items-center flex-col pt-10'>
                <h2 className='text-smoky_black border-b-8 border-dun w-fit font-bold 
            text-xl lg:text-4xl mb-20 pb-3'>Mission</h2>
                <p className='w-[500px] text-xl lg:text-2xl'>
                    Our mission is to connect talented
                    individuals seeking remote opportunities
                    with forward-thinking companies aiming
                    to scale their teams, fostering mutually
                    beneficial relationships that drive success
                    and innovation in the modern workforce
                    landscape.
                </p>
            </div>
            <div className='w-[50%] bg-smoky_black flex items-center flex-col pt-10 relative'>
                <h2 className='text-flash_white border-t-8 border-dun w-fit font-bold 
            text-xl lg:text-4xl mb-20 pb-3'>Vision</h2>
                <p className='w-[500px] text-flash_white text-xl lg:text-2xl'>
                    To be the leading platform facilitating
                    seamless, impactful connections between
                    remote job seekers and organizations
                    worldwide, revolutionizing the future of
                    work through our dedication to
                    excellence, inclusivity, and innovation.
                </p>
            </div>
            <div className='absolute bottom-0 right-0 flex gap-3 items-center'>
                <Image
                    src="/assets/logo.png"
                    width="300"
                    height="150"
                    alt="stafd"
                />
                <div className='h-5 w-32 bg-dun'></div>
            </div>
        </section>
    )
}

export default Mission