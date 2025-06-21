import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">Student Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, John Doe</span>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
