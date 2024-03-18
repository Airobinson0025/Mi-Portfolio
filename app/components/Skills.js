import React from 'react'


const skills = [
    {
        name: 'UI/UX Design',
        description: 'I create user-friendly and intuitive user interfaces with a focus on responsive design and accessibility.'
    },
    {
        name: 'Frontend Development',
        description: 'I build interactive and dynamic web applications with modern frontend technologies like React and Next.js.'
    },
    {
        name: 'Backend Development',
        description: 'I develop robust and scalable backend systems with Python, leveraging its versatility and simplicity.'
    }
]

const Skills = () => {
  return (
    <div className='font-dm text-neutral-50 px-7 md:px-14 py-10 bg-[#141819]' id='skills'>
        <h1 className='text-[2.5rem] tracking-wider'>My Skills</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                skills.map((skill, index) => (
                    <div key={index} className='mt-10 border-l-2 pl-8'>
                        <h2 className='text-[1.5rem] text-lime-300 font-medium'>{skill.name}</h2>
                        <p className='mt-2 leading-7 tracking-wide'>{skill.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills