import React from 'react'
import Image from 'next/image'


function Team() {
  return (
    <section className='bg-smoky_black min-h-screen lg:pl-16 pl-4 py-5 lg:py-0 flex items-center' id="team">
        <div className='flex lg:flex-row flex-col lg:items-center items-start lg:gap-[200px] gap-5'>
            <h2 className='font-bold lg:text-4xl text-xl text-dun'>Meet
                <p className='font-normal text-flash_white'>Our team</p>
            </h2>
            <div className='relative group'>
                <Image
                    src="/assets/fahd.jpg"
                    alt='ceo'
                    width="300"
                    height="200"
                />
                <div className='overlay bg-light_dun text-flash_white pt-3 pb-5 absolute bottom-0 w-full 
                text-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out'>
                    <h3 className='text-base'>Fadlullah Abdulmumin (Fad)</h3>
                    <p className='font-semibold lg:text-lg'>Cofounder, CEO</p>
                </div>
            </div>
            <div className='relative group'>
                <Image
                    src="/assets/emma.jpg"
                    alt='ceo'
                    width="300"
                    height="200"
                />
                <div className='overlay bg-light_dun text-flash_white pt-3 pb-5 absolute bottom-0 w-full 
                text-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out'>
                    <h3 className='text-base'>Emmanuel Sodeinde</h3>
                    <p className='font-semibold lg:text-lg'>Cofounder, CGO</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team