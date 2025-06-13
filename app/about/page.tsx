import React from 'react'
import Image from 'next/image'

const skills = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'HTML & CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Diseño responsivo',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Gestión de paquetes (npm/yarn)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
]

const about = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 relative overflow-x-hidden">
      <Image
        width={600}
        height={400}
        src="/calavera.png"
        alt="Skills-background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        priority
      />
      <div className="backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-2xl mt-8 mb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-[#f2f5d5] rounded-xl shadow p-3 font-semibold text-[#3a3a3a] text-base text-center hover:bg-[#e9b384]/80 hover:text-[#7c6a0a] transition-colors duration-200 cursor-pointer w-full"
            >
              <img
                src={skill.logo}
                alt={skill.name + ' logo'}
                className="w-8 h-8 mb-2 object-contain"
                loading="lazy"
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default about