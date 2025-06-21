import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0 hidden md:block">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="dashboard"
              className="bg-blue-50 text-blue-700 block px-4 py-2 rounded-lg font-medium"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="courses"
              className="text-gray-700 hover:bg-gray-50 block px-4 py-2 rounded-lg transition duration-200"
            >
              Browse Courses
            </a>
          </li>
          <li>
            <a
              href="schedule"
              className="text-gray-700 hover:bg-gray-50 block px-4 py-2 rounded-lg transition duration-200"
            >
              My Schedule
            </a>
          </li>
          <li>
            <a
              href="registration"
              className="text-gray-700 hover:bg-gray-50 block px-4 py-2 rounded-lg transition duration-200"
            >
              Registration
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
