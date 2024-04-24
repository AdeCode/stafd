import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { formatDate } from '@/utils/helpers';

function TopSection() {
    const [currentDate, setCurrentDate] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        // Get user's timezone
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Get the current date and time in the user's timezone
        const userCurrentDateTime = new Date().toLocaleString('en-US', { timeZone: userTimeZone });

        setCurrentDate(formatDate(userCurrentDateTime))
        // formatDate(userCurrentDateTime)
        setLoading(false)
    },[])

  return (
    <section className="min-h-screen lg:pt-48 pt-20 bg-smoky_black text-flash_white">
        <div className='logo flex items-center gap-3 mb-8'>
            <div className='lg:h-5 h-2 lg:w-32 w-12 bg-dun'></div>
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
        </div>
        <div className='flex flex-col lg:ml-14 ml-4 lg:w-[500px] w-[300px] pb-4 lg:border-b-[18px] border-b-4 border-gray mb-2'>
            <h1 className='text-dun lg:text-8xl text-5xl'>Company</h1>
            <p className='text-flash_white lg:text-6xl text-2xl'>Profile</p>
        </div>
        <div className=''>
            <h3 className='lg:ml-14 ml-4 lg:text-base text-sm text-flash_white'>
                {loading ? 'loading...' : currentDate}
            </h3>
        </div>
    </section>
  )
}

export default TopSection