import React from "react";

const CourseFilter = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <!-- Search by Name --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Course
          </label>
          <input
            type="text"
            id="searchInput"
            placeholder="Course name or code..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* <!-- Filter by Category --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="categoryFilter"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        {/* <!-- Filter by Instructor --> */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instructor
          </label>
          <select
            id="instructorFilter"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Instructors</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Prof. Johnson">Prof. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
            <option value="Prof. Brown">Prof. Brown</option>
          </select>
        </div>

        {/* <!-- Clear Filters --> */}
        <div className="flex items-end">
          <button
            id="clearFilters"
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
