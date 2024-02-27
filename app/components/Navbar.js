'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [backgroundColor, setBackgroundColor] = useState('')
    const [boxShadow, setBoxShadow] = useState('')

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 10) {
                setBackgroundColor('#141819')
                setBoxShadow('0 0 10px rgba(0, 0, 0, 0.1)')
            } else {
                setBackgroundColor('')
                setBoxShadow('')
            }
        }

        // Add event listener when component mounts
        window.addEventListener('scroll', changeNavbarColor)

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', changeNavbarColor)
        }
    }, []) // Empty dependency array to ensure this effect runs only once on mount

    return (
        <div style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }} className='flex items-center justify-between fixed w-full p-3 font-dm text-neutral-50 transition duration-200'>
            <div>
                <h1 className='text-[1.5rem] font-'>Hello there.</h1>
            </div>

            <nav className='hidden md:inline'>
                <ul className='flex items-center space-x-6 text-[1.25rem]'>
                    <li className='hover:scale-105 hover:text-lime-300 transition duration-200'>
                        <Link href='#tools'>Tools</Link>
                    </li>
                    <li className='hover:scale-105 hover:text-lime-300 transition duration-200'>
                        <Link href='#projects'>Projects</Link>
                    </li>
                    <li className='hover:scale-105 hover:text-lime-300 transition duration-200'>
                        <Link href='#samples'>Samples</Link>
                    </li>
                    <li className='hover:scale-105 hover:text-lime-300 transition duration-200'>
                        <Link href='#blog'>Blog</Link>
                    </li>
                    <li className='hover:scale-105 hover:text-lime-300 transition duration-200'>
                        <Link href='#contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
