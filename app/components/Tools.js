import React from 'react'
import { IoLogoJavascript, IoLogoReact, IoLogoPython } from 'react-icons/io5'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'
import ToolCard from './ToolCard'

const tools =[
  {
    name: 'Javascript',
    icon: <IoLogoJavascript />,
    description: 'I bring websites to life with dynamic and interactive features using JavaScript.'
  },
  {
    name: 'Python',
    icon: <IoLogoPython/>,
    description: 'I build robust backend systems with Python, leveraging its versatility and simplicity.'
  },
  {
    name: 'Django',
    icon: <TbBrandDjango/>,
    description: 'I build robust backend systems with Python, leveraging its versatility and simplicity.'
  },
  {
    name: 'React',
    icon: <IoLogoReact />,
    description: 'I create user-friendly and scalable web interfaces with React, enhancing user experience.'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    description: 'I use Next.js to craft powerful and production-ready web applications, seamlessly integrated with React.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss/>,
    description: 'I design modern and responsive user interfaces quickly with Tailwind CSS, embracing its utility-first approach for styling.'
  }
]

const Tools = () => {
  return (
    <div className='font-dm text-neutral-50 px-14 py-10 bg-[#141819]'>
      <div>
        <h1 className='text-[2.75rem] tracking-wide'>Tools I&apos;m proficient with</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
        {
          tools.map((tool, index) => (
            <div key={index}>
              <ToolCard key={index} name={tool.name} icon={tool.icon} description={tool.description} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tools