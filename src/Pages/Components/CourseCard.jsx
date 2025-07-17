import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuClock5 } from "react-icons/lu";

const CourseCard = ({course}) => {
  return (
    <>
      <div
        className="course-card bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        data-category="Computer Science"
        data-instructor="Dr. Smith"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="max-w-[75%]">
            <h3 className="text-lg font-semibold text-gray-800">{course.course_code}</h3>
            <p className="text-gray-600 truncate whitespace-nowrap overflow-hidden">{course.name}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded whitespace-nowrap">
            {course.credits} Credits
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaRegUser className="w-4 h-4 mr-2" />
            <span>{course.instructor.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <HiOutlineOfficeBuilding className="w-4 h-4 mr-2" />
            <span>{course.category.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <LuClock5 className="w-4 h-4 mr-2" />
            <span>{course.time_description}</span>
          </div>
        </div>

        <Link
          to={`/courses/${course.id}`}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
