import React from "react";
import Footer from "./components/footer";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f2f5d5]">
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <Image
          width={300}
          height={300}
          src="/owynn.png"
          alt="Owynn's Portfolio"
          className="min-w-[300px] h-auto mb-8"
          />
        <h1 className="text-center p-2 text-5xl font-extrabold bg-gray-700 bg-clip-text text-transparent mb-8 drop-shadow-lg">
          Welcome to Owynn's Portfolio
        </h1>
        <div className="w-full flex justify-center">
        </div>
      </main>
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
