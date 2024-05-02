import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useParams  } from 'next/navigation';
import Link from 'next/link'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const params = useParams()
    const [active, setActive] = useState('')

    useEffect(()=>{
        setActive(window.location.hash)
    },[params])
    return (
        <nav className="bg-white fixed w-screen z-50">
            <div className="mx-auto lg:px-6 px-4 py-4">
                <div className="flex justify-between">
                    <div>
                        <a
                            href="#"
                            className="flex items-center px-2 text-gray-700 hover:text-gray-900"
                        >
                            <Image
                                src="/assets/dark-logo.png"
                                width="120"
                                height="80"
                                alt="stafd"
                            />
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="#mission" scroll={false} 
                            className={`${active.includes('#mission') ? 'font-bold' : ''} px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold`}>
                                <h3 className="">Mission</h3>
                            </Link>
                            <Link href="#partners" scroll={false} 
                            className={`${active.includes('#partners') ? 'font-bold' : ''} px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold`}
                            >Partners</Link>
                            <Link href="#team" scroll={false} 
                            className={`${active.includes('#team') ? 'font-bold' : ''} px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold`}
                            >Team</Link>
                        </div>
                    </div>
                    {/* mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden">
                            {
                                isOpen ?
                                <FontAwesomeIcon icon={faXmark} size="lg"/>
                                :
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLineCap="round"
                                        strokeLineJoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden min-h-screen`}>
                <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Home</Link>
                <Link href="#partners" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Partners</Link>
                <Link href="#mission" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Mission</Link>
                <Link href="#team" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Team</Link>
            </div>
        </nav >
    )
}

export default Navbar