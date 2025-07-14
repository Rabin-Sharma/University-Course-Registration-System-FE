import React, { useEffect, useState } from "react";
import { fetchEnrolledCourses } from "../../Services/api";
import toast from "react-hot-toast";

const EnrolledCourse = ({ courses, loading }) => {
  // Simple function to show course schedule
  const getSchedule = (timeStamps) => {
    if (!timeStamps || timeStamps.length === 0) {
      return "Time TBD";
    }

    let schedule = "";
    timeStamps.forEach((time, index) => {
      const day = time.day.substring(0, 3); // Get first 3 letters: Monday -> Mon
      const startTime = time.start_time.substring(0, 5); // Get time: 10:00:00 -> 10:00
      const endTime = time.end_time.substring(0, 5); // Get time: 12:00:00 -> 12:00

      schedule += `${day} ${startTime}-${endTime}`;

      // Add comma if not the last item
      if (index < timeStamps.length - 1) {
        schedule += ", ";
      }
      
    });

    return schedule;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">
          Enrolled Courses
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {loading && (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-500 mt-2">Loading enrolled courses...</p>
          </div>
        )}
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="p-6 flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-gray-800">
                  {course.course_code} - {course.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {course.instructor.name} • {course.credits} Credits •{" "}
                  {getSchedule(course.time_stamps)}
                </p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Enrolled
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnrolledCourse;
