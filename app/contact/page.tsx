import React from 'react'

const contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white/80 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-500 to-red-600 drop-shadow-lg animate-pulse tracking-wide">
          CLICK ME
        </h1>
        <a
          href="mailto:angelaleman2212@gmail.com"
          className="inline-block px-6 py-2 rounded-full bg-amber-100 text-[#3a3a3a] font-semibold shadow hover:bg-[#146764] hover:text-[#f2f5d5] transition"
        >
          angelaleman2212@gmail.com
        </a>
      </div>
    </div>
  )
}

export default contact