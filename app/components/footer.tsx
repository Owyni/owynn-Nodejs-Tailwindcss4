export default function Footer() {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/Owyni/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://avatars.githubusercontent.com/u/98787870?s=96&v=4"
              className="h-10 rounded-full border-2 border-teal-400 shadow-lg"
              alt="Logo"
            />
            <span className="self-center text-2xl font-extrabold whitespace-nowrap bg-gradient-to-r from-cyan-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
              Owynn
            </span>
          </a>
        </div>
        <hr className="my-6 border-teal-700 sm:mx-auto lg:my-8 opacity-40" />
        <span className="block text-sm text-teal-200 sm:text-center">
          © 2025{" "}
          <a
            href="https://github.com/Owyni/"
            className="hover:underline text-cyan-300 font-semibold"
          >
            Owynn
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
