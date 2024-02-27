import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-start bg-cover bg-center hero-bg h-[650px] font-dm px-14'>
        <div className='flex flex-col text-neutral-50'>
            <h1 className='font-medium text-[4rem] tracking-wide'>Aaron Robinson</h1>
            <p className='lg:hidden text-[1.6rem] text-lime-300 tracking-wide'>Fullstack Developer</p>
            <p className='hidden lg:inline font-medium text-[1.3rem] text-lime-300 tracking-wide'>Fullstack Developer | Javascript | Next.js | React | Python</p>
            <a href='/Aaron Robinson Resume - Frontend Developer.pdf' download>
                <button className='text-[1.2rem] tracking-wide py-2 px-6 border-2 border-neutral-50 rounded-md mt-5 hover:bg-neutral-50 hover:text-neutral-900 transition duration-200'>Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Hero