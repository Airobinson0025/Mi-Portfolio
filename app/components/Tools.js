import React from 'react'
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { SiNextdotjs, SiTailwindcss, SiPostgresql } from 'react-icons/si'
import { faNodeJs } from 'react-icons/fa'
import ToolCard from './ToolCard'

const tools =[
  {
    name: 'Javascript',
    icon: <IoLogoJavascript />,
    description: 'I use JavaScript to add cool animations and interactive features to websites.'
  },
  
  {
    name: 'React',
    icon: <IoLogoReact />,
    description: 'React is my tool for crafting sleek web interfaces and modern single-page apps.'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    description: 'Next.js helps me build powerful web apps with server-side rendering and SEO tricks.'
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    description: 'I rely on PostgreSQL for building sturdy backend systems and keeping data safe.'
  },
  {
    name: 'Node.js',
    icon: <faNodeJs />,
    description: 'Node.js is my go-to for scalable backend systems, thanks to its non-blocking I/O model.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss/>,
    description: 'Tailwind CSS is my favorite for crafting stylish and responsive user interfaces quickly.'
  }
]


const Tools = () => {
  return (
    <div className='font-dm text-neutral-50 px-7 md:px-14 py-10 bg-[#141819]'>
      <div>
        <h1 className='text-[2.5rem] tracking-wide'>Tools I&apos;m Proficient With</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
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