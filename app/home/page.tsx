import Footer from "../components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <main>
        <div className="flex items-center">
          <div className="">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 drop-shadow-lg p-2">
              Hey, I'm Owynn!
            </h1>
            <p className="p-2 text-lg text-gray-600 mb-6 text-shadow-sm max-w-2xl">
              This is a simple webpage built with Next.js and Tailwind CSS. <br></br> Explore
              the content and enjoy the design!
            </p>
          </div>
          <div>
            <Image
              width={700}
              height={700}
              src="/webpage-background-idea.png"
              alt="webpage-background-idea"
              className="min-w-[300px] h-auto"
            />
          </div>
        </div>
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-8 py-4 flex items-center font-sans justify-center max-w-7xl w-full mx-auto mt-6">
          <section className="p-8 my-12 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
              A little about me
            </h2>
            <p className="text-gray-700 text-lg">
               I'm a Systems Engineering student from Mexico who enjoys meeting new people,
               discussing contemporary issues, and embracing new experiences. I'm fluent in both English and Spanish.
               I'm passionate about fitness and spend a lot of time at the gym, but I'm just as comfortable focusing on long-term 
               challenges that require persistence and patience. I'm always ready to face new obstacles—and excited to connect with you!.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
