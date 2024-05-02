import React from 'react'
import Image from 'next/image'

function Mission() {
    return (
        <section className='min-h-screen bg-flash_white flex lg:flex-row flex-col pt-20 relative' id="mission">
            <div className='lg:w-[50%] w-full bg-gray flex items-center flex-col lg:pt-10 pt-4 pb-4 lg:pb-0'>
                <h2 className='text-smoky_black lg:border-b-8 border-b-4 border-dun w-fit font-bold 
                    text-xl lg:text-4xl lg:mb-20 mb-5 lg:pb-3 pb-1'
                >Mission</h2>
                <p className='lg:w-[500px] text-base lg:text-2xl pl-4 lg:pl-0'>
                    Our mission is to connect talented
                    individuals seeking remote opportunities
                    with forward-thinking companies aiming
                    to scale their teams, fostering mutually
                    beneficial relationships that drive success
                    and innovation in the modern workforce
                    landscape.
                </p>
            </div>
            <div className='lg:w-[50%] w-full bg-smoky_black flex items-center flex-col pt-10 relative pb-20 lg:pb-0'>
                <h2 className='text-flash_white lg:border-t-8 border-t-4 border-dun w-fit font-bold 
                text-xl lg:text-4xl lg:mb-20 mb-5 lg:pb-3 pb-1'>Vision</h2>
                <p className='lg:w-[500px] text-flash_white text-base lg:text-2xl pl-4 lg:pl-0'>
                    To be the leading platform facilitating
                    seamless, impactful connections between
                    remote job seekers and organizations
                    worldwide, revolutionizing the future of
                    work through our dedication to
                    excellence, inclusivity, and innovation.
                </p>
                <div className='absolute bottom-0 right-0 flex lg:gap-3 gap-1 items-center'>
                    <Image
                        src="/assets/logo.png"
                        width="300"
                        height="150"
                        alt="stafd"
                        className='lg:flex hidden'
                    />
                    <Image
                        src="/assets/logo.png"
                        width="150"
                        height="80"
                        alt="stafd"
                        className='lg:hidden flex'
                    />
                    <div className='lg:h-5 h-2 lg:w-32 w-12 bg-dun'></div>
                </div>
            </div>
        </section>
    )
}

export default Mission