import React from 'react'
import Image from 'next/image'


function WorkWithUs() {
  return (
    <section className='bg-flash_white text-smoky_black lg:pt-16 pt-7 pb-20 lg:pb-0 min-h-screen relative'>
        <h2 className='font-bold lg:text-4xl text-2xl ml-16 lg:mb-12 mb-6'>
        Why work with us?
        </h2>
        <div className='px-16 grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-28'>
            <div className='flex items-center flex-col'>
                <h3 className='font-semibold lg:text-2xl text-lg'>
                Tailored Talent Solutions
                </h3>
                <p className='text-center text-base'>
                    We specialize in understanding the 
                    unique needs of both candidates and 
                    companies, offering personalized 
                    recruitment and sourcing services to 
                    ensure the perfect match every time
                </p>
            </div>
            <div className='flex items-center flex-col'>
                <h3 className='font-semibold lg:text-2xl text-lg'>
                Tailored Talent Solutions
                </h3>
                <p className='text-center text-base'>
                    We specialize in understanding the 
                    unique needs of both candidates and 
                    companies, offering personalized 
                    recruitment and sourcing services to 
                    ensure the perfect match every time
                </p>
            </div>
            <div className='flex items-center flex-col'>
                <h3 className='font-semibold lg:text-2xl text-lg'>
                Tailored Talent Solutions
                </h3>
                <p className='text-center text-base'>
                    We specialize in understanding the 
                    unique needs of both candidates and 
                    companies, offering personalized 
                    recruitment and sourcing services to 
                    ensure the perfect match every time
                </p>
            </div>
        </div>
        <div className='absolute bottom-0 right-0 flex lg:gap-3 gap-1 items-center'>
                <Image
                    src="/assets/dark-logo.png"
                    width="300"
                    height="150"
                    alt="stafd"
                    className='lg:flex hidden'
                />
                <Image
                    src="/assets/dark-logo.png"
                    width="150"
                    height="80"
                    alt="stafd"
                    className='lg:hidden flex'
                />
                <div className='lg:h-5 h-2 lg:w-32 w-12 bg-smoky_black'></div>
            </div>
    </section>
  )
}

export default WorkWithUs