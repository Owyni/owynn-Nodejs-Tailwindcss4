import React from 'react'

const contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f5d5]">
      <div className="bg-white/80 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-500 to-red-600 drop-shadow-lg animate-pulse tracking-wide">
          CLICK ME
        </h1>
        <p className="mb-6 text-gray-700 font-sans">I'll be waiting for your email !</p>
        <a
          href="mailto:angelaleman2212@gmail.com"
          className="inline-block px-6 py-2 rounded-full bg-[#e9b384] text-[#3a3a3a] font-semibold shadow hover:bg-[#7c6a0a] hover:text-[#f2f5d5] transition"
        >
          angelaleman2212@gmail.com
        </a>
      </div>
    </div>
  )
}

export default contact