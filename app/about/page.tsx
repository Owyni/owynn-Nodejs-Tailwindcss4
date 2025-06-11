import React from 'react'

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
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-2xl w-full mt-16 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-[#f2f5d5] rounded-xl shadow p-4 font-semibold text-[#3a3a3a] text-lg text-center hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <img
                src={skill.logo}
                alt={skill.name + ' logo'}
                className="w-12 h-12 mb-2 object-contain"
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