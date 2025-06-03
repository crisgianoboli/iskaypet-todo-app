import React from "react";
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile icons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Menu"
          >
            <FaBars size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Search"
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* Logo - centered on mobile, left-aligned on desktop */}
        <div className="flex-1 text-center md:text-left md:flex-initial">
          <h1 className="text-2xl font-bold">
            <span>Tiend</span>
            <span className="text-green-600">animal</span>
          </h1>
        </div>

        {/* User actions */}
        <div className="flex items-center gap-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="User profile"
          >
            <FaUser size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 relative"
            aria-label="Shopping cart"
          >
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
