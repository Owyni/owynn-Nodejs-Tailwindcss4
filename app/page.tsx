import React from "react";
import Footer from "./components/footer";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f2f5d5]">
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-center p-2 text-5xl font-extrabold bg-gray-700 bg-clip-text text-transparent mb-8 drop-shadow-lg">
          Welcome to Owynn's Portfolio
        </h1>
        <div className="w-full flex justify-center">
          <a href="/home">
            <button className="px-8 py-3 rounded-full text-gray-700 font-bold shadow-lg border-2 border-gray-900 hover:bg-gradient-to-r from-green-500 via-orange-400 to-red-600 hover:text-black hover:border-gray-600 transition-all duration-200 ease-in-out tracking-wide text-lg">
              Go to Home
            </button>
          </a>
        </div>
      </main>
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
