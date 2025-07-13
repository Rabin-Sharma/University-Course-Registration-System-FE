import React, { useEffect, useState } from "react";
import { fetchEnrolledCourses } from "../../Services/api";
import toast from "react-hot-toast";

const EnrolledCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const getEnrolledCourses = async () => {
    try {
    const courseData = await fetchEnrolledCourses();
    setCourses(courseData);
    } catch (error) {
      toast.error("Failed to fetch enrolled courses. Please try again.");
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() =>{
    getEnrolledCourses();
  });

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
        {courses.map((course) => (
          <div key={course.id} className="p-6 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-gray-800">
                {course.course_code} - {course.name}
              </h4>
              <p className="text-sm text-gray-600">
                Dr. Smith • 3 Credits • Mon, Wed 10:00-11:30 AM
              </p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Enrolled
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourse;
