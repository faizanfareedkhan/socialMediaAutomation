import { FaSearch } from "react-icons/fa";

export default function HelpHeader() {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Top Section with Logo & Language Selector */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Logo</span>
          </div>
        </div>

        {/* Left Aligned Heading */}
        <h2 className="text-2xl font-bold mt-6 text-left">Help Center</h2>

        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full bg-gray-700 text-gray-200 px-4 py-3 rounded-lg pl-10 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
        </div>
      </div>
    </div>
  );
}
