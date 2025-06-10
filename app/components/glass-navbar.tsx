export default function Glassnavbar() {
  return (
  <nav className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-8 py-4 flex items-center justify-center max-w-7xl w-full mx-auto mt-6">
    <ul className="flex space-x-10 w-full justify-center">
      <li>
        <a href="#" className="text-blue-600 hover:text-gray-700 font-medium transition-colors">Home</a>
      </li>
      <li>
        <a href="#" className="text-green-500 hover:text-gray-700 font-medium transition-colors">Projects</a>
      </li>
      <li>
        <a href="#" className="text-orange-400 hover:text-gray-700 font-medium transition-colors">About</a>
      </li>
      <li>
        <a href="#" className="text-red-600 hover:text-gray-700 font-medium transition-colors">Contact</a>
      </li>
    </ul>
  </nav>
  );
}
