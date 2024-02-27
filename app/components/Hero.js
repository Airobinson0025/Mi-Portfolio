import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-start bg-cover bg-center hero-bg h-[750px] sm:h-[650px] font-dm px-6 md:px-14'>
        <div className='flex flex-col text-neutral-50'>
            <h2 className='font-medium text-[3.5rem] lg:text-[3.7rem] tracking-wide'>Aaron Robinson</h2>
            <p className='font-medium text-[1.5rem] text-lime-300 tracking-wide'>Fullstack Developer </p>
            <p className='hidden md:inline text-[1.2rem] mt-1 tracking-wider'>Javascript | Next.js | React | Python</p>
            <a href='/Aaron Robinson Resume - Frontend Developer.pdf' download>
                <button className='text-[1.2rem] text-[#141819] tracking-wide py-2 px-6 bg-neutral-50 border-2 border-neutral-50 rounded-md mt-5 hover:bg-transparent hover:text-neutral-50 transition duration-200'>Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Hero