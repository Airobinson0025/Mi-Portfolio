import Link from 'next/link'
import React from 'react'

const ToolCard = ({ name, icon, description }) => {
  return (
    <div className='flex flex-col justify-between border-2 border-transparent bg-neutral-50/5 h-[260px] p-5 rounded-md shadow-md shadow-stone-950/50 hover:bg-[#141819] hover:border-neutral-50 hover:scale-105 transition duration-300' id='tools'>
        <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
                <h2 className='text-[1.4rem] text-lime-300 font-medium tracking-wide'>{name}</h2>
                <i className='text-[2rem]'>{icon}</i>
            </div>
            <p className='tracking-wide'>{description}</p>
        </div>
        
        <div>
            <Link href='/'>
                <button className='tracking-wide py-1 px-4 border-2 border-neutral-50 rounded-md hover:bg-neutral-50 hover:text-[#141819] transition duration-200 '>Snippet</button>
            </Link>
        </div>
    </div>
  )
}

export default ToolCard