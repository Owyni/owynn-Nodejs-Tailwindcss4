import Link from "next/link";

export default function Glassnavbar() {
  return (
  <nav className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-8 py-4 flex items-center font-sans justify-center max-w-7xl w-full mx-auto mt-6">
    <ul className="flex space-x-10 w-full justify-center">
      <li>
        <Link href="/home" className="text-blue-600 hover:text-gray-700 font-medium transition-colors">Home</Link>
      </li>
      <li>
        <Link href="/projects" className="text-green-500 hover:text-gray-700 font-medium transition-colors">Projects</Link>
      </li>
      <li>
        <Link href="/about" className="text-orange-400 hover:text-gray-700 font-medium transition-colors">Skills</Link>
      </li>
      <li>
        <Link href="/contact" className="text-red-600 hover:text-gray-700 font-medium transition-colors">Contact</Link>
      </li>
    </ul>
  </nav>
  );
}
