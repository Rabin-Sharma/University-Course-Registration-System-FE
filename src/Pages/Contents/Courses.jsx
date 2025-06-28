import React, { useState } from "react";
import CourseFilter from "./../Components/CourseFilter";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuClock5 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Courses = () => {
  const [searchTerm, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [instructor, setInstructor] = useState("");

  return (
    <main className="flex-1 p-6">
      {/* <!-- Header --> */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Browse Courses
        </h2>
        <p className="text-gray-600">
          Find and register for courses for Spring 2024
        </p>
      </div>

      {/* <!-- Search and Filter Section --> */}
      <CourseFilter
        setSearch={setSearch}
        setCategory={setCategory}
        setInstructor={setInstructor}
        searchTerm={searchTerm}
        category={category}
        instructor={instructor}
      />

      {/* <!-- Course Cards Grid --> */}
      <div
        id="courseGrid"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {/* <!-- Course Card 1 --> */}
        <div
          className="course-card bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          data-category="Computer Science"
          data-instructor="Dr. Smith"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">CS 101</h3>
              <p className="text-gray-600">Intro. to Programming</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              3 Credits
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <FaRegUser className="w-4 h-4 mr-2" />
              <span>Dr. Smith</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <HiOutlineOfficeBuilding className="w-4 h-4 mr-2" />
              <span>Computer Science</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <LuClock5 className="w-4 h-4 mr-2" />
              <span>Mon, Wed 10:00-11:30 AM</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Register
          </button>
        </div>
      </div>

      {/* <!-- No Results Message --> */}
      <div id="noResults" className="hidden text-center py-12">
        <IoSearch />
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          No courses found
        </h3>
        <p className="text-gray-500">
          Try adjusting your search criteria or clear the filters.
        </p>
      </div>
    </main>
  );
};

export default Courses;
