import React from 'react'
import Image from 'next/image'


function Partners() {
    return (
        <section className='bg-smoky_black min-h-screen lg:pt-20 pt-5 pl-4 lg:pl-0 relative'>
            <h2 className='lg:text-4xl text-xl font-bold lg:w-[700px] text-flash_white lg:ml-14 lg:mb-8 mb-5'>
                We have worked with some of the
                most innovative companies globally
            </h2>
            <div className='flex flex-col lg:ml-14 gap-4 pr-4 lg:pr-0'>
                <div className='flex gap-5 lg:w-[700px] w-full'>
                    <div className='lg:w-[150px] w-1/3'>
                        <Image
                            src="/assets/partners/bolt.jpg"
                            width="150"
                            height="100"
                            alt="bolt"
                            className='lg:flex rounded-lg'
                        />
                    </div>
                    <div className='lg:w-[150px] w-1/3'>
                        <Image
                            src="/assets/partners/fair.png"
                            width="150"
                            height="100"
                            alt="fairmoney"
                            className='lg:flex rounded-lg h-full'
                        />
                    </div>
                    <div className='lg:w-[150px] w-1/3'>
                        <Image
                            src="/assets/partners/message.jpg"
                            width="150"
                            height="100"
                            alt="message"
                            className='lg:flex rounded-lg h-full'
                        />
                    </div>
                </div>
                <div className='flex gap-5 lg:w-[700px] w-full'>
                    <Image
                        src="/assets/partners/nano.png"
                        width="150"
                        height="100"
                        alt="nano"
                        className='lg:flex rounded-lg'
                    />
                    <Image
                        src="/assets/partners/proph.jpg"
                        width="150"
                        height="100"
                        alt="prophesee"
                        className='lg:flex rounded-lg'
                    />
                    <Image
                        src="/assets/partners/lead.png"
                        width="150"
                        height="100"
                        alt="lead"
                        className='lg:flex rounded-lg'
                    />
                </div>
            </div>
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