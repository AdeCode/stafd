import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
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
                            <a href="#mission" className="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold">
                                <h3 className="">Mission</h3>
                            </a>
                            <a href="#partners" className="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold"
                            >Partners</a>
                            <a href="#team" className="px-3 py-1 hover:bg-gray-300 rounded-full text-gray-700 hover:text-gray-900 hover:font-bold"
                            >Team</a>
                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        </div>
                    </div>
                    {/* mobile button goes here */}
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
                <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Home</a>
                <a href="#partners" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Partners</a>
                <a href="#mission" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Mission</a>
                <a href="#team" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={()=>setIsOpen(false)}>Team</a>
                {/* <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact Us</a> */}
            </div>
        </nav >
    )
}

export default Navbar