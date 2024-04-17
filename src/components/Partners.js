import React from 'react'
import Image from 'next/image'


function Partners() {
    return (
        <section className='bg-smoky_black min-h-screen pt-20 pl-4 lg:pl-0 relative'>
            <h2 className='lg:text-4xl text-2xl font-bold lg:w-[700px] text-flash_white lg:ml-14'>
                We have worked with some of the
                most innovative companies globally
            </h2>
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
                <div className='lg:h-5 h-2 lg:w-32 w-12 bg-gray'></div>
            </div>
        </section>
    )
}

export default Partners