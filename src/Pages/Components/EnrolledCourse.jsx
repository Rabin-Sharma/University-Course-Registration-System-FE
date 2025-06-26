import React from "react";

const EnrolledCourse = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">
          Enrolled Courses
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              CS 101 - Introduction to Programming
            </h4>
            <p className="text-sm text-gray-600">
              Dr. Smith • 3 Credits • Mon, Wed 10:00-11:30 AM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              PHYS 151 - General Physics I
            </h4>
            <p className="text-sm text-gray-600">
              Dr. Williams • 3 Credits • Mon, Wed, Fri 9:00-9:50 AM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              MATH 101 - College Algebra
            </h4>
            <p className="text-sm text-gray-600">
              Prof. Johnson • 3 Credits • Mon, Wed, Fri 11:00-11:50 AM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              CS 201 - Data Structures
            </h4>
            <p className="text-sm text-gray-600">
              Dr. Smith • 3 Credits • Tue, Thu 11:00-12:30 PM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              MATH 201 - Calculus II
            </h4>
            <p className="text-sm text-gray-600">
              Prof. Johnson • 4 Credits • Tue, Thu 2:00-3:30 PM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-gray-800">
              ENG 101 - Engineering Fundamentals
            </h4>
            <p className="text-sm text-gray-600">
              Prof. Brown • 2 Credits • Fri 1:00-3:00 PM
            </p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Enrolled
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourse;
