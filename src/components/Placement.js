import React from 'react'
import Image from 'next/image'


function Placement() {
    return (
        <section className='min-h-screen bg-flash_white flex flex-col justify-center items-center relative'>
            <h2 className='text-smoky_black lg:text-7xl text-lg font-semibold'>Unlocking Potentials,
                <p />
                One Placement at a Time
            </h2>
            <div className='absolute bottom-0 right-0 flex gap-3 items-center'>
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
                <div className='lg:h-5 lg:w-32 h-2 w-12 bg-smoky_black'></div>
            </div>
        </section>
    )
}

export default Placement