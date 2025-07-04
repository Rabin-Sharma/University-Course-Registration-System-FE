import React from "react";
import { CgSandClock } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoSearch, IoTrendingUp, IoWarningOutline } from "react-icons/io5";
import { LuClock5 } from "react-icons/lu";
import { MdAppRegistration, MdCalendarMonth } from "react-icons/md";

const Welcome = () => {
  return (
    <main className="flex-1 p-6">
      {/* <!-- Welcome Section --> */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, John!
        </h2>
        <p className="text-gray-600">
          Here's your academic overview for Spring 2024
        </p>
      </div>

      {/* <!-- Summary Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* <!-- Registered Courses Card --> */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Registered Courses
              </p>
              <p className="text-3xl font-bold text-blue-600">5</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <HiOutlineBookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* <!-- Schedule Conflicts Card --> */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Schedule Conflicts
              </p>
              <p className="text-3xl font-bold text-red-600">0</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <IoWarningOutline className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        {/* <!-- Credit Hours Card --> */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Credit Hours</p>
              <p className="text-3xl font-bold text-purple-600">15</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <IoTrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* <!-- Next Class Card --> */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Next Class</p>
              <p className="text-lg font-bold text-gray-800">CS 101</p>
              <p className="text-sm text-gray-500">10:00 AM</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <LuClock5 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Quick Actions --> */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="courses.html"
            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
          >
            <div className="mb-2">
              <IoSearch className="w-8 h-8 mx-auto" />
            </div>
            <h4 className="font-semibold">Browse Courses</h4>
            <p className="text-sm opacity-90">Find and register for courses</p>
          </a>

          <a
            href="schedule.html"
            className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition duration-200 text-center"
          >
            <div className="mb-2">
              <MdCalendarMonth className="w-8 h-8 mx-auto" />
            </div>
            <h4 className="font-semibold">View Schedule</h4>
            <p className="text-sm opacity-90">Check your class timetable</p>
          </a>

          <a
            href="registration.html"
            className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition duration-200 text-center"
          >
            <div className="mb-2">
              <MdAppRegistration className="w-8 h-8 mx-auto" />
            </div>
            <h4 className="font-semibold">Manage Registration</h4>
            <p className="text-sm opacity-90">Review selected courses</p>
          </a>
        </div>
      </div>

      {/* <!-- Recent Activity --> */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <CgSandClock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                Registered for CS 301 - Data Structures
              </p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <CgSandClock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                Schedule updated successfully
              </p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
